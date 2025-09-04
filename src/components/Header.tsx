import React from 'react';
import { Shield, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">FinanceBot</h1>
              <p className="text-sm text-slate-600">Your trusted financial advisor</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Live Assistant</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;