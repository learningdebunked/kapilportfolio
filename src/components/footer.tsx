import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter, Mail, Calendar } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/learningdebunked',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/kapilkrp',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:poreddykapil@ieee.org',
      icon: Mail,
    },
    {
      name: 'Calendly',
      href: 'https://calendly.com/poreddykapil',
      icon: Calendar,
    },
  ];

  return (
    <footer className="border-t border-secondary-200 bg-white dark:border-secondary-800 dark:bg-secondary-950">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Kapil Poreddy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
