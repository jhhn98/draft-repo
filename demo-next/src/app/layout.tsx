import type { Metadata } from "next"
import "./globals.scss"

import Header from "@/component/common/Header"
import FooterNavigation from "@/component/common/FooterNavigation"
import { AuthProvider } from "@/context/AuthContext"

export const metadata: Metadata = {
  title: "Next.js Demo",
  description: "A demo app for Next.js"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          <Header/>
          <main className="main-container">{children}</main>
          <FooterNavigation/>
        </AuthProvider>
      </body>
    </html>
  )
}