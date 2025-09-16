import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ServiceCard = ({ service, onClick, isExpanded }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card 
        className={`h-full cursor-pointer transition-all duration-300 border-0 shadow-xl bg-white ${
          isExpanded ? 'ring-4 ring-[#000035] scale-105' : 'hover:shadow-2xl'
        }`}
        onClick={onClick}
      >
        <CardHeader className="text-center pb-4">
          <div className="w-full h-40 mb-4 rounded-t-lg overflow-hidden">
            <img 
              className="w-full h-full object-cover"
              alt={service.imageAlt || `Icon for ${service.title}`}
              src={service.image}
            />
          </div>
          <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
          <p className="text-gray-600 text-sm">{service.tagline}</p>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xs text-[#000035] font-semibold mb-2">
            {isExpanded ? 'Click to collapse' : 'Click for details'}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;