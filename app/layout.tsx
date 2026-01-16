import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Perfect Peace Café - Where Every Sip Brings Serenity | Mekelle, Ethiopia",
  description: "Experience the perfect blend of traditional Ethiopian coffee culture and modern café comfort at Perfect Peace Café in Mekelle. Enjoy Jebena Buna, premium coffee, fresh smoothies, and delicious food in a peaceful atmosphere with free WiFi.",
  keywords: "Perfect Peace Café, Mekelle, Ethiopia, coffee, Jebena Buna, Ethiopian coffee, café, smoothies, sandwiches, WiFi, traditional coffee, peace, serenity",
  authors: [{ name: "Perfect Peace Café" }],
  creator: "Perfect Peace Café",
  publisher: "Perfect Peace Café",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://perfectpeacecafe.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Perfect Peace Café - Where Every Sip Brings Serenity",
    description: "Experience traditional Ethiopian coffee culture and modern café comfort in the heart of Mekelle. Opening soon!",
    url: 'https://perfectpeacecafe.com',
    siteName: 'Perfect Peace Café',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Perfect Peace Café - Where Every Sip Brings Serenity",
    description: "Experience traditional Ethiopian coffee culture and modern café comfort in the heart of Mekelle. Opening soon!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
