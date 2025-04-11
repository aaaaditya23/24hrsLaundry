import { ArrowRightIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const services = [
    {
      id: 'wash-fold',
      title: 'Wash & Fold',
      description: 'Your clothes washed, dried, and folded to perfection. Ideal for everyday laundry needs.',
      price: 'From Rs. 100/item',
      image: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?auto=format&fit=crop&w=400&h=250'
    },
    {
      id: 'dry-cleaning',
      title: 'Dry Cleaning',
      description: 'Professional cleaning for delicate fabrics, suits, dresses, and specialty items.',
      price: 'From Rs. 150/item',
      image: 'https://images.unsplash.com/photo-1551761429-8232f9f5955c?auto=format&fit=crop&w=400&h=250'
    },
    {
      id: 'ironing',
      title: 'Ironing & Pressing',
      description: 'Get wrinkle-free clothes with our professional ironing and pressing service.',
      price: 'From Rs. 20/item',
      image: 'https://images.unsplash.com/photo-1589642864572-d3a343bfti89?auto=format&fit=crop&w=400&h=250'
    },
    {
      id: 'bedding',
      title: 'Bedding & Linens',
      description: 'Specialized cleaning for comforters, duvets, sheets, and all your home linens.',
      price: 'From Rs. 50/item',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=400&h=250'
    },
    {
      id: 'commercial',
      title: 'Commercial Services',
      description: 'Reliable laundry solutions for businesses, hotels, restaurants, and more.',
      price: 'Custom Pricing',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&h=250'
    },
    {
      id: 'pickup',
      title: 'Pickup & Delivery',
      description: 'Convenient door-to-door service. We pick up your dirty laundry and deliver it clean.',
      price: 'From $5.99',
      image: 'https://images.unsplash.com/photo-1604335398980-eff7b3cc4ec0?auto=format&fit=crop&w=400&h=250'
    }
  ];

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
    <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to meet all your laundry needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-full h-48 bg-neutral-200">
                <img 
                  src={service.image} 
                  alt={`${service.title} Service`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <a 
                    href="#" 
                    className="text-sm text-blue-400 hover:text-primary font-medium flex items-center"
                  >
                    Learn More 
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#pricing" 
            className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center"
            onClick={(e) => scrollToSection(e, '#pricing')}
          >
            View Pricing
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
