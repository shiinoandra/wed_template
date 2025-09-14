export const runtime = 'edge';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react"

// import "./globals.css";
import "./styles/animate.min.css"
import "./styles/style.css"
import "./styles/style_anim.css"
import "./styles/bootstrap-vCaDZZbr.css"
import "./styles/themesv2-DZZF_N8v.css"
import "./styles/extra1.css"
import "./styles/extra2.css"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding - Nuri & Rahadian",
  description: "Wedding - Nuri & Rahadian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="color-scheme" content="light only" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <meta itemProp="image" content="https://nurirahadian.photo-frame.com/tengs.jpg" />
        <title>Wedding - Nuri & Rahadian</title>
        <meta name="title" content="Wedding - Nuri & Rahadian" />
        <meta name="description" content="Undangan Wedding Nuri & Rahadian" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wedding - Nuri & Rahadian" />
        <meta property="og:description" content="Undangan Wedding Nuri & Rahadian" />
        <meta property="og:image" content="https://nurirahadian.photo-frame.com/tengs.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/"  />

        {/* <script type="application/ld+json">
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Wedding - Nuri & Rahadian",
                "description": "Undangan Wedding Nuri & Rahadian",
                "brand": {
                    "@type": "Brand",
                    "name": "Satu Momen"
                },
                "review": {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Elsa Gunayanti"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "579"
                }
            }
        </script> */}

    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          {children}
        </Suspense>

      </body>
    </html>
  );
}
