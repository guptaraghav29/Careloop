'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles, Mic } from 'lucide-react';
import { Participant, ChatMessage, ParticipantRole } from '../chat';

const CURRENT_USER: Participant = {
    id: 'user-1',
    role: 'user',
    name: 'Patient',
};

const ASSISTANT: Participant = {
    id: 'assistant-1',
    role: 'assistant',
    name: 'Dr. AI',
};

export default function ChatInterface() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            participantId: 'assistant-1',
            content: 'Hello! I am Dr. AI. How can I assist you with your health today?',
            timestamp: new Date(),
            status: 'delivered',
        },
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            participantId: CURRENT_USER.id,
            content: inputText,
            timestamp: new Date(),
            status: 'sending',
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputText('');

        // Simulate assistant response
        setTimeout(() => {
            const responseMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                participantId: ASSISTANT.id,
                content: "I'm processing your request. This is a demo response.",
                timestamp: new Date(),
                status: 'delivered',
            };
            setMessages((prev) => [...prev, responseMessage]);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-2rem)] max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-coastal shadow-coastal-lg border border-coastal-100 overflow-hidden">
            {/* Header */}
            <header className="bg-white/90 p-4 border-b border-coastal-100 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="bg-coastal-100 p-2 rounded-full">
                        <Sparkles className="w-6 h-6 text-coastal-600" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-coastal-900">CareLoop Assistant</h1>
                        <p className="text-sm text-coastal-500 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-status-success inline-block"></span>
                            Online
                        </p>
                    </div>
                </div>
            </header>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-coastal-50/50 to-white/50">
                {messages.map((msg) => {
                    const isUser = msg.participantId === CURRENT_USER.id;
                    return (
                        <div
                            key={msg.id}
                            className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''} animate-slide-up`}
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isUser ? 'bg-coastal-600 text-white' : 'bg-teal-100 text-teal-700'
                                    }`}
                            >
                                {isUser ? <User size={16} /> : <Bot size={16} />}
                            </div>
                            <div
                                className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${isUser
                                        ? 'bg-coastal-500 text-white rounded-tr-sm'
                                        : 'bg-white border border-coastal-100 text-coastal-900 rounded-tl-sm'
                                    }`}
                            >
                                <p className="leading-relaxed">{msg.content}</p>
                                <span className={`text-[10px] block mt-1 ${isUser ? 'text-coastal-100' : 'text-coastal-400'}`}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-coastal-100">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                    <button
                        type="button"
                        className="p-3 text-coastal-500 hover:text-coastal-700 hover:bg-coastal-50 rounded-full transition-colors"
                        title="Voice Input"
                    >
                        <Mic size={20} />
                    </button>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 bg-coastal-50 border-transparent focus:border-coastal-300 focus:bg-white focus:ring-2 focus:ring-coastal-100 rounded-full transition-all outline-none text-coastal-900 placeholder:text-coastal-400"
                    />
                    <button
                        type="submit"
                        disabled={!inputText.trim()}
                        className="p-3 bg-coastal-600 text-white rounded-full hover:bg-coastal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}
