import { Resend } from 'resend'
import { siteConfig } from '@/config/site'
import type { Lead } from '@/types'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function sendLeadNotification(lead: Lead) {
  if (!resend) {
    console.log('[Email] Resend no configurado. Lead no notificado por email.')
    return
  }

  const tipoLabel: Record<string, string> = {
    web: 'Aplicación Web',
    movil: 'App Móvil',
    crm: 'CRM / Sistema Interno',
    consultoria: 'Consultoría',
    otro: 'Otro',
  }

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@triplesoftware.com',
      to: process.env.EMAIL_TO || siteConfig.email,
      subject: `🚀 Nuevo lead: ${lead.nombre} — ${tipoLabel[lead.tipo_proyecto] || lead.tipo_proyecto}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: 'Inter', -apple-system, sans-serif; background: #F8FAFC; padding: 40px 24px;">
          <div style="max-width: 560px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; padding: 40px; border: 1px solid #E2E8F0;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #4F46E5, #06B6D4); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                <span style="font-family: monospace; font-size: 20px; color: #FFFFFF;">&lt;/&gt;</span>
              </div>
              <h1 style="font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 600; color: #0F172A; margin: 0;">
                🚀 Nuevo lead recibido
              </h1>
              <p style="font-size: 14px; color: #64748B; margin: 8px 0 0;">
                ${new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })}
              </p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 12px 16px; color: #64748B; border-bottom: 1px solid #E2E8F0; font-weight: 500;">Nombre</td>
                <td style="padding: 12px 16px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-weight: 600;">${lead.nombre}</td>
              </tr>
              ${lead.empresa ? `<tr><td style="padding: 12px 16px; color: #64748B; border-bottom: 1px solid #E2E8F0;">Empresa</td><td style="padding: 12px 16px; color: #0F172A; border-bottom: 1px solid #E2E8F0;">${lead.empresa}</td></tr>` : ''}
              <tr>
                <td style="padding: 12px 16px; color: #64748B; border-bottom: 1px solid #E2E8F0;">Email</td>
                <td style="padding: 12px 16px; color: #0F172A; border-bottom: 1px solid #E2E8F0;"><a href="mailto:${lead.email}" style="color: #4F46E5;">${lead.email}</a></td>
              </tr>
              ${lead.telefono ? `<tr><td style="padding: 12px 16px; color: #64748B; border-bottom: 1px solid #E2E8F0;">Teléfono</td><td style="padding: 12px 16px; color: #0F172A; border-bottom: 1px solid #E2E8F0;">${lead.telefono}</td></tr>` : ''}
              <tr>
                <td style="padding: 12px 16px; color: #64748B; border-bottom: 1px solid #E2E8F0;">Tipo de proyecto</td>
                <td style="padding: 12px 16px; color: #0F172A; border-bottom: 1px solid #E2E8F0;">${tipoLabel[lead.tipo_proyecto] || lead.tipo_proyecto}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; color: #64748B; border-bottom: 1px solid #E2E8F0;">Presupuesto</td>
                <td style="padding: 12px 16px; color: #0F172A; border-bottom: 1px solid #E2E8F0;">$${lead.presupuesto}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="font-size: 13px; color: #64748B; font-weight: 500; margin: 0 0 8px;">Descripción del proyecto:</p>
              <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0; background: #F8FAFC; padding: 16px; border-radius: 10px; border: 1px solid #E2E8F0;">
                ${lead.descripcion}
              </p>
            </div>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E2E8F0; text-align: center;">
              <p style="font-size: 12px; color: #94A3B8; margin: 0;">
                Este lead fue capturado desde ${lead.fuente === 'chatbot' ? 'el chatbot 🤖' : lead.fuente === 'calendly' ? 'Calendly 📅' : 'el formulario de contacto 📝'}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    console.log('[Email] Notificación de lead enviada exitosamente')
  } catch (error) {
    console.error('[Email] Error al enviar notificación:', error)
  }
}
