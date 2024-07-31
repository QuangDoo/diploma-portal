import { type ReactNode } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavigationBar />

      <main className="flex min-h-[calc(100vh-4rem)] flex-col lg:min-h-[calc(100vh-5rem)]">
        <div className="flex h-full flex-1 flex-col bg-slate-50">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default RootLayout;
