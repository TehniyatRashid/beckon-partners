import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';

// Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Core Simplified Pages
import { HomePage } from './pages/HomePage';
import { IndustriesOverviewPage } from './pages/IndustriesOverviewPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { AboutPage } from './pages/AboutPage';
import { AssessmentPage } from './pages/AssessmentPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>('/');

  // Scroll to top on route change via useEffect after render/mount
  useEffect(() => {
    const html = document.documentElement;
    const hasSmooth = html.classList.contains('scroll-smooth');
    
    // Disable smooth scroll temporarily
    if (hasSmooth) {
      html.classList.remove('scroll-smooth');
    }
    html.style.scrollBehavior = 'auto';

    window.scrollTo(0, 0);

    // Restore smooth scroll in the next tick
    const timer = setTimeout(() => {
      html.style.scrollBehavior = '';
      if (hasSmooth) {
        html.classList.add('scroll-smooth');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentRoute]);

  const handleNavigate = (route: RoutePath) => {
    setCurrentRoute(route);
  };

  // Render correct view based on route
  const renderContent = () => {
    // Dynamic industry routes
    if (currentRoute.startsWith('/industries/')) {
      const slug = currentRoute.replace('/industries/', '');
      return <IndustryDetailPage industrySlug={slug} onNavigate={handleNavigate} />;
    }

    switch (currentRoute) {
      case '/':
      case '/how-we-work':
      case '/methodology':
      case '/systems':
      case '/ecosystem':
      case '/integrations':
        return <HomePage onNavigate={handleNavigate} />;

      case '/industries':
        return <IndustriesOverviewPage onNavigate={handleNavigate} />;

      case '/about':
      case '/about#faq':
      case '/insights':
      case '/brandkit':
        return <AboutPage onNavigate={handleNavigate} currentRoute={currentRoute} />;

      case '/assessment':
      case '/contact':
        return <AssessmentPage onNavigate={handleNavigate} />;

      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1115] flex flex-col font-sans selection:bg-[#E8E4DC] selection:text-[#0F1115] relative">
      {/* Top Floating Navigation Bar */}
      <div className="relative z-50">
        <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />
      </div>

      {/* Main Page Area */}
      <main className="flex-grow relative z-10">
        {renderContent()}
      </main>

      {/* Global Footer */}
      <div className="relative z-10">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
