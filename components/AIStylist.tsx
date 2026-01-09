
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { chatWithAI, generateStyleImage } from '../services/geminiService';
import { Message } from '../types';

export const AIStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy tu asesor de estilo en Óptica S&V. ¿Cómo puedo ayudarte a diseñar tu mirada hoy? Cuéntame sobre tu estilo o tu tipo de rostro.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const aiResponse = await chatWithAI(userMsg, history);
      
      let finalMessages = [...messages, { role: 'user', text: userMsg } as Message, { role: 'model', text: aiResponse || '' } as Message];
      setMessages(finalMessages);

      // Heuristic: If the AI suggests generating an image or the user asks for a preview
      if (userMsg.toLowerCase().includes('muéstrame') || userMsg.toLowerCase().includes('ver') || aiResponse?.toLowerCase().includes('generar')) {
        setMessages(prev => [...prev, { role: 'model', text: 'Diseñando una sugerencia visual para ti...', isGeneratingImage: true }]);
        const imageUrl = await generateStyleImage(userMsg);
        if (imageUrl) {
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { 
              role: 'model', 
              text: 'Aquí tienes una propuesta basada en lo que buscamos:', 
              imageUrl 
            };
            return updated;
          });
        } else {
          setMessages(prev => [...prev.slice(0, -1)]); // Remove the loader if failed
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, tuve un pequeño problema óptico. ¿Podrías intentar de nuevo?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] glass-vellum titanium-border rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-6 bg-black text-white flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Asesor de Estilo AI</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Escucha Activa S&V</p>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 chat-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <ReactMarkdown className="prose prose-sm prose-invert max-w-none">
                    {m.text}
                  </ReactMarkdown>
                  {m.imageUrl && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-black/10">
                      <img src={m.imageUrl} alt="Sugerencia de estilo" className="w-full h-auto animate-in fade-in duration-700" />
                    </div>
                  )}
                  {m.isGeneratingImage && (
                    <div className="mt-4 flex flex-col items-center gap-2">
                      <div className="w-full h-40 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-400">Diseñando...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && !messages[messages.length-1].isGeneratingImage && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregúntame por tu estilo ideal..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black outline-none"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-2 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-3 text-center uppercase tracking-tighter">Precisión clínica y criterio estético en Suba</p>
          </div>
        </div>
      )}
    </>
  );
};
