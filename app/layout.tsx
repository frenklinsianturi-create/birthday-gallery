import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "🎂 Ulang Tahun Ibu Tercinta",
  description: "Website spesial untuk ibu tersayang",
  keywords: ["ulang tahun", "ibu", "birthday", "love", "family"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#DAA520" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🎂</text></svg>"
        />
      </head>
      <body className="bg-pink-50 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}