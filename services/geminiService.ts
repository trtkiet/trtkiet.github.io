import { GoogleGenAI } from "@google/genai";
import { PROFILE, EDUCATION, PROJECTS, SKILLS } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Construct the system instruction based on the CV data
const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Tran Tuan Kiet. You are embedded in his portfolio website.
Your goal is to answer questions about Kiet's experience, skills, and projects in a professional, friendly, and concise manner.

Here is Kiet's Resume Context:

PROFILE:
Name: ${PROFILE.name}
Title: ${PROFILE.title}
About: ${PROFILE.about}
Contact: ${PROFILE.email}, ${PROFILE.phone}

EDUCATION:
${EDUCATION.map(e => `- ${e.degree} at ${e.school} (${e.period}). Achievements: ${e.achievements.join(', ')}`).join('\n')}

PROJECTS & RESEARCH:
${PROJECTS.map(p => `- ${p.title} (${p.type}): ${p.description.join(' ')} Tech: ${p.techStack.join(', ')}`).join('\n')}

SKILLS:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

GUIDELINES:
1. Always speak in the first person (as if you are Kiet) or as a helpful assistant representing him.
2. If asked about contact info, provide the email or LinkedIn.
3. Be concise. Do not hallucinate experiences not listed above.
4. If asked about something not in the resume (like "can you cook?"), strictly say you are focused on his professional background.
5. Highlight the "Video Retrieval System" and "ICPC" achievements if relevant questions are asked.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, but the AI features are currently unavailable because the API Key is missing in the environment configuration.";
  }

  try {
    const ai = getClient();
    // Using gemini-3-flash-preview as requested for text tasks
    const modelId = 'gemini-3-flash-preview'; 
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I didn't get a response from the model.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};