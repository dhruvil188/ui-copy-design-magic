import React from "react";
import { Link } from "react-router-dom";

const Features: React.FC = () => {
  return (
    <section className="bg-white w-full max-w-[1408px] overflow-hidden text-center mt-6 rounded-xl max-md:max-w-full">
      <div className="font-medium max-md:max-w-full">
        <div className="w-full flex-1 pt-20">
          <div className="flex w-full flex-col items-center pb-2 px-[293px] max-md:max-w-full max-md:px-5">
            <p className="w-full text-[15px] text-[rgba(0,152,253,1)] uppercase tracking-[0.4px] leading-[1.6] px-[197px] max-md:max-w-full max-md:px-5">
              A professional video editor right in your browser.
            </p>
            <h2 className="w-full text-6xl text-[rgba(24,25,27,1)] tracking-[-1.5px] leading-none mt-2 pl-[17px] pr-4 max-md:max-w-full max-md:text-[40px]">
              Full-featured. Not complicated.
            </h2>
          </div>
          <div className="flex min-h-[348px] w-full flex-1"></div>
        </div>
        <div className="flex min-h-px w-full"></div>
      </div>
      <div className="bg-white shadow-[0px_-4px_24px_-4px_rgba(70,75,78,0.2)] flex items-center overflow-hidden text-base text-[rgba(24,25,27,1)] font-normal justify-center pt-[25px] pb-[49px] px-[228px] max-md:px-5">
        <div className="self-stretch flex min-w-60 w-[952px] gap-6 justify-center flex-wrap my-auto">
          <div className="bg-[rgba(247,247,248,1)] grow shrink w-44 pt-4 rounded-lg">
            <p className="max-w-full w-[220px] overflow-hidden pb-2 px-[27px] max-md:px-5">
              Auto-generate subtitles
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/535247e39a70c7877456d376aec1c85b59eacdf3?placeholderIfAbsent=true"
              alt="Auto-generate subtitles feature"
              className="aspect-[4] object-contain w-[220px] max-w-full rounded-[0px_0px_8px_8px]"
            />
          </div>
          <div className="bg-[rgba(247,247,248,1)] grow shrink w-44 pt-4 rounded-lg">
            <p className="max-w-full w-[220px] overflow-hidden pb-2 px-[55px] max-md:px-5">
              Text formatting
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/53aba0b10ba38d9a6ad53cd982b347a68700d974?placeholderIfAbsent=true"
              alt="Text formatting feature"
              className="aspect-[4] object-contain w-[220px] max-w-full rounded-[0px_0px_8px_8px]"
            />
          </div>
          <div className="bg-[rgba(247,247,248,1)] grow shrink w-44 pt-4 rounded-lg">
            <p className="max-w-full w-[220px] overflow-hidden pb-2 px-[66px] max-md:px-5">
              Stock library
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/8bd7b8f186618fff29b5a2727e577efd317929a5?placeholderIfAbsent=true"
              alt="Stock library feature"
              className="aspect-[4] object-contain w-[220px] max-w-full rounded-[0px_0px_8px_8px]"
            />
          </div>
          <div className="bg-[rgba(247,247,248,1)] grow shrink w-44 pt-4 rounded-lg">
            <p className="max-w-full w-[220px] overflow-hidden pl-[35px] pr-[34px] pb-2 max-md:px-5">
              Music & soundwaves
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/a4549f968a9bd51d1287c1d659d563e6173db421?placeholderIfAbsent=true"
              alt="Music & soundwaves feature"
              className="aspect-[4] object-contain w-[220px] max-w-full rounded-[0px_0px_8px_8px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
