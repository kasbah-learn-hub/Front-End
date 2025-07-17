"use client";

import * as React from "react";
import {
  Menu,
  Github,
  MessageCircle,
  Database,
  Zap,
  GitBranch,
  RotateCcw,
  Shield,
  Search,
  Code,
  ArrowUpDown,
  ChevronDown,
  X,
} from "lucide-react";

const productItems = [
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

const solutionsItems = [
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

const companyItems = [
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

const DropdownItem = ({ item, category }) => (
  <a
    href={item.href}
    className="group block rounded-lg p-3 leading-none no-underline transition-all duration-200 outline-none select-none hover:bg-gray-800/50"
  >
    <div className="flex items-center gap-3">
      {item.icon && (
        <div className="text-gray-400 transition-colors group-hover:text-white">{item.icon}</div>
      )}
      <div>
        <div className="mb-1 text-sm font-medium text-white group-hover:text-white">
          {item.title}
        </div>
        {item.description && (
          <p className="text-sm leading-tight text-gray-400 group-hover:text-gray-300">
            {item.description}
          </p>
        )}
      </div>
    </div>
  </a>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600">
            <span className="text-sm font-bold text-black">N</span>
          </div>
          <span className="text-xl font-bold text-white">Neon</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:ml-8 lg:flex">
          <div className="flex items-center space-x-1">
            {/* Product Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white">
                <span>Product</span>
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-[800px] overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/95 shadow-2xl backdrop-blur-xl">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {productItems.map(category => (
                        <div key={category.category} className="space-y-4">
                          <h3 className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map(item => (
                              <DropdownItem
                                key={item.title}
                                item={item}
                                category={category.category}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white">
                <span>Solutions</span>
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-[400px] overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/95 shadow-2xl backdrop-blur-xl">
                  <div className="p-6">
                    <div className="space-y-1">
                      {solutionsItems.map(item => (
                        <DropdownItem key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Links */}
            <a
              href="/docs"
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white"
            >
              Docs
            </a>

            <a
              href="/pricing"
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white"
            >
              Pricing
            </a>

            {/* Company Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white">
                <span>Company</span>
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-[400px] overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/95 shadow-2xl backdrop-blur-xl">
                  <div className="p-6">
                    <div className="space-y-1">
                      {companyItems.map(item => (
                        <DropdownItem key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center space-x-2">
          {/* Discord */}
          <a
            href="#"
            className="hidden items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white md:flex"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Discord</span>
          </a>

          {/* GitHub */}
          <a
            href="#"
            className="hidden items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white md:flex"
          >
            <Github className="h-4 w-4" />
            <span>19.1k</span>
          </a>

          {/* Log In */}
          <a
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-gray-800/30 hover:text-white"
          >
            Log In
          </a>

          {/* Sign Up */}
          <a
            href="#"
            className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-medium text-black shadow-lg transition-all duration-200 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-emerald-500/25"
          >
            Sign Up
          </a>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-white transition-all duration-200 hover:bg-gray-800/50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-6 px-4 py-6">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Product
              </h3>
              {productItems
                .flatMap(category => category.items)
                .map(item => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-3 py-2 text-white/90 transition-colors hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="text-gray-400">{item.icon}</div>
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </a>
                ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Solutions
              </h3>
              {solutionsItems.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-white/90 transition-colors hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <a
                href="/docs"
                className="block py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </a>
              <a
                href="/pricing"
                className="block py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Company
              </h3>
              {companyItems.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-white/90 transition-colors hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </a>
              ))}
            </div>

            <div className="space-y-3 border-t border-gray-800/50 pt-4">
              <a
                href="#"
                className="flex items-center space-x-3 py-2 text-white/90 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Discord</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 py-2 text-white/90 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm font-medium">GitHub (19.1k)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
