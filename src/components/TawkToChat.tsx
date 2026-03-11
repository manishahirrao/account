"use client";

import { useEffect } from 'react';

export function TawkToChat() {
  useEffect(() => {
    // Tawk.to Live Chat Script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/69b17b1237be0c1c38ee0f52/1jjekhgil';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      const existingScript = document.querySelector('script[src*="embed.tawk.to"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Remove Tawk.to widget if it exists
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function() {
          window.Tawk_API.hideWidget();
        };
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

// Extend the Window interface to include Tawk_API
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}