import { Bell, FilePen, Image as ImageIcon, Laptop, Layout, ListChecks, Moon, Palette, PenSquare, Radio, RefreshCw, Search, ShieldOff, Smartphone, Smile, Sparkles, Tablet, Trophy, WifiOff } from "lucide-react";

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