import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: '600',
  display: 'swap',
})

const siteUrl = 'https://v0-dance-studio-prototype-promise.vercel.app'
const siteName = 'Steps Dance School'
const siteTitle = 'Steps Dance School | Scuola di danza a Ciampino'
const siteDescription =
  'Steps Dance School e una scuola di danza a Ciampino con corsi di danza classica, danza moderna, hip hop, propedeutica, canto, laboratorio teatrale e musical.'
const ogImage = `${siteUrl}/OGIMAGE.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Steps Dance School',
    'scuola di danza Ciampino',
    'scuola di danza Roma',
    'danza moderna Ciampino',
    'danza classica Ciampino',
    'hip hop Ciampino',
    'musical Ciampino',
    'Via Emilio Reverberi 28 Ciampino',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 630,
        alt: 'Steps Dance School - Scuola di danza a Ciampino',
        type: 'image/jpeg',
      },
    ],
    locale: 'it_IT',
    countryName: 'Italia',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        alt: 'Steps Dance School - Scuola di danza a Ciampino',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'dance academy',
  other: {
    'og:image:secure_url': ogImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'twitter:image': ogImage,
    'pinterest-rich-pin': 'true',
  },
}

export const viewport: Viewport = {
  themeColor: '#C0152A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${cormorant.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
