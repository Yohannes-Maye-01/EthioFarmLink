import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-4"
      >
        Welcome to My Beautiful UI
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg text-center max-w-xl"
      >
        Experience a modern and sleek interface designed for seamless interaction and a stunning user experience.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 flex flex-wrap gap-6 justify-center"
      >
        <Card title="Fast" description="Lightning-fast performance for smooth interaction." />
        <Card title="Responsive" description="Works seamlessly across all devices." />
        <Card title="Beautiful" description="Visually appealing and easy to navigate." />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-8"
      >
        <Button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl w-64 text-center"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
