export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Book",
      description: "Schedule a pickup online or drop off your laundry at our location."
    },
    {
      number: 2,
      title: "Wash",
      description: "We clean your items using high-quality detergents and professional equipment."
    },
    {
      number: 3,
      title: "Fold",
      description: "Your laundry is expertly folded and packaged for maximum convenience."
    },
    {
      number: 4,
      title: "Return",
      description: "We deliver your fresh laundry to your door or have it ready for pickup."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How It Works</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our simple process makes getting clean laundry effortless.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
