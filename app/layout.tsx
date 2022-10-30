import "./globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <div className="w-full h-ful fixed inset-0 overflow-y-auto">
          <header className="w-full">
            <nav className="h-[74px] border-b border-b-gray-200 w-full">
              <div className=" mx-auto  flex h-full">
                <div className="flex items-center h-full w-4/12  pl-20">
                  <a href="/" className="text-2xl font-bold">
                    <span className="text-blue-500 inline-flex">Legal</span>
                    <span className="text-gray-500 inline-flex">Waka</span>
                  </a>
                </div>

                <div className="flex items-center h-full w-7/12 pl-20">
                  <Link
                    href="/question"
                    className=" px-3 py-1 mr-4 hover:rounded hover:border hover:border-solid"
                  >
                    Ask a Question
                  </Link>
                  <Link
                    href="/speak"
                    className=" px-3 py-1 mr-4 hover:rounded hover:border hover:border-solid"
                  >
                    Talk to a lawyer
                  </Link>
                  <Link
                    href=""
                    className=" px-3 py-1 mr-4 hover:rounded hover:border hover:border-solid"
                  >
                    Lawyers
                  </Link>
                  <Link
                    href=""
                    className=" px-3 py-1 mr-4 hover:rounded hover:border hover:border-solid"
                  >
                    Sign in
                  </Link>
                  <Link
                    href=""
                    className=" px-3 py-1 mr-4 hover:rounded hover:border hover:border-solid"
                  >
                    Sign up as a lawyer
                  </Link>
                </div>
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
