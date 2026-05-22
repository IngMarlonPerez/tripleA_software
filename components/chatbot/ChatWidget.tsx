'use client'
// ChatWidget — Chatbot IA con Grok API
// Equipo 06 — Chatbot IA

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User, ArrowUpRight, Loader2 } from 'lucide-react'
import type { ChatMessage } from '@/types'
import { trackChatbotOpen } from '@/components/analytics/GoogleAnalytics'

const WELCOME_MESSAGE: ChatMessage = {
  role: 'assistant',
  content: '¡Hola! 👋 Soy el asistente de TRIPLE_A.\n\n¿En qué puedo ayudarte hoy? Puedo orientarte sobre nuestros servicios, proyectos o ayudarte a iniciar una cotización.',
}

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '12px 16px' }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: '7px', height: '7px',
            borderRadius: '50%',
            backgroundColor: '#4F46E5',
            animation: 'typing 1s infinite',
            animationDelay: `${i * 200}ms`,
            display: 'block',
          }}
        />
      ))}
    </div>
  )
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ts_chat_session_id')
      if (stored) return stored
      const newId = generateSessionId()
      localStorage.setItem('ts_chat_session_id', newId)
      return newId
    }
    return generateSessionId()
  })
  const [hasNotification, setHasNotification] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Scroll al último mensaje
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  // Focus al abrir + track GA4
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setHasNotification(false)
      trackChatbotOpen()
    }
  }, [isOpen])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || isLoading) return

    const userMessage: ChatMessage = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages, sessionId }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Error de red')

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Lo siento, ocurrió un error. Por favor intenta de nuevo o escríbenos a contacto@triplesoftware.com 🙏',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [input, isLoading, messages, sessionId])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 100,
        }}
      >
        {/* Tooltip */}
        {!isOpen && hasNotification && (
          <div
            style={{
              position: 'absolute',
              bottom: '70px',
              right: 0,
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
              padding: '8px 14px',
              borderRadius: '10px',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              animation: 'fadeIn 0.5s ease 1s both',
            }}
          >
            ¿Necesitas ayuda? 💬
            <div style={{ position: 'absolute', bottom: '-5px', right: '22px', width: '10px', height: '10px', backgroundColor: '#0F172A', transform: 'rotate(45deg)' }} />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
          style={{
            width: '60px', height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(79,70,229,0.4)',
            transition: 'transform 300ms ease, box-shadow 300ms ease',
            color: '#FFFFFF',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.boxShadow = '0 6px 32px rgba(79,70,229,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(79,70,229,0.4)'
          }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          {/* Badge notificación */}
          {!isOpen && hasNotification && (
            <span
              style={{
                position: 'absolute', top: '2px', right: '2px',
                width: '14px', height: '14px',
                backgroundColor: '#DC2626',
                borderRadius: '50%',
                border: '2px solid #FFFFFF',
              }}
            />
          )}
        </button>
      </div>

      {/* Panel del chat */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '28px',
            zIndex: 99,
            width: '380px',
            maxWidth: 'calc(100vw - 40px)',
            height: '520px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'slideUp 0.3s ease',
          }}
        >
          {/* Header del chat */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #4F46E5, #4338CA)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px', height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Bot size={22} color="#FFFFFF" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '15px', color: '#FFFFFF', margin: 0 }}>
                TripleBot
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#4ade80', display: 'inline-block' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif' }}>
                  En línea · Responde al instante
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', padding: '4px' }}
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Mensajes */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#F8FAFC',
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-end',
                  gap: '8px',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: '30px', height: '30px', flexShrink: 0,
                    borderRadius: '50%',
                    backgroundColor: msg.role === 'user' ? '#4F46E5' : '#E2E8F0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  {msg.role === 'user'
                    ? <User size={14} color="#FFFFFF" />
                    : <Bot size={14} color="#64748B" />
                  }
                </div>

                {/* Burbuja */}
                <div
                  style={{
                    maxWidth: '75%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    backgroundColor: msg.role === 'user' ? '#4F46E5' : '#FFFFFF',
                    color: msg.role === 'user' ? '#FFFFFF' : '#0F172A',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.6',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Indicador de typing */}
            {isLoading && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                <div style={{ width: '30px', height: '30px', flexShrink: 0, borderRadius: '50%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={14} color="#64748B" />
                </div>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px 16px 16px 4px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                  <TypingIndicator />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Escalar a humano */}
          <div style={{ padding: '8px 16px', borderTop: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
            <a
              href={`mailto:contacto@triplesoftware.com`}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '12px', color: '#64748B', fontFamily: 'Inter, sans-serif',
                textDecoration: 'none', transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#4F46E5' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B' }}
            >
              <ArrowUpRight size={14} />
              Hablar con un agente humano
            </a>
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px 16px',
              borderTop: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'flex-end',
              gap: '10px',
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              rows={1}
              disabled={isLoading}
              style={{
                flex: 1,
                resize: 'none',
                border: '1.5px solid #E2E8F0',
                borderRadius: '10px',
                padding: '10px 14px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#0F172A',
                outline: 'none',
                transition: 'border-color 200ms ease',
                maxHeight: '100px',
                overflowY: 'auto',
                backgroundColor: '#F8FAFC',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#4F46E5' }}
              onBlur={(e) => { e.target.style.borderColor = '#E2E8F0' }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              aria-label="Enviar mensaje"
              style={{
                width: '40px', height: '40px', flexShrink: 0,
                borderRadius: '10px',
                backgroundColor: input.trim() && !isLoading ? '#4F46E5' : '#E2E8F0',
                border: 'none',
                cursor: input.trim() && !isLoading ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background-color 200ms ease',
                color: input.trim() && !isLoading ? '#FFFFFF' : '#94A3B8',
              }}
            >
              {isLoading ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={16} />}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  )
}
