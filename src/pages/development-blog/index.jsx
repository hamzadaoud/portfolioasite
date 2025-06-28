import React, { useState, useEffect } from 'react';

import GlobalHeader from 'components/ui/GlobalHeader';
import ProjectBreadcrumbs from 'components/ui/ProjectBreadcrumbs';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const DevelopmentBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Immersive Game Worlds with Unity 2023",
      excerpt: "Explore advanced techniques for creating captivating game environments using Unity's latest features including Universal Render Pipeline and advanced lighting systems.",
      content: `In this comprehensive guide, we'll dive deep into the art and science of building immersive game worlds that captivate players from the moment they enter your digital realm.Modern game development has evolved beyond simple mechanics and basic graphics. Today's players expect rich, detailed environments that feel alive and responsive. Unity 2023 provides us with powerful tools to achieve this level of immersion. The Universal Render Pipeline (URP) has revolutionized how we approach lighting and visual effects in Unity. By leveraging URP's advanced features, we can create stunning visual experiences while maintaining optimal performance across different platforms.`,
      category: "tutorials",
      author: "Alex Chen",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      featuredImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      tags: ["Unity", "Game Development", "3D Graphics", "URP"],
      likes: 234,
      comments: 18,
      isPopular: true
    },
    {
      id: 2,
      title: "The Psychology of Game Mechanics: Player Engagement",
      excerpt: "Understanding how psychological principles influence player behavior and how to design mechanics that create lasting engagement without manipulation.",
      content: `Game design is fundamentally about understanding human psychology. Every mechanic, every reward system, every challenge we create taps into deep-seated psychological patterns that drive human behavior.

The key to ethical game design lies in creating systems that respect the player's time and intelligence while still providing compelling experiences. This balance requires a deep understanding of motivation theory, flow states, and cognitive load management.

In this article, we'll explore how to design game mechanics that create genuine engagement rather than exploitative addiction patterns.`,
      category: "industry-insights",
      author: "Alex Chen",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      featuredImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      tags: ["Game Design", "Psychology", "Player Engagement", "Ethics"],
      likes: 189,
      comments: 24,
      isPopular: true
    },
    {
      id: 3,
      title: "Cyber Runner: Post-Mortem Analysis",
      excerpt: "A detailed breakdown of the development process, challenges faced, and lessons learned while creating my latest cyberpunk action game.",
      content: `Cyber Runner was one of the most ambitious projects I've undertaken to date. What started as a simple endless runner concept evolved into a complex cyberpunk adventure with multiple gameplay systems and a rich narrative framework.

The development journey was filled with both triumphs and setbacks. From initial concept to final release, the project taught me valuable lessons about scope management, technical optimization, and the importance of player feedback during development.

In this post-mortem, I'll share the complete development story, including the mistakes that nearly derailed the project and the breakthroughs that made it successful.`,
      category: "project-updates",
      author: "Alex Chen",
      publishDate: "2024-01-05",
      readTime: "15 min read",
      featuredImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      tags: ["Post-Mortem", "Cyber Runner", "Game Development", "Lessons Learned"],
      likes: 156,
      comments: 31,
      isPopular: false
    },
    {
      id: 4,
      title: "Optimizing React Performance for Game UIs",
      excerpt: "Advanced techniques for building responsive game interfaces using React, including virtual DOM optimization and state management strategies.",
      content: `Building game interfaces with React presents unique challenges that differ significantly from traditional web applications. Game UIs need to be highly responsive, handle frequent state updates, and maintain smooth performance even during intensive gameplay.

React's virtual DOM, while excellent for most web applications, can become a bottleneck in game development scenarios where UI updates happen at 60+ FPS. Understanding how to optimize React for these use cases is crucial for modern game developers.

This tutorial covers advanced optimization techniques including component memoization, state batching, and custom hooks for game-specific scenarios.`,
      category: "tutorials",
      author: "Alex Chen",
      publishDate: "2023-12-28",
      readTime: "10 min read",
      featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      tags: ["React", "Performance", "Game UI", "Optimization"],
      likes: 203,
      comments: 15,
      isPopular: true
    },
    {
      id: 5,
      title: "AI in Game Development: Current Trends and Future",
      excerpt: "Exploring how artificial intelligence is transforming game development, from procedural generation to intelligent NPCs and automated testing.",
      content: `Artificial Intelligence is revolutionizing every aspect of game development. From procedural content generation that creates infinite worlds to sophisticated NPC behavior systems that make virtual characters feel truly alive.

The integration of AI tools in the development pipeline is accelerating production timelines while enabling smaller teams to create experiences that previously required massive studios. However, this technological shift also raises important questions about creativity, authorship, and the future of human developers in the industry.

In this comprehensive analysis, we'll examine current AI applications in game development and explore what the future might hold for AI-assisted game creation.`,
      category: "industry-insights",
      author: "Alex Chen",
      publishDate: "2023-12-20",
      readTime: "14 min read",
      featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["AI", "Machine Learning", "Game Development", "Future Tech"],
      likes: 278,
      comments: 42,
      isPopular: true
    },
    {
      id: 6,
      title: "Indie Game Marketing on a Zero Budget",
      excerpt: "Practical strategies for promoting your indie game without spending money on traditional advertising, focusing on community building and organic growth.",
      content: `Marketing an indie game with no budget might seem impossible, but some of the most successful indie games achieved viral success through creative, cost-effective marketing strategies rather than expensive advertising campaigns.

The key lies in understanding your audience, building genuine relationships within the gaming community, and creating content that naturally encourages sharing and discussion.

This guide provides actionable strategies that any indie developer can implement, regardless of their marketing experience or budget constraints.`,
      category: "industry-insights",
      author: "Alex Chen",
      publishDate: "2023-12-15",
      readTime: "11 min read",
      featuredImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
      tags: ["Indie Games", "Marketing", "Community Building", "Budget"],
      likes: 167,
      comments: 28,
      isPopular: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', icon: 'Grid3X3', count: blogPosts.length },
    { id: 'tutorials', label: 'Tutorials', icon: 'BookOpen', count: blogPosts.filter(post => post.category === 'tutorials').length },
    { id: 'industry-insights', label: 'Industry Insights', icon: 'TrendingUp', count: blogPosts.filter(post => post.category === 'industry-insights').length },
    { id: 'project-updates', label: 'Project Updates', icon: 'Rocket', count: blogPosts.filter(post => post.category === 'project-updates').length },
    { id: 'reviews', label: 'Reviews', icon: 'Star', count: blogPosts.filter(post => post.category === 'reviews').length }
  ];

  const popularTags = [
    'Unity', 'Game Design', 'React', 'AI', 'Performance', 'Indie Games', 
    'Psychology', 'Marketing', 'Post-Mortem', 'Optimization', '3D Graphics', 'URP'
  ];

  const authorInfo = {
    name: "Alex Chen",
    title: "Senior Game Developer & Technical Writer",
    bio: `Passionate game developer with 8+ years of experience creating immersive gaming experiences. I share insights, tutorials, and industry analysis to help fellow developers grow their skills and build amazing games.`,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stats: {
      posts: blogPosts.length,
      followers: "2.4K",
      likes: blogPosts.reduce((sum, post) => sum + post.likes, 0)
    }
  };

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMorePosts = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisiblePosts(prev => prev + 6);
      setIsLoading(false);
    }, 1000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const BlogPostCard = ({ post }) => (
    <article className="group bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-neon">
      <div className="relative overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {post.isPopular && (
          <div className="absolute top-4 left-4 flex items-center space-x-1 bg-secondary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-secondary/30">
            <Icon name="TrendingUp" size={14} className="text-secondary" />
            <span className="text-xs font-caption text-secondary font-medium">Popular</span>
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-caption text-text-secondary">{post.readTime}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-caption rounded-full border border-primary/20">
            {categories.find(cat => cat.id === post.category)?.label || post.category}
          </span>
          <span className="text-text-tertiary text-xs">•</span>
          <span className="text-text-tertiary text-xs font-caption">{formatDate(post.publishDate)}</span>
        </div>
        
        <h3 className="font-heading text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-text-secondary font-body text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-accent/10 text-accent text-xs font-caption rounded border border-accent/20"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-accent/10">
          <div className="flex items-center space-x-4 text-text-tertiary text-sm">
            <div className="flex items-center space-x-1">
              <Icon name="Heart" size={16} />
              <span className="font-caption">{post.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MessageCircle" size={16} />
              <span className="font-caption">{post.comments}</span>
            </div>
          </div>
          
          <button className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 group/btn">
            <span className="font-body font-medium text-sm">Read More</span>
            <Icon 
              name="ArrowRight" 
              size={16} 
              className="group-hover/btn:translate-x-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </article>
  );

  const CategoryFilter = ({ category }) => (
    <button
      onClick={() => setSelectedCategory(category.id)}
      className={`group flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
        selectedCategory === category.id
          ? 'bg-primary/20 text-primary border border-primary/30 shadow-neon'
          : 'bg-surface/30 text-text-secondary hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20'
      }`}
    >
      <Icon 
        name={category.icon} 
        size={16} 
        className={`transition-colors duration-300 ${
          selectedCategory === category.id ? 'text-primary' : 'text-text-tertiary group-hover:text-primary'
        }`}
      />
      <span>{category.label}</span>
      <span className={`text-xs px-2 py-1 rounded-full font-caption ${
        selectedCategory === category.id 
          ? 'bg-primary/20 text-primary' :'bg-text-tertiary/20 text-text-tertiary group-hover:bg-primary/20 group-hover:text-primary'
      }`}>
        {category.count}
      </span>
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader />
      <ProjectBreadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,245,255,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text mb-6">
              Development Blog
            </h1>
            <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Insights, tutorials, and industry analysis from the world of game development. 
              Join me on this journey of creating immersive digital experiences.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="Search" size={20} className="text-text-tertiary" />
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-surface/50 backdrop-blur-sm border border-accent/20 rounded-2xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary/50 focus:shadow-neon transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1">
            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <CategoryFilter key={category.id} category={category} />
                ))}
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-text-secondary font-body">
                {searchQuery ? (
                  <span>
                    Found <span className="text-primary font-medium">{filteredPosts.length}</span> articles 
                    for "<span className="text-text-primary">{searchQuery}</span>"
                  </span>
                ) : (
                  <span>
                    Showing <span className="text-primary font-medium">{displayedPosts.length}</span> of{' '}
                    <span className="text-primary font-medium">{filteredPosts.length}</span> articles
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2 text-text-tertiary">
                <Icon name="Calendar" size={16} />
                <span className="font-caption text-sm">Latest First</span>
              </div>
            </div>

            {/* Blog Posts Grid */}
            {displayedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                  {displayedPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMorePosts && (
                  <div className="text-center">
                    <button
                      onClick={loadMorePosts}
                      disabled={isLoading}
                      className="group flex items-center space-x-3 mx-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl font-body font-medium text-background hover:shadow-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>Load More Articles</span>
                          <Icon name="ChevronDown" size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-surface/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-tertiary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">No Articles Found</h3>
                <p className="text-text-secondary font-body mb-6">
                  {searchQuery 
                    ? `No articles match your search for "${searchQuery}". Try different keywords or browse all articles.`
                    : "No articles found in this category. Check back soon for new content!"
                  }
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-300 font-body font-medium"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            {/* Author Bio */}
            <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-6">
              <div className="text-center mb-6">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={authorInfo.avatar}
                    alt={authorInfo.name}
                    className="w-full h-full rounded-full object-cover border-2 border-primary/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">{authorInfo.name}</h3>
                <p className="text-primary font-caption text-sm mb-4">{authorInfo.title}</p>
                <p className="text-text-secondary font-body text-sm">{authorInfo.bio}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-accent/10">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">{authorInfo.stats.posts}</div>
                  <div className="text-xs font-caption text-text-tertiary">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">{authorInfo.stats.followers}</div>
                  <div className="text-xs font-caption text-text-tertiary">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">{authorInfo.stats.likes}</div>
                  <div className="text-xs font-caption text-text-tertiary">Likes</div>
                </div>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-6">
              <h3 className="font-heading text-lg font-bold text-text-primary mb-6 flex items-center">
                <Icon name="TrendingUp" size={20} className="text-secondary mr-2" />
                Popular Posts
              </h3>
              <div className="space-y-4">
                {blogPosts.filter(post => post.isPopular).slice(0, 4).map((post) => (
                  <div key={post.id} className="group flex space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body font-medium text-text-primary text-sm line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-text-tertiary">
                        <span className="font-caption">{post.readTime}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={12} />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Cloud */}
            <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-6">
              <h3 className="font-heading text-lg font-bold text-text-primary mb-6 flex items-center">
                <Icon name="Hash" size={20} className="text-accent mr-2" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-2 bg-accent/10 text-accent text-sm font-caption rounded-lg hover:bg-accent/20 hover:text-accent transition-all duration-300 border border-accent/20"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 backdrop-blur-sm rounded-2xl border border-primary/20 p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-background" />
                </div>
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">Stay Updated</h3>
                <p className="text-text-secondary font-body text-sm">
                  Get the latest tutorials and insights delivered to your inbox.
                </p>
              </div>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-surface/50 border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary/50 transition-colors duration-300"
                />
                <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-medium text-background hover:shadow-neon transition-all duration-300">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-text-tertiary font-caption text-center mt-3">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-1050">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-neon hover:shadow-neon-lg transition-all duration-300"
        >
          <Icon name="ArrowUp" size={24} className="text-background" />
        </button>
      </div>
    </div>
  );
};

export default DevelopmentBlog;