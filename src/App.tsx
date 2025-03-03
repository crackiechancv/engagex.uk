import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, HelpCircle, Footprints, Target, ArrowRight, CheckCircle, Users, Store, BarChart, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import ChatBot from './components/ChatBot';
import GetStarted from './pages/GetStarted';
import LearnMore from './pages/LearnMore';

// Custom Discord SVG icon component
const DiscordIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-8 w-8 text-white hover:text-white transition-all filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
  >
    <path d="M9 12a2 2 0 1 0-2-2c0 1.1.9 2 2 2Zm7-2a2 2 0 1 0-2 2c1.1 0 2-.9 2-2Z" />
    <path d="M7.5 3h9c2.5 0 4.5 2 4.5 4.5v5c0 2.5-2 4.5-4.5 4.5h-3.5l-3 3v-3h-2.5c-2.5 0-4.5-2-4.5-4.5v-5c0-2.5 2-4.5 4.5-4.5Z" />
  </svg>
);

function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);

      // Reveal sections on scroll
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradientStyle = {
    background: `linear-gradient(-45deg, #45fffc, #2892bd, #0038b0, #0a0440)`,
    backgroundSize: '400% 400%',
    backgroundPosition: `${scrollProgress}% 50%`
  };

  const socialLinks = {
    instagram: 'https://instagram.com/engagex',
    twitter: 'https://x.com/engagexuk',
    discord: 'https://discord.gg/a7B3dBFmz7'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Show a success message
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const SocialButtons = () => (
    <div className="flex space-x-6">
      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform">
        <Instagram className="h-8 w-8 text-white hover:text-white transition-all filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </a>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform">
        <Twitter className="h-8 w-8 text-white hover:text-white transition-all filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </a>
      <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform">
        <DiscordIcon />
      </a>
    </div>
  );

  // Modal component
  const Modal = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${activeModal === id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal}></div>
      <div className="glass-morphism rounded-xl w-full max-w-2xl z-10 p-6 transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <button onClick={closeModal} className="text-white hover:text-blue-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-white">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative" style={gradientStyle}>
      {/* Navigation */}
      <nav className="fixed w-full glass-morphism z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold">
            <span className="text-white">Engage</span>
            <span className="text-blue-400 flicker-glow">X</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-blue-200 transition">Services</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition">Contact</a>
            <a href="#info" className="text-white hover:text-blue-200 transition">Info</a>
          </div>
          <Link
            to="/get-started"
            className="glass-morphism text-white px-6 py-2 rounded-full hover:bg-white/10 transition font-bold"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 reveal" ref={(el) => el && (sectionsRef.current[0] = el)}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                 Business Growth Online
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Expert social media management that drives traffic, online sales, and real revenue for your physical or online business.
              </p>
              <div className="flex space-x-4 pt-4">
                <Link
                  to="/get-started"
                  className="glass-morphism text-white px-8 py-3 rounded-full hover:bg-white/10 transition flex items-center font-bold group"
                >
                  Get Started 
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/learn-more"
                  className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-bold"
                >
                  Learn More
                </Link>
              </div>
              <div className="pt-8">
                <SocialButtons />
              </div>
            </div>
            <div className="relative parallax">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur-2xl opacity-20 -z-10"></div>
              <img 
                src="https://www.marketplace.org/wp-content/uploads/2021/10/stockmarket.jpg"
                alt="Social Media Dashboard"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 reveal" ref={(el) => el && (sectionsRef.current[1] = el)}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-16">
            Comprehensive social media solutions that drive real business results for your store and online presence
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-400" />,
                title: "Local Customer Growth",
                description: "Draw in local customers and elevate your business's traffic with powerful, targeted social media campaigns shaped just for your community."
              },
              {
                icon: <Store className="h-8 w-8 text-blue-400" />,
                title: "Your Online Store",
                description: "We'll create a one-of-a-kind online store that perfectly reflects your vision and meets the specific needs of your business. Our approach involves understanding your brand and target audience to design an engaging, user-friendly platform that enhances your online presence and drives sales."
              },
              {
                icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
                title: "Customer Engagement",
                description: "Build lasting relationships with your customers through responsive social media management."
              }
            ].map((service, index) => (
              <div key={index} className="glass-morphism p-8 rounded-2xl hover-card">
                {service.icon}
                <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 reveal" ref={(el) => el && (sectionsRef.current[2] = el)}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-morphism rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Ready to increase your business revenue? Contact us today and let's discuss how we can help your business thrive both online and offline.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Mail className="h-6 w-6" />
                    <span>breakbread4l@proton.me</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Phone className="h-6 w-6" />
                    <span>+44 7308 522642</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <MapPin className="h-6 w-6" />
                    <span>Birmingham Road, Great Packington, CV7 7HJ</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your business..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full glass-morphism text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 reveal" ref={(el) => el && (sectionsRef.current[3] = el)}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Our Information</h2><br></br><br></br>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-blue-400" />,
                title: "Our Mission",
                description: "We are dedicated to helping businesses of all sizes succeed in the digital world. By creating a strong and personalized social media presence, we help you connect with more customers, build trust, and expand your brand's reach."
              },
              {
                icon: <HelpCircle className="h-8 w-8 text-blue-400" />,
                title: "Why Choose Us?",
                description: "We've partnered with a diverse range of businesses, elevating their presence across popular platforms like Instagram, Facebook, and LinkedIn, and helping them shine in the digital landscape."
              },
              {
                icon: <Footprints className="h-8 w-8 text-blue-400" />,
                title: "Our Approach",
                description: "We dedicate time to understanding your business, target audience, and goals. Our services encompass everything from content creation and scheduling to engaging with your audience. We offer continuous support, monitor your growth, and adjust our strategies using data-driven insights."
              }
            ].map((service, index) => (
              <div key={index} className="glass-morphism p-8 rounded-2xl hover-card">
                {service.icon}
                <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 reveal" ref={(el) => el && (sectionsRef.current[4] = el)}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold">
                <span className="text-white">Engage</span>
                <span className="text-blue-400 flicker-glow">X</span>
              </div>
              <p className="mt-4 text-gray-200">
                Driving growth for physical and online businesses through effective social media management
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <button 
                    onClick={() => openModal('local-growth')} 
                    className="text-button hover:text-blue-300 transition"
                  >
                    Local Customer Growth
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('sales')} 
                    className="text-button hover:text-blue-300 transition"
                  >
                    Sales & Performance
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('engagement')} 
                    className="text-button hover:text-blue-300 transition"
                  >
                    Customer Engagement
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <button 
                    onClick={() => openModal('about-us')} 
                    className="text-button hover:text-blue-300 transition"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('success-stories')} 
                    className="text-button hover:text-blue-300 transition"
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('resources')} 
                    className="text-button hover:text-blue-300 transition"
                  >
                    Resources
                  </button>
                </li>
                <li>
                  <a href="#contact" className="text-button hover:text-blue-300 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Connect</h3>
              <SocialButtons />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-200">
            <p>&copy; 2024 EngageX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal id="local-growth" title="Local Customer Growth">
        <div className="space-y-4">
          <p>Our local customer growth strategies are designed to connect your business with customers in your immediate area. We use a combination of targeted advertising, local SEO, and community engagement to drive foot traffic to your physical location.</p>
          <h4 className="text-xl font-semibold mt-4">Our approach includes:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Geo-targeted social media campaigns</li>
            <li>Local business directory optimization</li>
            <li>Community event promotion</li>
            <li>Location-based offers and promotions</li>
            <li>Customer review management</li>
          </ul>
          <div className="mt-6">
            <Link to="/get-started" className="glass-morphism text-white px-6 py-2 rounded-full hover:bg-white/10 transition font-bold inline-flex items-center" onClick={closeModal}>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Modal>

      <Modal id="sales" title="Sales & Performance">
        <div className="space-y-4">
          <p>Our sales and performance strategies focus on converting social media engagement into actual revenue. We implement data-driven approaches to optimize your conversion funnel and maximize ROI.</p>
          <h4 className="text-xl font-semibold mt-4">Key benefits:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Conversion-focused content strategies</li>
            <li>Sales funnel optimization</li>
            <li>E-commerce integration</li>
            <li>Performance tracking and analytics</li>
            <li>A/B testing for maximum results</li>
          </ul>
          <div className="mt-6">
            <Link to="/get-started" className="glass-morphism text-white px-6 py-2 rounded-full hover:bg-white/10 transition font-bold inline-flex items-center" onClick={closeModal}>
              Boost Your Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Modal>

      <Modal id="engagement" title="Customer Engagement">
        <div className="space-y-4">
          <p>Building meaningful relationships with your audience is essential for long-term business success. Our customer engagement strategies focus on creating authentic connections that foster loyalty and advocacy.</p>
          <h4 className="text-xl font-semibold mt-4">Our engagement approach:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Community management and moderation</li>
            <li>Responsive customer service</li>
            <li>Interactive content creation</li>
            <li>User-generated content campaigns</li>
            <li>Loyalty program integration</li>
          </ul>
          <div className="mt-6">
            <Link to="/get-started" className="glass-morphism text-white px-6 py-2 rounded-full hover:bg-white/10 transition font-bold inline-flex items-center" onClick={closeModal}>
              Engage Your Audience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Modal>

      <Modal id="about-us" title="About EngageX">
        <div className="space-y-4">
          <p>EngageX was founded in 2020 with a simple mission: to help businesses thrive in the digital world. Our team of social media experts combines creativity with data-driven strategies to deliver exceptional results.</p>
          <h4 className="text-xl font-semibold mt-4">Our team:</h4>
          <p>We're a diverse group of digital marketers, content creators, and analytics experts who are passionate about helping businesses grow. With backgrounds spanning from Fortune 500 companies to successful startups, we bring a wealth of experience to every client partnership.</p>
          <h4 className="text-xl font-semibold mt-4">Our values:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Results-driven approach</li>
            <li>Transparency and honesty</li>
            <li>Continuous innovation</li>
            <li>Client-centered service</li>
          </ul>
        </div>
      </Modal>

      <Modal id="success-stories" title="Success Stories">
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Local Café Chain</h4>
            <p className="text-sm text-blue-300">Social Media Management & Local Growth</p>
            <p className="mt-2">Increased foot traffic by 45% and online orders by 78% within 6 months through targeted local campaigns and an optimized social media presence.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Boutique Clothing Store</h4>
            <p className="text-sm text-blue-300">E-commerce & Social Media Integration</p>
            <p className="mt-2">Achieved a 120% increase in online sales and expanded customer base to 5 new cities through strategic social media marketing and influencer partnerships.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Professional Services Firm</h4>
            <p className="text-sm text-blue-300">Content Strategy & Lead Generation</p>
            <p className="mt-2">Generated 85 qualified leads per month (up from 20) and reduced cost per acquisition by 40% through targeted content marketing and social media campaigns.</p>
          </div>
          <div className="mt-6">
            <Link to="/get-started" className="glass-morphism text-white px-6 py-2 rounded-full hover:bg-white/10 transition font-bold inline-flex items-center" onClick={closeModal}>
              Create Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Modal>

      <Modal id="resources" title="Resources">
        <div className="space-y-4">
          <p>Explore our collection of resources designed to help you improve your social media presence and digital marketing strategy.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="glass-morphism p-4 rounded-lg">
              <h5 className="font-semibold">Social Media Audit Guide</h5>
              <p className="text-sm mt-1">Learn how to evaluate your current social media performance and identify opportunities for improvement.</p>
            </div>
            <div className="glass-morphism p-4 rounded-lg">
              <h5 className="font-semibold">Content Calendar Template</h5>
              <p className="text-sm mt-1">Plan your social media content effectively with our easy-to-use template.</p>
            </div>
            <div className="glass-morphism p-4 rounded-lg">
              <h5 className="font-semibold">Engagement Metrics Explained</h5>
              <p className="text-sm mt-1">Understand the key metrics that matter for measuring social media success.</p>
            </div>
            <div className="glass-morphism p-4 rounded-lg">
              <h5 className="font-semibold">Platform Selection Guide</h5>
              <p className="text-sm mt-1">Determine which social media platforms are right for your business goals.</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="glass-morphism text-white px-6 py-2 rounded-full hover:bg-white/10 transition font-bold inline-flex items-center">
              Download Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </Modal>

      {/* Add ChatBot component */}
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/learn-more" element={<LearnMore />} />
    </Routes>
  );
}

export default App;