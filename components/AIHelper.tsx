import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const AIHelper: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm your HelmetHaven Assistant. I can help estimate a cleaning quote or answer maintenance questions. How can I help today?", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Use the API key from environment variable
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      // System instruction to guide the persona
      const systemInstruction = `You are a helpful customer support agent for 'HelmetHaven', a premium motorcycle helmet cleaning service. 
      Services include: 
      1. Essential Refresh ($35) - Exterior clean, odor removal.
      2. Deep Restoration ($65) - Liner removal/wash, ozone, visor polish.
      3. Race Ready ($95) - Vent clean, scratch removal, ceramic coating.
      
      Your goal is to be friendly, concise, and helpful. If a user asks for a quote, recommend one of the packages based on their problem (e.g., "bad smell" -> Deep Restoration). 
      If they ask about safety, explain that clean liners last longer and fit better.
      Keep responses under 80 words.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `Previous context: ${messages.map(m => `${m.role}: ${m.text}`).join('\n')}\n\nUser Question: ${input}` }]
          }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const aiText = response.text || "I'm having trouble connecting to the server right now. Please try again later.";
      
      setMessages(prev => [...prev, { role: 'model', text: aiText, timestamp: Date.now() }]);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again later.", timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-helper" className="py-20 bg-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
             <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Smart Care Assistant</h2>
          <p className="mt-2 text-gray-600">Not sure which service you need? Ask our AI specialist.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100 flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-indigo-600 p-4 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold">HelmetHaven AI</h3>
              <p className="text-indigo-200 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                  }`}
                >
                   {msg.role === 'model' && (
                     <p className="text-xs font-bold mb-1 text-indigo-600">Assistant</p>
                   )}
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                  <span className="text-sm text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ex: My helmet smells like sweat, what do I do?"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              AI can make mistakes. Please contact support for official quotes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHelper;