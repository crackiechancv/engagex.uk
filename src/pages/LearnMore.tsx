import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Target, Zap, BarChart3, Users2, MessageSquare } from 'lucide-react';

export default function LearnMore() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(-45deg, #45fffc, #2892bd, #0038b0, #0a0440) 0% 0% / 400% 400%',
      animation: 'gradientAnimation 15s ease infinite'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-white hover:text-blue-200 transition mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="space-y-12">
          {/* About Us Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About EngageX</h1>
            <p className="text-xl text-gray-300 mb-8">
              EngageX is a leading social media management agency helping businesses transform their online presence. 
              With years of experience and a data-driven approach, we've helped hundreds of businesses achieve their social media goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Trophy className="h-8 w-8 text-blue-300" />,
                  title: "Industry Leaders",
                  description: "Recognized as one of the top social media agencies in 2024"
                },
                {
                  icon: <Target className="h-8 w-8 text-blue-300" />,
                  title: "Results Driven",
                  description: "Average 300% increase in engagement for our clients"
                },
                {
                  icon: <Users2 className="h-8 w-8 text-blue-300" />,
                  title: "Expert Team",
                  description: "Team of certified social media strategists and content creators"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://d.newsweek.com/en/full/2406329/employees-working.jpg" 
                  alt="Team working on social media strategy" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-blue-300" />,
                    title: "Strategic Planning",
                    description: "We develop comprehensive strategies aligned with your business goals"
                  },
                  {
                    icon: <BarChart3 className="h-6 w-6 text-blue-300" />,
                    title: "Data Analysis",
                    description: "Regular performance tracking and optimization based on analytics"
                  },
                  {
                    icon: <MessageSquare className="h-6 w-6 text-blue-300" />,
                    title: "Engagement Focus",
                    description: "Building meaningful connections with your target audience"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-300 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-xl text-white/90 mb-8">Join hundreds of successful businesses who trust EngageX</p>
            <Link 
              to="/get-started" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition font-bold"
            >
              Get Started Today
              <ArrowLeft className="ml-2 h-5 w-5 transform rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}