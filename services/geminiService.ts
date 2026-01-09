
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI using Vite's environment variable
const getAI = () => new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el "Asesor de Estilo S&V", un experto en salud visual y diseño de imagen personal para Óptica S&V en Suba, Bogotá. 
Tu tono es elegante, empático, experto y cercano. 
Óptica S&V tiene 20 años de experiencia y se destaca por la "Escucha Activa". 
No solo vendemos lentes; diseñamos miradas. 

Reglas de respuesta:
1. Usa Markdown para dar formato a tus respuestas.
2. Enfócate en la asesoría personalizada (tipos de rostro, estilo de vida).
3. Menciona que la óptica está en Suba Centro (Calle 145 # 92 - 30).
4. Si el usuario pide ver cómo le quedarían unas gafas, indícale que vas a generar una sugerencia visual basada en su descripción.
5. Invita siempre a agendar una cita por WhatsApp para un examen digital computarizado.
`;

export const chatWithAI = async (message: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[]) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [...history, { role: 'user', parts: [{ text: message }] }],
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  // Fix: Access .text as a property, not a method
  return response.text;
};

export const generateStyleImage = async (prompt: string) => {
  const ai = getAI();
  const fullPrompt = `Un retrato cinematográfico y elegante de una persona con estilo moderno usando monturas de gafas que coincidan con esta descripción: ${prompt}. El fondo debe ser minimalista y profesional. Calidad fotográfica, estilo editorial de moda.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: [{ parts: [{ text: fullPrompt }] }],
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  // Fix: Explicitly iterate through all parts to find the image part, as it might not be the first part
  const candidates = response.candidates;
  if (candidates && candidates.length > 0) {
    const parts = candidates[0].content.parts;
    for (const part of parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }
  return null;
};
