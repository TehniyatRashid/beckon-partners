import React, { useState } from 'react';
import { RoutePath, InsightArticle } from '../types';
import { INSIGHT_ARTICLES } from '../data/insightsData';
import { Search, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Business Systems', 'Operations', 'AI & WhatsApp', 'Transformation', 'Executive Intelligence'];

  const filteredArticles = INSIGHT_ARTICLES.filter(art => {
    const matchesCat = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] text-zinc-900 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If viewing a single article */}
        {selectedArticle ? (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-[#C5A059] mb-8 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Knowledge Center</span>
            </button>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span className="text-[#B89635] font-bold uppercase">{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
                <span>·</span>
                <span>{selectedArticle.publishedDate}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                {selectedArticle.title}
              </h1>

              <div className="text-xs font-mono text-zinc-500">
                By {selectedArticle.author.name} ({selectedArticle.author.role})
              </div>
            </div>

            <div className="prose max-w-none text-sm sm:text-base text-zinc-700 space-y-6 leading-relaxed font-sans border-t border-zinc-200 pt-8">
              <p className="text-lg font-semibold text-zinc-900">
                {selectedArticle.excerpt}
              </p>
              
              <div className="p-6 rounded-2xl bg-[#FAF6EB] border border-[#E8DFCA] space-y-2 font-mono text-xs">
                <div className="text-[#B89635] font-bold uppercase">KEY TAKEAWAY FOR LEADERSHIP:</div>
                <p className="text-zinc-800 font-sans">
                  {selectedArticle.content[0] || "Every business system design decision directly dictates whether staff spend time on repetitive re-keying or on high-value client outcomes."}
                </p>
              </div>

              {selectedArticle.content.slice(1).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : (
          
          /* Main Articles Index */
          <div>
            
            {/* Header */}
            <div className="max-w-3xl mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-xs font-bold text-[#B89635]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KNOWLEDGE CENTER</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
                Connected Business Systems Insights.
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                Perspectives on operations, automation middleware, supplier margin protection, and business system design.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-zinc-200">
              
              {/* Category Filter Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none font-mono text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl border font-bold whitespace-nowrap transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-white border border-zinc-200 rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-zinc-900 focus:outline-none focus:border-zinc-900"
                />
              </div>

            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-[#C5A059] transition-all cursor-pointer group flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase mb-2">
                      <span className="text-[#B89635] font-bold">{art.category}</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h2 className="text-lg font-bold text-zinc-900 group-hover:text-[#C5A059] transition-colors leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-xs text-zinc-600 mt-3 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono font-bold text-zinc-500 group-hover:text-zinc-900">
                    <span>Read Full Insight</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
