// app/layout.tsx 
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>

        <meta name="google-site-verification" content="bR-eiO8rI3epTbJIowoHjcJcjkDw-65UGbGr6deTk_0" />

        <link rel="icon" href="/images/fin-favIcon.svg" type="image/svg+xml"></link>




        {/* Favicon */}

        <link rel="apple-touch-icon" href="/images/fin-favIcon.svg" />


      </head>
      <body className="bg-black text-white antialiased max-w-7xl mx-auto">
        {children}
      </body>
    </html>
  );
}