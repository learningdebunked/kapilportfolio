import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Linkedin, Mail, Calendar } from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact | Kapil Poreddy',
  description: 'Get in touch with me',
};

const contactMethods = [
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally',
    icon: Linkedin,
    href: 'https://linkedin.com/in/kapilkrp',
    color: 'bg-[#0A66C2]',
    iconColor: 'text-white',
    buttonText: 'Connect on LinkedIn',
  },
  {
    name: 'Email',
    description: 'Send me a direct message',
    icon: Mail,
    href: 'mailto:poreddykapil@ieee.org',
    color: 'bg-gray-800',
    iconColor: 'text-white',
    buttonText: 'Send Email',
  },
  {
    name: 'ADPList',
    description: 'Book a mentoring session',
    icon: () => (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-17v8h2V5h-2zm0 10v2h2v-2h-2z"/>
      </svg>
    ),
    href: 'https://adplist.org/mentors/kapil-reddy',
    color: 'bg-[#4F46E5]',
    iconColor: 'text-white',
    buttonText: 'Book on ADPList',
  },
  {
    name: 'Calendly',
    description: 'Schedule a call with me',
    icon: Calendar,
    href: 'https://calendly.com/poreddykapil',
    color: 'bg-[#00A2FF]',
    iconColor: 'text-white',
    buttonText: 'Schedule a Call',
  },
  {
    name: 'IEEE',
    description: 'Connect on IEEE Collabratec',
    icon: () => (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    href: 'https://ieee-collabratec.ieee.org/app/p/KapilPoreddy',
    color: 'bg-[#00629B]',
    iconColor: 'text-white',
    buttonText: 'View on IEEE',
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            I'd love to connect with you! Choose your preferred method below.
          </p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <div 
                key={method.name}
                className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex items-center">
                  <div className={`mr-3 flex h-12 w-12 items-center justify-center rounded-lg ${method.color}`}>
                    {React.isValidElement(method.icon) ? (
                      method.icon
                    ) : typeof method.icon === 'function' ? (
                      method.icon({ className: 'h-6 w-6' })
                    ) : (
                      <div className={method.iconColor || 'text-white'}>
                        {React.createElement(method.icon, { className: 'h-6 w-6' })}
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{method.name}</h2>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {method.buttonText}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Or email me directly at{' '}
              <a 
                href="mailto:poreddykapil@ieee.org" 
                className="text-foreground underline hover:text-primary"
              >
                poreddykapil@ieee.org
              </a>
            </p>
            <div className="mt-6">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
