import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Bot, User } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    text: "👋 Hi! I'm your EngageX assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date()
  }
];

const quickActions = [
  {
    text: "What are your prices?",
    response: "Our pricing plans start at $99/month for basic social media management, which includes daily posts and basic analytics. Our premium plan at $299/month includes advanced analytics, content creation, and priority support. Would you like to schedule a consultation to discuss which plan suits your needs?"
  },
  {
    text: "Tell me about your services",
    response: "We offer a comprehensive suite of social media services including:\n\n• Content Creation & Scheduling\n• Community Management\n• Social Media Analytics\n• Brand Strategy Development\n• Influencer Partnerships\n• Paid Social Advertising\n\nWhich of these services would you like to learn more about?"
  },
  {
    text: "How do you get started?",
    response: "Getting started with EngageX is easy! Here's our simple process:\n\n1. Schedule a free consultation\n2. We'll analyze your current social media presence\n3. Develop a customized strategy\n4. Begin implementation within 48 hours\n\nWould you like to schedule your free consultation now?"
  },
  {
    text: "What platforms do you support?",
    response: "We manage all major social media platforms including:\n\n• Instagram\n• Facebook\n• Twitter\n• LinkedIn\n• TikTok\n• Pinterest\n\nWe can customize your package based on the platforms that matter most to your business."
  }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action: typeof quickActions[0]) => {
    // Add user message
    const userMessage: Message = {
      text: action.text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        text: action.response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-2xl transition-all transform ${isOpen ? 'scale-100' : 'scale-0'} z-50`}>
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-white" />
            <span className="text-white font-semibold">EngageX Assistant</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[80%] ${message.isBot ? 'bg-gray-100' : 'bg-blue-500 text-white'} rounded-lg p-3`}>
                <div className="flex items-center space-x-2 mb-1">
                  {message.isBot ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                  <span className="text-xs opacity-75">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Action Buttons */}
        <div className="p-4 border-t space-y-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action)}
              className="w-full p-2 text-left text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {action.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}