import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { BestSellerData } from "../../database/BestSellerData";
import BestSellerProductCard from "../Universal/BestSellerProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const BestSellerSection = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust for how many cards to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1700, // Adjust for medium screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Adjust for medium screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Adjust for small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <motion.section
      variants={containerVariants}
      className="py-16 px-4 bg-white dark:bg-black"
    >
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        variants={itemVariants}
        className="mb-12"
      >
        <Typography
          variant="h2"
          className="mb-4 ss:text-3xl xx:text-2xl text-center"
        >
          Our <span className="text-accent">Best Sellers</span>
        </Typography>
      </motion.div>

      <Slider {...settings} className="py-16 mx-4">
        {BestSellerData.map((product) => (
          <BestSellerProductCard key={product.id} {...product} />
        ))}
      </Slider>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=" ss:text-center xx:text-left ss:my-12 "
      >
        <HashLink to="/shop">
          <motion.button
            initial={{ rotateZ: "0deg", scale: 1 }}
            whileHover={{ rotateZ: "-2deg", scale: 1.03 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className=" bg-transparent text-accent  hover:bg-transparent border border-accent hover:border-secondary hover:text-secondary dark:hover:border-primary dark:hover:text-primary duration-700 rounded-md  xs:py-3 xs:px-6 xs:text-base xx:py-2 xx:px-4 xx:text-sm"
          >
            View All Products
          </motion.button>
        </HashLink>
      </motion.div>
    </motion.section>
  );
};

export default BestSellerSection;
