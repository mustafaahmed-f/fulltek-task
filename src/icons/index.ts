// Re-export commonly used icons for easy access
export {
  // Navigation
  Home,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  
  // Actions
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Copy,
  Download,
  Upload,
  Share,
  
  // UI Elements
  Search,
  Filter,
  Settings,
  MoreHorizontal,
  MoreVertical,
  Eye,
  EyeOff,
  Star,
  Heart,
  ThumbsUp,
  
  // Status
  Check,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  XCircle,
  
  // User & Auth
  User,
  Users,
  UserPlus,
  LogIn,
  LogOut,
  Lock,
  Unlock,
  Key,
  
  // Communication
  Mail,
  Phone,
  MessageCircle,
  Send,
  Bell,
  BellOff,
  
  // Files & Media
  File,
  FileText,
  Image,
  Video,
  Music,
  Folder,
  FolderOpen,
  
  // Technology
  Code,
  Database,
  Server,
  Wifi,
  WifiOff,
  Smartphone,
  Monitor,
  
  // Business
  Calendar,
  Clock,
  DollarSign,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  
  // Location
  MapPin,
  Map,
  Navigation,
  Compass,
  
  // Weather
  Sun,
  Moon,
  Cloud,
  CloudRain,
  
  // Social
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  
  // Others
  Zap,
  Layers,
  Grid,
  List,
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

// Custom icon type for consistency
export type IconType = React.ComponentType<{
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}>;
