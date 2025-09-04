import React from 'react';
import { Bot, User, Clock, Trash2, Download } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatHistoryProps {
  messages: Message[];
  onClose: () => void;
  onClearHistory: () => void;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, onClose, onClearHistory }) => {
  const formatTime = (timestamp: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(timestamp);
  };

  const formatDate = (timestamp: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(timestamp);
  };

  const exportHistory = () => {
    const historyText = messages.map(msg => {
      const role = msg.role === 'user' ? 'You' : 'FinanceBot';
      const time = formatTime(msg.timestamp);
      const sources = msg.sources ? `\nSources: ${msg.sources.join(', ')}` : '';
      return `[${time}] ${role}: ${msg.content}${sources}`;
    }).join('\n\n');

    const blob = new Blob([historyText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `financebot-history-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all chat history? This action cannot be undone.')) {
      onClearHistory();
      onClose();
    }
  };

  // Group messages by date
  const messagesByDate = messages.reduce((groups, message) => {
    const date = message.timestamp.toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {} as Record<string, Message[]>);

  return (
    <div className="flex flex-col h-full max-h-[60vh]">
      {/* Header Actions */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <Clock className="h-4 w-4" />
          <span>{messages.length} total messages</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={exportHistory}
            className="flex items-center space-x-1 px-3 py-1.5 text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md transition-colors"
            disabled={messages.length === 0}
          >
            <Download className="h-3 w-3" />
            <span>Export</span>
          </button>
          <button
            onClick={handleClearHistory}
            className="flex items-center space-x-1 px-3 py-1.5 text-xs bg-red-100 text-red-700 hover:bg-red-200 rounded-md transition-colors"
            disabled={messages.length === 0}
          >
            <Trash2 className="h-3 w-3" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.length === 0 ? (
          <div className="text-center py-8">
            <Bot className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No conversation history yet</p>
            <p className="text-xs text-slate-400 mt-1">Start chatting to see your messages here</p>
          </div>
        ) : (
          Object.entries(messagesByDate).map(([date, dayMessages]) => (
            <div key={date} className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="bg-slate-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-600">
                    {formatDate(new Date(date))}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                {dayMessages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      message.role === 'assistant' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {message.role === 'assistant' ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium text-slate-700">
                          {message.role === 'assistant' ? 'FinanceBot' : 'You'}
                        </span>
                        <span className="text-xs text-slate-500">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      
                      <div className="text-sm text-slate-800 leading-relaxed">
                        {message.content}
                      </div>
                      
                      {message.sources && message.sources.length > 0 && (
                        <div className="mt-2 text-xs text-slate-600">
                          <span className="font-medium">Sources: </span>
                          {message.sources.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatHistory;