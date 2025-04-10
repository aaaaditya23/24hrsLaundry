import { StarIcon, UserIcon } from '@/lib/icons';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      content: "I've been using CleanWave for over a year, and I'm consistently impressed with their quality and attention to detail. My clothes come back fresh, clean, and perfectly folded every time.",
      name: "Sarah Johnson",
      title: "Regular Customer"
    },
    {
      id: 2,
      rating: 5,
      content: "As a busy professional, I don't have time to do laundry. CleanWave's pickup and delivery service has been a game-changer. Their reliability and quality service have made my life so much easier.",
      name: "Michael Chen",
      title: "Premium Plan Customer"
    },
    {
      id: 3,
      rating: 4.5,
      content: "I own a small bed and breakfast, and CleanWave handles all our linens. Their commercial service is affordable, and they're always on time. My guests always comment on the fresh-smelling sheets!",
      name: "Emily Rodriguez",
      title: "Business Customer"
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="text-yellow-400 flex">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 fill-current" />
        ))}
        {hasHalfStar && (
          <StarIcon className="h-4 w-4 fill-current" />
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                  <UserIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
