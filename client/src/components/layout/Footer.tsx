import { Link } from 'wouter';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  YelpIcon,
  MapMarkerIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@/lib/icons';

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white text-2xl font-bold">FreshPress</span>
              <span className="ml-1 text-green-500 font-medium">Laundry</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional laundry services for busy lives. Quality, convenience, and reliability in every wash.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <YelpIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, '#services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, '#pricing')}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, '#about')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, '#faq')}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, '#contact')}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#booking" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, '#booking')}
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Wash & Fold
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Ironing & Pressing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Bedding & Linens
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Pickup & Delivery
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapMarkerIcon className="h-5 w-5 mt-1 mr-2 text-gray-400" />
                <span className="text-gray-400">123 Laundry Lane, Cleansville, CA 90210</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mt-1 mr-2 text-gray-400" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mt-1 mr-2 text-gray-400" />
                <span className="text-gray-400">info@freshpresslaundry.com</span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="h-5 w-5 mt-1 mr-2 text-gray-400" />
                <span className="text-gray-400">Mon-Fri: 8am - 8pm<br />Sat: 9am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© {new Date().getFullYear()} FreshPress Laundry. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
