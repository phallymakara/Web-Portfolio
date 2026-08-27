import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { Header, NavItem } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Container } from './components/layout/Container';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { StackPage } from './pages/StackPage';
import { WorkPage } from './pages/WorkPage';
import { NowPage } from './pages/NowPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';

export type ActiveView = NavItem | 'project-detail' | 'blog-post';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string>('nexus-agentic-workflow-engine');
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>('deterministic-guardrails-for-ai-agents');

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setActiveView('home');
        return;
      }

      if (hash.startsWith('projects/')) {
        const slug = hash.replace('projects/', '');
        setSelectedProjectSlug(slug);
        setActiveView('project-detail');
      } else if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        setSelectedBlogSlug(slug);
        setActiveView('blog-post');
      } else if (['home', 'about', 'projects', 'stack', 'work', 'now', 'blog', 'contact'].includes(hash)) {
        setActiveView(hash as NavItem);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: NavItem, slugOrParam?: string) => {
    if (tab === 'projects' && slugOrParam) {
      setSelectedProjectSlug(slugOrParam);
      setActiveView('project-detail');
      window.location.hash = `projects/${slugOrParam}`;
    } else if (tab === 'blog' && slugOrParam) {
      setSelectedBlogSlug(slugOrParam);
      setActiveView('blog-post');
      window.location.hash = `blog/${slugOrParam}`;
    } else {
      setActiveView(tab);
      window.location.hash = tab === 'home' ? '' : tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (slug: string) => {
    setSelectedProjectSlug(slug);
    setActiveView('project-detail');
    window.location.hash = `projects/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlog = (slug: string) => {
    setSelectedBlogSlug(slug);
    setActiveView('blog-post');
    window.location.hash = `blog/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      
      {/* Editorial Navigation Header */}
      <Header
        activeTab={activeView}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <Container className="py-8 sm:py-12">
          {activeView === 'home' && (
            <HomePage onNavigate={handleNavigate} />
          )}

          {activeView === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {activeView === 'projects' && (
            <ProjectsPage onSelectProject={handleSelectProject} />
          )}

          {activeView === 'project-detail' && (
            <ProjectDetailPage
              slug={selectedProjectSlug}
              onBack={() => handleNavigate('projects')}
            />
          )}

          {activeView === 'stack' && (
            <StackPage />
          )}

          {activeView === 'work' && (
            <WorkPage />
          )}

          {activeView === 'now' && (
            <NowPage />
          )}

          {activeView === 'blog' && (
            <BlogPage onSelectPost={handleSelectBlog} />
          )}

          {activeView === 'blog-post' && (
            <BlogPostPage
              slug={selectedBlogSlug}
              onBack={() => handleNavigate('blog')}
            />
          )}

          {activeView === 'contact' && (
            <ContactPage />
          )}
        </Container>
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
