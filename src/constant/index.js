import { Bell, FilePen, Image as ImageIcon, Laptop, Layout, ListChecks, Moon, Palette, PenSquare, Radio, RefreshCw, RefreshCwIcon, Search, ShieldOff, Smartphone, SmartphoneIcon, Smile, Sparkles, Tablet, Trophy, WifiOff, WifiOffIcon } from "lucide-react";

export const features = [
// ... (rest of the features array)
  {
    title: "Ads Free",
    description: "Enjoy a clean, distraction-free environment for your thoughts.",
    Icon: ShieldOff,
    color: "bg-primary/10",
    iconColor: "text-accent"
  },
  {
    title: "Premium Drawing Canvas",
    description: "Express yourself with professional-grade sketching tools.",
    Icon: Palette,
    color: "bg-secondary/10",
    iconColor: "text-accent"
  },
  {
    title: "Auto Sync",
    description: "Your notes are always up to date across all your devices.",
    Icon: RefreshCw,
    color: "bg-accent/20",
    iconColor: "text-accent"
  },
  {
    title: "Custom Backgrounds",
    description: "Personalize your workspace with beautiful themes and images.",
    Icon: ImageIcon,
    color: "bg-primary/10",
    iconColor: "text-accent"
  },
  {
    title: "Emojis & Stickers",
    description: "Add personality to your notes with a vast library of icons.",
    Icon: Smile,
    color: "bg-secondary/10",
    iconColor: "text-accent"
  },
  {
    title: "Offline Mode",
    description: "Access and edit your notes even without an internet connection.",
    Icon: WifiOff,
    color: "bg-accent/20",
    iconColor: "text-accent"
  },
  {
    title: "Dark & Light Theme",
    description: "Switch between modes to suit your environment and preference.",
    Icon: Moon,
    color: "bg-primary/10",
    iconColor: "text-accent"
  },
  {
    title: "Stream Management",
    description: "Organize your thoughts into logical streams of consciousness.",
    Icon: Radio,
    color: "bg-secondary/10",
    iconColor: "text-accent"
  },
  {
    title: "Reward System",
    description: "Stay motivated and productive with our built-in gamification.",
    Icon: Trophy,
    color: "bg-accent/20",
    iconColor: "text-accent"
  },
  {
    title: "Widgets Available",
    description: "Quick access to your notes right from your home screen.",
    Icon: Layout,
    color: "bg-primary/10",
    iconColor: "text-accent"
  },
  {
    title: "Smart Reminders",
    description: "Never miss a deadline with intelligent note-based alerts.",
    Icon: Bell,
    color: "bg-secondary/10",
    iconColor: "text-accent"
  },
  {
    title: "Search & Categorize",
    description: "Find exactly what you need with powerful sorting and tagging.",
    Icon: Search,
    color: "bg-accent/20",
    iconColor: "text-accent"
  },
  {
    title: "Beautiful UI",
    description: "A meticulously crafted interface designed for delight.",
    Icon: Sparkles,
    color: "bg-primary/10",
    iconColor: "text-accent"
  }
];

export const noteItems = [
  { Icon: FilePen, label: 'New Note', accent: true },
  { Icon: ListChecks, label: 'Task List', accent: false },
  { Icon: PenSquare, label: 'Drawing Canvas', accent: false },
  { Icon: Smile, label: 'Custom Emojis', accent: false },
];

export const deviceItems = [
  { Icon: Smartphone, label: 'Phone' },
  { Icon: Laptop, label: 'Laptop' },
  { Icon: Tablet, label: 'Tablet' },
];

export const highlights = [
  {
    Icon: WifiOffIcon,
    title: 'Works Offline, Always',
    description:
      'No Wi-Fi? No problem. Jot down ideas anywhere and Notebean syncs the moment you`re back online.',
  },
  {
    Icon: SmartphoneIcon,
    title: 'Feels at Home on Any Screen',
    description:
      'Designed from the ground up for mobile, with gestures, widgets, and a UI that feels native on both Android and iOS.',
  },
  {
    Icon: RefreshCwIcon,
    title: 'Picks Up Where You Left Off',
    description:
      'Switch devices mid-thought. Auto Sync keeps every word, sketch, and sticky note perfectly in step.',
  },
];

export const plans = [
    {
      name: 'Free',
      monthlyPrice: '$0',
      yearlyPrice: '$0',
      description: 'Perfect for getting started with organized note-taking.',
      features: [
        { name: 'Small ad banners', included: true },
        { name: 'Up to 50 notes', included: true },
        { name: 'Advanced formatting', included: true },
        { name: '7 days auto sync', included: true },
        { name: 'Standard support', included: true },
        { name: 'AI Summaries', included: false },
        { name: 'Unlimited attachments', included: false },
      ],
      popular: false,
    },
    {
      name: 'Pro',
      monthlyPrice: '$9',
      yearlyPrice: '$89',
      description: 'Unlock the full power of Notebean with advanced features.',
      features: [
        { name: 'Ad Free', included: true },
        { name: 'Unlimited notes', included: true },
        { name: 'Advanced formatting', included: true },
        { name: 'Unlimited devices', included: true },
        { name: 'Unlimited Manual Sync', included: true },
        { name: 'Priority 24/7 support', included: true },
        { name: 'AI-Powered Summaries', included: true },
        { name: 'Real-time collaboration', included: true },
      ],
      cta: 'Go Pro',
      popular: true,
    },
  ];

  export const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.',
    },
    {
      question: 'What happens if I cancel my Pro subscription?',
      answer: 'Your account will revert to the Free plan at the end of your billing cycle. Your existing notes will remain safe, but you won\'t be able to add new ones if you\'ve exceeded the Free limit.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard end-to-end encryption for all your notes. Only you can access your data.',
    },
    {
      question: 'Do you offer a student discount?',
      answer: 'Yes! Students with a valid .edu email address can get 50% off our annual Pro plan. Contact our support team to apply.',
    },
  ];