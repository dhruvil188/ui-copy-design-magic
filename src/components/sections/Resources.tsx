import React from "react";
import { Link } from "react-router-dom";

const Resources: React.FC = () => {
  return (
    <section className="bg-white w-[1408px] max-w-full overflow-hidden mt-6 rounded-xl">
      <div className="w-full max-w-[1408px] font-medium p-16 max-md:max-w-full max-md:px-5">
        <p className="w-full text-[15px] text-[rgba(0,152,253,1)] uppercase tracking-[0.4px] leading-[1.6] pr-[1074px] max-md:pr-5">
          Go from beginner to pro
        </p>
        <h2 className="w-full text-6xl text-[rgba(24,25,27,1)] tracking-[-1.5px] leading-none mt-2 pr-[567px] max-md:max-w-full max-md:text-[40px] max-md:pr-5">
          Level up with free resources
        </h2>
      </div>
      <div className="flex w-full max-w-[1408px] flex-wrap rounded-[0px_0px_12px_12px] max-md:max-w-full">
        <Link to="/grow-audience" className="flex min-w-60 grow shrink w-[563px] pb-px max-md:max-w-full">
          <article className="bg-[rgba(255,213,64,1)] flex min-w-60 w-[704px] flex-col items-center justify-center pt-12 pb-8 px-[102px] rounded-[0px_0px_0px_12px] max-md:max-w-full max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/adcb0f70b610654715806790abe8a992e4a0243f?placeholderIfAbsent=true"
              alt="Grow your audience"
              className="aspect-[2.22] object-contain w-[500px] max-w-full"
            />
            <div className="flex w-[382px] max-w-full items-center gap-2 mt-8">
              <span className="self-stretch min-w-60 text-2xl text-[rgba(24,25,27,1)] font-normal leading-none my-auto pr-5">
                Grow your audience with video
              </span>
              <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/716b78b5b4f77441ad5007ea48fa48766ee04524?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="aspect-[0.97] object-contain w-7"
                />
              </div>
            </div>
          </article>
        </Link>
        <Link to="/tutorials" className="flex min-w-60 grow shrink w-[563px] max-md:max-w-full">
          <article className="bg-[rgba(0,152,253,1)] flex min-w-60 w-[704px] flex-col items-center justify-center pt-12 pb-8 px-[102px] rounded-[0px_0px_12px_0px] max-md:max-w-full max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/f136051095be087fa4c750f3037b5e3912b6c288?placeholderIfAbsent=true"
              alt="Video editing tutorials"
              className="aspect-[2.22] object-contain w-[500px] max-w-full"
            />
            <div className="flex w-[372px] max-w-full items-center gap-2 mt-8">
              <span className="self-stretch min-w-60 text-2xl text-white font-normal leading-none my-auto pr-5">
                Browse video editing tutorials
              </span>
              <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/26b682bd8efa84b692bfd13ad74e52912541cd5c?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="aspect-[0.97] object-contain w-7"
                />
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default Resources;
