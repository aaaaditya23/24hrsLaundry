import { useState } from 'react';
import { ChevronDownIcon, ArrowRightIcon } from '@/lib/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "How does the pickup and delivery service work?",
      answer: "Our pickup and delivery service is simple! Schedule a pickup through our website or app, and we'll come to your location at the scheduled time. Once your laundry is clean, we'll deliver it back to you at your preferred time. You can track the status of your order through our app or website."
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods including Apple Pay, Google Pay, and PayPal. For our regular customers, we also offer monthly billing options."
    },
    {
      question: "How do you handle delicate items?",
      answer: "We take special care with delicate items. Our team is trained to identify and properly handle delicate fabrics. We follow care label instructions and use gentle detergents and appropriate wash cycles. For particularly delicate items, we recommend our dry cleaning service."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Your satisfaction is our priority. If you're not completely satisfied with our service, please contact us within 48 hours of receiving your order, and we'll make it right. This may include re-cleaning items at no additional cost or providing a credit for future services."
    },
    {
      question: "What detergents do you use?",
      answer: "We use high-quality, environmentally friendly detergents that are effective yet gentle on fabrics and the environment. Our standard service uses fragrance-free options, but we offer scented alternatives upon request. If you have specific allergies or preferences, let us know, and we can accommodate your needs."
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
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to our most commonly asked questions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-primary hover:text-blue-700 font-medium inline-flex items-center"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Contact our support team
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
