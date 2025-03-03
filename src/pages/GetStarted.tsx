import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Calendar, Users, BarChart } from 'lucide-react';

interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function GetStarted() {
  const [formData, setFormData] = useState<ConsultationForm>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Consultation form submitted:', formData);
    setSubmitted(true);
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ];

  // Get tomorrow's date as the minimum date for scheduling
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 30 days from now as the maximum date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  if (submitted) {
    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(-45deg, #45fffc, #2892bd, #0038b0, #0a0440) 0% 0% / 400% 400%'
      }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center text-white hover:text-blue-200 transition mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 text-center">
            <div className="flex flex-col items-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Consultation Scheduled!</h2>
              <p className="text-xl text-gray-300">
                Thank you for scheduling a consultation with EngageX. We'll be in touch shortly to confirm your appointment.
              </p>
              <div className="mt-8">
                <Link to="/" className="glass-morphism text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-bold">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(-45deg, #45fffc, #2892bd, #0038b0, #0a0440) 0% 0% / 400% 400%'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-white hover:text-blue-200 transition mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Free Consultation</h2>
              <p className="text-xl text-gray-300 mb-8">
                Take the first step towards transforming your social media presence. Schedule a free 30-minute consultation with our experts.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">30-Minute Strategy Session</h3>
                    <p className="text-gray-300 mt-1">Discuss your goals and get personalized recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Expert Consultation</h3>
                    <p className="text-gray-300 mt-1">Meet with our social media strategists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <BarChart className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Custom Strategy</h3>
                    <p className="text-gray-300 mt-1">Get a tailored plan for your business</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-300">Business Type</label>
                <select
                  id="businessType"
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="service">Service Business</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    min={minDate}
                    max={maxDateStr}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300">Preferred Time</label>
                  <select
                    id="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Additional Information</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your business and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full glass-morphism text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-bold"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}