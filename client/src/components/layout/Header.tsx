import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { MenuIcon } from '@/lib/icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About Us' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary text-2xl font-bold">CleanWave</span>
              <span className="ml-1 text-green-500 font-medium">Laundry</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="#booking" 
              className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={(e) => scrollToSection(e, '#booking')}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary font-medium"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#booking" 
              className="block py-2 text-primary hover:text-blue-700 font-medium"
              onClick={(e) => scrollToSection(e, '#booking')}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
