import { FinancialResponse } from '../types/chat';

interface FinancialKnowledgeItem {
  keywords: string[];
  response: string;
  sources: string[];
}

export const financialKnowledgeBase: FinancialKnowledgeItem[] = [
  {
    keywords: ['phishing', 'scam', 'fraud', 'phishing scam', 'email fraud'],
    response: `A phishing scam is a fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in electronic communications. In financial services, phishing typically involves fake emails, texts, or websites that appear to be from legitimate banks or financial institutions.

Common signs of phishing:
• Urgent requests for personal information
• Suspicious email addresses or URLs
• Poor grammar and spelling
• Requests to click links or download attachments
• Threats of account closure

To protect yourself:
• Never click links in suspicious emails
• Always verify requests by calling your bank directly
• Check URLs carefully for misspellings
• Use two-factor authentication
• Keep your software updated`,
    sources: ['Federal Trade Commission - How to Recognize and Avoid Phishing Scams', 'CISA - Avoiding Social Engineering and Phishing Attacks']
  },
  {
    keywords: ['credit default swap', 'cds', 'default swap', 'credit derivative'],
    response: `A Credit Default Swap (CDS) is a financial derivative contract that allows an investor to transfer or "swap" the credit risk of fixed income products with another investor. Essentially, it's insurance against the default of a debt instrument.

How it works:
• The protection buyer pays periodic payments to the protection seller
• In exchange, the seller agrees to pay the buyer if the underlying debt defaults
• The buyer doesn't need to own the underlying debt
• It's used for hedging credit risk or speculation

Key risks:
• Counterparty risk (the seller might not pay)
• Systemic risk if widely used
• Can amplify market volatility

CDS played a significant role in the 2008 financial crisis when many protection sellers couldn't honor their obligations.`,
    sources: ['Investopedia - Credit Default Swap', 'SEC - Credit Default Swaps', 'Federal Reserve Bank of St. Louis - Understanding Credit Default Swaps']
  },
  {
    keywords: ['secure online banking', 'banking security', 'online banking safety', 'secure banking'],
    response: `Here are essential steps to secure your online banking:

Password Security:
• Use strong, unique passwords for banking accounts
• Enable two-factor authentication (2FA)
• Never save banking passwords in browsers on shared computers

Safe Banking Practices:
• Always log in by typing the bank's URL directly
• Never access banking through email links
• Use secure networks (avoid public Wi-Fi for banking)
• Log out completely when finished
• Monitor accounts regularly

Device Security:
• Keep devices updated with latest security patches
• Use reputable antivirus software
• Don't bank on shared or public computers

Red Flags:
• Unexpected account alerts
• Emails requesting login information
• Unusual account activity
• Suspicious pop-ups during banking sessions

Always report suspicious activity to your bank immediately.`,
    sources: ['FDIC - Safe Internet Banking', 'American Bankers Association - Online Banking Safety Tips', 'CISA - Online Banking Security']
  },
  {
    keywords: ['apr', 'interest rate', 'annual percentage rate', 'difference between apr'],
    response: `APR (Annual Percentage Rate) and interest rate are related but different concepts:

Interest Rate:
• The basic cost of borrowing money
• Only includes the interest charged on the principal
• Expressed as a percentage
• The "raw" cost of the loan

APR (Annual Percentage Rate):
• A broader measure that includes the interest rate PLUS additional costs
• Includes fees, points, mortgage insurance, and other charges
• Gives you the "true" cost of borrowing
• Required by law to be disclosed for most loans

Key Differences:
• APR is always higher than or equal to the interest rate
• APR provides a more complete picture of loan costs
• Use APR to compare different loan offers
• Interest rate affects your monthly payment calculation

Example: A loan with 5% interest rate might have 5.5% APR after including fees.`,
    sources: ['Consumer Financial Protection Bureau - Interest Rate vs APR', 'Federal Reserve - Truth in Lending Act', 'Investopedia - Annual Percentage Rate (APR)']
  },
  {
    keywords: ['fraudulent transactions', 'fraud detection', 'unauthorized charges', 'suspicious activity'],
    response: `Here's how to identify and handle fraudulent transactions:

Warning Signs:
• Charges you don't recognize
• Transactions in locations you haven't visited
• Unusual spending patterns
• Small "test" charges followed by larger ones
• Multiple charges from the same unknown merchant

Immediate Actions:
• Contact your bank or card issuer immediately
• Report the fraud through official channels
• Request to freeze or cancel affected cards
• File a dispute for unauthorized charges
• Change online banking passwords

Prevention Tips:
• Monitor accounts daily
• Set up account alerts for all transactions
• Use contactless payments when possible
• Cover your PIN when entering it
• Regularly review monthly statements
• Use secure payment methods online

Most banks offer zero liability protection for reported fraud, but quick reporting is crucial for the best outcome.`,
    sources: ['Federal Trade Commission - What to Do About Identity Theft', 'Consumer Financial Protection Bureau - Unauthorized Transactions', 'FDIC - Consumer Protection Topics']
  },
  {
    keywords: ['mortgage', 'home loan', 'mortgage rates', 'home buying'],
    response: `A mortgage is a loan used to purchase real estate, where the property serves as collateral. Here's what you need to know:

Types of Mortgages:
• Fixed-rate: Interest rate stays the same for the loan term
• Adjustable-rate (ARM): Interest rate can change over time
• FHA loans: Government-backed loans with lower down payments
• VA loans: For eligible veterans and service members

Key Terms:
• Principal: The loan amount
• Interest: Cost of borrowing
• Escrow: Account for taxes and insurance
• PMI: Private mortgage insurance (required if down payment < 20%)

The Process:
• Get pre-approved to know your budget
• Shop around for best rates
• Submit application with required documents
• Home appraisal and inspection
• Closing and final paperwork

Consider factors like credit score, debt-to-income ratio, and down payment amount when applying.`,
    sources: ['Consumer Financial Protection Bureau - Buying a House', 'HUD - Home Buying Process', 'Fannie Mae - Mortgage Basics']
  }
];

const getRandomResponse = (): FinancialResponse => {
  const responses = [
    {
      content: `I understand you're asking about a financial topic. While I have extensive knowledge about banking, investments, loans, and fraud prevention, I'd like to provide you with the most accurate and relevant information.

Could you please rephrase your question or be more specific about what aspect of finance you'd like to learn about? For example:
• Banking products and services
• Investment strategies
• Loan types and requirements
• Fraud prevention and security
• Credit and debt management

This will help me give you a comprehensive answer with proper sources.`,
      sources: ['Consumer Financial Protection Bureau', 'Federal Reserve Educational Resources']
    }
  ];
  
  return responses[0];
};

export const getFinancialResponse = (query: string): FinancialResponse => {
  const lowercaseQuery = query.toLowerCase();
  
  // Find matching knowledge base item
  const match = financialKnowledgeBase.find(item => 
    item.keywords.some(keyword => lowercaseQuery.includes(keyword.toLowerCase()))
  );
  
  if (match) {
    return {
      content: match.response,
      sources: match.sources
    };
  }
  
  // If no specific match, return a helpful general response
  return getRandomResponse();
};