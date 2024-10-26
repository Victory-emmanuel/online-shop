import { motion } from "framer-motion";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const NewsLetterForm = () => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center py-16 px-4 ss:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-md"
      >
        <Card color="transparent" shadow={false} className="text-primary">
          <Typography variant="h3" className="mb-4 text-center">
            Subscribe to Our <span className="text-accent">Newsletter</span>
          </Typography>
          <Typography className="mb-8 text-center font-normal">
            Stay updated with our latest news and offers!
          </Typography>
          <form
            action="https://gmail.us10.list-manage.com/subscribe/post?u=eed144da9ca9fec49db135454&amp;id=7f347ed4b2&amp;f_id=003441e4f0"
            method="post"
            target="_blank"
            className="mt-8 mb-2 w-full"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                className="!border-t-accent !border-x-accent !border-b-accent text-white placeholder:text-secondary focus:bg-primary focus:text-secondary focus:border-accent duration-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <Button
              type="submit"
              className="mt-6 bg-accent text-primary hover:bg-primary hover:text-accent transition-all duration-300"
              fullWidth
            >
              Subscribe
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default NewsLetterForm;
