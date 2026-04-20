/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  BookOpen, 
  Newspaper,
  FileText,
  Globe, 
  ChevronDown, 
  ArrowRight, 
  Users, 
  Cpu, 
  Zap, 
  Layers, 
  Star,
  Brain,
  Bot,
  Sparkles,
  Database,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Briefcase,
  Building2,
  Activity,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  AlertTriangle,
  Download,
  BarChart3,
  ArrowLeft,
  Loader2,
  CheckCircle,
  Clock,
  Calendar,
  Monitor,
  Video,
  Target,
  Play,
  Filter,
  CreditCard,
  Hash,
  ChevronRight,
  Plus,
  Send,
  Handshake,
  Image as ImageIcon,
  PlayCircle,
  HelpCircle,
  FileQuestion,
  Award,
  ShieldCheck,
  MessageSquare,
  Map,
} from 'lucide-react';

// --- Types ---

interface Course {
  id: number;
  title: string;
  description: string;
  city: string;
  type: 'Classroom' | 'Online';
  instructorImage: string;
  image: string;
  category: string;
}

interface Category {
  id: number;
  title: string;
  icon: React.ReactNode;
  count: number;
}

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  author?: string;
  content?: {
    sectionTitle: string;
    text: string;
  }[];
}

interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  content?: {
    sectionTitle: string;
    text: string;
  }[];
}

// --- Mock Data ---

const CATEGORIES: Category[] = [
  { id: 1, title: 'Artificial Intelligence', icon: <Cpu className="w-6 h-6" />, count: 24 },
  { id: 2, title: 'Data Science', icon: <Layers className="w-6 h-6" />, count: 18 },
  { id: 3, title: 'Web Development', icon: <Globe className="w-6 h-6" />, count: 32 },
  { id: 4, title: 'Digital Marketing', icon: <Zap className="w-6 h-6" />, count: 15 },
  { id: 5, title: 'Business Strategy', icon: <Users className="w-6 h-6" />, count: 12 },
  { id: 6, title: 'UI/UX Design', icon: <Star className="w-6 h-6" />, count: 21 },
  { id: 7, title: 'Cyber Security', icon: <BookOpen className="w-6 h-6" />, count: 10 },
  { id: 8, title: 'Cloud Computing', icon: <Cpu className="w-6 h-6" />, count: 14 },
];

const COURSES: Course[] = [
  {
    id: 1,
    title: 'Advanced Machine Learning',
    description: 'Master deep learning architectures and neural networks with hands-on projects.',
    city: 'Dubai',
    type: 'Classroom',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'Artificial Intelligence',
  },
  {
    id: 2,
    title: 'Full-Stack AI Integration',
    description: 'Learn how to deploy large language models into modern web applications.',
    city: 'Online',
    type: 'Online',
    instructorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    category: 'Artificial Intelligence',
  },
  {
    id: 3,
    title: 'Strategic Data Analytics',
    description: 'Transform raw data into actionable business insights using Python and SQL.',
    city: 'Riyadh',
    type: 'Classroom',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    category: 'Data Science',
  },
  {
    id: 4,
    title: 'Cyber Security Essentials',
    description: 'Protect your digital assets with advanced threat detection and mitigation.',
    city: 'Dubai',
    type: 'Classroom',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    category: 'Cyber Security',
  },
  {
    id: 5,
    title: 'UI/UX Design Masterclass',
    description: 'Create stunning user interfaces and seamless user experiences.',
    city: 'Online',
    type: 'Online',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    category: 'UI/UX Design',
  },
  {
    id: 6,
    title: 'Python for Data Science',
    description: 'Learn the fundamentals of Python programming for data analysis and visualization.',
    city: 'Dubai',
    type: 'Classroom',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800',
    category: 'Data Science',
  },
  {
    id: 7,
    title: 'Generative AI for Business',
    description: 'Explore the business applications of Generative AI and LLMs.',
    city: 'Abu Dhabi',
    type: 'Classroom',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'Artificial Intelligence',
  },
  {
    id: 8,
    title: 'Ethical Hacking Workshop',
    description: 'Learn offensive security techniques to better defend your systems.',
    city: 'Online',
    type: 'Online',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    category: 'Cyber Security',
  },
];

const ARTICLES: Article[] = [
  { 
    id: 1, 
    title: 'The Future of Generative AI in Education', 
    description: 'Exploring how LLMs are transforming classrooms and professional development globally.',
    date: 'Oct 12, 2023', 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600', 
    category: 'Tech Trends',
    author: 'Dr. Sarah Chen',
    content: [
      { sectionTitle: 'The Paradigm Shift', text: 'Generative AI is not just a tool; it is a fundamental shift in how we approach learning...' },
      { sectionTitle: 'Personalized Learning', text: 'One of the most significant benefits is the ability to provide one-on-one tutoring at scale...' }
    ]
  },
  { 
    id: 2, 
    title: 'Why Dubai is Becoming a Global AI Hub', 
    description: 'A deep dive into the strategic initiatives making the UAE a leader in the digital economy.',
    date: 'Nov 05, 2023', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600', 
    category: 'Global',
    author: 'Marcus Thorne',
    content: [
      { sectionTitle: 'Strategic Vision', text: 'The UAE has long recognized the importance of technology in diversifying its economy...' },
      { sectionTitle: 'Innovation Ecosystems', text: 'From Dubai Internet City to the Museum of the Future, the infrastructure is unparalleled...' }
    ]
  },
  { 
    id: 3, 
    title: '10 Skills Every Data Scientist Needs in 2024', 
    description: 'The definitive guide to staying competitive in the rapidly evolving field of data science.',
    date: 'Dec 01, 2023', 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600', 
    category: 'Career',
    author: 'Elena Rodriguez',
    content: [
      { sectionTitle: 'Beyond Python', text: 'While technical proficiency remains key, soft skills like data storytelling are increasingly vital...' },
      { sectionTitle: 'AI Collaboration', text: 'Data scientists must now learn to work alongside AI copilots to increase their productivity...' }
    ]
  },
];

const NEWS: News[] = [
  {
    id: 1,
    title: 'LPC-AI Opens New Excellence Center in Singapore',
    description: 'Expanding our global footprint to the heart of Asia with a state-of-the-art training facility.',
    date: 'Jan 15, 2024',
    image: 'https://images.unsplash.com/photo-1525625239513-9973284abe5c?auto=format&fit=crop&q=80&w=600',
    category: 'Expansion',
    content: [
      { sectionTitle: 'A Strategic Move', text: 'Singapore represents a vital hub for technology and finance, making it the perfect location for our next center...' },
      { sectionTitle: 'World-Class Facility', text: 'The new center features dedicated labs for robotics and AI hardware testing...' }
    ]
  },
  {
    id: 2,
    title: 'New Partnership with Global Tech Leaders',
    description: 'We are excited to announce a strategic collaboration to refine our industry-recognized certification paths.',
    date: 'Feb 10, 2024',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600',
    category: 'Partnership',
    content: [
      { sectionTitle: 'Driving Standards', text: 'This partnership ensures that our graduates are meeting the exact needs of modern employers...' }
    ]
  }
];

