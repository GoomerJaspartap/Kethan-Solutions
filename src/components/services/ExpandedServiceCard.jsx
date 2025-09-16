import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import EMICalculator from '../EMICalculator';
import { FileText, CheckCircle, X } from 'lucide-react';

const ExpandedServiceCard = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-container-${service.id}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <motion.h2 
                  layoutId={`title-${service.id}`}
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  layoutId={`tagline-${service.id}`}
                  className="text-gray-600"
                >
                  {service.tagline}
                </motion.p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
              aria-label="Close service details"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-[#000035]" />
                  What is {service.title}?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  Eligibility Criteria
                </h3>
                <ul className="space-y-1.5 text-sm md:text-base">
                  {service.eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#000035] rounded-full mr-2.5 mt-[7px] shrink-0"></div>
                      {criteria}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Documents Required
                </h3>
                <ul className="space-y-1.5 text-sm md:text-base">
                  {service.documents.map((document, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 mt-[7px] shrink-0"></div>
                      {document}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#000035] to-[#4a4a9a] p-6 rounded-xl text-white text-center shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-3">1-on-1 Personalized Financial Help</h3>
                <p className="mb-4 opacity-90 text-sm md:text-base">
                  Get expert guidance tailored to your specific needs and financial situation.
                </p>
                <Button 
                  className="bg-white text-[#000035] hover:bg-gray-100 w-full font-semibold"
                  asChild
                >
                  <Link to="/contact">Contact Us for this Service</Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-4 md:p-6 rounded-xl border">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 text-center">Quick EMI Estimate</h3>
                <EMICalculator embedded={true} simplified={true} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedServiceCard;