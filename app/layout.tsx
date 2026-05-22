
import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="min-h-full flex flex-col">
        <header className="bg-blue-100 w-full h-20 p-4 flex justify-between align-middle shadow-2xl">
          <p className="text-blue-950 text-4xl">AI Prompt MarketPlace</p>
          <div className="flex justify-evenly w-150">
            <Link href="/prompts">
              <button className="bg-blue-50 text-blue-300 py-2 px-5 rounded-4xl border-2 border-b-blue-300 hover:bg-blue-950 hover:text-blue-50 hover:border-0 transition-opacity">Browser prompts</button>
            </Link>
            <Link href="/prompts/saved">
              <button className="bg-blue-50 text-blue-300 py-2 px-5 rounded-4xl border-2 border-b-blue-300 hover:bg-blue-950 hover:text-blue-50 hover:border-0 transition-opacity">Collections</button>
            </Link>
            <Link href="/prompts/add">
              <button className="bg-blue-50 text-blue-300 py-2 px-5 rounded-4xl border-2 border-blue-300 hover:bg-blue-950 hover:text-blue-50 hover:border-0 transition-all">
                Add Prompts
              </button>
            </Link>
          </div>
        </header>
        {children}
        <footer className="bg-blue-100 w-full h-20 p-4 shadow-2xl">
          <p className="text-center mt-3">All Rights Reserved Under @aipromptmarketplace.com - 2026</p>
        </footer>
      </body>
    </html>
  );
}
