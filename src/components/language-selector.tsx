'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English (US)', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
];

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = React.useState('en');

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    // We'll implement the actual language change logic later
    console.log('Changing language to:', langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="sr-only">Select language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end"
          className="z-[100] min-w-[10rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100"
        >
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-2 px-3 py-2 text-sm outline-none ${
                currentLang === lang.code 
                  ? 'bg-gray-100 text-foreground dark:bg-gray-800' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-foreground dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
              {currentLang === lang.code && (
                <span className="ml-auto text-xs text-muted-foreground">
                  ✓
                </span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
