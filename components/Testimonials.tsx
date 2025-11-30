import React from 'react';
import ScrollReveal from './ScrollReveal';

const TestimonialCard = ({ name, role, company, content, image }: any) => (
  <div className="flex flex-col p-8 rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/10 h-full hover:bg-zinc-900/50 transition-colors">
    <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-1 font-light">
      "{content}"
    </p>
    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
      <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover grayscale opacity-70" />
      <div>
        <h4 className="text-white font-medium text-sm">{name}</h4>
        <p className="text-zinc-500 text-xs">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jaber Jaber",
      role: "Founder",
      company: "RightNow AI",
      content: "The level of polish in DevControl is unmatched. It has completely replaced my fragmented Notion setup. I can finally see everything in one place.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Priyanka Mandal",
      role: "CTO",
      company: "LancePilot",
      content: "Security was our main concern, but the zero-knowledge vault architecture convinced us. It's rare to find a tool that balances UX and security so well.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Uladzislau Rasliak",
      role: "Product Lead",
      company: "Vivaldi",
      content: "The client portal feature alone is worth the subscription. My clients love seeing the progress bars and having a dedicated place to approve designs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter">Trusted by Builders</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100} className="h-full">
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;