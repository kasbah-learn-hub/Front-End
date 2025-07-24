"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Experience",
    role: "Transforming Knowledge Through Real-World Practice",
    content:
      "This platform completely transformed my interview preparation. The AI-generated questions were spot-on and helped me land my dream job!",
    rating: 5,
    avatar: "EX",
  },
  {
    name: "Community",
    role: "Uniting Creators for Shared Success",
    content:
      "The mock interviews felt incredibly realistic. The feedback was detailed and helped me improve my problem-solving approach significantly.",
    rating: 5,
    avatar: "CO",
  },
  {
    name: "Community",
    role: "Transforming Knowledge Through Real-World Practice",
    content:
      "I practiced for weeks using this platform. The variety of questions and real-time feedback gave me the confidence I needed to succeed.",
    rating: 5,
    avatar: "CO",
  },
];

export const CardsAbout = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        testimonialsRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#06070A]) relative overflow-hidden bg-black py-20">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="to-accent mb-6 ml-1 bg-gradient-to-r from-blue-800 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Where Community Fuels Growth, and Learning is an Experience
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            At Skill, a strong community, a growth mindset, and hands-on learning are the
            foundation, shaping meaningful and impactful experiences.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card border-border/50 group relative rounded-2xl border bg-[#0E0F14] p-8 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-800/50 transition-colors group-hover:text-blue-600/50" />

              <div className="mb-6 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mb-6 text-lg leading-relaxed text-white">&quot;{testimonial.content}&quot;</p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700/50">
                  <span className="text-primary font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
