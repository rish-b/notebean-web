import { Check, X, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { plans, faqs } from '../constant';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the plan that works best for your productivity workflow. No hidden fees.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center pt-8">
            <div className="bg-surface p-1 rounded-full flex items-center shadow-inner">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === 'monthly'
                    ? 'bg-accent text-text-primary shadow-md'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === 'yearly'
                    ? 'bg-accent text-text-primary shadow-md'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Yearly <span className="ml-1 text-[10px] bg-accent/20 text-text-primary px-2 py-0.5 rounded-full uppercase">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-surface rounded-3xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                plan.popular ? 'border-accent' : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-text-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-text-primary">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-text-primary">{activeTab === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                  <span className="text-text-secondary font-medium">/{activeTab === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {plan.cta && <button
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 mb-8 shadow-lg active:scale-95 ${
                  plan.popular
                    ? 'bg-accent text-text-primary hover:bg-accent/10'
                    : 'bg-white text-text-primary hover:bg-accent/10 border-2 border-accent/20'
                }`}
              >
                {plan.cta}
              </button>}

              <div className="space-y-4">
                <p className="text-xs font-bold text-text-primary uppercase tracking-widest">
                  What's included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-text-secondary/30 shrink-0" />
                      )}
                      <span className={`${feature.included ? 'text-text-primary' : 'text-text-secondary/50'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-text-primary">Frequently Asked Questions</h2>
            <p className="text-text-secondary">
              Everything you need to know about our plans and billing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors"
                >
                  <span className="font-bold text-text-primary pr-4">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'pb-6 max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 bg-accent rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent transition-transform duration-700 group-hover:scale-110"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Still have questions?</h2>
            <p className="text-text-secondary/80 max-w-xl mx-auto">
              Our support team is here to help you choose the best plan for your needs.
            </p>
            <button className="px-10 py-4 bg-white text-text-primary font-bold rounded-2xl hover:bg-background transition-all duration-300 shadow-xl active:scale-95">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;