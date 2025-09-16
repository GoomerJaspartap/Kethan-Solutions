import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import ServiceCard from '../components/services/ServiceCard';
import ExpandedServiceCard from '../components/services/ExpandedServiceCard';
import { servicesData, servicePageFeatures } from '../components/services/servicesData';

const Services = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleCardClick = (serviceId) => {
    setSelectedServiceId(serviceId);
  };

  const handleCloseExpandedCard = () => {
    setSelectedServiceId(null);
  };

  const selectedService = servicesData.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#000035] via-[#1a1a5e] to-[#2d2d8a] text-white">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Loan Solutions to Meet{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Your Needs
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive financial solutions tailored to your unique requirements. 
              From personal loans to business financing, we have the perfect loan for every need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any service card to explore detailed information, eligibility criteria, and required documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => handleCardClick(service.id)}
                isExpanded={selectedServiceId === service.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedService && (
          <ExpandedServiceCard 
            service={selectedService}
            onClose={handleCloseExpandedCard}
          />
        )}
      </AnimatePresence>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
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
              Experience the difference with our customer-centric approach and proven track record. Tie-up with 92 Financial Institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {servicePageFeatures.map((feature, index) => (
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
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;