import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const EMICalculator = ({ embedded = false, simplified = false }) => {
  const [loanAmount, setLoanAmount] = useState([embedded && simplified ? 100000 : 500000]);
  const [interestRate, setInterestRate] = useState([10]);
  const [tenure, setTenure] = useState([12]);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount[0];
    const rate = interestRate[0] / 12 / 100;
    const time = tenure[0];

    if (principal && rate && time) {
      const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
      const totalAmountValue = emiValue * time;
      const totalInterestValue = totalAmountValue - principal;

      setEmi(Math.round(emiValue));
      setTotalAmount(Math.round(totalAmountValue));
      setTotalInterest(Math.round(totalInterestValue));
    } else {
      setEmi(0);
      setTotalAmount(0);
      setTotalInterest(0);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: 'Principal', value: loanAmount[0] || 0, color: '#000035' },
    { name: 'Interest', value: totalInterest || 0, color: '#4a4a9a' }
  ];
  
  const containerClass = simplified 
    ? "p-4" 
    : `${embedded ? '' : 'container mx-auto px-4 py-8'}`;
  
  const cardClass = simplified 
    ? "w-full shadow-md border bg-white" 
    : "w-full max-w-6xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-gray-50";

  const inputSectionClass = simplified ? "space-y-4" : "space-y-6";
  const resultsSectionClass = simplified ? "space-y-4" : "space-y-6";
  const labelClass = simplified ? "text-sm font-medium text-gray-700" : "text-base font-semibold text-gray-700";
  const inputFieldClass = simplified ? "text-sm" : "text-lg font-semibold";
  const resultCardPadding = simplified ? "p-3" : "p-6";
  const resultTextSize = simplified ? "text-xl" : "text-3xl";
  const resultSubTextSize = simplified ? "text-xs" : "text-sm";


  return (
    <div className={containerClass} id="emi-calculator">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className={cardClass}>
          {!simplified && (
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold gradient-text">EMI Calculator</CardTitle>
              </div>
              <p className="text-gray-600">Calculate your loan EMI and plan your finances better</p>
            </CardHeader>
          )}

          <CardContent className={simplified ? "p-0 space-y-4" : "space-y-8"}>
            <div className={`grid grid-cols-1 ${simplified ? 'gap-4' : 'lg:grid-cols-2 gap-8'}`}>
              {/* Input Section */}
              <div className={inputSectionClass}>
                <div className={simplified ? "space-y-3" : "space-y-4"}>
                  <div>
                    <Label className={labelClass}>Loan Amount</Label>
                    <div className="mt-1 space-y-2">
                      <Input
                        type="number"
                        value={loanAmount[0]}
                        onChange={(e) => setLoanAmount([parseInt(e.target.value) || 0])}
                        className={inputFieldClass}
                        placeholder="Amount"
                      />
                      {!simplified && (
                        <>
                          <Slider
                            value={loanAmount}
                            onValueChange={setLoanAmount}
                            max={10000000}
                            min={50000}
                            step={50000}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>₹50K</span>
                            <span>₹1Cr</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label className={labelClass}>Interest Rate (% p.a.)</Label>
                    <div className="mt-1 space-y-2">
                      <Input
                        type="number"
                        value={interestRate[0]}
                        onChange={(e) => setInterestRate([parseFloat(e.target.value) || 0])}
                        className={inputFieldClass}
                        placeholder="Rate"
                        step="0.1"
                      />
                      {!simplified && (
                        <>
                          <Slider
                            value={interestRate}
                            onValueChange={setInterestRate}
                            max={30}
                            min={5}
                            step={0.1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>5%</span>
                            <span>30%</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label className={labelClass}>Loan Tenure (months)</Label>
                    <div className="mt-1 space-y-2">
                      <Input
                        type="number"
                        value={tenure[0]}
                        onChange={(e) => setTenure([parseInt(e.target.value) || 0])}
                        className={inputFieldClass}
                        placeholder="Months"
                      />
                      {!simplified && (
                        <>
                          <Slider
                            value={tenure}
                            onValueChange={setTenure}
                            max={360}
                            min={6}
                            step={6}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>6 months</span>
                            <span>30 years</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className={resultsSectionClass}>
                <div className={`grid grid-cols-1 ${simplified ? 'gap-2' : 'gap-4'}`}>
                  <motion.div
                    whileHover={{ scale: simplified ? 1.01 : 1.02 }}
                    className={`bg-gradient-to-r from-[#000035] to-[#4a4a9a] ${resultCardPadding} rounded-lg text-white`}
                  >
                    <div className="flex items-center space-x-2">
                      <DollarSign className={simplified ? "w-5 h-5" : "w-8 h-8"} />
                      <div>
                        <p className={`${resultSubTextSize} opacity-90`}>Monthly EMI</p>
                        <p className={`${resultTextSize} font-bold`}>₹{emi.toLocaleString()}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: simplified ? 1.01 : 1.02 }}
                    className={`bg-gradient-to-r from-green-500 to-green-600 ${resultCardPadding} rounded-lg text-white`}
                  >
                    <div className="flex items-center space-x-2">
                      <TrendingUp className={simplified ? "w-5 h-5" : "w-8 h-8"} />
                      <div>
                        <p className={`${resultSubTextSize} opacity-90`}>Total Interest</p>
                        <p className={`${simplified ? 'text-lg' : 'text-2xl'} font-bold`}>₹{totalInterest.toLocaleString()}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: simplified ? 1.01 : 1.02 }}
                    className={`bg-gradient-to-r from-purple-500 to-purple-600 ${resultCardPadding} rounded-lg text-white`}
                  >
                    <div className="flex items-center space-x-2">
                      <Calendar className={simplified ? "w-5 h-5" : "w-8 h-8"} />
                      <div>
                        <p className={`${resultSubTextSize} opacity-90`}>Total Amount</p>
                        <p className={`${simplified ? 'text-lg' : 'text-2xl'} font-bold`}>₹{totalAmount.toLocaleString()}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Pie Chart */}
                {!simplified && (
                  <div className="bg-white p-4 rounded-xl border">
                    <h3 className="text-lg font-semibold mb-4 text-center">Loan Breakdown</h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-6 mt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#000035] rounded-full"></div>
                        <span className="text-sm">Principal</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#4a4a9a] rounded-full"></div>
                        <span className="text-sm">Interest</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {!embedded && !simplified && (
              <div className="text-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-[#000035] hover:bg-[#000035]/90 text-white px-8 py-3 hover-lift"
                  asChild
                >
                  <a href="/contact">Get Personalized Loan Advice</a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default EMICalculator;