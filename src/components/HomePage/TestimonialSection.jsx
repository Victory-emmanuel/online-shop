import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Fashion Blogger",
    content:
      "I'm absolutely in love with the new summer collection! The dresses are not only stylish but also incredibly comfortable. This store has become my go-to for all my fashion needs.",
    image:
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1000&q=80",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Fitness Enthusiast",
    content:
      "The running shoes I bought here are game-changers! They provide excellent support and comfort, even during my longest runs. I've never felt better about my workout gear.",
    image:
      "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1000&q=80",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Professional Stylist",
    content:
      "As a stylist, I'm always on the lookout for unique pieces. This store's accessories collection is a treasure trove of fashion-forward items. My clients are always impressed with what I find here.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1000&q=80",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 xx:px-6 ss:px-12 bg-primary dark:bg-secondary">
      <div className=" mx-auto">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          variants={itemVariants}
          className="mb-12"
        >
          <Typography
            variant="h2"
            className="mb-4 ss:text-3xl xx:text-2xl text-center "
          >
            What Our <span className="text-accent">Customers</span> Says
          </Typography>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 flex flex-col justify-between h-full"
            >
              <div>
                <FaQuoteLeft className="text-4xl text-accent mb-4" />
                <Typography className="mb-6 text-lg italic">
                  {testimonials[currentIndex].content}
                </Typography>
                <Typography variant="h6" className="mb-1 text-accent">
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography className="">
                  {testimonials[currentIndex].role}
                </Typography>
              </div>
              <div className="flex md:justify-start justify-center space-x-4 mt-8">
                <Button
                  variant="text"
                  className="flex items-center gap-2 text-accent drop-shadow-lg hover:bg-primary dark:hover:bg-black  duration-300"
                  onClick={prevTestimonial}
                >
                  <FaChevronLeft />
                  Previous
                </Button>
                <Button
                  variant="text"
                  className="flex items-center gap-2 text-accent drop-shadow-lg hover:bg-primary dark:hover:bg-black  duration-300"
                  onClick={nextTestimonial}
                >
                  Next
                  <FaChevronRight />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 ml-auto">
              <div className="absolute inset-0 bg-accent rounded-full transform -skew-x-12 scale-75 origin-bottom-right"></div>
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="absolute inset-0 w-full h-full object-cover rounded-full drop-shadow-lg drop-shadow-accent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
