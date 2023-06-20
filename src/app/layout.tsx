import { ReactNode } from "react";
import Head from "./head";
import Provider from "./provider";
import './../styles/globals.css';

interface IRootLayout {
  children: ReactNode
}

export default function RootLayout({ children } : IRootLayout) : JSX.Element {
  return (
    <html lang="pt-BR">
      <Head />
        <body suppressHydrationWarning={true}>
          <Provider>{children}</Provider>
        </body>
    </html>
  )
}