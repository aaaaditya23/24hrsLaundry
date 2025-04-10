import { CheckIcon } from '@/lib/icons';

export default function PricingSection() {
  const plans = [
    {
      name: "Standard Plan",
      description: "Perfect for individuals with regular laundry needs",
      price: "Rs. 2000",
      unit: "/lb",
      features: [
        "Wash, dry & fold service",
        "48-hour turnaround",
        "Standard detergent included",
        "Folded & packaged neatly",
        "25 Cloths Included"
      ],
      cta: "Select Plan",
      popular: false
    },
    {
      name: "Premium Plan",
      description: "Ideal for those who want extra care for their clothes",
      price: "Rs. 3000",
      unit: "/lb",
      features: [
        "Wash, dry & fold service",
        "24-hour turnaround",
        "Premium detergent & fabric softener",
        "Stain treatment included",
        "Organized by clothing type",
        "25 Cloths Included"
      ],
      cta: "Select Plan",
      popular: true
    },
    {
      name: "Business Plan",
      description: "Custom solutions for businesses with high volume needs",
      price: "Custom",
      unit: "pricing",
      features: [
        "All premium plan features",
        "Volume discounts available",
        "Dedicated account manager",
        "Customized pickup schedule",
        "Monthly billing options"
      ],
      cta: "Contact Us",
      popular: false
    }
  ];

  const additionalServices = [
    { name: "Dry Cleaning (shirts)", price: "Rs. 100/item" },
    { name: "Dry Cleaning (pants)", price: "Rs. 120/item" },
    { name: "Dry Cleaning (suits)", price: "Rs. 200/item" },
    { name: "Ironing", price: "Rs. 30/item" },
    { name: "Bedding (Queen/King)", price: "Rs. 200/item" },
    { name: "Pickup & Delivery", price: "Free" }
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
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Pricing</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                ${plan.popular 
                  ? 'bg-primary/5 border-2 border-primary shadow-lg' 
                  : 'bg-neutral-100 border border-neutral-200'
                } 
                rounded-xl overflow-hidden relative transition-transform hover:-translate-y-1
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-400 text-white py-1 px-3 rounded-bl-lg text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="text-green-500 h-5 w-5 mt-0.5 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.name === "Business Plan" ? "#contact" : "#booking"} 
                  className="block text-center bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  onClick={(e) => scrollToSection(e, plan.name === "Business Plan" ? "#contact" : "#booking")}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-neutral-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{service.name}</span>
                <span className="font-semibold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
