import React, { useState } from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const PricingCard = ({ 
  title, 
  price, 
  yearlyPrice, 
  billingCycle, 
  description, 
  features, 
  recommended = false, 
  ctaText = "Get Started" 
}: any) => {
  const currentPrice = billingCycle === 'monthly' ? price : yearlyPrice;
  const isCustom = price === 'Custom';

  return (
    <div className="relative h-full">
        {recommended && (
            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl blur opacity-20" />
        )}
        <div className={`relative p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 backdrop-blur-sm ${
          recommended 
            ? 'bg-zinc-900/80 border-white/20 shadow-2xl z-10' 
            : 'bg-black/40 border-white/10 hover:border-white/20'
        }`}>
          <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
              <p className="text-zinc-500 text-sm h-10">{description}</p>
          </div>
          
          <div className="flex items-baseline gap-1 mb-8">
              {isCustom ? (
                 <span className="text-4xl font-bold text-white tracking-tight">Custom</span>
              ) : (
                 <>
                    <span className="text-4xl font-bold text-white tracking-tight">${currentPrice}</span>
                    <span className="text-zinc-500 font-medium">/{billingCycle === 'monthly' ? 'mo' : 'mo billed yearly'}</span>
                 </>
              )}
          </div>
          
          <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all mb-10 ${
            recommended 
              ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
              : 'bg-zinc-900/50 text-white border border-white/10 hover:bg-zinc-800'
          }`}>
              {ctaText}
          </button>

          <div className="space-y-4 flex-1">
              {features.map((feature: any, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Check size={16} className={`shrink-0 ${recommended ? 'text-blue-400' : 'text-zinc-500'}`} />
                      <span>{feature}</span>
                  </div>
              ))}
          </div>
        </div>
    </div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">Simple pricing</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Start building for free. Upgrade when you scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle Switch */}
        <ScrollReveal delay={100}>
            <div className="flex justify-center items-center gap-4 mb-20">
                <span className={`text-sm font-medium cursor-pointer transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'}`} onClick={() => setBillingCycle('monthly')}>Monthly</span>
                <button 
                    onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                    className="w-12 h-6 rounded-full bg-zinc-800 relative flex items-center px-1 transition-colors hover:bg-zinc-700"
                >
                    <motion.div 
                        className="w-4 h-4 rounded-full bg-white shadow-sm"
                        animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </button>
                <span className={`text-sm font-medium cursor-pointer transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-zinc-500'}`} onClick={() => setBillingCycle('yearly')}>Yearly</span>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ScrollReveal delay={200} className="h-full">
                <PricingCard 
                    title="Developer"
                    price="0"
                    yearlyPrice="0"
                    billingCycle={billingCycle}
                    description="For hobbyists and side projects."
                    features={[
                        "Up to 3 Projects",
                        "Basic Task Management",
                        "Local Secrets only",
                        "Community Support"
                    ]}
                    ctaText="Start for Free"
                />
            </ScrollReveal>

            <ScrollReveal delay={300} className="h-full">
                <PricingCard 
                    title="Pro"
                    price="29"
                    yearlyPrice="24"
                    billingCycle={billingCycle}
                    description="For professional freelancers."
                    recommended={true}
                    features={[
                        "Unlimited Projects",
                        "Advanced Client Portal",
                        "Cloud Secrets Vault",
                        "Server Automation",
                        "Priority Support"
                    ]}
                    ctaText="Get Started"
                />
            </ScrollReveal>

            <ScrollReveal delay={400} className="h-full">
                <PricingCard 
                    title="Agency"
                    price="99"
                    yearlyPrice="79"
                    billingCycle={billingCycle}
                    description="For dev shops and agencies."
                    features={[
                        "Everything in Pro",
                        "White-label Client Portal",
                        "Custom Domain",
                        "SSO & Audit Logs",
                        "Dedicated Support"
                    ]}
                    ctaText="Contact Sales"
                />
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;