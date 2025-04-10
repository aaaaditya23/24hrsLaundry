import { TShirtIcon, LeafIcon, ClockIcon } from '@/lib/icons';

export default function FeaturesSection() {
  const features = [
    {
      icon: <TShirtIcon className="w-6 h-6" />,
      title: "Exceptional Quality",
      description: "Our expert technicians ensure your clothes are cleaned to perfection."
    },
    {
      icon: <LeafIcon className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "We use environmentally friendly detergents and energy-efficient machines."
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Get your laundry back in as little as 24 hours with our express service."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Why Choose FreshPress?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality service sets us apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-neutral-100 rounded-lg"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
