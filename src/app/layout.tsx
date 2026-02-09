// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "MDS Arquitetura",
  description: "Página de vendas para arquiteto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#121212]">{children}</body>
    </html>
  );
}
