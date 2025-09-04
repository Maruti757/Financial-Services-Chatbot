# VS Code Setup and GitHub Deployment Guide

## Prerequisites

Before starting, make sure you have:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- A [GitHub](https://github.com/) account

## Step 1: Clone/Download the Project

### Option A: If you have the project files locally
1. Open VS Code
2. Go to `File > Open Folder`
3. Select the project folder containing the financial chatbot

### Option B: Create a new project from scratch
1. Create a new folder for your project:
```bash
mkdir financial-chatbot
cd financial-chatbot
```

2. Open the folder in VS Code:
```bash
code .
```

## Step 2: Set Up the Project in VS Code

### Install Dependencies
1. Open the integrated terminal in VS Code (`Ctrl+`` or `View > Terminal`)
2. Run the following commands:

```bash
# Initialize npm project (if starting fresh)
npm init -y

# Install dependencies
npm install react@latest react-dom@latest
npm install -D @types/react@latest @types/react-dom@latest
npm install -D @vitejs/plugin-react@latest vite@latest typescript@latest
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm install -D eslint@latest @eslint/js@latest typescript-eslint@latest
npm install -D eslint-plugin-react-hooks@latest eslint-plugin-react-refresh@latest
npm install -D globals@latest
npm install lucide-react@latest

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Copy Project Files
If you're starting fresh, copy all the source files from the chatbot project into your VS Code workspace:
- Copy all files from `src/` folder
- Copy configuration files (`package.json`, `tsconfig.json`, etc.)
- Copy `index.html`

## Step 3: Run the Project Locally

1. In the VS Code terminal, start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`
3. You should see the FinanceBot interface running locally

### Recommended VS Code Extensions
Install these extensions for better development experience:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag
- Prettier - Code formatter
- ESLint

## Step 4: Initialize Git Repository

1. In the VS Code terminal, initialize Git:
```bash
git init
```

2. Create a `.gitignore` file:
```bash
echo "node_modules/
dist/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
*.tsbuildinfo" > .gitignore
```

3. Add all files to Git:
```bash
git add .
```

4. Make your first commit:
```bash
git commit -m "Initial commit: Financial Services Chatbot"
```

## Step 5: Create GitHub Repository

### Method 1: Using GitHub CLI (Recommended)
1. Install GitHub CLI if you haven't: https://cli.github.com/
2. Login to GitHub:
```bash
gh auth login
```

3. Create and push repository:
```bash
gh repo create financial-chatbot --public --push --source=.
```

### Method 2: Using GitHub Website
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - Repository name: `financial-chatbot`
   - Description: `LLM-Powered Financial Services Chatbot with React and TypeScript`
   - Make it Public
   - Don't initialize with README (we already have one)

5. Click "Create repository"

6. In VS Code terminal, add the remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/financial-chatbot.git
git branch -M main
git push -u origin main
```

## Step 6: Deploy to Production

### Deploy to Vercel
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login and deploy:
```bash
vercel login
vercel --prod
```

### Deploy to Netlify
1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist/` folder to deploy
4. Or connect your GitHub repository for automatic deployments

## Step 7: Update README with Live Links

After deployment, update your README.md with:
- Live demo link
- GitHub repository link
- Any additional setup instructions

## Development Workflow

### Making Changes
1. Create a new branch for features:
```bash
git checkout -b feature/new-feature-name
```

2. Make your changes in VS Code
3. Test locally with `npm run dev`
4. Commit changes:
```bash
git add .
git commit -m "Add: description of changes"
```

5. Push to GitHub:
```bash
git push origin feature/new-feature-name
```

6. Create a Pull Request on GitHub

### Useful VS Code Shortcuts
- `Ctrl+`` - Toggle terminal
- `Ctrl+Shift+P` - Command palette
- `Ctrl+P` - Quick file open
- `F5` - Start debugging
- `Ctrl+Shift+F` - Search across files

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Getting Help
- Check the browser console for errors (`F12`)
- Review the terminal output for build errors
- Ensure all dependencies are properly installed
- Verify file paths and imports are correct

## Next Steps

1. **Add Real LLM Integration**: Replace the mock responses with actual OpenAI API calls
2. **Enhance Knowledge Base**: Add more financial topics and responses
3. **User Authentication**: Add user accounts and personalized experiences
4. **Database Integration**: Store conversation history persistently
5. **Advanced Features**: Add voice input, file uploads, or financial calculators

## Project Structure Overview

```
financial-chatbot/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ChatInterface.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── LoadingIndicator.tsx
│   │   └── Header.tsx
│   ├── context/         # React context
│   │   └── ChatContext.tsx
│   ├── services/        # Business logic
│   │   └── financialService.ts
│   ├── types/          # TypeScript types
│   │   └── chat.ts
│   ├── App.tsx         # Main component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── tailwind.config.js  # Tailwind config
├── vite.config.ts      # Vite config
└── README.md           # Project documentation
```

This structure follows React best practices with clear separation of concerns and modular architecture.