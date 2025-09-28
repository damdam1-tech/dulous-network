import { useState } from "react";

const DoulosNetworkWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted! We'll contact you soon at " + formData.email);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Custom CSS for colors */}
      <style>{`
        :root {
          --payne-gray: #455A64;
          --silver: #C0C0C0;
          --mahogany: #C04000;
        }
        .bg-payne-gray { background-color: var(--payne-gray); }
        .text-payne-gray { color: var(--payne-gray); }
        .border-payne-gray { border-color: var(--payne-gray); }
        .bg-silver { background-color: var(--silver); }
        .text-silver { color: var(--silver); }
        .bg-mahogany { background-color: var(--mahogany); }
        .text-mahogany { color: var(--mahogany); }
        .hover\\:bg-mahogany:hover { background-color: var(--mahogany); }
      `}</style>
      {/* Navigation */}
      <nav className="bg-payne-gray border-b border-silver fixed w-full z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-white">Doulos Network</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "Pricing", "Portfolio", "Testimonials", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-mahogany bg-silver"
                      : "text-silver hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section (Home) */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-payne-gray to-silver text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Doulos Network
          </h1>
          <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
            Why Hire Many When One Skilled VA Can Handle It
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Professional Virtual Assistant services for businesses and professionals. Streamline your administrative tasks with reliable support from Lagos, Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('pricing')}
              className="px-6 py-3 bg-mahogany text-white rounded-md font-medium hover:bg-mahogany/90 transition-colors"
            >
              View Pricing
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-payne-gray transition-colors"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-payne-gray">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tailored administrative support for busy businesses and professionals. Let us handle the details so you can focus on growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Email Management", desc: "Organize inbox, respond to routine emails, and flag priorities." },
              { title: "Calendar Scheduling", desc: "Manage appointments, meetings, and reminders across time zones." },
              { title: "Data Entry", desc: "Accurate input and organization of data in spreadsheets or databases." },
              { title: "Research", desc: "Market research, competitor analysis, and information gathering." },
              { title: "Travel Arrangements", desc: "Book flights, hotels, and itineraries with cost optimization." },
              { title: "General Admin Support", desc: "Document preparation, filing, and other routine tasks." }
            ].map((service, index) => (
              <div key={index} className="bg-silver/10 border border-silver rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-payne-gray">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-payne-gray">Pricing Plans</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Flexible packages starting at affordable rates. Hourly or retainer options available. Custom quotes for specialized needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "$15/hr", features: ["Email & Calendar", "Data Entry", "Basic Research", "Up to 10 hours/week"] },
              { name: "Standard", price: "$25/hr", features: ["All Basic + Travel", "Advanced Research", "Document Management", "Up to 20 hours/week"] },
              { name: "Premium", price: "$35/hr", features: ["Full Admin Suite", "Dedicated Support", "Priority Response", "Unlimited hours + retainer"] }
            ].map((plan, index) => (
              <div key={index} className="bg-white border border-silver rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-payne-gray">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6 text-mahogany">{plan.price}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-mahogany mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="w-full px-4 py-2 bg-mahogany text-white rounded-md font-medium hover:bg-mahogany/90 transition-colors"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-payne-gray">Client Dashboard Preview</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Access a secure dashboard to track tasks, communicate in real-time, and monitor progress. Designed for seamless collaboration.
          </p>
          <img
            src="https://via.placeholder.com/800x400?text=Dashboard+Preview:+Task+Management,+Calendar,+Reports"
            alt="Client Dashboard Preview"
            className="mx-auto rounded-lg shadow-lg max-w-4xl"
          />
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-payne-gray">Our Work Portfolio</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            See how we've helped businesses streamline operations and save time.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://via.placeholder.com/400x300?text=Email+Optimization+Project", title: "Email System Overhaul", desc: "Reduced inbox overload by 70% for a consulting firm." },
              { img: "https://via.placeholder.com/400x300?text=Travel+Coordination", title: "Executive Travel Planning", desc: "Coordinated international trips for 50+ professionals." },
              { img: "https://via.placeholder.com/400x300?text=Research+Report", title: "Market Research Report", desc: "Delivered comprehensive insights for startup expansion." }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-silver rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-payne-gray">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-payne-gray">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Doulos Network transformed our admin chaos into smooth operations. Highly recommended!", author: "Jane Doe, CEO TechStartup" },
              { quote: "Reliable, professional, and cost-effective. Saved us hours every week.", author: "John Smith, Marketing Director" },
              { quote: "Excellent virtual support from Nigeria – responsive and detail-oriented.", author: "Sarah Lee, Consultant" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-silver/10 border border-silver rounded-lg p-6 italic">
                <p className="mb-4 text-gray-700">"{testimonial.quote}"</p>
                <p className="font-semibold text-payne-gray">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact/Booking Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-payne-gray">Get In Touch & Book Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to streamline your business? Schedule a free consultation or send us your requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-payne-gray">Contact Information</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-mahogany mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  zakariprecious3@gmail.com
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-mahogany mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 915 856 3180
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-mahogany mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657l-4.243 4.243a2 2 0 01-2.828 0l-4.243-4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Lagos State, Nigeria
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold mb-6 text-payne-gray">Booking/Inquiry Form</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-silver rounded-md bg-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-silver rounded-md bg-white"
              />
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                placeholder="Service Interested In"
                required
                className="w-full px-4 py-3 border border-silver rounded-md bg-white"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-silver rounded-md bg-white"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-mahogany text-white rounded-md font-medium hover:bg-mahogany/90 transition-colors"
              >
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-payne-gray border-t border-silver py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-silver">© 2025 Doulos Network. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DoulosNetworkWebsite;