const RESOURCES_VIDEOS = [
  { id: 1, title: 'Introduction to AI Ethics', duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9759?auto=format&fit=crop&q=80&w=600', category: 'Ethics' },
  { id: 2, title: 'Data Visualization Best Practices', duration: '08:20', thumbnail: 'https://images.unsplash.com/photo-1551288049-bbda38a0617f?auto=format&fit=crop&q=80&w=600', category: 'Data' },
  { id: 3, title: 'Neural Networks Explained', duration: '15:10', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600', category: 'Tech' },
  { id: 4, title: 'Cloud Infrastructure for AI', duration: '10:30', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', category: 'Cloud' },
];

const RESOURCES_IMAGES = [
  { id: 1, title: 'AI Ecosystem Map', url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600', category: 'Infographic' },
  { id: 2, title: 'Deep Learning Layers', url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600', category: 'diagram' },
  { id: 3, title: 'Data Science Workflow', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', category: 'Process' },
];

const RESOURCES_FAQS = [
  { id: 1, question: 'What prerequisites are needed for AI courses?', answer: 'Most introductory courses require basic Python knowledge and an understanding of linear algebra. Advanced courses typically require experience with machine learning frameworks like PyTorch or TensorFlow.' },
  { id: 2, question: 'Do you offer recognized certifications?', answer: 'Yes, all our courses culminate in an LPC-AI industry-recognized certificate, validated by our network of global tech partners.' },
  { id: 3, question: 'Can I switch between classroom and online mid-course?', answer: 'Subject to availability and course structure, we offer hybrid flexibility. Contact our support team for specific course transitions.' },
  { id: 4, question: 'What is the "Use Case Finder"?', answer: 'It is a proprietary tool that helps professionals identify the most high-impact AI implementations for their specific industry and role.' },
];

const PARTNERS = [
  {
    id: 1,
    name: "TechNova Solutions",
    logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200",
    description: "Leading providers of integrated cloud solutions and strategic digital transformation services across the EMEA region."
  },
  {
    id: 2,
    name: "Quantum Logic",
    logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699952e?auto=format&fit=crop&q=80&w=200",
    description: "Specializing in advanced algorithmic training and predictive modeling for the financial services sector."
  },
  {
    id: 3,
    name: "Apex Global Training",
    logo: "https://images.unsplash.com/photo-1614850523598-849b0f2d818a?auto=format&fit=crop&q=80&w=200",
    description: "A worldwide network of professional certification bodies dedicated to operational excellence and administrative mastery."
  },
  {
    id: 4,
    name: "CloudBridge Systems",
    logo: "https://images.unsplash.com/photo-1614851012115-b5ae15291ba4?auto=format&fit=crop&q=80&w=200",
    description: "Expert consultants in multi-cloud infrastructure and enterprise-level AI implementation strategies."
  },
  {
    id: 5,
    name: "DataSync Institute",
    logo: "https://images.unsplash.com/photo-1614851231968-261998593a82?auto=format&fit=crop&q=80&w=200",
    description: "Pioneering research in automated data cleaning and real-time processing architectures for global industries."
  },
  {
    id: 6,
    name: "Visionary Tech Partners",
    logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200",
    description: "Strategic investment and development partners focused on the next wave of generative AI applications."
  }
];

const INSTRUCTOR_TOPICS = [
  'Human Resources', 'Leadership & Management', 'Artificial Intelligence', 'Data Science',
  'Marketing & Digital Strategy', 'Healthcare Administration', 'Project Management', 'Finance & Accounting',
  'IT & Cybersecurity', 'Customer Service', 'Soft Skills', 'Strategic Planning', 'Supply Chain',
  'Public Relations', 'Legal & Compliance', 'Digital Transformation'
];

const INSTRUCTOR_BENEFITS = [
  { title: "Flexible Schedule", desc: "Choose your own teaching hours and balance with your professional life.", icon: <Clock className="w-5 h-5" /> },
  { title: "Competitive Pay", desc: "Industry-leading rates for specialized expertise and high-impact training.", icon: <CreditCard className="w-5 h-5" /> },
  { title: "Global Reach", desc: "Teach diverse cohorts from across the globe, from Dubai to London.", icon: <Globe className="w-5 h-5" /> },
  { title: "Expert Support", desc: "Access to our curriculum designers and technical support for your sessions.", icon: <BookOpen className="w-5 h-5" /> }
];

const IN_HOUSE_BENEFITS = [
  { title: "Save Time & Travel Costs", desc: "Eliminate travel and accommodation expenses by hosting training directly at your premises or choice of venue.", icon: <Clock className="w-5 h-5" /> },
  { title: "Customized Content", desc: "We tailor every module to address your specific business challenges, industry jargon, and internal processes.", icon: <Target className="w-5 h-5" /> },
  { title: "Team Building", desc: "Foster collaboration and shared understanding as your team learns and solves problems together in a unified environment.", icon: <Users className="w-5 h-5" /> },
  { title: "Consistent Learning", desc: "Ensure every member of your department receives the same high-standard knowledge simultaneously.", icon: <Layers className="w-5 h-5" /> },
  { title: "Flexible Scheduling", desc: "We work around your production cycles and busy periods to minimize operational disruption.", icon: <Calendar className="w-5 h-5" /> },
  { title: "Enhanced Privacy", desc: "Discuss sensitive company data and strategic projects freely within a closed-door, confidential setting.", icon: <Zap className="w-5 h-5" /> }
];

const IN_HOUSE_TESTIMONIALS = [
  {
    quote: "The instructor tailored the AI strategy modules to our specific supply chain hurdles. The ROI was visible within weeks of implementation.",
    author: "Sarah Jenkins",
    role: "Head of Operations",
    company: "Global Logistics Corp"
  },
  {
    quote: "Hosting the training in-house allowed our team to speak freely about internal datasets. Truly a transformational week for our engineers.",
    author: "Dr. Marcus Chen",
    role: "CTO",
    company: "TechNexus Systems"
  }
];

// --- Components ---

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string, idOrTitle?: number | string) => void, currentPage: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTopDropdown, setActiveTopDropdown] = useState<string | null>(null);

  const topMenuItems = [
    { name: 'About Us', type: 'link' },
    { 
      name: 'Services', 
      type: 'dropdown',
      items: [
        { name: 'In House Training', icon: <Building2 className="w-3 h-3" /> },
        { name: 'Consulting', icon: <Briefcase className="w-3 h-3" /> }
      ]
    },
    {
       name: 'Our Network',
       type: 'dropdown',
       items: [
         { name: 'Our Partners', icon: <Users className="w-3 h-3" /> },
         { name: 'Become an Instructor', icon: <Plus className="w-3 h-3" /> },
         { name: 'Our Instructors', icon: <Users className="w-3 h-3" /> }
       ]
    },
    { name: 'Contact', type: 'link' }
  ];

  const menuItems = [
    { name: 'Home', type: 'link' },
    { 
      name: 'Classroom Courses', 
      type: 'dropdown', 
      items: CATEGORIES.map(cat => ({ name: cat.title, icon: cat.icon, desc: `Classroom training` }))
    },
    { 
      name: 'Online Courses', 
      type: 'dropdown', 
      items: CATEGORIES.map(cat => ({ name: cat.title, icon: cat.icon, desc: `Remote learning` }))
    },
    {
      name: 'Locations',
      type: 'dropdown',
      items: [
        { name: 'Dubai', icon: <MapPin className="w-4 h-4" />, desc: 'Innovation Hub' },
        { name: 'London', icon: <MapPin className="w-4 h-4" />, desc: 'Financial Center' },
        { name: 'Barcelona', icon: <MapPin className="w-4 h-4" />, desc: 'Tech & Culture' },
        { name: 'Paris', icon: <MapPin className="w-4 h-4" />, desc: 'Strategic Growth' },
        { name: 'Singapore', icon: <MapPin className="w-4 h-4" />, desc: 'Global Logistics' }
      ]
    },
    { 
      name: 'Knowledge Centre', 
      type: 'dropdown', 
      items: [
        { name: 'Articles', icon: <BookOpen className="w-4 h-4" />, desc: 'Insights & ideas' },
        { name: 'News', icon: <Newspaper className="w-4 h-4" />, desc: 'Latest updates' },
        { name: 'Resources', icon: <FileText className="w-4 h-4" />, desc: 'Guides & tools' }
      ]
    },
    { name: 'Use Case Finder', type: 'cta' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5">
      {/* Top Row: Info & Nav Items */}
      <div className="hidden md:flex justify-between items-center px-6 md:px-12 py-2 bg-black text-white text-xs font-medium tracking-[0.01em] uppercase">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2 border-r border-white/10 pr-6"><Phone className="w-3 h-3 text-brand-accent" /> +971 4 123 4567</span>
          <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-brand-accent" /> info@lpc-ai.com</span>
        </div>
        
        <div className="flex items-center gap-8">
          {/* Top Menu Links/Dropdowns */}
          <div className="flex gap-6">
            {topMenuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.type === 'dropdown' && setActiveTopDropdown(item.name)}
                onMouseLeave={() => setActiveTopDropdown(null)}
              >
                <button 
                  onClick={() => item.type === 'link' && onNavigate(item.name.toLowerCase().replace(/\s+/g, '-'))}
                  className="hover:text-brand-accent transition-colors flex items-center gap-1 py-1"
                >
                  {item.name}
                  {item.type === 'dropdown' && <ChevronDown className="w-3 h-3" />}
                </button>

                <AnimatePresence>
                  {item.type === 'dropdown' && activeTopDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full right-0 mt-1 bg-black border border-white/10 shadow-xl rounded-lg p-2 z-[60] w-48 flex flex-col gap-1"
                    >
                      {item.items?.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => {
                            onNavigate(sub.name.toLowerCase().replace(/\s+/g, '-'));
                            setActiveTopDropdown(null);
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md transition-all text-left group/sub"
                        >
                          <span className="text-white group-hover/sub:text-brand-accent">{sub.icon}</span>
                          <span className="text-[10px] text-white/70 group-hover/sub:text-white">{sub.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex gap-4 border-l border-white/10 pl-8">
            <Facebook className="w-3 h-3 cursor-pointer hover:text-brand-accent transition-colors" />
            <Twitter className="w-3 h-3 cursor-pointer hover:text-brand-accent transition-colors" />
            <Linkedin className="w-3 h-3 cursor-pointer hover:text-brand-accent transition-colors" />
            <Instagram className="w-3 h-3 cursor-pointer hover:text-brand-accent transition-colors" />
          </div>
        </div>
      </div>

      {/* Bottom Row: Logo & Navigation */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-brand-accent rounded-sm rotate-45" />
          </div>
          <span className="text-2xl font-semibold tracking-tighter">LPC-AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.filter(i => i.type !== 'cta').map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => {
                  if (item.type === 'link') {
                    onNavigate(item.name === 'Home' ? 'home' : item.name.toLowerCase().replace(/\s+/g, '-'));
                  } else {
                    // Navigate to the summary page for the dropdown if it's Courses
                    if (item.name.includes('Courses')) {
                      onNavigate(item.name.toLowerCase().replace(/\s+/g, '-'));
                    }
                  }
                }}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors relative group py-2 ${
                  (currentPage === 'home' && item.name === 'Home') || (currentPage === item.name.toLowerCase().replace(/\s+/g, '-'))
                  ? 'text-brand-accent' 
                  : 'hover:text-brand-accent'
                }`}
              >
                {item.name}
                {item.type === 'dropdown' && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                {item.type === 'link' && (
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all ${
                    (currentPage === 'home' && item.name === 'Home') || (currentPage === item.name.toLowerCase().replace(/\s+/g, '-'))
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                  }`} />
                )}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.type === 'dropdown' && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-2 bg-white border border-black/5 shadow-2xl rounded-2xl p-4 z-50 ${
                      item.name.includes('Courses') || item.name === 'Locations' || item.name === 'Knowledge Centre' ? 'w-[500px] grid grid-cols-2 gap-2' : 'w-64 flex flex-col gap-1'
                    }`}
                  >
                    {item.items?.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => {
                          if (item.name === 'Locations') {
                            onNavigate('city', subItem.name); 
                          } else if (item.name === 'Knowledge Centre') {
                            onNavigate(subItem.name.toLowerCase());
                          } else if (item.name === 'Our Network' || item.name === 'Services') {
                            onNavigate(subItem.name.toLowerCase().replace(/\s+/g, '-'));
                          } else {
                            onNavigate('category', subItem.name);
                          }
                          setActiveDropdown(null);
                          setActiveTopDropdown(null);
                        }}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-muted transition-all text-left group"
                      >
                        <div className="w-10 h-10 bg-brand-muted rounded-lg flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-colors shrink-0">
                          {subItem.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-black">{subItem.name}</div>
                          <div className="text-[10px] text-gray-400 font-medium">{subItem.desc}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button 
            onClick={() => onNavigate('use-case-finder')}
            className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.01em] hover:bg-brand-accent hover:text-black transition-all shadow-xl hover:shadow-brand-accent/20"
          >
            Use Case Finder
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/10 overflow-hidden md:hidden flex flex-col shadow-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {[...menuItems.filter(i => i.type !== 'cta'), ...topMenuItems].map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <button 
                    onClick={() => {
                      if (item.type === 'link') {
                        onNavigate(item.name === 'Home' ? 'home' : item.name.toLowerCase().replace(/\s+/g, '-'));
                        setIsOpen(false);
                      } else {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                    className="text-lg font-bold flex justify-between items-center"
                  >
                    {item.name}
                    {item.type === 'dropdown' && <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </button>
                  
                  {item.type === 'dropdown' && activeDropdown === item.name && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-brand-accent/20 mt-2">
                      {item.items?.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => {
                            if (item.name === 'Locations') {
                              onNavigate('city', subItem.name);
                            } else if (item.name === 'Knowledge Centre') {
                              onNavigate(subItem.name.toLowerCase());
                            } else if (item.name === 'Classroom Courses' || item.name === 'Online Courses') {
                              onNavigate('category', subItem.name);
                            } else {
                              onNavigate(subItem.name.toLowerCase().replace(/\s+/g, '-'));
                            }
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="text-sm font-semibold text-gray-600 py-1 text-left"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={() => {
                  onNavigate('use-case-finder');
                  setIsOpen(false);
                }}
                className="bg-black text-white w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs mt-4 shadow-xl active:scale-95 transition-all"
              >
                Use Case Finder
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
  ];

  const iconSets = [
    [<Cpu key="cpu" className="w-6 h-6" />, <Zap key="zap" className="w-6 h-6" />, <Layers key="layers" className="w-6 h-6" />],
    [<Globe key="globe" className="w-6 h-6" />, <BookOpen key="book" className="w-6 h-6" />, <Star key="star" className="w-6 h-6" />],
    [<BarChart3 key="chart" className="w-6 h-6" />, <Users key="users" className="w-6 h-6" />, <GraduationCap key="grad" className="w-6 h-6" />]
  ];

  const heroTexts = [
    { title: "UNLEASH", subtitle: "YOUR POTENTIAL", desc: "Empowering professionals with cutting-edge AI skills and industry-recognized certifications across the globe." },
    { title: "GLOBAL", subtitle: "TOP SKILLS", desc: "Gain recognized qualifications from London to Dubai, mastering the skills the future world demands." },
    { title: "FUTURE", subtitle: "READY TEAMS", desc: "Specialized corporate training programs designed to transform your organization's digital capability." }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <AIBackground />
      {/* Grid Line Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-muted/50 -z-20 skew-x-12 translate-x-1/4" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${heroIndex}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block px-4 py-1.5 bg-brand-accent/20 text-black text-xs font-medium rounded-full mb-6 tracking-[0.01em]">
                  Future of Learning
                </span>
                <h1 className="text-6xl md:text-8xl font-semibold leading-[1.3] mb-8">
                  {heroTexts[heroIndex].title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-brand-accent">
                    {heroTexts[heroIndex].subtitle}
                  </span>
                </h1>
                <p className="text-xl text-[#1e293b] max-w-lg mb-10 leading-[1.6]">
                  {heroTexts[heroIndex].desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => onNavigate('classroom-courses')} className="px-10 py-4 bg-black text-white rounded-2xl font-medium tracking-[0.01em] text-sm hover:bg-brand-accent hover:text-black transition-all shadow-xl">
                    Explore Courses
                  </button>
                  <button onClick={() => onNavigate('contact')} className="px-10 py-4 bg-brand-muted text-[#1e293b] rounded-2xl font-medium tracking-[0.01em] text-sm hover:bg-white transition-all border border-black/5">
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative hidden md:flex items-center justify-center w-full">
            {/* Main Animated Circle Container */}
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              
              {/* Rotating Icons Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`icons-${heroIndex}`}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Floating Icons around the circle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-black/5">
                    {iconSets[heroIndex][0]}
                  </div>
                  <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-black/5">
                    {iconSets[heroIndex][1]}
                  </div>
                  <div className="absolute bottom-1/4 -right-6 w-12 h-12 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-black/5">
                    {iconSets[heroIndex][2]}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Circular Image with 180-degree rotation effect */}
              <div className="relative w-full h-full rounded-full border-2 border-dashed border-black/10 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-${heroIndex}`}
                    initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -180, scale: 0.8 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white relative"
                  >
                    <img 
                      src={heroImages[heroIndex]} 
                      alt="Hero" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-brand-accent/20 rounded-full animate-[spin_15s_linear_infinite]" />
              <div className="absolute inset-12 border border-black/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            </div>

            {/* Floating Stat Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass-card p-6 rounded-2xl shadow-2xl z-20"
            >
              <div className="text-4xl font-display font-bold text-black">98%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Success Rate</div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Search Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white p-4 md:p-8 rounded-[2rem] shadow-2xl border border-black/5 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-2 relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-4">Course Name</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="What do you want to learn?" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none font-medium"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-4">Category</label>
              <select className="w-full px-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none font-medium appearance-none cursor-pointer">
                <option>All Categories</option>
                <option>AI & ML</option>
                <option>Data Science</option>
                <option>Design</option>
              </select>
              <ChevronDown className="absolute right-4 bottom-5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-4">Type</label>
              <select className="w-full px-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none font-medium appearance-none cursor-pointer">
                <option>All Types</option>
                <option>Classroom</option>
                <option>Online</option>
              </select>
              <ChevronDown className="absolute right-4 bottom-5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-4">City</label>
              <select className="w-full px-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-accent transition-all outline-none font-medium appearance-none cursor-pointer">
                <option>All Cities</option>
                <option>Dubai</option>
                <option>Paris</option>
                <option>Singapore</option>
              </select>
              <ChevronDown className="absolute right-4 bottom-5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

              <div className="flex items-end">
                <button 
                  onClick={() => onNavigate('classroom-courses')}
                  className="w-full bg-black text-white py-4 rounded-2xl font-medium tracking-[0.01em] text-sm hover:bg-brand-accent hover:text-black transition-all flex items-center justify-center gap-2 group"
                >
                  Search <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhoWeAre = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section id="about-us" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            {/* 3D-like Shape Composition */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[20px] border-brand-accent/10 rounded-[4rem]"
              />
              <motion.div 
                animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-10 bg-black rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" 
                  alt="Who we are" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-full flex items-center justify-center shadow-xl">
                <Users className="w-12 h-12 text-black" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-6 uppercase">Who We Are</h2>
            <h3 className="text-5xl font-semibold leading-[1.3] mb-8">
              Pioneering the AI <br />
              Education Frontier
            </h3>
            <p className="text-lg text-[#1e293b] mb-8 leading-[1.6]">
              LPC-AI is more than just a training center. We are a global community of innovators, educators, and industry leaders dedicated to bridging the gap between current skills and future demands.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-3xl font-semibold mb-1">15+</div>
                <div className="text-xs font-medium tracking-[0.01em] text-[#1e293b]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-semibold mb-1">50k+</div>
                <div className="text-xs font-medium tracking-[0.01em] text-[#1e293b]">Global Students</div>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('about-us')}
              className="flex items-center gap-3 font-medium text-sm tracking-[0.01em] group text-[#1e293b]"
            >
              Learn more about our mission 
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Categories = ({ onSelectCategory }: { onSelectCategory: (title: string) => void }) => {
  return (
    <section id="categories" className="py-24 px-6 bg-brand-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-4 uppercase">Explore</h2>
            <h3 className="text-5xl font-semibold">Popular Categories</h3>
          </div>
          <p className="text-[#1e293b] max-w-xs font-medium leading-[1.6]">
            Discover specialized paths designed for your career growth and technical mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all cursor-pointer group border border-transparent hover:border-brand-accent/20"
              onClick={() => onSelectCategory(cat.title)}
            >
              <div className="w-14 h-14 bg-brand-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-black transition-colors">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{cat.title}</h4>
              <p className="text-sm text-gray-400 font-medium">{cat.count} Courses Available</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HighlightedCourses = ({ onSelectCourse }: { onSelectCourse: (id: number) => void }) => {
  return (
    <section id="courses" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-4 uppercase">Featured</h2>
          <h3 className="text-5xl font-semibold">Highlighted Courses</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onSelectCourse(course.id)}
            >
              <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden mb-8">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {course.type}
                  </span>
                  <span className="px-4 py-1.5 bg-brand-accent rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {course.city}
                  </span>
                </div>
              </div>
              
              <div className="px-4">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors">{course.title}</h4>
                <p className="text-gray-500 mb-8 line-clamp-2 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <div className="flex items-center gap-3">
                    <img src={course.instructorImage} alt="Instructor" className="w-10 h-10 rounded-full border-2 border-brand-accent" referrerPolicy="no-referrer" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Expert Instructor</span>
                  </div>
                  <button className="text-sm font-bold flex items-center gap-2 group/btn">
                    Know More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificateVerification = () => {
  const [certId, setCertId] = useState('');
  const [status, setStatus] = useState<'idle' | 'verifying' | 'found' | 'not-found'>('idle');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId) return;
    setStatus('verifying');
    setTimeout(() => {
      // Mock verification logic
      if (certId.toUpperCase() === 'LPC-AI-2024') setStatus('found');
      else setStatus('not-found');
    }, 1500);
  };

  return (
    <section className="py-24 px-6 bg-brand-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Certificate Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group lg:order-1 order-2"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=800"
                alt="Certificate of Achievement"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative Badges */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-full flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500 border-4 border-white z-20">
              <Award className="w-16 h-16 text-black" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-black rounded-[2rem] flex items-center justify-center shadow-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500 border-4 border-white z-20">
              <ShieldCheck className="w-12 h-12 text-brand-accent" />
            </div>
          </motion.div>

          {/* Verification Form */}
          <div className="lg:order-2 order-1">
            <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-6 uppercase">Validation</h2>
            <h3 className="text-5xl font-semibold text-black mb-8 leading-[1.3]">Verify Your <br />Expert Credentials</h3>
            <p className="text-lg text-[#1e293b]/70 mb-10 leading-[1.6]">
              Every LPC-AI certificate is backed by a unique identifier. Enter your Certificate ID below to instantly verify the authenticity of your achievement and its associated skills.
            </p>

            <form onSubmit={handleVerify} className="space-y-6">
              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40 mb-2 block ml-4">Certificate ID</label>
                <div className="relative">
                  <FileText className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-accent transition-colors" />
                  <input 
                    type="text"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="e.g., LPC-AI-2024"
                    className="w-full pl-16 pr-6 py-5 bg-white rounded-2xl border-2 border-transparent focus:border-brand-accent focus:ring-0 outline-none transition-all font-medium text-black shadow-sm"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status === 'verifying'}
                className="w-full bg-black text-white py-5 rounded-2xl font-medium tracking-[0.01em] text-sm hover:bg-brand-accent hover:text-black transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50 group"
              >
                {status === 'verifying' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Verifying...
                  </>
                ) : (
                  <>
                    Verify Certificate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <AnimatePresence mode="wait">
              {status === 'found' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-green-900">Certificate Verified</h5>
                    <p className="text-xs text-green-700">This certificate was issued to a verified student on Oct 12, 2024.</p>
                  </div>
                </motion.div>
              )}
              {status === 'not-found' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-red-900">Invalid ID</h5>
                    <p className="text-xs text-red-700">We couldn't matching any records for this ID. Please check the spelling.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Articles = ({ onNavigate, onSelectArticle }: { onNavigate: (page: string) => void, onSelectArticle: (id: number) => void }) => {
  return (
    <section id="articles" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-4 uppercase">Knowledge Hub</h2>
            <h3 className="text-5xl md:text-6xl font-semibold text-black mb-6">Expert Insights & <br />Industry Trends</h3>
            <p className="text-lg text-[#1e293b]/70 leading-relaxed">
              Explore the latest thinking on AI, digital transformation, and the future of work from our global team of experts.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('articles')}
            className="px-8 py-3 bg-white border border-black/10 rounded-full text-sm font-medium tracking-[0.01em] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
          >
            Explore All Insights
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group cursor-pointer"
            onClick={() => onSelectArticle(ARTICLES[0].id)}
          >
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={ARTICLES[0].image} 
                alt={ARTICLES[0].title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8">
                <span className="px-6 py-2 bg-brand-accent text-white text-xs font-bold uppercase rounded-full shadow-lg">
                  {ARTICLES[0].category}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs font-medium text-brand-accent mb-4 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {ARTICLES[0].date}</span>
                <span className="w-1 h-1 bg-black/20 rounded-full" />
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {ARTICLES[0].author}</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-semibold leading-tight text-[#1e293b] group-hover:text-brand-accent transition-colors mb-6">
                {ARTICLES[0].title}
              </h4>
              <p className="text-lg text-[#1e293b]/70 line-clamp-2 leading-relaxed mb-8">
                {ARTICLES[0].description}
              </p>
              <div className="flex items-center gap-2 text-base font-semibold text-black group-hover:gap-4 transition-all">
                Read Full Case Study <ArrowRight className="w-5 h-5 text-brand-accent" />
              </div>
            </div>
          </motion.div>

          {/* Secondary Articles List */}
          <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12">
            {ARTICLES.slice(1, 3).map((article, idx) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex flex-col sm:flex-row gap-6 md:flex-col lg:flex-row items-start"
                onClick={() => onSelectArticle(article.id)}
              >
                <div className="relative w-full sm:w-48 md:w-full lg:w-48 aspect-square rounded-[2rem] overflow-hidden shadow-md group-hover:shadow-lg transition-all shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 sm:hidden lg:flex">
                     <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-black text-[9px] font-bold uppercase rounded-full">
                       {article.category}
                     </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-medium text-brand-accent mb-3 uppercase tracking-widest">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-black/20 rounded-full" />
                    <span>{article.author}</span>
                  </div>
                  <h4 className="text-xl font-semibold leading-snug text-[#1e293b] group-hover:text-brand-accent transition-colors mb-3">
                    {article.title}
                  </h4>
                  <p className="text-sm text-[#1e293b]/70 line-clamp-2 leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-black group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4 text-brand-accent" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Newsletter Mini-Card */}
            <div className="mt-auto bg-black text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <h5 className="text-lg font-semibold mb-2 relative z-10">Stay Informed</h5>
               <p className="text-white/60 text-xs mb-6 relative z-10">Get the latest AI insights delivered to your inbox.</p>
               <div className="relative z-10 flex gap-2">
                 <input type="email" placeholder="Email" className="flex-1 bg-white/10 rounded-xl px-4 py-2 text-xs outline-none focus:ring-1 focus:ring-brand-accent border border-white/5" />
                 <button className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-black hover:bg-white transition-colors">
                   <Zap className="w-4 h-4" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <div 
              className="flex items-center gap-2 mb-8 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-brand-accent rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-semibold tracking-tighter">LPC-AI</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">
              Leading the way in professional AI education and certification. Empowering the next generation of digital leaders.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-medium uppercase tracking-[0.01em] text-xs mb-8 text-[#1e293b]">Quick Links</h5>
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">All Courses</button></li>
              <li><button onClick={() => onNavigate('about-us')} className="hover:text-black transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('become-an-instructor')} className="hover:text-black transition-colors">Our Instructors</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-black transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium uppercase tracking-[0.01em] text-xs mb-8 text-[#1e293b]">Support</h5>
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
              <li><button className="hover:text-black transition-colors">Help Center</button></li>
              <li><button className="hover:text-black transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-black transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-black transition-colors text-left uppercase">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium uppercase tracking-[0.01em] text-xs mb-8 text-[#1e293b]">Newsletter</h5>
            <p className="text-sm text-gray-500 mb-6">Stay updated with the latest AI trends and courses.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-brand-muted px-4 py-3 rounded-xl text-sm w-full outline-none focus:ring-1 focus:ring-brand-accent"
              />
              <button className="bg-black text-white px-4 py-3 rounded-xl hover:bg-brand-accent hover:text-black transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
          © 2024 LPC-AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const AIAssistant = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const messages = [
    "Need help finding a course?",
    "Check out our new AI modules!",
    "Dubai classroom seats are filling fast!",
    "Want to learn about Generative AI?",
    "Join our global community today."
  ];

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const cycle = () => {
      // 1. Show the message
      setIsVisible(true);
      
      // 2. Keep it visible for 3 seconds
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        
        // 3. Keep it hidden for 6 seconds before showing the next one
        timeoutId = setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % messages.length);
          cycle();
        }, 6000);
      }, 3000);
    };

    // Start the first cycle after a short initial delay
    const initialDelay = setTimeout(cycle, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialDelay);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-6 pointer-events-none">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={messageIndex}
            onClick={() => onNavigate('classroom-courses')}
            initial={{ opacity: 0, y: 40, scale: 0.7, filter: "blur(15px)", rotate: -5 }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", rotate: 0 }}
            exit={{ opacity: 0, y: -30, scale: 0.8, filter: "blur(10px)", rotate: 5 }}
            transition={{ 
              duration: 1.5, // Slower appearance as requested
              ease: [0.16, 1, 0.3, 1], // Smooth exponential out
            }}
            className="relative bg-white/95 backdrop-blur-2xl px-10 py-6 rounded-[2.5rem] rounded-br-none shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-black/5 text-base font-bold text-black pointer-events-auto flex items-center gap-4 cursor-pointer hover:bg-brand-muted transition-colors active:scale-95"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-accent rounded-full animate-ping absolute" />
              <div className="w-3 h-3 bg-brand-accent rounded-full relative" />
            </div>
            {messages[messageIndex]}
            {/* Elegant Bubble Tail */}
            <div className="absolute -bottom-2 right-0 w-8 h-8 bg-white/95 rotate-45 -z-10" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => onNavigate('use-case-finder')}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-2xl pointer-events-auto group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-full animate-[spin_8s_linear_infinite]" />
        <Cpu className="w-10 h-10 text-brand-accent group-hover:scale-110 transition-transform duration-500" />
      </motion.button>
    </div>
  );
};

const CitySlider = ({ onSelectCourse }: { onSelectCourse: (id: number) => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cities = [
    { 
      name: 'Dubai', 
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1920', 
      country: 'UAE', 
      desc: 'The global hub for AI innovation and futuristic architecture.',
      popularCourses: ['Robotics', 'Green Tech', 'Cloud Computing']
    },
    { 
      name: 'Abu Dhabi', 
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1920', 
      country: 'UAE', 
      desc: 'A cultural and technological powerhouse in the heart of the Gulf.',
      popularCourses: ['AI Ethics', 'Cybersecurity', 'Smart Cities']
    },
    { 
      name: 'Riyadh', 
      image: 'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?auto=format&fit=crop&q=80&w=1920', 
      country: 'Saudi Arabia', 
      desc: 'The rapidly growing capital leading the Vision 2030 transformation.',
      popularCourses: ['FinTech', 'Data Analytics', 'E-commerce']
    },
    { 
      name: 'Doha', 
      image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&q=80&w=1920', 
      country: 'Qatar', 
      desc: 'A modern metropolis blending tradition with cutting-edge technology.',
      popularCourses: ['Digital Media', 'IoT', 'Machine Learning']
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cities.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[650px] bg-black overflow-hidden flex items-center">
      {/* Background with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={cities[activeIndex].name}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={cities[activeIndex].image} 
              alt={cities[activeIndex].name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              key={`meta-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-px bg-brand-accent" />
              <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs">
                {cities[activeIndex].country}
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-7xl md:text-[8rem] font-display font-extrabold text-white leading-none tracking-tighter mb-4">
                  {cities[activeIndex].name}
                </h3>
                <p className="text-lg text-white/60 max-w-md leading-relaxed mb-8">
                  {cities[activeIndex].desc}
                </p>

                {/* Popular Courses Cards */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {cities[activeIndex].popularCourses.map((course, i) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl cursor-pointer hover:bg-white/20 transition-colors"
                      onClick={() => {
                        const foundCourse = COURSES.find(c => c.title.toLowerCase().includes(course.toLowerCase()) || course.toLowerCase().includes(c.title.toLowerCase()));
                        if (foundCourse) onSelectCourse(foundCourse.id);
                        else onSelectCourse(COURSES[0].id); // Fallback
                      }}
                    >
                      <span className="text-white text-xs font-bold uppercase tracking-widest">{course}</span>
                    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={() => onSelectCourse(COURSES[0].id)}
                  className="group flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm"
                >
                  Explore Courses 
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black group-hover:border-brand-accent transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="flex flex-col gap-4">
              {cities.map((city, idx) => (
                <button
                  key={city.name}
                  onClick={() => setActiveIndex(idx)}
                  className="group flex items-center gap-6 text-left"
                >
                  <div className="relative w-24 h-16 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-brand-accent/50 transition-all">
                    <img src={city.image} className={`w-full h-full object-cover transition-all duration-500 ${activeIndex === idx ? 'scale-110' : 'grayscale opacity-40'}`} referrerPolicy="no-referrer" />
                    {activeIndex === idx && (
                      <motion.div 
                        layoutId="active-border"
                        className="absolute inset-0 border-2 border-brand-accent z-10" 
                      />
                    )}
                  </div>
                  <div className={`transition-all duration-300 ${activeIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="text-white font-bold text-sm block">{city.name}</span>
                    <span className="text-brand-accent text-[10px] uppercase font-bold tracking-widest">0{idx + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div 
          key={activeIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-brand-accent"
        />
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
          GLOBAL CAMPUS NETWORK
        </span>
      </div>
    </section>
  );
};

const AIReadinessCheck = ({ onNavigate, onSelectCourse }: { onNavigate: (page: string) => void, onSelectCourse: (id: number) => void }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'size',
      question: 'What is your company size?',
      options: [
        { label: 'Startup (1-50)', value: 1 },
        { label: 'SME (51-250)', value: 2 },
        { label: 'Enterprise (250+)', value: 3 }
      ]
    },
    {
      id: 'industry',
      question: 'Which industry do you operate in?',
      options: [
        { label: 'Technology / Software', value: 3 },
        { label: 'Finance / Banking', value: 2 },
        { label: 'Healthcare', value: 2 },
        { label: 'Manufacturing', value: 1 },
        { label: 'Retail / E-commerce', value: 2 }
      ]
    },
    {
      id: 'tools',
      question: 'Current digital tools usage?',
      options: [
        { label: 'Traditional (Email, Office)', value: 1 },
        { label: 'Modern (Cloud, CRM, Slack)', value: 2 },
        { label: 'Advanced (Automated Workflows)', value: 3 }
      ]
    },
    {
      id: 'data',
      question: 'Data usage level?',
      options: [
        { label: 'Basic (Manual reporting)', value: 1 },
        { label: 'Intermediate (Dashboards)', value: 2 },
        { label: 'Advanced (Predictive models)', value: 3 }
      ]
    },
    {
      id: 'skills',
      question: 'Employee AI skill level?',
      options: [
        { label: 'Beginner (Awareness only)', value: 1 },
        { label: 'Intermediate (Some users)', value: 2 },
        { label: 'Advanced (Internal AI team)', value: 3 }
      ]
    },
    {
      id: 'automation',
      question: 'Workflow automation level?',
      options: [
        { label: 'Mostly manual', value: 1 },
        { label: 'Partially automated', value: 2 },
        { label: 'Highly automated', value: 3 }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateScore = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 2000);
  };

  const calculateScore = () => {
    const total = (Object.values(answers) as number[]).reduce((a, b) => a + b, 0);
    const max = questions.length * 3;
    const percentage = (total / max) * 100;
    if (percentage < 40) return { level: 'Low', color: 'text-red-500', bg: 'bg-red-500', score: percentage };
    if (percentage < 75) return { level: 'Medium', color: 'text-yellow-500', bg: 'bg-yellow-500', score: percentage };
    return { level: 'High', color: 'text-green-500', bg: 'bg-green-500', score: percentage };
  };

  const scoreData = calculateScore();

  if (!isStarted) {
    return (
      <section className="py-24 px-6 bg-white text-black overflow-hidden relative border-t border-black/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] -z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-6 uppercase">Assessment Tool</h2>
          <h3 className="text-5xl md:text-6xl font-semibold mb-8 leading-[1.3]">
            Is Your Business <br /> Ready for AI?
          </h3>
          <p className="text-xl text-[#1e293b] mb-12 max-w-2xl mx-auto leading-[1.6]">
            Take our 2-minute readiness check to evaluate your organization's infrastructure, skills, and data maturity.
          </p>
          <button 
            onClick={() => setIsStarted(true)}
            className="bg-black text-white px-10 py-5 rounded-full font-medium text-lg tracking-[0.01em] hover:bg-brand-accent hover:text-black transition-all shadow-xl"
          >
            Start Readiness Check
          </button>
        </div>
      </section>
    );
  }

  if (isProcessing) {
    return (
      <div className="py-32 flex flex-col items-center justify-center bg-white">
        <Loader2 className="w-16 h-16 text-brand-accent animate-spin mb-6" />
        <h4 className="text-2xl font-bold">Analyzing your responses...</h4>
        <p className="text-gray-500 mt-2">Our AI is generating your custom roadmap.</p>
      </div>
    );
  }

  if (showResults) {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Score Card */}
            <div className="md:col-span-1 bg-gray-50 p-8 rounded-[2.5rem] border border-black/5 text-center">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Your Readiness Score</h4>
              <div className="relative w-40 h-40 mx-auto mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                  <motion.circle 
                    initial={{ strokeDasharray: "0 251" }}
                    animate={{ strokeDasharray: `${(scoreData.score / 100) * 251} 251` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={scoreData.color} 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="40" cx="50" cy="50" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-display font-bold">{Math.round(scoreData.score)}%</span>
                </div>
              </div>
              <div className={`inline-block px-6 py-2 rounded-full text-white font-bold uppercase tracking-widest text-xs ${scoreData.bg}`}>
                {scoreData.level} Readiness
              </div>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                {scoreData.level === 'Low' && "Your organization is in the early stages. Focus on digital foundations and basic AI awareness."}
                {scoreData.level === 'Medium' && "You have a solid foundation. Now is the time to pilot specific AI use cases and upskill key teams."}
                {scoreData.level === 'High' && "Excellent! You are ready for full-scale AI integration. Focus on advanced automation and custom LLMs."}
              </p>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="md:col-span-2 space-y-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h5 className="font-bold text-green-900">Key Strengths</h5>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-sm text-green-800 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                      Digital infrastructure is modern and cloud-ready.
                    </li>
                    <li className="text-sm text-green-800 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                      Leadership shows strong interest in AI adoption.
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h5 className="font-bold text-orange-900">Areas for Improvement</h5>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-sm text-orange-800 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5" />
                      Data silos prevent effective model training.
                    </li>
                    <li className="text-sm text-orange-800 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5" />
                      Employee AI literacy needs structured development.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h5 className="text-2xl font-bold mb-8">Recommended Training Path</h5>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: 'AI for Business Leaders', desc: 'Strategic oversight of AI implementation.', level: 'Beginner' },
                    { title: 'Data Strategy & Governance', desc: 'Building the foundation for AI data.', level: 'Intermediate' }
                  ].map((course, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-brand-muted rounded-md text-[10px] font-bold uppercase tracking-widest">{course.level}</span>
                        <GraduationCap className="w-5 h-5 text-brand-accent" />
                      </div>
                      <h6 className="font-bold mb-2">{course.title}</h6>
                      <p className="text-xs text-gray-500 mb-6">{course.desc}</p>
                      <button 
                        onClick={() => onSelectCourse(COURSES.find(c => c.title === course.title)?.id || 1)}
                        className="text-xs font-bold flex items-center gap-2 hover:text-brand-accent transition-colors"
                      >
                        View Course <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Plan */}
              <div className="bg-black text-white p-10 rounded-[3rem] relative overflow-hidden">
                <div className="relative z-10">
                  <h5 className="text-2xl font-bold mb-8">30-Day AI Action Plan</h5>
                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-2">Week 1-2</div>
                      <p className="text-sm text-gray-400">Audit current data assets and identify one high-impact pilot use case.</p>
                    </div>
                    <div>
                      <div className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-2">Week 3-4</div>
                      <p className="text-sm text-gray-400">Launch AI literacy workshops and begin data cleaning for the pilot.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-brand-accent transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Full Action Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const current = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-24 px-6 bg-brand-muted/30 min-h-[600px] flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-black/5">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
            <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-accent"
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-3xl font-bold mb-10">{current.question}</h4>
              <div className="space-y-4">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.value)}
                    className="w-full text-left p-6 rounded-2xl border-2 border-gray-100 hover:border-brand-accent hover:bg-brand-accent/5 transition-all group flex items-center justify-between"
                  >
                    <span className="font-bold text-lg">{opt.label}</span>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-brand-accent flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-accent scale-0 group-hover:scale-100 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-between items-center">
            <button 
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest ${currentQuestion === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:text-brand-accent'}`}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            {currentQuestion === questions.length - 1 && answers[current.id] && (
              <button 
                onClick={generateScore}
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-brand-accent hover:text-black transition-all"
              >
                Generate My Readiness Score
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const UseCaseFinder = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    industry: '',
    size: '',
    operation: ''
  });

  const industries = [
    { id: 'healthcare', name: 'Healthcare', icon: <Activity className="w-6 h-6" /> },
    { id: 'finance', name: 'Finance', icon: <Briefcase className="w-6 h-6" /> },
    { id: 'retail', name: 'Retail', icon: <Zap className="w-6 h-6" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Cpu className="w-6 h-6" /> },
    { id: 'technology', name: 'Technology', icon: <Globe className="w-6 h-6" /> },
  ];

  const sizes = [
    { id: 'startup', name: 'Startup (1-50)', icon: <Star className="w-6 h-6" /> },
    { id: 'sme', name: 'SME (51-250)', icon: <Building2 className="w-6 h-6" /> },
    { id: 'enterprise', name: 'Enterprise (250+)', icon: <Globe className="w-6 h-6" /> },
  ];

  const operations = [
    { id: 'customer-service', name: 'Customer Service', icon: <Users className="w-6 h-6" /> },
    { id: 'marketing', name: 'Marketing', icon: <Zap className="w-6 h-6" /> },
    { id: 'logistics', name: 'Logistics', icon: <Layers className="w-6 h-6" /> },
    { id: 'rd', name: 'R&D', icon: <Cpu className="w-6 h-6" /> },
    { id: 'hr', name: 'Human Resources', icon: <Users className="w-6 h-6" /> },
  ];

  const getResults = () => {
    // Mock logic for tailored results
    return [
      {
        title: `AI-Driven ${selections.operation} Optimization`,
        benefit: "Reduces operational costs by 30% while increasing throughput by 2x.",
        training: "Advanced Prompt Engineering & Workflow Automation",
        courses: ["AI for Business Leaders", "Generative AI Foundations"]
      },
      {
        title: `Predictive Analytics for ${selections.industry}`,
        benefit: "Enhances decision-making accuracy by 45% using historical data patterns.",
        training: "Data Science for Executives & Predictive Modeling",
        courses: ["Strategic Data Analytics", "Machine Learning Mastery"]
      }
    ];
  };

  const handleSelect = (field: string, value: string) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] bg-brand-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-4 uppercase"
          >
            Interactive Tool
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-semibold"
          >
            AI Use-Case Finder
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-[#1e293b] max-w-2xl mx-auto leading-[1.6]"
          >
            Identify how AI can create real value within your organization in just 3 steps.
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-16">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step >= s ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'
                }`}
              >
                {s < 4 ? s : <CheckCircle2 className="w-4 h-4" />}
              </div>
            ))}
          </div>
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-accent"
              animate={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="col-span-full mb-4">
                <h3 className="text-2xl font-bold">Select your Industry</h3>
              </div>
              {industries.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect('industry', item.name)}
                  className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-brand-accent transition-all text-left group shadow-sm hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xl font-bold">{item.name}</span>
                </button>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="col-span-full mb-4">
                <h3 className="text-2xl font-bold">Select Company Size</h3>
              </div>
              {sizes.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect('size', item.name)}
                  className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-brand-accent transition-all text-left group shadow-sm hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xl font-bold">{item.name}</span>
                </button>
              ))}
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="col-span-full mb-4">
                <h3 className="text-2xl font-bold">Type of Operations</h3>
              </div>
              {operations.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect('operation', item.name)}
                  className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-brand-accent transition-all text-left group shadow-sm hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xl font-bold">{item.name}</span>
                </button>
              ))}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -z-0" />
                <div className="relative z-10">
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Tailored Strategy</h3>
                  <h4 className="text-4xl font-display font-bold mb-6">Your AI Transformation Roadmap</h4>
                  <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/60">
                    <span className="px-4 py-2 bg-white/10 rounded-full border border-white/10">{selections.industry}</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full border border-white/10">{selections.size}</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full border border-white/10">{selections.operation}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {getResults().map((res, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-black/5"
                  >
                    <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center mb-6">
                      <Lightbulb className="w-6 h-6 text-brand-accent" />
                    </div>
                    <h5 className="text-2xl font-bold mb-4">{res.title}</h5>
                    <p className="text-gray-500 mb-6 leading-relaxed">{res.benefit}</p>
                    
                    <div className="space-y-4 pt-6 border-t border-black/5">
                      <div className="flex items-start gap-3">
                        <div className="mt-1"><GraduationCap className="w-5 h-5 text-brand-accent" /></div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Recommended Training</p>
                          <p className="font-bold">{res.training}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {res.courses.map(c => (
                          <span key={c} className="text-[10px] font-bold uppercase tracking-widest bg-brand-muted px-3 py-1 rounded-md">{c}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-8">
                <button 
                  onClick={() => setStep(1)}
                  className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                >
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const KnowledgeList = ({ type, onSelectItem }: { type: 'articles' | 'news', onSelectItem: (id: number) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const data = type === 'articles' ? ARTICLES : NEWS as any[];
  
  const categories = ['All', ...new Set(data.map(item => item.category))];
  
  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white pt-40 pb-24 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 uppercase"
          >
            {type} <br />
            <span className="text-brand-accent">& Insights</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    activeCategory === cat 
                    ? 'bg-black text-white border-black' 
                    : 'bg-transparent text-gray-500 border-black/10 hover:border-black'
                  }`}
                >
                  {cat as string}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-accent transition-colors" />
              <input 
                type="text" 
                placeholder={`Search ${type}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-brand-muted rounded-2xl border border-black/5 focus:border-brand-accent outline-none transition-all font-medium text-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group cursor-pointer"
                onClick={() => onSelectItem(item.id)}
              >
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 relative bg-brand-muted">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                    {type === 'articles' && (
                      <>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-black">{item.author}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 line-clamp-2 font-medium text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-2">
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black group-hover:gap-4 transition-all pr-4 border-r-2 border-brand-accent">
                      Explore Full {type === 'articles' ? 'Article' : 'News'} <ArrowRight className="w-4 h-4 text-brand-accent" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-brand-muted rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
               <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">No {type} found</h3>
            <p className="text-gray-500 mb-8 font-medium">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="px-8 py-3 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-black transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const KnowledgeDetail = ({ id, type, onBack, onSelectItem }: { id: number, type: 'articles' | 'news', onBack: () => void, onSelectItem: (id: number) => void }) => {
  const data = type === 'articles' ? ARTICLES : NEWS as any[];
  const item = data.find(i => i.id === id);
  const relatedItems = data.filter(i => i.id !== id).slice(0, 3);

  if (!item) return null;

  return (
    <div className="bg-white font-sans">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] bg-black">
        <img 
          src={item.image} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-white/60 hover:text-brand-accent transition-colors text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20 px-4 py-2 rounded-full hover:border-brand-accent"
              >
                <ArrowLeft className="w-4 h-4" /> Back to {type}
              </button>
              
              <div className="flex items-center gap-4 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-6">
                <span>{item.category}</span>
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                <span className="text-white/60">{item.date}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter text-white leading-[1.1] mb-8">
                {item.title}
              </h1>
              
              {type === 'articles' && item.author && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                    {item.author.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{item.author}</div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Lead AI Researcher</div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="space-y-16">
              {item.content?.map((section: any, idx: number) => (
                <div key={idx} className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-black">{section.sectionTitle}</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      {section.text}
                      {" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>
                  </div>
                </div>
              ))}
              
              {!item.content && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-black">Insights & Analysis</h2>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">
                    {item.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              )}
            </div>
            
            {/* Newsletter Hook */}
            <div className="mt-24 p-12 bg-brand-muted rounded-[3rem] relative overflow-hidden border border-black/5">
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold mb-4">Stay ahead with the latest AI insights</h3>
                <p className="text-gray-500 font-medium mb-8">Get deep-dive articles and news updates directly in your inbox twice a month.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    className="flex-1 px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-brand-accent outline-none"
                  />
                  <button className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-brand-accent hover:text-black transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
              <BookOpen className="absolute -bottom-10 -right-10 w-64 h-64 text-black/[0.03] rotate-12" />
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 border border-black/5 rounded-[2.5rem] sticky top-32 text-black">
              <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
                Related {type === 'articles' ? 'Articles' : 'News'}
                <div className="h-0.5 flex-1 bg-black/5" />
              </h4>
              
              <div className="space-y-10">
                {relatedItems.map((rel: any) => (
                  <button 
                    key={rel.id} 
                    onClick={() => onSelectItem(rel.id)}
                    className="group flex flex-col items-start gap-4 text-left"
                  >
                    <div className="w-full aspect-video rounded-3xl overflow-hidden">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2">{rel.category}</div>
                      <div className="font-bold leading-tight group-hover:text-brand-accent transition-colors">{rel.title}</div>
                    </div>
                  </button>
                ))}
              </div>
              
              <button 
                onClick={onBack}
                className="w-full mt-12 py-4 border border-black/10 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-black transition-all flex items-center justify-center gap-2"
              >
                View all {type} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const ResourcesPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 italic">
              KNOWLEDGE <br />
              <span className="text-brand-accent">RESOURCES</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed font-medium">
              A meticulously curated library of assets, guides, and insights to accelerate your AI adoption journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Section (Articles as Guide) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-4 border-brand-accent pl-8">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Implementation Guides</h2>
            <p className="text-gray-500 font-medium">Step-by-step documentation for AI scaling and strategy.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ARTICLES.slice(0, 2).map((item) => (
              <div key={item.id} className="group flex flex-col md:flex-row gap-8 p-8 bg-brand-muted rounded-[3rem] border border-black/5 hover:border-brand-accent transition-colors cursor-pointer">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    View Guide <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-brand-muted px-6 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4">Video Library</h2>
              <p className="text-gray-500 font-medium">Expert masterclasses and technical walkthroughs.</p>
            </div>
            <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-black pb-2 hover:text-brand-accent hover:border-brand-accent transition-all">
              Watch All <PlayCircle className="w-5 h-5 text-brand-accent" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESOURCES_VIDEOS.map((video) => (
              <motion.div 
                key={video.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                       <Play className="w-6 h-6 text-black fill-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-lg border border-white/20">
                     {video.duration}
                  </div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-2">{video.category}</div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-brand-accent transition-colors">{video.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 uppercase">Direct Answers</h2>
            <p className="text-gray-500 font-medium tracking-widest text-xs uppercase">Frequently Asked Questions</p>
          </div>

          <div className="space-y-4">
            {RESOURCES_FAQS.map((faq) => (
              <div 
                key={faq.id}
                className="border border-black/5 rounded-[2rem] overflow-hidden transition-all duration-500"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={`text-xl font-bold transition-colors ${activeFaq === faq.id ? 'text-brand-accent' : 'text-black group-hover:text-brand-accent'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center transition-all ${activeFaq === faq.id ? 'bg-black text-white rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-black text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 italic">Visual Assets</h2>
              <p className="text-white/40 font-medium text-xs uppercase tracking-[0.2em]">Infographics & Architecture Diagrams</p>
            </div>
            <button className="px-8 py-3 rounded-full bg-brand-accent text-black font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
               Download HQ Pack <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCES_IMAGES.map((img) => (
              <div key={img.id} className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white/5 border border-white/5">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2 block">{img.category}</span>
                  <h3 className="text-2xl font-bold">{img.title}</h3>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity">
                   <ImageIcon className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PartnersPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#FFD700,transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 italic uppercase">
              Our <span className="text-brand-accent">Partners</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
              We collaborate with world-leading organizations to set new standards in AI integration and professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-10 rounded-[3rem] border border-black/5 hover:border-brand-accent transition-all hover:shadow-2xl hover:bg-brand-muted/30"
              >
                <div className="w-32 h-32 mb-8 relative">
                   <div className="absolute inset-0 bg-brand-accent/10 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 blur-xl" />
                   <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-contain rounded-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                    referrerPolicy="no-referrer"
                   />
                </div>
                <h3 className="text-2xl font-bold mb-4">{partner.name}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 px-6 bg-brand-muted">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-black/5">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 bg-black text-white flex flex-col justify-center">
                <h2 className="text-4xl font-extrabold tracking-tight mb-6">Become a Partner</h2>
                <p className="text-white/60 mb-8 font-medium leading-relaxed">
                  Join our elite network of industry leaders and help shape the future of AI-driven strategies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm font-bold text-brand-accent">
                    <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    Priority Access to Research
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-brand-accent">
                    <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    Joint Certification Programs
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-brand-accent">
                    <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                      <Globe className="w-4 h-4" />
                    </div>
                    Global Networking Platform
                  </div>
                </div>
              </div>
              <div className="p-12 md:p-16">
                <form className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Organization Name</label>
                    <input type="text" className="w-full p-4 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Contact Person</label>
                      <input type="text" className="w-full p-4 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                      <input type="email" className="w-full p-4 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Partnership Interest</label>
                    <div className="relative">
                      <select className="w-full p-4 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold appearance-none">
                        <option>Technical Partnership</option>
                        <option>Educational Content</option>
                        <option>Strategic Alliance</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full p-4 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                  </div>
                  <button type="button" className="w-full py-5 bg-brand-accent text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AIBackground = () => {
  const icons = [
    { Icon: Cpu, top: '10%', left: '15%', size: 40, delay: '0s' },
    { Icon: Brain, top: '25%', left: '80%', size: 60, delay: '1.2s' },
    { Icon: Zap, top: '60%', left: '10%', size: 30, delay: '0.5s' },
    { Icon: Bot, top: '85%', left: '20%', size: 50, delay: '2.5s' },
    { Icon: Sparkles, top: '15%', left: '60%', size: 35, delay: '1.8s' },
    { Icon: Database, top: '70%', left: '85%', size: 45, delay: '3.2s' },
    { Icon: Cpu, top: '40%', left: '90%', size: 25, delay: '0.8s' },
    { Icon: Activity, top: '10%', left: '35%', size: 55, delay: '2.1s' },
    { Icon: Cpu, top: '55%', left: '75%', size: 30, delay: '1.5s' },
    { Icon: Sparkles, top: '80%', left: '50%', size: 40, delay: '0.2s' },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {icons.map((item, i) => (
        <div
          key={i}
          className="absolute animate-ai-node opacity-10 md:opacity-20 hidden sm:block"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            color: 'inherit'
          }}
        >
          <item.Icon 
            size={item.size} 
            className="text-brand-accent md:w-auto md:h-auto" 
            style={{ width: item.size, height: item.size }}
          />
        </div>
      ))}
      <div className="sm:hidden absolute inset-0">
        {/* Reduced icons for mobile */}
        {icons.slice(0, 4).map((item, i) => (
          <div
            key={`mob-${i}`}
            className="absolute animate-ai-node opacity-10"
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              color: 'inherit'
            }}
          >
            <item.Icon 
              size={item.size * 0.6} 
              style={{ width: item.size * 0.6, height: item.size * 0.6 }}
              className="text-brand-accent"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const InHouseTrainingPage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      title: "In-House Training",
      subtitle: "For Your Organisation",
      desc: "Bespoke learning journeys hosted at your premises, tailored specifically to your department's challenges and strategic goals.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920"
    },
    {
      title: "Bespoke Solutions",
      subtitle: "Customised Learning",
      desc: "We adapt our curriculum to your industry jargon, internal processes, and strategic vision for maximum relevance and ROI.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
    },
    {
      title: "Global Expertise",
      subtitle: "Local Implementation",
      desc: "Empower your teams with frameworks delivered by industry masters, ensuring immediate application to your current projects.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-black text-white overflow-hidden min-h-[800px] flex items-center">
        <AIBackground />
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentSlide].image} 
                alt="Corporate Training" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent/60">
            <span>Home</span> <ChevronRight className="w-3 h-3" /> <span>Corporate Solutions</span> <ChevronRight className="w-3 h-3" /> <span className="text-brand-accent">In-House Training</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-8xl font-semibold leading-[1.3] mb-8">
                {slides[currentSlide].title} <br />
                <span className="text-brand-accent text-2xl md:text-4xl block mt-4 opacity-80">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 font-medium leading-[1.6] max-w-2xl">
                {slides[currentSlide].desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact-form"
                  className="px-10 py-5 bg-brand-accent text-black rounded-2xl font-medium tracking-[0.01em] text-sm hover:scale-105 transition-all shadow-xl"
                >
                  Request a Proposal
                </a>
                <button className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl font-medium tracking-[0.01em] text-sm transition-all flex items-center gap-3">
                  Download Brochure <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div className="absolute bottom-0 left-6 flex gap-3 pb-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  currentSlide === i ? 'w-12 bg-brand-accent' : 'w-4 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTRO / PROBLEM-SOLUTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="w-20 h-20 bg-brand-muted rounded-3xl flex items-center justify-center mb-8">
              <Building2 className="w-10 h-10 text-brand-accent" />
            </div>
            <p className="text-2xl font-semibold leading-[1.6] text-[#1e293b] mb-8">
              Generic training often misses the mark when applied to unique corporate cultures. Our in-house solutions bridge that gap by aligning curriculum directly with your existing infrastructure and future vision.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { label: 'Customisable', icon: <CheckCircle className="w-4 h-4" /> },
                { label: 'Cost-Effective', icon: <CheckCircle className="w-4 h-4" /> },
                { label: 'On-Site', icon: <CheckCircle className="w-4 h-4" /> }
              ].map(stat => (
                <div key={stat.label} className="flex items-center gap-3 text-xs font-medium tracking-[0.01em] text-brand-accent uppercase">
                  {stat.icon} {stat.label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-muted">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                  alt="Team Learning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS GRID SECTION */}
      <section className="py-24 px-6 bg-brand-muted/30 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-4 uppercase">Advantages</h2>
            <h3 className="text-5xl font-semibold">Why Choose In-House?</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IN_HOUSE_BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] border border-black/5 hover:border-brand-accent hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-brand-muted rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURE HIGHLIGHT SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
          <div className="bg-black text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
               <GraduationCap className="w-16 h-16 text-brand-accent/20" />
            </div>
            <h3 className="text-3xl font-display font-extrabold mb-8 italic uppercase tracking-tighter">Expert Trainers</h3>
            <ul className="space-y-6 mb-12">
              {[
                "Senior Industry Veterans",
                "PhDs & Published Experts",
                "Real-World Implementation Experience",
                "Certified Educational Facilitators"
              ].map(item => (
                <li key={item} className="flex items-center gap-4 text-white/80 font-bold">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" /> {item}
                </li>
              ))}
            </ul>
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" className="w-12 h-12 rounded-full border-2 border-black" />
               ))}
               <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-black text-xs font-black">+24</div>
            </div>
          </div>
          
          <div className="bg-brand-accent p-12 md:p-16 rounded-[4rem] text-black relative flex flex-col justify-center">
            <h3 className="text-3xl font-display font-extrabold mb-8 italic uppercase tracking-tighter">Premium Content</h3>
            <ul className="space-y-6">
              {[
                "Strictly Vetted Curriculum",
                "Interactive Case Studies",
                "Simulated Workshop Environments",
                "Post-Session Resource Kits"
              ].map(item => (
                <li key={item} className="flex items-center gap-4 font-black text-black/70">
                   <div className="w-2 h-2 rounded-full bg-black" /> {item}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-8 right-8">
               <FileText className="w-16 h-16 text-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEARNING OUTCOMES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-brand-accent/5 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
             <div className="flex-1 relative z-10 text-center md:text-left">
                <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white mb-8">Better Interaction, <br /><span className="text-brand-accent italic">Better Results</span></h3>
                <div className="space-y-4">
                  {[
                    "Transform individual talent into collective team intelligence.",
                    "Align strategic objectives across departments seamlessly.",
                    "Immediate application of learned frameworks to current projects."
                  ].map(p => (
                    <div key={p} className="flex items-center gap-4 text-white/60 font-bold text-lg">
                       <Zap className="w-6 h-6 text-brand-accent shrink-0" /> {p}
                    </div>
                  ))}
                </div>
             </div>
             <div className="flex-1 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square bg-white/5 rounded-3xl backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-center text-center">
                      <div className="text-4xl font-black text-brand-accent mb-2">95%</div>
                      <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Retention Rate</div>
                   </div>
                   <div className="aspect-square bg-brand-accent rounded-3xl p-8 flex flex-col justify-center text-center translate-y-8">
                      <div className="text-4xl font-black text-black mb-2">30+</div>
                      <div className="text-[10px] text-black/40 uppercase font-black tracking-widest">Global Partners</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT / LEAD CAPTURE SECTION */}
      <section id="contact-form" className="py-24 px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-display font-extrabold tracking-tighter">Contact Us About <br /><span className="text-brand-accent italic">In-House Training</span></h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-12">
               <div className="p-10 bg-brand-muted hover:bg-brand-accent transition-colors group rounded-[3rem] border border-black/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Executive Hotline</h4>
                  <a href="tel:+442071234567" className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <Phone className="w-6 h-6 text-black" />
                     </div>
                     <div>
                        <div className="text-2xl font-bold">+44 207 123 4567</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Mon - Fri, 9am - 6pm GMT</div>
                     </div>
                  </a>
               </div>

               <div className="p-10 bg-black text-white rounded-[3rem] border border-black/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Corporate Sales</h4>
                  <a href="mailto:corporate@lpc-ai.com" className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <Mail className="w-6 h-6 text-black" />
                     </div>
                     <div>
                        <div className="text-2xl font-bold">corporate@lpc-ai.com</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Guaranteed response within 4 hours</div>
                     </div>
                  </a>
               </div>
               
               <p className="text-gray-400 font-bold italic px-8">Or fill the form to the right for a custom quotation.</p>
            </div>

            <div className="lg:col-span-7">
               <form className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">First Name *</label>
                    <input type="text" className="w-full p-5 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Last Name *</label>
                    <input type="text" className="w-full p-5 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Work Email *</label>
                    <input type="email" className="w-full p-5 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Mobile / Phone *</label>
                    <input type="tel" className="w-full p-5 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Subject *</label>
                    <input type="text" className="w-full p-5 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" placeholder="e.g. Custom AI Strategy Course" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Your Requirements * (Organisation name, team size, etc.)</label>
                    <textarea rows={5} maxLength={500} className="w-full p-5 bg-brand-muted rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold resize-none" />
                  </div>
                  
                  <div className="sm:col-span-2 flex items-center gap-4 px-4">
                     <input type="checkbox" className="w-5 h-5 rounded border-black/10 text-brand-accent focus:ring-brand-accent cursor-pointer" />
                     <p className="text-sm font-medium text-gray-600">I agree to the <span className="text-black underline">Privacy Policy</span> *</p>
                  </div>

                  <div className="sm:col-span-2">
                     <button type="button" className="w-full py-6 bg-black text-white rounded-3xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-black transition-all shadow-xl">
                        Send Inquiry
                     </button>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENTS LOGO GRID */}
      <section className="py-24 px-6 bg-brand-muted/30 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-16 px-4">Trusted By Leading Organisations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {[1,2,3,4,5,6].map(i => (
               <img key={i} src={`https://picsum.photos/seed/company${i}/200/100`} alt="Client" className="w-full h-auto max-h-12 object-contain" referrerPolicy="no-referrer" />
             ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 underline underline-offset-8">Endorsements</h2>
            <h3 className="text-5xl font-display font-extrabold tracking-tighter">What Our Clients Say</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {IN_HOUSE_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-muted/40 p-12 rounded-[4rem] relative overflow-hidden group"
              >
                <HelpCircle className="absolute -top-4 -right-4 w-32 h-32 text-black/[0.03] rotate-12" />
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-brand-accent fill-brand-accent" />)}
                </div>
                <p className="text-xl font-bold italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-black rounded-full" />
                   <div>
                      <div className="font-bold">{t.author}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{t.role}, {t.company}</div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER SECTION */}
      <section className="py-12 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight">Get corporate training insights & updates</h4>
          <div className="flex bg-black/10 rounded-2xl p-1.5 flex-1 max-w-md w-full border border-black/5">
             <input type="email" placeholder="Email Address" className="flex-1 bg-transparent px-6 font-bold text-sm outline-none placeholder:text-black/30" />
             <button className="px-10 py-4 bg-black text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-colors">Subscribe</button>
          </div>
        </div>
      </section>

      {/* 10. GLOBAL OFFICES PREVIEW STRIP */}
      <section className="py-12 px-6 bg-black text-white/40 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { name: 'London', flag: '🇬🇧' },
            { name: 'Dubai', flag: '🇦🇪' },
            { name: 'Barcelona', flag: '🇪🇸' },
            { name: 'Paris', flag: '🇫🇷' },
            { name: 'Singapore', flag: '🇸🇬' },
            { name: 'Milan', flag: '🇮🇹' },
            { name: 'Istanbul', flag: '🇹🇷' }
          ].map(office => (
            <div key={office.name} className="flex items-center gap-3 group cursor-pointer">
              <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{office.flag}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">{office.name}</span>
            </div>
          ))}
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">
            View All Locations <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

const InstructorApplicationPage = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#FFD700,transparent_50%)]" />
        </div>
        <AIBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent/60">
            <span>Home</span> <ChevronRight className="w-3 h-3" /> <span>Our Network</span> <ChevronRight className="w-3 h-3" /> <span className="text-brand-accent">Become an Instructor</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-semibold leading-[1.3] mb-8 uppercase">
                Join Our Team as a <br />
                <span className="text-brand-accent">Freelance Instructor</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-2xl font-medium leading-[1.6]">
                Empower the next generation of leaders. Share your industry expertise with high-profile professionals across the globe.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {['Flexible', 'Competitive Pay', 'Global Reach'].map((badge) => (
                   <div key={badge} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium tracking-[0.01em] uppercase flex items-center gap-2">
                     <CheckCircle className="w-3 h-3 text-brand-accent" /> {badge}
                   </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
                <div className="w-full aspect-square rounded-[4rem] bg-brand-muted/20 border border-brand-accent/20 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-brand-accent/5 blur-3xl rounded-full translate-y-1/2 scale-150" />
                   <GraduationCap className="w-48 h-48 text-brand-accent group-hover:scale-110 transition-transform duration-700" />
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BENEFITS GRID SECTION */}
      <section className="py-24 px-6 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-[0.01em] text-brand-accent mb-4 uppercase">Why Join Us?</h2>
            <h3 className="text-5xl font-semibold">Your Growth, Our Platform</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INSTRUCTOR_BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-brand-muted/30 border border-black/5 hover:border-brand-accent hover:bg-white hover:shadow-2xl transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-accent transition-colors">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed italic">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESPONSIBILITIES & REQUIREMENTS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Responsibilities */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-display font-extrabold">Responsibilities</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Deliver high-impact training sessions (In-person or Online)",
                  "Design and update course curricula to align with industry trends",
                  "Facilitate engaging group workshops and hands-on case studies",
                  "Assess participant performance and provide constructive feedback",
                  "Collaborate with our ops team for session setup and logistics",
                  "Contribute to our Knowledge Centre with expert insights"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start p-6 bg-brand-muted/50 rounded-2xl border border-black/5">
                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                    <p className="font-bold text-gray-700 leading-snug tracking-tight">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-accent text-black rounded-2xl flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-display font-extrabold">Requirements</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Minimum 10 years of senior industry experience",
                  "Proven track record in corporate training or adult education",
                  "Subject matter expertise in one or more core AI/Management topics",
                  "Exceptional storytelling and interpersonal skills",
                  "Professional certification in your field <span class='text-[10px] bg-brand-accent px-2 py-0.5 rounded ml-2 uppercase font-bold'>Preferred</span>",
                  "Ability to travel globally for in-person assignments"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start p-6 border-2 border-brand-muted/50 rounded-2xl">
                    <Zap className="w-5 h-5 text-black shrink-0 mt-1" />
                    <p className="font-bold text-gray-700 leading-snug tracking-tight" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATION CTA BANNER SECTION */}
      <section className="relative py-24 bg-brand-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-semibold text-black mb-10 leading-[1.3] uppercase">
            Ready to make <br />
            <span>an impact?</span>
          </h2>
          <a
            href="#apply-form"
            className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-3xl font-medium tracking-[0.01em] text-sm hover:scale-105 transition-all shadow-2xl group"
          >
            Apply Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* 5. APPLICATION FORM SECTION */}
      <section id="apply-form" className="py-24 px-6 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-extrabold tracking-tighter">Instructor Application</h2>
            <p className="text-gray-500 font-medium mt-4">Takes approximately 5-7 minutes to complete.</p>
          </div>

          <form className="space-y-12">
            {/* Group 1: Personal Details */}
            <div className="p-10 rounded-[3rem] bg-brand-muted/30 border border-black/5 space-y-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black">01</span> Personal Details
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Full Name *</label>
                  <input type="text" className="w-full p-5 bg-white rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Email Address *</label>
                  <input type="email" className="w-full p-5 bg-white rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Phone Number *</label>
                  <input type="tel" className="w-full p-5 bg-white rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Based In *</label>
                  <div className="relative">
                    <select className="w-full p-5 bg-white rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold appearance-none">
                      <option>London</option>
                      <option>Dubai</option>
                      <option>Barcelona</option>
                      <option>Paris</option>
                      <option>Istanbul</option>
                      <option>Kuala Lumpur</option>
                      <option>Singapore</option>
                      <option>Milan</option>
                      <option>Amsterdam</option>
                      <option>Other</option>
                    </select>
                    <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Group 2: Teaching Expertise */}
            <div className="p-10 rounded-[3rem] border border-black/5 space-y-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black">02</span> Teaching Expertise
              </h4>
              <p className="text-gray-500 font-bold text-sm px-4">What topics are you qualified to teach? *</p>
              <div className="grid sm:grid-cols-2 gap-4 px-4">
                {INSTRUCTOR_TOPICS.map(topic => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => toggleTopic(topic)}
                    className={`p-4 rounded-xl border font-bold text-xs flex items-center justify-between transition-all ${
                      selectedTopics.includes(topic) 
                      ? 'bg-black text-white border-black' 
                      : 'bg-brand-muted/30 border-black/5 hover:border-brand-accent'
                    }`}
                  >
                    {topic}
                    {selectedTopics.includes(topic) && <CheckCircle className="w-4 h-4 text-brand-accent" />}
                  </button>
                ))}
              </div>
              <div className="px-4 space-y-2 pt-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Other Topics (Max 200 chars)</label>
                <input type="text" maxLength={200} className="w-full p-5 bg-brand-muted/30 rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
              </div>
            </div>

            {/* Group 3: Experience & Ideas */}
            <div className="p-10 rounded-[3rem] bg-brand-muted/30 border border-black/5 space-y-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black">03</span> Experience & Vision
              </h4>
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Tell us about your teaching experience * (Max 2000 chars)</label>
                  <textarea rows={6} maxLength={2000} className="w-full p-5 bg-white rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold resize-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">What courses would you like to teach? * (Max 2000 chars)</label>
                  <textarea rows={6} maxLength={2000} className="w-full p-5 bg-white rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold resize-none" />
                </div>
              </div>
            </div>

            {/* Group 4: Portfolio & Documents */}
            <div className="p-10 rounded-[3rem] border border-black/5 space-y-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent flex items-center gap-3">
                <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black">04</span> Portfolio & CV
              </h4>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Portfolio / LinkedIn URL</label>
                  <input type="url" className="w-full p-5 bg-brand-muted/30 rounded-2xl border border-black/5 outline-none focus:border-brand-accent font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Upload CV (PDF/DOC, Max 10MB) *</label>
                  <div className="border-2 border-dashed border-black/10 rounded-2xl p-10 flex flex-col items-center justify-center bg-brand-muted/20 hover:border-brand-accent transition-all cursor-pointer relative group">
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                    />
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Download className="w-6 h-6 text-brand-accent" />
                    </div>
                    <p className="font-bold text-gray-900">{cvFile ? cvFile.name : 'Select or drag CV file'}</p>
                    {cvFile && <button onClick={(e) => { e.preventDefault(); setCvFile(null); }} className="text-[10px] font-bold uppercase tracking-widest text-red-500 mt-2 hover:underline">Remove</button>}
                  </div>
                </div>
              </div>
            </div>

            {/* Group 5: Consent */}
            <div className="pt-8 border-t border-black/5 space-y-8">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input type="checkbox" className="hidden" />
                <div className="w-6 h-6 rounded-md bg-brand-muted border-2 border-black/5 flex items-center justify-center group-hover:border-brand-accent shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-sm font-medium text-gray-600">I agree to the <span className="text-black underline">Instructor Terms</span> and <span className="text-black underline">Privacy Policy</span> *</p>
              </label>

              <button type="button" className="w-full py-6 bg-brand-accent text-black rounded-3xl font-bold text-xl uppercase tracking-widest shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group">
                Submit Application <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 6. NEWSLETTER SIGNUP SECTION */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-lg text-center md:text-left">
            <h4 className="text-3xl font-display font-extrabold mb-4 italic">Not ready to apply?</h4>
            <p className="text-white/40 font-medium leading-relaxed uppercase tracking-widest text-[10px]">Get course updates and partner opportunities delivered to your inbox.</p>
          </div>
          <div className="w-full md:w-[500px]">
             <div className="flex bg-white/10 rounded-2xl p-2 border border-white/10 backdrop-blur-md">
                <input type="email" placeholder="Your professional email" className="flex-1 bg-transparent px-6 py-4 outline-none font-bold text-sm" />
                <button className="px-10 py-4 bg-brand-accent text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">Subscribe</button>
             </div>
             <p className="text-[8px] text-white/20 mt-4 px-4 font-medium italic">Protected by reCAPTCHA. Privacy Policy applies.</p>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL OFFICES PREVIEW STRIP */}
      <section className="py-12 px-6 bg-brand-muted border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { name: 'London', flag: '🇬🇧' },
            { name: 'Dubai', flag: '🇦🇪' },
            { name: 'Barcelona', flag: '🇪🇸' },
            { name: 'Paris', flag: '🇫🇷' },
            { name: 'Singapore', flag: '🇸🇬' },
            { name: 'Milan', flag: '🇮🇹' },
            { name: 'Istanbul', flag: '🇹🇷' }
          ].map(office => (
            <div key={office.name} className="flex items-center gap-3 group cursor-pointer">
              <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{office.flag}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-brand-accent transition-colors">{office.name}</span>
            </div>
          ))}
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
            View All Locations <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

const CourseDetails = ({ courseId, onBack, onSelectCourse }: { courseId: number, onBack: () => void, onSelectCourse: (id: number) => void }) => {
  const course = COURSES.find(c => c.id === courseId);
  const [activeTab, setActiveTab] = useState('intro');
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [venueSearch, setVenueSearch] = useState('');

  if (!course) return null;

  const venueData = [
    { date: '15-26 Dec 2025', city: 'Singapore', venue: 'Marina Bay', status: 'Available' },
    { date: '08-19 Dec 2025', city: 'Barcelona', venue: 'City Center', status: 'Available' },
    { date: '22-31 Dec 2025', city: 'Kuala Lumpur', venue: 'KLCC', status: 'Limited' },
    { date: '12-23 Jan 2026', city: 'Dubai', venue: 'DXB Convention', status: 'Available' },
    { date: '05-16 Feb 2026', city: 'London', venue: 'Hilton Canary Wharf', status: 'Full' },
    { date: '19-30 Mar 2026', city: 'Paris', venue: 'La Defense', status: 'Available' },
    { date: '10-21 Apr 2026', city: 'Istanbul', venue: 'Grand Hyatt', status: 'Available' },
    { date: '04-15 May 2026', city: 'Amsterdam', venue: 'InterContinental', status: 'Limited' },
    { date: '15-26 Jun 2026', city: 'Milan', venue: 'Radisson Blu', status: 'Available' },
  ];

  const filteredVenues = venueData.filter(v => 
    v.city.toLowerCase().includes(venueSearch.toLowerCase()) || 
    v.venue.toLowerCase().includes(venueSearch.toLowerCase())
  );

  const courseOutline = [
    { day: 1, title: 'The Office Administrator Role', items: ['Defining modern responsibilities', 'Core competency frameworks', 'Organizational structures', 'Team dynamics management'] },
    { day: 2, title: 'Advanced Communication Skills', items: ['Written & verbal excellence', 'Active listening', 'Cross-cultural strategies', 'Managing difficult conversations'] },
    { day: 3, title: 'Time Management & Productivity', items: ['Prioritization matrices', 'Calendar best practices', 'Workflow automation tools', 'Overcoming procrastination'] },
    { day: 4, title: 'Digital Productivity Suite', items: ['Advanced Office 365', 'Collaboration tools', 'Digital archiving', 'Cybersecurity for admins'] },
    { day: 5, title: 'Strategic Meeting Facilitation', items: ['Agenda design', 'Minute taking best practices', 'Virtual meeting logistics', 'Post-meeting action tracking'] },
    { day: 6, title: 'Project Management Basics', items: ['Planning & tracking', 'Resource allocation', 'Risk mitigation', 'Stakeholder communication'] },
    { day: 7, title: 'Leadership & Influence', items: ['Situational leadership', 'Mentoring juniors', 'Building trust', 'Influencing without authority'] },
    { day: 8, title: 'Problem Solving & Decisions', items: ['Root cause analysis', 'Creative thinking tools', 'Data-driven decisions', 'Implementation planning'] },
    { day: 9, title: 'Emotional Intelligence', items: ['Self-awareness', 'Empathy in the workplace', 'Conflict resolution', 'Resilience training'] },
    { day: 10, title: 'Final Assessment & Action Plan', items: ['Case study presentation', 'Skills gap analysis', 'Personal development roadmap', 'Certification ceremony'] },
  ];

  const relatedCourses = [
    { id: 101, title: 'Time Management & Personal Effectiveness', duration: '5 Days', cities: ['Dubai', 'London', 'Online'], level: 'Intermediate', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400' },
    { id: 102, title: 'Highly Productive Administrator', duration: '5 Days', cities: ['Paris', 'Istanbul', 'Online'], level: 'Advanced', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400' },
    { id: 103, title: 'Advanced Secretarial Skills', duration: '5 Days', cities: ['Dubai', 'Milan', 'Online'], level: 'Expert', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-black via-gray-900 to-brand-accent/20 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
            <button onClick={onBack}>Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">Courses</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-accent">{course.title}</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Elevate your administrative excellence with our world-class certification program designed for the modern workplace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 text-brand-accent mb-2 font-bold uppercase tracking-widest text-[10px]">
                  <Clock className="w-4 h-4" /> Duration
                </div>
                <div className="text-xl font-bold">10 Days</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 text-brand-accent mb-2 font-bold uppercase tracking-widest text-[10px]">
                  <Monitor className="w-4 h-4" /> Format
                </div>
                <div className="text-xl font-bold">In Classroom</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 text-brand-accent mb-2 font-bold uppercase tracking-widest text-[10px]">
                  <Hash className="w-4 h-4" /> Course Code
                </div>
                <div className="text-xl font-bold uppercase">ADML1019</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex-1 sm:flex-none px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-brand-accent hover:text-black transition-all flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Get in Touch
              </button>
              <button className="flex-1 sm:flex-none px-8 py-4 border border-white/20 rounded-xl font-bold text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Send Brochure
              </button>
              <button 
                onClick={() => setIsRegisterModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4 bg-brand-accent text-black rounded-xl font-bold text-sm hover:scale-[1.05] transition-all flex items-center justify-center gap-2"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATES & VENUES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 underline decoration-brand-accent/30 underline-offset-8">Venues</h2>
              <h3 className="text-4xl font-display font-extrabold">Available Dates & Locations</h3>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Filter by city..." 
                value={venueSearch}
                onChange={(e) => setVenueSearch(e.target.value)}
                className="w-full pl-10 pr-6 py-3 bg-brand-muted rounded-xl border border-black/5 outline-none focus:border-brand-accent transition-all text-sm font-bold"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 shadow-sm overflow-hidden bg-white">
            <div className="max-h-[290px] overflow-y-auto overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="sticky top-0 z-10 bg-brand-muted shadow-sm">
                  <tr className="border-b border-black/5">
                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Date</th>
                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">City</th>
                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Venue</th>
                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 font-bold">
                  {filteredVenues.map((v, i) => (
                    <tr key={i} className="hover:bg-brand-muted/50 transition-colors">
                      <td className="p-6 text-sm">{v.date}</td>
                      <td className="p-6 flex items-center gap-2 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-brand-accent" /> {v.city}
                      </td>
                      <td className="p-6 text-sm text-gray-500">{v.venue}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-full text-[9px] uppercase tracking-widest border flex items-center gap-1.5 w-fit ${
                          v.status === 'Available' ? 'bg-green-50 text-green-600 border-green-100' :
                          v.status === 'Limited' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                          'bg-red-50 text-red-600 border-red-100'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            v.status === 'Available' ? 'bg-green-600 animate-pulse' :
                            v.status === 'Limited' ? 'bg-amber-600' :
                            'bg-red-600'
                          }`} />
                          {v.status}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        <button className="px-5 py-2 text-[10px] font-bold uppercase tracking-widest border border-black/10 rounded-lg hover:bg-black hover:text-white transition-all">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSE DETAILS SECTION (Tabs) */}
      <section className="py-24 px-6 bg-brand-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Inside the Course</h2>
            <h3 className="text-5xl font-display font-extrabold tracking-tighter">Course Overview</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-black/5">
              <div className="flex flex-wrap gap-2 mb-12 border-b border-black/5 pb-4">
                {[
                  { id: 'intro', label: 'Introduction' },
                  { id: 'objectives', label: 'Learning Objectives' },
                  { id: 'attendees', label: 'Who Should Attend' },
                  { id: 'topics', label: 'Key Topics' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      activeTab === tab.id ? 'bg-black text-white' : 'text-gray-400 hover:text-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'intro' && (
                  <motion.div 
                    key="intro"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="prose prose-lg max-w-none text-gray-500 leading-relaxed"
                  >
                    <p className="mb-6 font-bold text-black text-2xl tracking-tight leading-tight">Master the art of office administration in the digital age.</p>
                    <p className="mb-6">Modern office administration has evolved far beyond basic support tasks. Today, it requires a strategic blend of digital proficiency, leadership acumen, and exceptional interpersonal skills. This course is designed to empower participants with the tools and mindsets necessary to lead from behind the scenes, optimizing workflows and managing multifaceted stakeholder needs.</p>
                    <p>Through industry-leading frameworks and hands-on workshops, you will learn how to automate repetitive tasks, lead impactful meetings, and position yourself as a crucial strategic asset within your organization.</p>
                  </motion.div>
                )}

                {activeTab === 'objectives' && (
                  <motion.div 
                    key="objectives"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid sm:grid-cols-2 gap-6"
                  >
                    {[
                      'Master essential office administration frameworks',
                      'Apply time management & prioritization techniques',
                      'Enhance communication & interpersonal skills',
                      'Utilize digital tools for workflow automation',
                      'Develop emotional intelligence for workplace success',
                      'Lead meetings & manage stakeholders effectively'
                    ].map((obj, i) => (
                      <div key={i} className="flex gap-4 items-start p-6 bg-brand-muted/50 rounded-2xl border border-black/5">
                        <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center shrink-0">
                          <CheckCircle className="w-4 h-4 text-black" />
                        </div>
                        <p className="font-bold text-sm leading-snug">{obj}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'attendees' && (
                  <motion.div 
                    key="attendees"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-wrap gap-4"
                  >
                    {['Office Administrators', 'EA & PA Professionals', 'Team Leaders', 'HR Coordinators', 'Supervisors', 'Aspiring Managers'].map((role, i) => (
                      <div key={i} className="px-10 py-6 bg-white border-2 border-brand-muted rounded-3xl flex items-center gap-4 group hover:border-brand-accent transition-all cursor-default">
                        <div className="w-12 h-12 rounded-2xl bg-brand-muted flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                          <Users className="w-6 h-6 text-black" />
                        </div>
                        <span className="font-bold text-gray-900">{role}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'topics' && (
                  <motion.div 
                    key="topics"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {[
                      { label: 'Communication Excellence', icon: <Mail className="w-4 h-4" /> },
                      { label: 'Time Management', icon: <Clock className="w-4 h-4" /> },
                      { label: 'Digital Productivity', icon: <Monitor className="w-4 h-4" /> },
                      { label: 'Meeting Facilitation', icon: <Video className="w-4 h-4" /> },
                      { label: 'Emotional Intelligence', icon: <Zap className="w-4 h-4" /> },
                      { label: 'Professional Etiquette', icon: <Users className="w-4 h-4" /> }
                    ].map((topic, i) => (
                      <div key={i} className="text-center p-8 bg-white border border-black/5 rounded-[2rem] hover:shadow-xl transition-all">
                        <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                          {topic.icon}
                        </div>
                        <h5 className="font-bold text-sm tracking-tight">{topic.label}</h5>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Side Search Box */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-black p-10 rounded-[3rem] text-white relative overflow-hidden group border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-accent/30 transition-colors" />
                <h4 className="text-3xl font-display font-extrabold italic mb-4 leading-tight tracking-tighter">Find more <br />excellence.</h4>
                <p className="text-white/40 text-xs mb-8 leading-relaxed font-bold uppercase tracking-widest">Global Discovery Hub</p>
                
                <div className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-white/40">Category</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent transition-all text-xs font-bold text-white/80">
                      <option className="bg-black">All Categories</option>
                      <option className="bg-black">Administration</option>
                      <option className="bg-black">Leadership</option>
                      <option className="bg-black">Digital Skills</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-white/40">Venue</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent transition-all text-xs font-bold text-white/80">
                      <option className="bg-black">All Locations</option>
                      <option className="bg-black">Dubai, UAE</option>
                      <option className="bg-black">London, UK</option>
                      <option className="bg-black">Paris, FR</option>
                    </select>
                  </div>
                  <button className="w-full py-4 bg-brand-accent text-black rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:scale-[1.02] transition-all shadow-lg shadow-brand-accent/10">
                    Search Now
                  </button>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-sm">
                <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center mb-6">
                  <Download className="w-6 h-6 text-black" />
                </div>
                <h5 className="text-xl font-bold mb-2 tracking-tight">2026 Prospectus</h5>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Download our complete guide to executive education.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group hover:text-brand-accent transition-colors">
                  Get Brochure <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COURSE OUTLINE SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Curriculum</h2>
            <h3 className="text-5xl font-display font-extrabold tracking-tighter">Detailed Course Outline</h3>
          </div>

          <div className="space-y-4">
            {courseOutline.map((day) => (
              <div 
                key={day.day}
                className="border border-black/5 rounded-3xl overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="w-full flex items-center justify-between p-8 text-left bg-white hover:bg-brand-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent py-1 px-3 bg-brand-accent/10 rounded-lg">Day {day.day}</span>
                    <h4 className="font-bold text-xl tracking-tight">{day.title}</h4>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-300 ${expandedDay === day.day ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedDay === day.day && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-brand-muted/10 border-t border-black/5"
                    >
                      <div className="p-8 space-y-4">
                        {day.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VIDEO PREVIEW SECTION */}
      <section className="py-24 px-6 bg-brand-muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Experience</h2>
            <h3 className="text-5xl font-display font-extrabold tracking-tighter mb-4 italic">Inside the Classroom</h3>
            <p className="text-gray-500">Get a sneak peek into the learning experience, trainer insights, and participant testimonials.</p>
          </div>
          
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1920" 
              alt="Video Preview" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-8 h-8 ml-1" />
              </button>
            </div>
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white relative z-10">
              <div>
                <h4 className="text-2xl font-bold tracking-tight">Course Highlights</h4>
                <p className="text-sm font-medium text-white/60">Dubai Executive Center • March 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED COURSES */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Discovery</h2>
              <h3 className="text-5xl font-display font-extrabold tracking-tighter">You May Also Like</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedCourses.map((rc) => (
              <div key={rc.id} className="group bg-brand-muted rounded-[2.5rem] p-8 hover:bg-black transition-all duration-500 cursor-pointer">
                <div className="aspect-video rounded-3xl overflow-hidden mb-8">
                  <img src={rc.image} alt={rc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors tracking-tight leading-tight">{rc.title}</h4>
                <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white/40 transition-colors mb-8">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {rc.duration}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {rc.level}</span>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REGISTRATION MODAL */}
      <AnimatePresence>
        {isRegisterModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsRegisterModalOpen(false)} />
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="bg-black p-8 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-3xl font-display font-extrabold italic tracking-tight">Couse Registration</h3>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest mt-1">ADML1019 • Administration & Office Management</p>
                </div>
                <button onClick={() => setIsRegisterModalOpen(false)} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-10 overflow-y-auto space-y-12">
                {/* Section A: Payment Type */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black italic">01</span> Payment Type
                  </h4>
                  <div className="flex gap-4">
                    <button className="flex-1 p-6 border-2 border-brand-accent bg-brand-accent/5 rounded-2xl flex items-center gap-4 transition-all">
                      <Building2 className="w-6 h-6 text-brand-accent" />
                      <div className="text-left">
                        <div className="font-bold">Company Paid</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Invoiced to Organization</div>
                      </div>
                    </button>
                    <button className="flex-1 p-6 border-2 border-brand-muted hover:border-brand-accent transition-all rounded-2xl flex items-center gap-4 group">
                      <Users className="w-6 h-6 text-gray-400 group-hover:text-brand-accent" />
                      <div className="text-left">
                        <div className="font-bold">Self Paid</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Individual Credit Card</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Section B: Participant Details */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black italic">02</span> Participant Info
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input placeholder="Full Name *" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="Job Title *" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="Nationality *" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="Email Address *" type="email" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="Phone / WhatsApp *" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="LinkedIn Profile" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:underline">
                    <Plus className="w-4 h-4" /> Add Another Participant
                  </button>
                </div>

                {/* Section C: Company info */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black italic">03</span> Company Details
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input placeholder="Company Name" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="Department" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="City" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <input placeholder="Country" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                  </div>
                </div>

                {/* Section D: Billing */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-black italic">04</span> Billing & Payment
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <textarea placeholder="Billing Address" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium h-32 md:col-span-2" />
                    <input placeholder="PO Number (Optional)" className="w-full bg-brand-muted p-4 rounded-xl border border-black/5 outline-none focus:border-brand-accent font-medium" />
                    <div className="flex gap-2">
                        <button className="flex-1 py-3 bg-black text-white rounded-xl text-[10px] uppercase font-bold tracking-widest">Invoice</button>
                        <button className="flex-1 py-3 bg-brand-muted rounded-xl text-[10px] uppercase font-bold tracking-widest">Card Pay</button>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5 space-y-4">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="w-6 h-6 rounded-md bg-brand-muted border-2 border-black/5 flex items-center justify-center group-hover:border-brand-accent shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">I agree to the <span className="text-black underline">Terms & Conditions</span> and <span className="text-black underline">Privacy Policy</span> *</p>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="w-6 h-6 rounded-md bg-brand-muted border-2 border-black/5 flex items-center justify-center group-hover:border-brand-accent shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">I consent to receive course-related communications and exclusive AI insights.</p>
                  </label>
                </div>

                <div className="pt-8 pb-4">
                    <button className="w-full py-6 bg-brand-accent text-black rounded-3xl font-bold text-lg hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3">
                       Complete Enrollment <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AllCoursesPage = ({ type, onSelectCourse }: { type?: 'Online' | 'Classroom', onSelectCourse: (id: number) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCourses = COURSES.filter(course => 
    (!type || course.type === type) && 
    (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     course.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-white pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-2">
              {type || 'All'} <span className="text-brand-accent">Courses</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{filteredCourses.length} Programs Found</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search programs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-brand-muted rounded-2xl border border-black/5 focus:border-brand-accent outline-none transition-all font-medium"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-[2.5rem] border border-black/5 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest">Course Name</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest">Location</th>
                <th className="p-8 text-[10px) font-bold uppercase tracking-widest">Type</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest">Category</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <tr 
                    key={course.id} 
                    className="group hover:bg-brand-muted transition-colors cursor-pointer"
                    onClick={() => onSelectCourse(course.id)}
                  >
                    <td className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="font-bold text-lg group-hover:text-brand-accent transition-colors">{course.title}</div>
                          <div className="text-sm text-gray-400 line-clamp-1">{course.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <MapPin className="w-4 h-4 text-brand-accent" />
                        {course.city}
                      </div>
                    </td>
                    <td className="p-8">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        course.type === 'Online' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {course.type}
                      </span>
                    </td>
                    <td className="p-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{course.category}</span>
                    </td>
                    <td className="p-8 text-right">
                      <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-brand-muted rounded-full flex items-center justify-center text-gray-400">
                        <Search className="w-8 h-8" />
                      </div>
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No courses found matching your search.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CategoryPage = ({ categoryTitle, onSelectCourse }: { categoryTitle: string, onSelectCourse: (id: number) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCourses = COURSES.filter(course => 
    course.category === categoryTitle && 
    (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     course.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const category = CATEGORIES.find(c => c.title === categoryTitle);

  return (
    <div className="bg-white pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-brand-muted rounded-[2rem] flex items-center justify-center text-black">
              {category?.icon || <Layers className="w-10 h-10" />}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-2">{categoryTitle}</h1>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{filteredCourses.length} Courses Available</p>
            </div>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-brand-muted rounded-2xl border border-black/5 focus:border-brand-accent outline-none transition-all font-medium"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-[2.5rem] border border-black/5 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest">Course Name</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest">Location</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest">Type</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest">Instructor</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <tr 
                    key={course.id} 
                    className="group hover:bg-brand-muted transition-colors cursor-pointer"
                    onClick={() => onSelectCourse(course.id)}
                  >
                    <td className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="font-bold text-lg group-hover:text-brand-accent transition-colors">{course.title}</div>
                          <div className="text-sm text-gray-400 line-clamp-1">{course.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <MapPin className="w-4 h-4 text-brand-accent" />
                        {course.city}
                      </div>
                    </td>
                    <td className="p-8">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        course.type === 'Online' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {course.type}
                      </span>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <img src={course.instructorImage} alt="Instructor" className="w-8 h-8 rounded-full border border-black/5" referrerPolicy="no-referrer" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Expert</span>
                      </div>
                    </td>
                    <td className="p-8 text-right">
                      <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-brand-muted rounded-full flex items-center justify-center text-gray-400">
                        <Search className="w-8 h-8" />
                      </div>
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No courses found matching your search.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CityPage = ({ city, onSelectCourse }: { city: string, onSelectCourse: (id: number) => void }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const cityCourses = COURSES.filter(c => c.city === city);
  const filteredCourses = cityCourses.filter(c => {
    const matchesCategory = activeCategory ? c.category === activeCategory : true;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoriesInCity = Array.from(new Set(cityCourses.map(c => c.category))).map(catName => {
    return {
      title: catName,
      count: cityCourses.filter(c => c.category === catName).length
    };
  });

  return (
    <div className="bg-white">
      {/* 1. HERO / LOCATION INTRO SECTION */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={`https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1920`} 
            alt={city} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-12">
            <button onClick={() => onSelectCourse(0)} className="hover:text-white transition-colors">Home</button> 
            <ChevronRight className="w-3 h-3" /> 
            <span>Locations</span> 
            <ChevronRight className="w-3 h-3" /> 
            <span className="text-brand-accent">{city}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-display font-extrabold text-white tracking-tighter mb-8"
          >
            {city} <span className="text-brand-accent block md:inline">Training Courses</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl font-medium leading-relaxed"
          >
            Advance your professional career with our industry-leading executive education programs in {city}. Expert instructors, hands-on learning, and global certification.
          </motion.p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR SECTION */}
      <section className="sticky top-[88px] z-40 bg-white border-b border-black/5 px-6 py-4 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-4 scrollbar-hide">
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => setActiveCategory(null)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === null ? 'bg-black text-white' : 'bg-brand-muted text-gray-500 hover:bg-black/5'
              }`}
            >
              All Categories
            </button>
            <div className="w-px h-6 bg-black/10 mx-2" />
          </div>
          
          <div className="flex items-center gap-2">
            {categoriesInCity.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                  activeCategory === cat.title ? 'bg-brand-accent text-black' : 'bg-brand-muted text-gray-500 hover:bg-black/5'
                }`}
              >
                {cat.title}
                <span className="opacity-40 font-mono text-[9px]">({cat.count})</span>
              </button>
            ))}
          </div>

          <div className="ml-auto pl-4 border-l border-black/5 shrink-0 flex items-center gap-4">
            {activeCategory && (
              <button 
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:opacity-70"
              >
                <X className="w-4 h-4" /> Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 4. COURSES DATA TABLE SECTION */}
      <section className="py-24 px-6 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          {/* 3. ACTION BUTTONS ROW */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="w-full md:w-auto">
              <h2 className="text-3xl font-display font-extrabold tracking-tight">Available Courses</h2>
              <p className="text-sm text-gray-500 font-medium">Browse our expert-led programs in {city}</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              {/* Primary: All Courses */}
              <button 
                onClick={() => { setActiveCategory(null); setSearchQuery(''); }}
                className="px-6 py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-black transition-all shadow-lg"
              >
                All Courses
              </button>

              <div className="relative flex-1 md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-6 py-3 bg-brand-muted rounded-xl border border-black/5 outline-none focus:border-brand-accent transition-all text-sm font-bold"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="relative group">
                <button className="px-6 py-3 border border-black/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2">
                  Sort By <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-black/5 shadow-2xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {['Date', 'Price', 'Duration', 'Title'].map(opt => (
                    <button key={opt} className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-muted rounded-lg transition-colors">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => { setActiveCategory(null); setSearchQuery(''); }}
                className="px-6 py-3 border border-black/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2 shrink-0"
              >
                <X className="w-3 h-3" /> Reset Filters
              </button>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-black/5 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto overflow-y-auto max-h-[700px]">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead className="sticky top-0 z-10 bg-brand-muted">
                  <tr>
                    <th className="p-8 italic font-serif text-xs opacity-50 uppercase tracking-widest border-b border-black/5">Course Title</th>
                    <th className="p-8 italic font-serif text-xs opacity-50 uppercase tracking-widest border-b border-black/5">Category</th>
                    <th className="p-8 italic font-serif text-xs opacity-50 uppercase tracking-widest border-b border-black/5">Start Date</th>
                    <th className="p-8 italic font-serif text-xs opacity-50 uppercase tracking-widest border-b border-black/5">Duration</th>
                    <th className="p-8 italic font-serif text-xs opacity-50 uppercase tracking-widest border-b border-black/5">Price</th>
                    <th className="p-8 italic font-serif text-xs opacity-50 uppercase tracking-widest border-b border-black/5 text-right w-20"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((c) => (
                      <tr 
                        key={c.id} 
                        className="group hover:bg-black transition-all cursor-pointer"
                        onClick={() => onSelectCourse(c.id)}
                      >
                        <td className="p-8">
                          <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight group-hover:text-white transition-colors">{c.title}</span>
                            <span className="text-[10px] uppercase font-bold text-gray-400 mt-1">Course Code: {c.id.toString().padStart(4, '0')}</span>
                          </div>
                        </td>
                        <td className="p-8">
                          <button 
                            onClick={(e) => { e.stopPropagation(); setActiveCategory(c.category); }}
                            className="px-4 py-1.5 bg-brand-muted rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-white/10 group-hover:text-white/60 transition-all hover:scale-105"
                          >
                            {c.category}
                          </button>
                        </td>
                        <td className="p-8">
                          <span className="font-mono text-sm group-hover:text-white transition-colors">Oct 24, 2024</span>
                        </td>
                        <td className="p-8">
                          <span className="text-sm font-bold text-gray-500 group-hover:text-white/60 transition-colors">10 Days</span>
                        </td>
                        <td className="p-8">
                          <span className="text-xl font-bold tracking-tighter group-hover:text-brand-accent transition-colors">$2,950</span>
                        </td>
                        <td className="p-8 text-right">
                          <button 
                            onClick={(e) => { e.stopPropagation(); /* Quick View logic */ }}
                            className="p-3 bg-brand-muted rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-accent text-black"
                            title="Quick View"
                          >
                            <Search className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-32 text-center text-gray-400 font-bold uppercase tracking-widest">
                        <div className="flex flex-col items-center gap-6">
                          <Search className="w-16 h-16 opacity-10" />
                          <p>No courses found matching your criteria.</p>
                          <button 
                            onClick={() => { setActiveCategory(null); setSearchQuery(''); }}
                            className="text-brand-accent text-xs hover:underline"
                          >
                            Reset filters to see all available courses
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-12 text-center flex flex-col items-center gap-4">
            <button className="px-10 py-4 bg-brand-muted text-black rounded-2xl font-bold text-sm hover:bg-black hover:text-white transition-all shadow-sm">
              Load More Courses
            </button>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Showing {filteredCourses.length} of {cityCourses.length} Courses</p>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER SIGNUP SECTION */}
      <section className="py-24 px-6 bg-brand-accent">
        <div className="max-w-7xl mx-auto rounded-[4rem] bg-black p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-brand-accent mb-6">Stay Ahead</h2>
              <h3 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tighter mb-8 leading-none">
                Subscribe to <br /> {city} Updates.
              </h3>
              <p className="text-white/60 text-lg max-w-md font-medium">Get exclusive priority access to new course announcements and early-bird discounts in {city}.</p>
            </div>
            <div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your professional email" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-brand-accent transition-all font-medium"
                    required
                  />
                  <button className="px-10 py-5 bg-brand-accent text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-[1.05] transition-all shrink-0 shadow-2xl">
                    Subscribe Now
                  </button>
                </div>
                {/* Success/Error Message Container Placeholder */}
                <div className="hidden bg-green-500/10 border border-green-500/20 text-green-500 px-6 py-4 rounded-xl text-sm font-bold animate-in fade-in slide-in-from-top-2">
                  Subscription successful! Check your inbox.
                </div>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Protected by reCAPTCHA • Privacy Policy Applies</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION CONTACT CARD SECTION */}
      <section className="py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="bg-brand-muted rounded-[3.5rem] p-12 md:p-20 flex flex-col justify-between">
              <div>
                <span className="inline-block px-4 py-1 bg-black text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-lg mb-8 italic">
                  {city.toUpperCase()} OFFICE
                </span>
                <h3 className="text-5xl font-display font-extrabold tracking-tighter mb-12">Visit the Hub.</h3>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Address</div>
                      <p className="font-bold text-gray-900 leading-relaxed">
                        LPC-AI Executive Center, Building {Math.floor(Math.random() * 100)}, <br />
                        {city} Central District, PO Box {Math.floor(Math.random() * 10000)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 border-t border-black/5 pt-10">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Phone</div>
                      <a href="tel:+97141234567" className="font-bold text-gray-900 hover:text-brand-accent transition-colors">+971 4 123 4567</a>
                    </div>
                  </div>
                  <div className="flex gap-6 border-t border-black/5 pt-10">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</div>
                      <a href={`mailto:info.${city.toLowerCase()}@lpc-ai.com`} className="font-bold text-gray-900 hover:text-brand-accent transition-colors">info.{city.toLowerCase()}@lpc-ai.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="mt-16 w-full py-6 bg-black text-white rounded-3xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-accent hover:text-black transition-all shadow-xl">
                Get Directions
              </button>
            </div>
            
            <div className="rounded-[3.5rem] overflow-hidden bg-brand-muted relative group border border-black/5 shadow-2xl">
              <img 
                src={`https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1000`} 
                alt={`${city} Office Location`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL OFFICES PREVIEW (Mini Footer Strip) */}
      <section className="py-16 border-t border-black/5 bg-brand-muted/30 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {[
                { name: 'Dubai', flag: '🇦🇪' },
                { name: 'London', flag: '🇬🇧' },
                { name: 'Barcelona', flag: '🇪🇸' },
                { name: 'Paris', flag: '🇫🇷' },
                { name: 'Singapore', flag: '🇸🇬' },
                { name: 'Amsterdam', flag: '🇳🇱' },
                { name: 'Milan', flag: '🇮🇹' }
              ].map(office => (
                <button 
                  key={office.name}
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all group scale-95 hover:scale-105"
                  onClick={() => { window.scrollTo(0,0) }}
                >
                  <span className="text-xl grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100">{office.flag}</span>
                  {office.name}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-accent group shrink-0">
              View All Global Locations <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutUsPage = () => {
  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries in AI education.', icon: <Cpu className="w-6 h-6" /> },
    { title: 'Excellence', desc: 'Uncompromising quality in training.', icon: <Star className="w-6 h-6" /> },
    { title: 'Integrity', desc: 'Ethical approach to AI development.', icon: <CheckCircle className="w-6 h-6" /> },
    { title: 'Community', desc: 'Building a global network of experts.', icon: <Users className="w-6 h-6" /> },
  ];

  const team = [
    { name: 'Dr. Sarah Chen', role: 'Chief AI Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Marcus Thorne', role: 'Head of Strategy', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Elena Rodriguez', role: 'Director of Education', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
    { name: 'James Wilson', role: 'Lead Technical Instructor', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="About Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-extrabold text-white tracking-tighter mb-6"
          >
            We Are <span className="text-brand-accent">LPC-AI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto font-medium"
          >
            Empowering the next generation of digital leaders through world-class AI education and strategic innovation.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Our Purpose</h2>
            <h3 className="text-5xl font-display font-extrabold mb-8">Bridging the Gap Between Human Potential and AI.</h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              LPC-AI was founded on the belief that artificial intelligence should be accessible, ethical, and practical. We don't just teach code; we teach the strategic application of intelligence to solve real-world problems.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-bold mb-1">2009</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Countries</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Mission" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-10 rounded-3xl shadow-2xl max-w-xs">
              <p className="text-sm font-medium italic">"Our vision is to become the global standard for AI literacy and professional excellence."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 px-6 bg-brand-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Values</h2>
            <h3 className="text-5xl font-display font-extrabold">What Drives Us</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border border-black/5 hover:border-brand-accent transition-all group"
              >
                <div className="w-14 h-14 bg-brand-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Leadership</h2>
            <h3 className="text-5xl font-display font-extrabold">Meet the Experts</h3>
          </div>
          <p className="text-gray-500 max-w-xs font-medium">
            Our team consists of PhDs, industry veterans, and visionary technologists.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Global Impact Stats */}
      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-display font-extrabold text-brand-accent mb-2">50K+</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Students Trained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-display font-extrabold text-brand-accent mb-2">120+</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Expert Instructors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-display font-extrabold text-brand-accent mb-2">15+</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Years of Innovation</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-display font-extrabold text-brand-accent mb-2">98%</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ConsultingPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [newsState, setNewsState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsState('submitting');
    setTimeout(() => setNewsState('success'), 1200);
  };

  const services = [
    { 
      title: "AI Strategy & Roadmap", 
      desc: "Transform your business with a clear, actionable AI strategy tailored to your industry and specific organizational goals.",
      icon: <Brain className="w-8 h-8 text-brand-accent" />
    },
    { 
      title: "Data Engineering", 
      desc: "Build the robust data infrastructure required for scaled AI implementation, ensuring data quality, security, and accessibility.",
      icon: <Database className="w-8 h-8 text-brand-accent" />
    },
    { 
      title: "Process Automation", 
      desc: "Deploy custom AI agents and automated workflows that eliminate bottlenecks and drive efficiency across your operations.",
      icon: <Zap className="w-8 h-8 text-brand-accent" />
    },
    { 
      title: "Change Management", 
      desc: "Prepare your workforce for the AI era through structured training and transition programs that foster high adoption rates.",
      icon: <Users className="w-8 h-8 text-brand-accent" />
    },
  ];

  const processSteps = [
    { number: "01", title: "Discovery", desc: "We analyze your current digital maturity and identify high-impact AI opportunities." },
    { number: "02", title: "Strategy", desc: "A bespoke implementation roadmap is developed, focusing on ROI and scalability." },
    { number: "03", title: "Execution", desc: "Our experts work alongside your team to build, train, and deploy custom solutions." },
    { number: "04", title: "Evolution", desc: "Continuous monitoring and optimization ensure your AI systems improve over time." }
  ];

  return (
    <div className="bg-white pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 px-6 overflow-hidden">
        <AIBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-accent/20 text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
              Strategic Advisory
            </span>
            <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter mb-12 leading-[0.9]">
              Architecting the <br /> <span className="text-brand-accent">AI-First</span> Enterprise.
            </h1>
            <p className="text-2xl text-[#1e293b]/70 max-w-2xl mb-12 leading-relaxed">
              We partner with global leaders to navigate the complexity of artificial intelligence, turning visionary strategies into operational reality.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#consulting-form"
                className="px-12 py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-black transition-all shadow-2xl"
              >
                Request Consultation
              </a>
              <button 
                className="px-12 py-5 bg-brand-muted text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-all border border-black/5"
              >
                Our Methodology
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-32 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-40">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Expertise</h2>
              <h3 className="text-5xl font-semibold mb-8 leading-tight text-black">Comprehensive Solutions.</h3>
              <p className="text-[#1e293b]/60 leading-relaxed text-lg italic">
                "Our consulting framework is designed to move beyond the hype, delivering tangible business value through engineering excellence."
              </p>
            </div>
            
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-12 rounded-[3.5rem] border border-black/5 shadow-sm hover:shadow-2xl hover:border-brand-accent transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-[#1e293b]">
                    {service.title}
                  </h4>
                  <p className="text-[#1e293b]/60 leading-relaxed text-sm font-medium">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-32 px-6 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Process</h2>
            <h3 className="text-5xl font-semibold mb-8">Four Steps to AI Mastery</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-white/10 z-0" />
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center md:text-left"
              >
                <div className="text-7xl font-display font-extrabold text-white/5 mb-8 md:mb-12 group-hover:text-brand-accent transition-colors">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4 text-brand-accent italic">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM */}
      <section id="consulting-form" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-10">Get in Touch</h2>
            <h3 className="text-6xl font-semibold mb-12 leading-[1.1]">Start Your <br /> Transformation.</h3>
            <p className="text-xl text-[#1e293b]/60 leading-relaxed mb-12">
              Tell us about your project or organizational challenges. Our partners will reach out within 24 hours to schedule a deep-dive session.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-muted rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <span className="font-bold text-[#1e293b]">advisory@lpc-ai.com</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-muted rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <span className="font-bold text-[#1e293b]">+971 4 123 4567</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-black/5 relative">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center shadow-xl rotate-12">
              <Sparkles className="w-10 h-10 text-black" />
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">First Name*</label>
                  <input required type="text" className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-5 outline-none focus:border-brand-accent focus:bg-white transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Last Name*</label>
                  <input required type="text" className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-5 outline-none focus:border-brand-accent focus:bg-white transition-all font-medium" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Email Address*</label>
                  <input required type="email" className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-5 outline-none focus:border-brand-accent focus:bg-white transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Subject*</label>
                  <select className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-5 outline-none focus:border-brand-accent focus:bg-white transition-all font-medium appearance-none">
                    <option>AI Strategy</option>
                    <option>Data Engineering</option>
                    <option>Corporate Training</option>
                    <option>Process Automation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Message*</label>
                <textarea required rows={4} className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-5 outline-none focus:border-brand-accent focus:bg-white transition-all font-medium resize-none" placeholder="How can we help?"></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-black transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> PROCCESSING...
                  </>
                ) : (
                  'Send Inquiry'
                )}
              </button>

              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="p-8 bg-green-50 border border-green-100 rounded-3xl text-center"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
                    <h5 className="font-bold text-green-900 mb-2">Message Sent</h5>
                    <p className="text-xs text-green-700">Thank you! A senior consultant will reach out shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] -z-0" />
        <div className="max-w-7xl mx-auto border border-white/10 p-12 md:p-24 rounded-[4rem] relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-semibold mb-6">Stay Ahead of the Curve.</h3>
              <p className="text-white/50 text-lg leading-relaxed">
                Get our monthly briefing on enterprise AI trends, policy changes, and emerging frameworks directly to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  required 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-brand-accent transition-all text-white font-medium"
                />
                <button 
                  type="submit"
                  disabled={newsState === 'submitting'}
                  className="px-12 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-all shadow-xl disabled:opacity-50"
                >
                  {newsState === 'submitting' ? '...' : 'Subscribe'}
                </button>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                LPC-AI respects your privacy. View our Policy for details.
              </p>
              {newsState === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-accent font-bold italic">
                  Success! You're on the list.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  const contactOptions = [
    { 
      title: 'General Inquiries', 
      desc: 'Everything related to courses and programs.',
      email: 'info@lpc-ai.com', 
      icon: <HelpCircle className="w-6 h-6" /> 
    },
    { 
      title: 'Corporate Solutions', 
      desc: 'In-house training and custom consulting.',
      email: 'corporate@lpc-ai.com', 
      icon: <Briefcase className="w-6 h-6" /> 
    },
    { 
      title: 'Technical Support', 
      desc: 'LMS access or technical issues.',
      email: 'support@lpc-ai.com', 
      icon: <Monitor className="w-6 h-6" /> 
    },
  ];

  const offices = [
    { city: 'Dubai', address: 'Innovation Tower, Level 42, DIFC', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600' },
    { city: 'London', address: 'The Shard, 32 London Bridge St', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600' },
    { city: 'Singapore', address: 'Marina Bay Financial Centre, Tower 3', image: 'https://images.unsplash.com/photo-1525625239514-75b30f2c0a0c?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="bg-white pt-20">
      {/* 1. Hero Section */}
      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-none"
          >
            Let's Start a <br /> <span className="text-brand-accent">Conversation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our AI programs or looking for a custom corporate solution? Our global team is ready to help you navigate the future.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-24 px-6 -mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-black/5">
              <h3 className="text-3xl font-semibold mb-8">Reach Out</h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/40 mb-1">Call Us</div>
                    <a href="tel:+97141234567" className="text-xl font-semibold hover:text-brand-accent transition-colors">+971 4 123 4567</a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <MessageSquare className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/40 mb-1">WhatsApp</div>
                    <a href="#" className="text-xl font-semibold hover:text-brand-accent transition-colors">+971 50 987 6543</a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/40 mb-1">Email Us</div>
                    <a href="mailto:info@lpc-ai.com" className="text-xl font-semibold hover:text-brand-accent transition-colors">info@lpc-ai.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-black/5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#1e293b]/40 mb-6">Socials</h4>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                    <button key={idx} className="w-12 h-12 rounded-xl bg-white flex items-center justify-center hover:bg-brand-accent hover:text-black transition-all shadow-sm border border-black/5">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 gap-6">
              {contactOptions.map((opt) => (
                <div key={opt.title} className="p-8 bg-white border border-black/5 rounded-[2.5rem] hover:border-brand-accent transition-all group">
                  <div className="w-12 h-12 bg-brand-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                    {opt.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{opt.title}</h4>
                  <p className="text-sm text-[#1e293b]/60 mb-4">{opt.desc}</p>
                  <a href={`mailto:${opt.email}`} className="text-sm font-bold text-brand-accent">{opt.email}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[3.5rem] border border-black/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-4xl font-semibold mb-4">Message Sent!</h3>
                <p className="text-lg text-[#1e293b]/60 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-12 text-brand-accent font-bold flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-4xl font-semibold mb-4">Send a Message</h3>
                <p className="text-[#1e293b]/60 mb-12">Fill out the form below and we'll connect you with the right expert.</p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Email Address</label>
                      <input required type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Subject</label>
                    <select className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium appearance-none">
                      <option>General Inquiry</option>
                      <option>Course Information</option>
                      <option>Corporate Training</option>
                      <option>Partnership Proposal</option>
                      <option>Technical Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/40 ml-4">Message</label>
                    <textarea required rows={6} placeholder="Tell us about your goals..." className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all font-medium resize-none" />
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-accent hover:text-black transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    {formState === 'submitting' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 3. Global Offices */}
      <section className="py-24 px-6 bg-brand-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Location</h2>
            <h3 className="text-5xl font-semibold">Our Global Presence</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.city} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-lg">
                  <img src={office.image} alt={office.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-3xl font-bold text-white mb-2">{office.city}</h4>
                    <p className="text-white/70 text-sm">{office.address}</p>
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6 text-black -rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Brief */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-8">Frequently Asked Questions</h3>
        <p className="text-lg text-[#1e293b]/60 mb-12">Quick answers to our most common questions. Still need help? Use the form above.</p>
        
        <div className="space-y-4 text-left">
          {[
            { q: "Where are your training centers located?", a: "We have executive centers in Dubai, London, and Singapore, plus partner facilities in over 40 countries." },
            { q: "Do you offer online consultation?", a: "Yes, our experts are available for remote consulting and virtual training sessions worldwide." },
            { q: "Can I host a training session at my office?", a: "Absolutely. Our 'In-House Training' program brings our world-class curriculum directly to your team." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-black/5 p-8 rounded-3xl">
              <h5 className="text-lg font-bold mb-3">{faq.q}</h5>
              <p className="text-sm text-[#1e293b]/60 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useState<number | null>(null);

  const handleNavigate = (page: string, idOrTitle?: number | string) => {
    let targetPage = page;
    // Map aliases/legacy names to implemented pages
    if (page === 'consulting') targetPage = 'consulting';
    if (page === 'our-instructors') targetPage = 'about-us';
    if (page === 'knowledge-centre') targetPage = 'articles';
    if (page === 'privacy-policy' || page === 'faq') targetPage = 'resources';
    
    setCurrentPage(targetPage);
    if (typeof idOrTitle === 'number') {
       if (targetPage === 'course-details') setSelectedCourseId(idOrTitle);
       if (targetPage === 'article-detail' || targetPage === 'news-detail') setSelectedKnowledgeId(idOrTitle);
    }
    if (targetPage === 'category' && typeof idOrTitle === 'string') setSelectedCategory(idOrTitle);
    if (targetPage === 'city' && typeof idOrTitle === 'string') setSelectedCity(idOrTitle);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <WhoWeAre onNavigate={handleNavigate} />
            <Categories onSelectCategory={(title) => handleNavigate('category', title)} />
            <CitySlider onSelectCourse={(id) => handleNavigate('course-details', id)} />
            <HighlightedCourses onSelectCourse={(id) => handleNavigate('course-details', id)} />
            <CertificateVerification />
            <AIReadinessCheck 
              onNavigate={handleNavigate} 
              onSelectCourse={(id) => handleNavigate('course-details', id)} 
            />
            <Articles 
              onNavigate={handleNavigate} 
              onSelectArticle={(id) => handleNavigate('article-detail', id)} 
            />
          </>
        )}
        {currentPage === 'use-case-finder' && <UseCaseFinder />}
        {currentPage === 'about-us' && <AboutUsPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'articles' && (
          <KnowledgeList 
            type="articles" 
            onSelectItem={(id) => handleNavigate('article-detail', id)} 
          />
        )}
        {currentPage === 'news' && (
          <KnowledgeList 
            type="news" 
            onSelectItem={(id) => handleNavigate('news-detail', id)} 
          />
        )}
        {currentPage === 'resources' && <ResourcesPage />}
        {currentPage === 'our-partners' && <PartnersPage />}
        {currentPage === 'consulting' && <ConsultingPage />}
        {currentPage === 'in-house-training' && <InHouseTrainingPage />}
        {currentPage === 'become-an-instructor' && <InstructorApplicationPage />}
        {currentPage === 'article-detail' && selectedKnowledgeId && (
          <KnowledgeDetail 
            id={selectedKnowledgeId} 
            type="articles" 
            onBack={() => handleNavigate('articles')} 
            onSelectItem={(id) => handleNavigate('article-detail', id)}
          />
        )}
        {currentPage === 'news-detail' && selectedKnowledgeId && (
          <KnowledgeDetail 
            id={selectedKnowledgeId} 
            type="news" 
            onBack={() => handleNavigate('news')} 
            onSelectItem={(id) => handleNavigate('news-detail', id)}
          />
        )}
        {currentPage === 'category' && selectedCategory && (
          <CategoryPage 
            categoryTitle={selectedCategory} 
            onSelectCourse={(id) => handleNavigate('course-details', id)} 
          />
        )}
        {currentPage === 'classroom-courses' && (
          <AllCoursesPage 
            type="Classroom" 
            onSelectCourse={(id) => handleNavigate('course-details', id)} 
          />
        )}
        {currentPage === 'online-courses' && (
          <AllCoursesPage 
            type="Online" 
            onSelectCourse={(id) => handleNavigate('course-details', id)} 
          />
        )}
        {currentPage === 'course-details' && selectedCourseId && (
          <CourseDetails 
            courseId={selectedCourseId} 
            onBack={() => handleNavigate('home')}
            onSelectCourse={(id) => handleNavigate('course-details', id)}
          />
        )}
        {currentPage === 'city' && selectedCity && (
          <CityPage 
            city={selectedCity}
            onSelectCourse={(id) => handleNavigate('course-details', id)}
          />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <AIAssistant onNavigate={handleNavigate} />
    </div>
  );
}
