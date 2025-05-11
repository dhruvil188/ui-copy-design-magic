import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Brands from "../components/sections/Brands";
import Testimonials from "../components/sections/Testimonials";
import Features from "../components/sections/Features";
import UseCases from "../components/sections/UseCases";
import Templates from "../components/sections/Templates";
import ProductFeatures from "../components/sections/ProductFeatures";
import Resources from "../components/sections/Resources";
import CallToAction from "../components/sections/CallToAction";

const Index: React.FC = () => {
  return (
    <div className="bg-[rgba(246,243,243,1)] flex">
      <div className="w-[1440px] max-md:max-w-full">
        <Header />
        
        <main className="flex w-full flex-col items-center max-md:max-w-full">
          {/* Background elements */}
          <div className="relative flex w-full flex-col items-center max-md:max-w-full">
            <div className="absolute z-0 flex min-h-[894px] w-[141px] max-w-full left-0 top-[216px]" />
            <div className="absolute z-0 flex min-h-[894px] w-[97px] left-[1343px] right-0 top-[216px]" />
            <div className="z-0 flex min-h-[8211px] w-full max-md:max-w-full" />
          </div>
          
          {/* Main content */}
          <div className="z-10 flex mt-[-8211px] w-full flex-col items-center max-md:max-w-full max-md:mt-[-200px]">
            <div className="w-[1408px] max-w-full">
              <Hero />
              <Brands />
              <Testimonials />
              <Features />
            </div>
            
            <div className="flex w-full flex-col items-center mt-6 max-md:max-w-full">
              <UseCases />
              <Templates />
              <ProductFeatures />
              <Resources />
              <CallToAction />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
