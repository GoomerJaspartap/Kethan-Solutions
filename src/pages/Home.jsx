import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield, TrendingUp, Calculator, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import EMICalculator from '../components/EMICalculator';

const Home = () => {
  const services = [
    {
      title: 'Personal Loans',
      description: 'Quick and hassle-free personal loans for all your needs',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Business Loans',
      description: 'Fuel your business growth with our flexible loan options',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Home Loans',
      description: 'Make your dream home a reality with our competitive rates',
      icon: Shield,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Faster Approvals',
      description: 'Get loan approvals in as little as 24 hours'
    },
    {
      icon: TrendingUp,
      title: 'Lower Rates',
      description: 'Competitive interest rates tailored to your profile'
    },
    {
      icon: Users,
      title: 'Personalized Support',
      description: '1-on-1 guidance throughout your loan journey'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#000035] via-[#1a1a5e] to-[#2d2d8a] text-white">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your Financial Goals,{' '}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Our Priority
                  </span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Expert financial guidance and personalized loan solutions in Bachupally, Hyderabad. 
                  Let us help you achieve your dreams with our trusted services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#000035] hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift"
                  asChild
                >
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">₹100Cr+</div>
                  <div className="text-sm text-gray-300">Loans Processed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/Kethan-Solutions/Images/Home Page Image.jpg" 
                    alt="Kethan Solutions - Financial Services" 
                    className="w-full h-auto rounded-lg"
                    style={{ objectFit: 'contain', maxHeight: '600px' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Loan Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect loan solution for your needs with our comprehensive range of financial services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-[#000035] text-[#000035] hover:bg-[#000035] hover:text-white"
                      asChild
                    >
                      <Link to="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="bg-[#000035] hover:bg-[#000035]/90 text-white px-8 py-4 hover-lift"
              asChild
            >
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Plan Your Finances</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our advanced EMI calculator to plan your loan repayments and make informed financial decisions
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <EMICalculator embedded={true} />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose Kethan Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our customer-centric approach and proven track record
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#000035] to-[#4a4a9a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#000035] to-[#4a4a9a] text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready for 1-on-1 Personalized Financial Help?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Get expert guidance tailored to your unique financial situation. Our experienced team is here to help you make the right decisions.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#000035] hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 w-5 h-5" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Personalized Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;