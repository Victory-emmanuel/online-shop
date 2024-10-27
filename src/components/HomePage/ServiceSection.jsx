/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
} from "@material-tailwind/react";

// Hook to detect if screen size is large
const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
};

const ServiceCard = ({ title, description, onLearnMore, image }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const isLargeScreen = useIsLargeScreen(); // Get screen size

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      drag={isLargeScreen} // Apply drag only on large screens
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className="cursor-grab"
    >
      <Card className="w-full h-full bg-primary hover:bg-accent group duration-1000">
        <CardBody>
          <Typography
            variant="h5"
            className="mb-2 xx:text-lg ss:text-2xl text-accent group-hover:text-primary"
          >
            {title}
          </Typography>
          <Typography className="mb-4 xx:text-base ss:text-xl text-secondary group-hover:text-primary">
            {description}
          </Typography>
          <img
            src={image}
            alt={title}
            className="w-[40rem] h-[20rem] rounded-lg object-cover"
          />
        </CardBody>
        <CardFooter className="pt-0 text-secondary group-hover:text-primary">
          <Typography
            variant="small"
            className="cursor-pointer font-medium border-b-2 hover:border-t-2 hover:border-b-0 duration-100 border-secondary group-hover:border-primary py-2 inline-block"
            onClick={onLearnMore}
          >
            Learn More
          </Typography>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ServiceModal = ({ isOpen, onClose, service }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          className="bg-secondary md:w-[80rem] ss:w-[100%] ss:p-6 xx:p-4 shadow-lg shadow-secondary m-8  "
          open={isOpen}
          handler={onClose}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader className="text-accent xx:text-xl ss:text-3xl">
            {service.title}
          </DialogHeader>
          <DialogBody className="md:overflow-auto overflow-hidden overflow-y-scroll xx:h-[75dvh] ss:h-[50dvh] md:h-[40dvh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-[20rem] h-[15rem] rounded-lg object-cover "
                />
              </div>
              <div>
                <Typography className="xs:text-lg xx:text-base mb-4 text-primary font-semibold">
                  {service.description}
                </Typography>
                <Typography className="ss:text-base xx:text-sm  mb-4 text-primary">
                  {service.details}
                </Typography>
                <Typography className="text-sm text-accent">
                  Our expertise level: {service.percentage}%
                </Typography>
                <div className="mt-4">
                  <Button
                    variant="text"
                    onClick={onClose}
                    size="md"
                    className="mr-2 xx:my-2  xs:my-0 text-primary bg-red-400 hover:bg-red-600"
                  >
                    <span>Close</span>
                  </Button>
                  <Button
                    className="text-secondary xx:my-2  xs:my-0 bg-accent"
                    onClick={onClose}
                    size="md"
                  >
                    <a href="#" className="">
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

const services = [
  {
    title: "Hair Therapist",
    description: "Professional hair care and styling services",
    details:
      "Our hair therapy service focuses on providing top-notch hair care, treatments, and styling. We use high-quality products and expert techniques to ensure healthy, vibrant, and stylish hair that suits your unique look.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    percentage: 90,
    image: "https://i.postimg.cc/d1kZvKRk/2150286048.jpg", // Hair Therapist image
  },
  {
    title: "Nail Technician",
    description: "Expert nail care and design",
    details:
      "Our nail technician service offers expert nail care, including manicures, pedicures, and custom nail art. We use top-quality products and precision techniques to ensure your nails look flawless and stay healthy.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    percentage: 85,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702", // Nail Technician image
  },
];

export default function MyServiceSection() {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.section
      className="h-auto ss:px-12 xx:px-6 py-16 text-center  bg-secondary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="services"
    >
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        variants={itemVariants}
        className="mb-12 "
      >
        <Typography
          variant="h2"
          className="mb-4 ss:text-3xl xx:text-2xl text-primary"
        >
          Our <span className="text-accent">Services</span>
        </Typography>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 text-left sm:grid-cols-2 gap-8 "
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            onLearnMore={() => handleLearnMore(service)}
          />
        ))}
      </motion.div>
      <ServiceModal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        service={selectedService || {}}
      />
    </motion.section>
  );
}
