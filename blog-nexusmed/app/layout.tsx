import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog NexusMed | Gestão Completa para Clínicas Modernas',
  description: 'Conteúdo especializado em gestão clínica, tecnologia em saúde, regulamentação e boas práticas para clínicas e consultórios modernos.',
  keywords: ['gestão clínica', 'saúde', 'clínicas', 'consultório', 'tecnologia em saúde', 'NexusMed'],
  openGraph: {
    title: 'Blog NexusMed',
    description: 'Conteúdo especializado em gestão clínica',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
