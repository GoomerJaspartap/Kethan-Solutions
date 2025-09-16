import React from 'react';
import { 
  User, 
  Building, 
  Home as HomeIcon, 
  Car, 
  GraduationCap, 
  CreditCard, 
  Briefcase, 
  Landmark, 
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

import personalLoanImg from '../../assets/Personal Loan.jpg';
import businessLoanImg from '../../assets/Business Loan.jpg';
import homeLoanImg from '../../assets/Home Loan.jpg';
import carLoanImg from '../../assets/Car Loan.jpg';
import educationLoanImg from '../../assets/Educational Loan.jpg';
import creditCardImg from '../../assets/Credit Card.jpg';
import realEstateImg from '../../assets/Real Estate.jpg';
import lapImg from '../../assets/Loan Against Property.jpg';
import goldLoanImg from '../../assets/Goal Loan.jpg';

export const servicesData = [
  {
    id: 1,
    title: 'Personal Loans',
    tagline: 'Quick funds for your personal needs',
    icon: User,
    image: personalLoanImg,
    imageAlt: 'Personal loan services illustration',
    color: 'from-blue-500 to-blue-700',
    description: 'Get instant personal loans with minimal documentation and competitive interest rates. Perfect for medical emergencies, travel, weddings, or any personal financial requirement.',
    eligibility: [
      'Age: 21-65 years',
      'Minimum salary: ₹15,000/month',
      'Employment: Salaried or self-employed',
      'Credit score: 650 and above'
    ],
    documents: [
      'Identity proof (Aadhaar/PAN)',
      'Address proof',
      'Income proof (salary slips/ITR)',
      'Bank statements (3 months)',
      'Employment proof'
    ]
  },
  {
    id: 2,
    title: 'Business Loans',
    tagline: 'Fuel your business growth',
    icon: Building,
    image: businessLoanImg,
    imageAlt: 'Business loan services illustration',
    color: 'from-green-500 to-green-700',
    description: 'Expand your business with our flexible business loan options. Whether you need working capital, equipment financing, or expansion funds, we have the right solution.',
    eligibility: [
      'Business vintage: 2+ years',
      'Annual turnover: ₹10 lakhs+',
      'Business type: Proprietorship/Partnership/Pvt Ltd',
      'Good business credit history'
    ],
    documents: [
      'Business registration documents',
      'Financial statements (2 years)',
      'Bank statements (6 months)',
      'Income tax returns',
      'GST returns'
    ]
  },
  {
    id: 3,
    title: 'Home Loans',
    tagline: 'Make your dream home a reality',
    icon: HomeIcon,
    image: homeLoanImg,
    imageAlt: 'Home loan services illustration',
    color: 'from-purple-500 to-purple-700',
    description: 'Achieve your dream of homeownership with our attractive home loan rates and flexible repayment options. We offer loans for purchase, construction, and renovation.',
    eligibility: [
      'Age: 21-65 years',
      'Stable income source',
      'Good credit score',
      'Property documents in order'
    ],
    documents: [
      'Property documents',
      'Income proof',
      'Identity and address proof',
      'Bank statements',
      'Property valuation report'
    ]
  },
  {
    id: 4,
    title: 'Vehicle Loans',
    tagline: 'Drive your dream vehicle today',
    icon: Car,
    image: carLoanImg,
    imageAlt: 'Vehicle loan services illustration',
    color: 'from-red-500 to-red-700',
    description: 'Get your dream car or bike with our competitive vehicle loan rates. We offer loans for new and used vehicles with quick approval and minimal documentation.',
    eligibility: [
      'Age: 21-65 years',
      'Stable income',
      'Valid driving license',
      'Good credit history'
    ],
    documents: [
      'Vehicle quotation/invoice',
      'Income proof',
      'Identity proof',
      'Address proof',
      'Driving license'
    ]
  },
  {
    id: 5,
    title: 'Education Loans',
    tagline: 'Invest in your future',
    icon: GraduationCap,
    image: educationLoanImg,
    imageAlt: 'Education loan services illustration',
    color: 'from-indigo-500 to-indigo-700',
    description: 'Fund your higher education dreams with our education loans. Covering tuition fees, living expenses, and other educational costs for domestic and international studies.',
    eligibility: [
      'Admission to recognized institution',
      'Co-applicant required',
      'Good academic record',
      'Age: 16-35 years'
    ],
    documents: [
      'Admission letter',
      'Fee structure',
      'Academic records',
      'Co-applicant documents',
      'Income proof'
    ]
  },
  {
    id: 6,
    title: 'Credit Card',
    tagline: 'Smart credit solutions',
    icon: CreditCard,
    image: creditCardImg,
    imageAlt: 'Credit card services illustration',
    color: 'from-pink-500 to-pink-700',
    description: 'Convert your credit card purchases into easy EMIs or get a loan against your credit card limit. Flexible repayment options with competitive interest rates.',
    eligibility: [
      'Active credit card holder',
      'Good payment history',
      'Minimum card limit usage',
      'Regular income'
    ],
    documents: [
      'Credit card statements',
      'Identity proof',
      'Income proof',
      'Bank statements',
      'Address proof'
    ]
  },
  {
    id: 7,
    title: 'Real Estate',
    tagline: 'Real estate financing solutions',
    icon: Briefcase,
    image: realEstateImg,
    imageAlt: 'Real estate services illustration',
    color: 'from-teal-500 to-teal-700',
    description: 'Comprehensive real estate financing solutions for property purchase, development, and investment. Expert guidance and competitive rates for all your real estate needs.',
    eligibility: [
      'Property documentation',
      'Stable income source',
      'Good credit score',
      'Clear property title'
    ],
    documents: [
      'Property documents',
      'Income proof',
      'Identity and address proof',
      'Bank statements',
      'Property valuation report'
    ]
  },
  {
    id: 8,
    title: 'Loan Against Property',
    tagline: 'Unlock your property value',
    icon: Landmark,
    image: lapImg,
    imageAlt: 'Loan against property illustration',
    color: 'from-orange-500 to-orange-700',
    description: 'Get high-value loans against your residential or commercial property. Lower interest rates and longer repayment tenure with your property as collateral.',
    eligibility: [
      'Property ownership',
      'Clear property title',
      'Stable income',
      'Property age: Less than 20 years'
    ],
    documents: [
      'Property documents',
      'Property valuation report',
      'Income proof',
      'Identity and address proof',
      'Bank statements'
    ]
  },
  {
    id: 9,
    title: 'Gold Loan',
    tagline: 'Unlock the value of your gold',
    icon: TrendingUp,
    image: goldLoanImg,
    imageAlt: 'Gold loan services illustration',
    color: 'from-yellow-400 to-yellow-600',
    description: 'Get quick loans against your gold jewelry with minimal documentation and competitive interest rates. Secure, transparent, and hassle-free gold loan services.',
    eligibility: [
      'Age: 18-70 years',
      'Gold jewelry ownership',
      'Valid identity proof',
      'No income proof required'
    ],
    documents: [
      'Identity proof (Aadhaar/PAN)',
      'Address proof',
      'Gold jewelry for pledge',
      'Recent photograph',
      'Nominee details'
    ]
  }
];

export const servicePageFeatures = [
  {
    icon: TrendingUp,
    title: 'Quick Processing',
    description: 'Get your loan approved in as little as 24 hours with our streamlined process'
  },
  {
    icon: Clock,
    title: 'Flexible Terms',
    description: 'Choose from a range of repayment options that suit your financial situation'
  },
  {
    icon: Shield,
    title: 'Secure & Transparent',
    description: 'Your data is protected, and our terms are always clear and straightforward'
  }
];