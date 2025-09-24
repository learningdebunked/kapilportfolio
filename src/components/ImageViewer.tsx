'use client';

import { useEffect } from 'react';

export function ImageViewer({ 
  url, 
  open, 
  onOpenChange, 
  alt = 'Image Viewer' 
}: { 
  url: string; 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  alt?: string;
}) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={() => onOpenChange(false)}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute -right-10 -top-10 z-10 p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img 
          src={url} 
          alt={alt}
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
}
