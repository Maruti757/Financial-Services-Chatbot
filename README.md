# FinanceBot - LLM-Powered Financial Services Chatbot

A professional financial services chatbot that provides expert guidance on banking, investments, loans, and fraud prevention with trusted source citations.

## Features

- **Expert Financial Knowledge**: Comprehensive answers about banking terms, loans, fraud alerts, and security
- **Source Citations**: All responses include trusted financial authority sources
- **Conversation History**: Persistent chat history throughout your session
- **Professional Interface**: Clean, responsive design optimized for financial discussions
- **Loading Animations**: Smooth user experience with typing indicators
- **Security Focus**: Emphasizes fraud prevention and online banking safety

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd financial-chatbot
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` to use the chatbot

## Sample Questions to Try

- "What is a phishing scam?"
- "Explain credit default swap in simple terms"
- "How can I secure my online banking?"
- "What's the difference between APR and interest rate?"
- "How do I identify fraudulent transactions?"

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Knowledge Base**: Curated financial content with source attribution

## Project Structure

```
src/
├── components/          # React components
│   ├── ChatInterface.tsx
│   ├── MessageBubble.tsx
│   ├── LoadingIndicator.tsx
│   └── Header.tsx
├── context/             # React context for state management
│   └── ChatContext.tsx
├── services/            # Business logic and data
│   └── financialService.ts
├── types/              # TypeScript type definitions
│   └── chat.ts
└── App.tsx             # Main application component
```

## Features in Detail

### Chat Interface
- Real-time message exchange
- Suggested questions for new users
- Message timestamps and role indicators
- Smooth animations for message appearance

### Knowledge Base
- Pre-loaded financial expertise covering:
  - Banking security and fraud prevention
  - Investment terminology and concepts
  - Loan types and mortgage information
  - Credit and debt management
- All responses include verified source citations

### Security & Compliance
- Educational disclaimer for financial advice
- Emphasis on consulting professional advisors
- Focus on fraud prevention and security best practices

## Deployment

### Frontend Deployment Options

**Vercel** (Recommended):
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

**Netlify**:
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

## Production Enhancements

To enhance this for production use:

1. **Real LLM Integration**: Connect to OpenAI API or use HuggingFace FinancialBERT
2. **User Authentication**: Add secure user sessions
3. **Chat Persistence**: Store conversation history in a database
4. **Advanced Analytics**: Track user interactions and improve responses
5. **Compliance Features**: Add regulatory compliance checking
6. **Live Support Integration**: Connect to human financial advisors

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

This chatbot provides educational information only and should not be considered professional financial advice. Always consult with qualified financial advisors for important financial decisions.

## License

MIT License - see LICENSE file for details