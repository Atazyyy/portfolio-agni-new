import { useRef, type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useInteractiveBackground } from '../BackgroundCanvas';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useInteractiveBackground(canvasRef);

  return (
    <div className="layout">
      <canvas ref={canvasRef} className="background-canvas" />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
