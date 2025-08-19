import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AntdCompatibility from '../components/common/AntdCompatibility';
import { ConfigProvider } from 'antd';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Medicavox',
  description: 'AI 의료 통역 코디네이터',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                headerBg: '#1F3864',
                headerColor: '#fff',
              },
            },
            token: {
              colorBgLayout: '#ffffff',
            },
          }}
        >
          <AntdCompatibility />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
