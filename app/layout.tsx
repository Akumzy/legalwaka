import './globals.css';
import type { AppProps } from 'next/app';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <div className="w-full h-ful fixed inset-0 overflow-y-auto">
          <header className="w-full">
            <nav className="h-[64px] border-b border-b-gray-200 w-full">
              <div className="max-w-7xl mx-auto flex h-full">
                <div className="flex items-center h-full">
                  <a href="/" className="text-2xl font-bold">
                    <span className="text-blue-500 inline-flex">Legal</span>
                    <span className="text-gray-500 inline-flex">Waka</span>
                  </a>
                </div>

                <div className="flex-1"></div>
              </div>
            </nav>
          </header>
          {children}
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
