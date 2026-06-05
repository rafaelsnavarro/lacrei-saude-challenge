import { ReactNode } from "react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <a href="#main-content" className="skip-link">
            Pular para conteúdo principal
          </a>

          {children}
        </Providers>
      </body>
    </html>
  );
}