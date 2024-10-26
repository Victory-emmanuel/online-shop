/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import BuyNowButton from "./BuyNowButton";

const BestSellerProductCard = ({ name, description, price, image }) => {
  return (
    <motion.div
      className="h-full py-8 "
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <Card className="h-full bg-white text-secondary dark:bg-secondary dark:text-primary overflow-hidden cursor-pointer group transition-all duration-300 ss:mx-4 mx-2">
        {/* CardHeader with responsive button display */}
        <CardHeader floated={false} className="relative h-56">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
          />
          {/* Button is visible by default on mobile and tablet, with hover effect on desktop */}

          <div className="absolute inset-0 flex items-center justify-center bg-black  ss:bg-opacity-0 xx:bg-opacity-50 opacity-100 transition-all duration-300 group-hover:bg-opacity-50 group-hover:opacity-100 xx:opacity-100 ss:opacity-0">
            <BuyNowButton name={name} price={price} image={image} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black ss:bg-opacity-0 xx:bg-opacity-50 opacity-100 transition-all duration-300 group-hover:bg-opacity-50 group-hover:opacity-100 xx:opacity-100  ss:opacity-0">
            <motion.button
              initial={{ rotateZ: "0deg", scale: 1 }}
              whileHover={{ rotateZ: "-2deg", scale: 1.03 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className=" bg-primary text-secondary hover:border hover:border-accent hover:bg-primary hover:text-accent duration-700 rounded-md xs:py-3 xs:px-6 xs:text-base xx:py-2 xx:px-4 xx:text-sm"
            >
              Buy Now
            </motion.button>
          </div>
        </CardHeader>

        <CardBody>
          <Typography variant="h5" className="mb-2 ">
            {name}
          </Typography>
          <Typography className="mb-2 ">{description}</Typography>
          <Typography variant="h6" className="text-accent">
            N{price.toFixed(2)}k
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default BestSellerProductCard;
