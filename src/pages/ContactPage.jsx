import { useState } from 'react';
import { contactInfo } from '../constant';

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
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

 

  return (
    <div className="pt-32 bg-accent w-full min-h-screen">

      <div className="text-center mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Get in Touch</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Have a question about NoteBean or need support? Our team is here to help.
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="bg-white rounded-t-[3rem] shadow-2xl">
        <div className="container mx-auto px-6 md:px-16 py-20 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-20 lg:gap-32">
            <div className="space-y-8 w-full lg:w-1/2 max-w-xl">
              <div>
                <h3 className="text-center lg:text-left text-2xl font-semibold text-text-primary mb-4">Contact Information</h3>
                <p className="text-center lg:text-left text-text-secondary mb-6">
                  Prefer to reach out directly? You can use the following contact details or connect with us on social media.
                </p>
              </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 text-text-secondary">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-text-primary">{item.title}</h4>
                        <p>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 bg-surface/50 border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-text-primary mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary placeholder:text-gray-400"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary placeholder:text-gray-400 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-secondary text-white font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
