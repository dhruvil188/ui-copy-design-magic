import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-white z-0 flex w-[1408px] max-w-full flex-col overflow-hidden items-center pt-20 px-6 rounded-xl max-md:px-5">
      <h1 className="w-full max-w-screen-lg text-7xl text-[rgba(24,25,27,1)] font-medium text-center tracking-[-1.8px] leading-[72px] pl-[26px] pr-[25px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:px-5">
        Anyone can make a great video.
        <br />
        That means you.
      </h1>
      <p className="w-[568px] max-w-full text-xl text-[rgba(24,25,27,1)] font-normal text-center leading-7 mt-[23px] pl-[17px] pr-4 pb-px max-md:max-w-full">
        Your audience prefers video. Wow them with VEED, the
        <br />
        fastest and easiest way to make professional-quality videos.
      </p>
      <div className="flex w-[470px] max-w-full gap-6 mt-8">
        <Link 
          to="/signup" 
          className="bg-[rgba(0,152,253,1)] flex items-center gap-[18px] justify-center w-[216px] pl-[34px] pr-8 py-[18px] rounded-full hover:bg-blue-600 transition-colors max-md:px-5"
        >
          <span className="text-white text-lg font-medium leading-loose text-center self-stretch my-auto">
            Start for free
          </span>
          <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/b8109f5eb73e2417ebdf266951e76b44dafb46e2?placeholderIfAbsent=true"
              alt="Arrow right"
              className="aspect-[0.97] object-contain w-7"
            />
          </div>
        </Link>
        <Link 
          to="/templates" 
          className="flex items-center gap-[18px] justify-center w-[230px] px-[34px] py-[18px] rounded-full border-[rgba(24,25,27,1)] border-solid border-2 hover:bg-gray-50 transition-colors max-md:px-5"
        >
          <span className="text-[rgba(24,25,27,1)] text-lg font-medium leading-loose text-center self-stretch my-auto">
            Try a template
          </span>
          <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/50f30a1fb851cd86bc506ca59236ce17729eeb8e?placeholderIfAbsent=true"
              alt="Arrow right"
              className="aspect-[0.97] object-contain w-7"
            />
          </div>
        </Link>
      </div>
      <p className="w-[232px] max-w-full text-sm text-[rgba(92,94,101,1)] font-normal text-center leading-none mt-[31px] pl-[7px] pr-1.5 pb-px">
        *No credit card or account required
      </p>
      <div className="self-stretch flex flex-col items-center mt-9 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/7587442d9a13e62f5b028457af50414114bce884?placeholderIfAbsent=true"
          alt="VEED video editor interface"
          className="aspect-[1.72] object-contain w-[979px] shadow-[0px_4px_80px_rgba(70,75,78,0.2)] max-w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
