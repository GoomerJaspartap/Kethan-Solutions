import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../components/ui/use-toast';
import { sendContactEmail } from '../lib/mailgun';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    loanType: '',
    loanAmount: '',
    preferredCommunication: '',
    contactInfo: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const loanTypes = [
    'Home Loans',
    'Personal Loans BT',
    'Top Up Lap Auto',
    'Loans Insurance',
    'Real Estate services',
    'Business Loans',
    'Mortgage Loans',
    'Car Loans',
    'Gold Loan',
    'Other Loans'
  ];

  const communicationMethods = [
    'Email',
    'Phone',
    'WhatsApp'
  ];

  const contactInfoData = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Plot No 180p 181p KVR Valley Mallampet, Bachupally, Hyderabad, Telangana 500090',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '7989838546',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'rajubasva22@gmail.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Send email using Mailgun
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out! We will get back to you as soon as possible.",
        });
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            loanType: '',
            loanAmount: '',
            preferredCommunication: '',
            contactInfo: '',
            message: ''
          });
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'Failed to send message. Please try again.');
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.fullName && formData.loanType && formData.loanAmount && formData.preferredCommunication && formData.contactInfo;

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
              Get in{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to take the next step towards your financial goals? Contact our expert team 
              for personalized guidance and solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold gradient-text">Contact Us</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4"
                    >
                      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
                      <p className="text-gray-600">
                        We have received your message and will get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="fullName" className="text-base font-semibold text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="Enter your full name"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="loanType" className="text-base font-semibold text-gray-700">
                          Loan Type of Interest *
                        </Label>
                        <Select value={formData.loanType} onValueChange={(value) => handleInputChange('loanType', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select loan type" />
                          </SelectTrigger>
                          <SelectContent>
                            {loanTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="loanAmount" className="text-base font-semibold text-gray-700">
                          Required Loan Amount *
                        </Label>
                        <Input
                          id="loanAmount"
                          type="text"
                          value={formData.loanAmount}
                          onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                          placeholder="Enter loan amount (e.g., ₹5,00,000)"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="communication" className="text-base font-semibold text-gray-700">
                          Preferred Communication *
                        </Label>
                        <Select 
                          value={formData.preferredCommunication} 
                          onValueChange={(value) => handleInputChange('preferredCommunication', value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select communication method" />
                          </SelectTrigger>
                          <SelectContent>
                            {communicationMethods.map((method) => (
                              <SelectItem key={method} value={method}>
                                {method}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.preferredCommunication && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <Label htmlFor="contactInfo" className="text-base font-semibold text-gray-700">
                            {formData.preferredCommunication === 'Email' ? 'Email Address' : 'Phone Number'} *
                          </Label>
                          <Input
                            id="contactInfo"
                            type={formData.preferredCommunication === 'Email' ? 'email' : 'tel'}
                            value={formData.contactInfo}
                            onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                            placeholder={
                              formData.preferredCommunication === 'Email' 
                                ? 'Enter your email address' 
                                : 'Enter your phone number'
                            }
                            className="mt-2"
                            required
                          />
                        </motion.div>
                      )}

                      <div>
                        <Label htmlFor="message" className="text-base font-semibold text-gray-700">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your requirements or any questions you have..."
                          className="mt-2 min-h-[120px]"
                        />
                      </div>

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <p className="text-red-700 text-sm">{submitError}</p>
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#000035] hover:bg-[#000035]/90 text-white py-3 hover-lift"
                        disabled={!isFormValid || isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Direct Contact Info</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfoData.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover-lift border-0 shadow-lg bg-white">
                        <CardContent className="p-6 text-center">
                          <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                          <p className="text-gray-600 text-sm">{info.details}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#000035] to-[#4a4a9a] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Free consultation and expert advice</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Quick loan approvals within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Competitive interest rates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Personalized financial solutions</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;