import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="container mx-auto px-8 py-16 lg:px-8 max-w-3xl pt-32">
        <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Get in Touch</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Have a question about NoteBean or need support? Our team is here to help. 
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full gap-4">
        {/* Contact Info */}
          <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">Contact Information</h3>
            <p className="text-text-secondary mb-6">
              Prefer to reach out directly? You can use the following contact details or connect with us on social media.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-primary">Email</h4>
                  <p className="text-text-secondary">organimind8@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-primary">Office</h4>
                  <p className="text-text-secondary">Bhavnagar, Gujarat 364001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-primary">Phone</h4>
                  <p className="text-text-secondary">+91 9913863602</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
          <div className="bg-gradient-to-br from-accent/80 to-accent/10 rounded-2xl p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 rounded-xl border ring-2 ring-primary/20 border-primary outline-none transition-colors bg-transparent text-text-primary placeholder:text-white"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 rounded-xl border ring-2 ring-primary/20 border-primary outline-none transition-colors bg-transparent text-text-primary placeholder:text-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 rounded-xl border ring-2 ring-primary/20 border-primary outline-none transition-colors bg-transparent text-text-primary placeholder:text-white"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                  className="w-full px-4 py-3 rounded-xl border ring-2 ring-primary/20 border-primary outline-none transition-colors bg-transparent text-text-primary placeholder:text-white"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-secondary text-white font-bold transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
