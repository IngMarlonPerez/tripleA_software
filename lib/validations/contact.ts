// Esquema de validación del formulario de contacto con Zod
// Equipo 07 — Formularios & Validación

import { z } from 'zod'

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede superar 100 caracteres'),

  empresa: z
    .string()
    .max(100, 'El nombre de empresa es demasiado largo')
    .optional(),

  email: z
    .string()
    .email('Ingresa un email válido'),

  telefono: z
    .string()
    .regex(/^\+?[\d\s\-()]{7,20}$/, 'Ingresa un número de teléfono válido')
    .optional()
    .or(z.literal('')),

  tipo_proyecto: z.enum(
    ['web', 'movil', 'crm', 'consultoria', 'otro'],
    { message: 'Selecciona un tipo de proyecto' }
  ),

  presupuesto: z.enum(
    ['1000-5000', '5000-15000', '15000-50000', '50000+'],
    { message: 'Selecciona un rango de presupuesto' }
  ),

  descripcion: z
    .string()
    .min(20, 'Describe tu proyecto con al menos 20 caracteres')
    .max(2000, 'La descripción no puede superar 2000 caracteres'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
