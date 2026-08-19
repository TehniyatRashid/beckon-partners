import React, { useState } from 'react';
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

  // Scroll to top on route change
  const handleNavigate = (route: RoutePath) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      case '/insights':
      case '/brandkit':
        return <AboutPage onNavigate={handleNavigate} />;

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
