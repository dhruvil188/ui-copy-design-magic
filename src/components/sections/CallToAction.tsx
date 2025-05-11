import React from "react";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-[rgba(24,25,27,1)] flex w-[1408px] max-w-full items-center flex-wrap mt-6 py-24 rounded-xl">
      <div className="self-stretch flex min-w-60 flex-col w-[775px] my-auto px-16 py-px max-md:max-w-full max-md:px-5">
        <h2 className="self-stretch text-6xl text-white font-medium tracking-[-1.5px] leading-[60px] pr-14 max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:pr-5">
          When it comes to
          <br />
          amazing videos, all you
          <br />
          need is VEED.
        </h2>
        <Link
          to="/signup"
          className="bg-white flex items-center gap-6 justify-center mt-16 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors max-md:mt-10 max-md:px-5"
        >
          <span className="text-[rgba(24,25,27,1)] text-lg font-medium leading-loose self-stretch my-auto">
            Create your first video
          </span>
          <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/5f314649a23c889c67965045c1f87b75e5716f72?placeholderIfAbsent=true"
              alt="Arrow right"
              className="aspect-[0.97] object-contain w-7"
            />
          </div>
        </Link>
        <p className="text-white text-sm font-normal leading-none mt-[23px]">
          *No credit card or account required
        </p>
      </div>
      <div className="self-stretch relative flex min-w-60 flex-1 shrink basis-[43px] max-w-[704px] my-auto pl-[85px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/5303f84b394610c0b25c2cdd436afa197a426984?placeholderIfAbsent=true"
          alt="Video editing interface"
          className="aspect-[0.92] object-contain w-full z-0 min-w-60 flex-1 shrink basis-[0%] max-w-[634px] max-md:max-w-full"
        />
        <div className="absolute z-0 flex w-[158px] shrink-0 h-[595px] left-[475px] right-0 inset-y-0"></div>
      </div>
    </section>
  );
};

export default CallToAction;
