'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 px-0 opacity-0">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end"
          className="z-[100] min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100"
        >
          <DropdownMenuItem 
            onClick={() => setTheme('light')}
            className="cursor-pointer px-2 py-1.5 text-sm outline-none text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setTheme('dark')}
            className="cursor-pointer px-2 py-1.5 text-sm outline-none text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setTheme('system')}
            className="cursor-pointer px-2 py-1.5 text-sm outline-none text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
