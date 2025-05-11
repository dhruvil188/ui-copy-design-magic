import React from "react";
import { Link } from "react-router-dom";

const Templates: React.FC = () => {
  return (
    <section className="bg-white w-[1408px] max-w-full overflow-hidden mt-6 rounded-xl">
      <div className="flex w-[704px] max-w-full p-16 max-md:px-5">
        <div className="min-w-60 w-[576px] max-md:max-w-full">
          <div className="w-full max-w-xl font-medium max-md:max-w-full">
            <p className="w-full text-[15px] text-[rgba(0,152,253,1)] uppercase tracking-[0.4px] leading-[1.6] pr-[474px] max-md:pr-5">
              Get inspired
            </p>
            <h2 className="w-full text-6xl text-[rgba(24,25,27,1)] tracking-[-1.5px] leading-[60px] mt-3 pr-[69px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:pr-5">
              Start with our most-
              <br />
              popular templates
            </h2>
          </div>
          <Link
            to="/templates"
            className="bg-white flex w-[308px] max-w-full items-center gap-[27px] justify-center mt-10 pr-8 py-4 rounded-full hover:bg-gray-50 transition-colors max-md:pr-5"
          >
            <span className="text-[rgba(0,152,253,1)] text-lg font-medium leading-loose self-stretch my-auto">
              Explore the template library
            </span>
            <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/0d60782371382eb4733d15b9011e0a9684dbc9c4?placeholderIfAbsent=true"
                alt="Arrow right"
                className="aspect-[0.97] object-contain w-7"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full pb-20">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/bd573c5509b0b9f1f941058cae5ca3162e89c0a7?placeholderIfAbsent=true"
          alt="Template examples row 1"
          className="aspect-[3.66] object-contain w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/c28039eedc691d58abfb827d2913ed8d7d382ce7?placeholderIfAbsent=true"
          alt="Template examples row 2"
          className="aspect-[3.66] object-contain w-full mt-4"
        />
      </div>
    </section>
  );
};

export default Templates;
