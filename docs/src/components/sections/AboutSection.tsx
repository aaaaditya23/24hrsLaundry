import { UserIcon, TShirtIcon } from '@/lib/icons';

// Create a SmileIcon component since it wasn't included in our icons file
const SmileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

export default function AboutSection() {
  const stats = [
    {
      icon: <UserIcon className="h-6 w-6" />,
      value: "20+",
      label: "Team Members"
    },
    {
      icon: <SmileIcon className="h-6 w-6" />,
      value: "5,000+",
      label: "Happy Customers"
    },
    {
      icon: <TShirtIcon className="h-6 w-6" />,
      value: "1M+",
      label: "Items Cleaned"
    }
  ];

  return (
    <section id="about" className="py-16 bg-neutral-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-6">
              Clean Clothes, Clean Conscience
            </h2>
            <p className="text-gray-600 mb-4">
              CleanWave Laundry was founded in 2010 with a simple mission: to provide busy people with high-quality laundry services that save time and reduce stress.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small operation has grown into a full-service laundry company serving thousands of satisfied customers. Our commitment to quality, sustainability, and customer satisfaction has remained unchanged.
            </p>
            <p className="text-gray-600 mb-4">
              We use environmentally friendly detergents, energy-efficient machines, and water-saving techniques to minimize our environmental footprint while delivering exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{stat.value}</h4>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=300&h=400" 
              alt="Our laundry facility" 
              className="rounded-lg object-cover h-64 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1621365856311-49b1ead037c8?auto=format&fit=crop&w=300&h=200" 
              alt="Our team at work" 
              className="rounded-lg object-cover h-auto w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1583401575851-9ea15716f3e2?auto=format&fit=crop&w=300&h=200" 
              alt="Eco-friendly detergents" 
              className="rounded-lg object-cover h-auto w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=300&h=400" 
              alt="Delivery service" 
              className="rounded-lg object-cover h-64 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
