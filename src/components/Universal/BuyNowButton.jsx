/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const BuyNowButton = ({ name, price, image }) => {
  const whatsappLink = `https://wa.me/2348109125793?text=${encodeURIComponent(
    `Hello, I am interested in buying this product: \n\nProduct: ${name}\nPrice: N${price.toFixed(
      2
    )}k\nImage Link: ${image}`
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ rotateZ: "0deg", scale: 1 }}
      whileHover={{ rotateZ: "-2deg", scale: 1.03 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="bg-primary text-secondary hover:border hover:border-accent hover:bg-primary hover:text-accent duration-700 rounded-md xs:py-3 xs:px-6 xs:text-base xx:py-2 xx:px-4 xx:text-sm"
    >
      Buy Now
    </motion.a>
  );
};

export default BuyNowButton;
