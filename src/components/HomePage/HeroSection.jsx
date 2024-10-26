/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Carousel, Typography } from "@material-tailwind/react";
import { useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const slides = [
    {
      title: "Welcome to Our Website",
      description: "Discover amazing features and services",
      image: "https://i.postimg.cc/j5BC8s0M/2151009051.jpg",
    },
    {
      title: "Explore Our Products",
      description: "Find the perfect solution for your needs",
      image: "https://i.postimg.cc/x8bnqHZR/9799.jpg",
    },
    {
      title: "Join Our Community",
      description: "Connect with like-minded individuals",
      image: "https://i.postimg.cc/WtLjZzLP/106037.jpg",
    },
    {
      title: "Get Started Today",
      description: "Take the first step towards success",
      image: "https://i.postimg.cc/N0JKH6Nq/2149820439.jpg",
    },
  ];

  return (
    <Carousel
      className="h-[90dvh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <HeroSlide key={index} {...slide} />
      ))}
    </Carousel>
  );
};

const HeroSlide = ({ title, description, image }) => {
  const [text] = useTypewriter({
    words: [title],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="relative h-full w-full">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-full  text-center ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary"
            >
              {title}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white"
            >
              {description}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              initial={{ rotateZ: "0deg", scale: 1 }}
              whileHover={{ rotateZ: "-2deg", scale: 1.03 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className=" bg-primary text-accent hover:bg-transparent hover:border hover:border-primary hover:text-primary duration-700 rounded-md  xs:py-3 xs:px-6 xs:text-base xx:py-2 xx:px-4 xx:text-sm"
            >
              Buy Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
