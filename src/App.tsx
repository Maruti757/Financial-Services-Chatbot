import React from 'react';
import { ChatProvider } from './context/ChatContext';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <ChatInterface />
        </main>
      </div>
    </ChatProvider>
  );
}

export default App;