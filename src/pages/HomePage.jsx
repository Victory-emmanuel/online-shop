import AboutSection from "../components/HomePage/AboutSection";
import BestSellerSection from "../components/HomePage/BestSellerSection";
import CollectionsSection from "../components/HomePage/CollectionsSection";
import HeroSection from "../components/HomePage/HeroSection";
import NewArrivalSection from "../components/HomePage/NewArrivalSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import NewsLetterForm from "../components/Universal/NewsLetterForm";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <NewArrivalSection />
      <CollectionsSection />
      <BestSellerSection />
      <ServiceSection />
      <AboutSection />
      <TestimonialSection />
      <NewsLetterForm />
    </div>
  );
};

export default HomePage;
