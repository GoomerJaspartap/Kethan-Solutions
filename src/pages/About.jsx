import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

import hdfcLogo from '../assets/HDFC Bank.jpg';
import axisLogo from '../assets/Axis Bank.jpg';
import sbiLogo from '../assets/SBI.png';
import pnbLogo from '../assets/Punjab National Bank.jpg';
import unionLogo from '../assets/Union Bank.jpg';
import bobLogo from '../assets/Bank of Baroda.jpg';
import rblLogo from '../assets/RBL Bank.jpg';
import indianLogo from '../assets/Indian Bank.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Raju Basva',
      title: 'Founder',
      image: 'Professional headshot of a confident business leader in formal attire'
    },
    {
      name: 'Mounika Basva',
      title: 'Loan Advisor',
      image: 'Professional portrait of a friendly female financial advisor'
    },
    {
      name: 'Srikanth',
      title: 'Business Development Manager',
      image: 'Professional photo of a business development professional'
    }
  ];

  const partners = [
    { logo: hdfcLogo },
    { logo: axisLogo },
    { logo: sbiLogo },
    { logo: pnbLogo },
    { logo: unionLogo },
    { logo: bobLogo },
    { logo: rblLogo },
    { logo: indianLogo }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide accessible, transparent, and personalized financial solutions that empower individuals and businesses to achieve their goals.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To be the most trusted financial partner in Hyderabad, known for our integrity, expertise, and commitment to customer success.'
    },
    {
      icon: Users,
      title: 'Community Commitment',
      description: 'We believe in giving back to our community by promoting financial literacy and supporting local businesses in their growth journey.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#000035] via-[#1a1a5e] to-[#2d2d8a] text-white pt-10 pb-20">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Your trusted financial partner in Bachupally, Hyderabad, committed to providing 
                personalized loan solutions and expert financial guidance for over 2 years.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img   
                class="w-full h-auto rounded-2xl shadow-2xl hover-lift" 
                alt="Kethan Solutions office building exterior"
                src="https://images.unsplash.com/photo-1658022136407-e5bc0433f053" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img   
                class="w-full h-auto rounded-2xl shadow-lg hover-lift" 
                alt="Kethan Solutions founding story"
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold gradient-text">Our Story & Commitment</h2>
              <div className="space-y-4 text-gray-700 text-xl">
                <p>
                  Founded in 2022, Kethan Solutions emerged from a simple yet powerful vision: 
                  to make quality financial services accessible to everyone in Bachupally and 
                  surrounding areas of Hyderabad.
                </p>
                <p>
                  Our journey began when our founder recognized the gap between traditional 
                  banking services and the personalized attention that individuals and small 
                  businesses truly needed. We set out to bridge this gap with a customer-first 
                  approach that prioritizes transparency, trust, and tailored solutions.
                </p>
                <p>
                  Today, we're proud to have helped over 500 families and businesses achieve 
                  their financial goals, processing loans worth over ₹10 crores while maintaining 
                  our commitment to personalized service and community support.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-lg font-semibold text-gray-800">Trusted by 500+ Clients</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Mission, Vision & Community Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our core values, we strive to make a positive impact in every interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-white text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#000035] to-[#4a4a9a] rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals dedicated to your financial success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="hover-lift border-0 shadow-lg bg-white text-center overflow-hidden p-4">
                  <CardContent className="p-4">
                    <div className="relative mb-6">
                      <img   
                        className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" 
                        alt={`${member.name} - ${member.title}`}
                        src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-[#000035] font-semibold text-lg">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lending Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Lending Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with India's leading financial institutions to bring you the best loan options
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-48 w-auto object-contain"
                />
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
                Ready to Discuss Your Financial Needs?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Let our experienced team help you find the perfect financial solution. 
                Contact us today for a free consultation.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-[#000035] hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift"
              asChild
            >
              <Link to="/contact">
                Contact Us to Discuss Your Needs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;