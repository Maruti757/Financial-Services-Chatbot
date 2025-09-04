import React from 'react';
import { Bot, User, ExternalLink } from 'lucide-react';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
  index: number;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, index }) => {
  const isBot = message.role === 'assistant';
  
  return (
    <div 
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`flex max-w-3xl ${isBot ? 'flex-row' : 'flex-row-reverse'} items-start space-x-3`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isBot ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
        }`}>
          {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
        </div>
        
        <div className={`rounded-xl px-4 py-3 ${
          isBot 
            ? 'bg-slate-50 border border-slate-200' 
            : 'bg-blue-600 text-white'
        } max-w-lg`}>
          <div className={`text-sm leading-relaxed ${isBot ? 'text-slate-900' : 'text-white'}`}>
            {message.content}
          </div>
          
          {message.sources && message.sources.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-200">
              <p className="text-xs font-medium text-slate-600 mb-2">Sources:</p>
              <div className="space-y-1">
                {message.sources.map((source, sourceIndex) => (
                  <div key={sourceIndex} className="flex items-center space-x-2 text-xs">
                    <ExternalLink className="h-3 w-3 text-blue-600 flex-shrink-0" />
                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      {source}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;