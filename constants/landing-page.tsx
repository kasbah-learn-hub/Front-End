import {
  Database,
  Zap,
  GitBranch,
  RotateCcw,
  Shield,
  Search,
  Code,
  ArrowUpDown,
} from "lucide-react";

export const productItems = [
  {
    category: "DATABASE",
    items: [
      {
        title: "Autoscaling",
        description: "Automatic instance sizing",
        icon: <Zap className="h-4 w-4" />,
        href: "/autoscaling",
      },
      {
        title: "Connection pooler",
        description: "Thousands of connections",
        icon: <Database className="h-4 w-4" />,
        href: "/connection-pooler",
      },
      {
        title: "Bottomless storage",
        description: "With copy-on-write",
        icon: <Database className="h-4 w-4" />,
        href: "/storage",
      },
      {
        title: "Branching",
        description: "Modern Postgres workflows",
        icon: <GitBranch className="h-4 w-4" />,
        href: "/branching",
      },
      {
        title: "Instant restores",
        description: "Recover TBs in seconds",
        icon: <RotateCcw className="h-4 w-4" />,
        href: "/restores",
      },
    ],
  },
  {
    category: "ECOSYSTEM",
    items: [
      {
        title: "Auth",
        description: "Authenticate your users",
        icon: <Shield className="h-4 w-4" />,
        href: "/auth",
      },
      {
        title: "Search",
        description: "Faster with pg_search",
        icon: <Search className="h-4 w-4" />,
        href: "/search",
      },
      {
        title: "API",
        description: "Manage Neon at scale",
        icon: <Code className="h-4 w-4" />,
        href: "/api",
      },
      {
        title: "AI",
        description: "Embeddings & agents",
        icon: <Zap className="h-4 w-4" />,
        href: "/ai",
      },
      {
        title: "Migrations",
        description: "Minimize downtime",
        icon: <ArrowUpDown className="h-4 w-4" />,
        href: "/migrations",
      },
    ],
  },
];

export const solutionsItems = [
  {
    title: "Startups",
    description: "Scale from zero to millions",
    href: "/solutions/startups",
  },
  {
    title: "Enterprise",
    description: "Built for mission-critical apps",
    href: "/solutions/enterprise",
  },
  {
    title: "Agencies",
    description: "Manage multiple client projects",
    href: "/solutions/agencies",
  },
];

export const companyItems = [
  {
    title: "About",
    description: "Learn about our mission",
    href: "/about",
  },
  {
    title: "Blog",
    description: "Latest news and updates",
    href: "/blog",
  },
  {
    title: "Careers",
    description: "Join our team",
    href: "/careers",
  },
  {
    title: "Contact",
    description: "Get in touch",
    href: "/contact",
  },
];
