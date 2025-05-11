import React from "react";
import { Link } from "react-router-dom";

const ProductFeatures: React.FC = () => {
  return (
    <section className="bg-white flex w-[1408px] max-w-full flex-col overflow-hidden items-stretch mt-6 pt-8 rounded-xl">
      <div className="w-[704px] max-w-full font-medium p-16 max-md:px-5">
        <p className="w-full text-[15px] text-[rgba(0,152,253,1)] uppercase tracking-[0.4px] leading-[1.6] pr-[301px] max-md:pr-5">
          Make every video project better
        </p>
        <h2 className="w-full text-6xl text-[rgba(24,25,27,1)] tracking-[-1.5px] leading-[60px] mt-2 pr-[117px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:pr-5">
          Record and edit in
          <br />
          one place.
        </h2>
      </div>
      
      {/* First Feature */}
      <article className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap mt-8 max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col w-[422px] max-w-[422px] my-auto pl-16 py-10 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/c2ee9d2d-6d3b-4790-9690-f35d3611d6fa?placeholderIfAbsent=true"
            alt="Screen recording icon"
            className="aspect-[1.34] object-contain w-[51px]"
          />
          <h3 className="max-w-full w-[358px] text-4xl text-[rgba(24,25,27,1)] font-medium leading-10 mt-6 pr-[27px] max-md:pr-5">
            Create professional
            <br />
            demos and tutorials.
          </h3>
          <p className="max-w-full w-[358px] text-lg text-neutral-700 font-normal leading-7 mt-6 pr-11 max-md:pr-5">
            Record your screen and{" "}
            <span className="font-medium text-[rgba(0,152,253,1)]">
              webcam
            </span>{" "}
            to
            <br />
            quickly deliver videos that only look like
            <br />
            they took hours to produce.
          </p>
          <Link
            to="/screen-recorder"
            className="bg-white flex items-center gap-[23px] justify-center mt-6 pr-8 py-4 rounded-full hover:bg-gray-50 transition-colors max-md:pr-5"
          >
            <span className="text-[rgba(0,152,253,1)] text-lg font-medium leading-loose self-stretch my-auto">
              Screen Recorder
            </span>
            <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/1283634b0ccb5022959cc5868342345b9d5d0af8?placeholderIfAbsent=true"
                alt="Arrow right"
                className="aspect-[0.97] object-contain w-7"
              />
            </div>
          </Link>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/3c31e6ca0e15998476cb5ddc8288e121b3ba82d7?placeholderIfAbsent=true"
          alt="Screen recording demo"
          className="aspect-[1.25] object-contain w-[740px] self-stretch min-w-60 my-auto max-md:max-w-full"
        />
      </article>
      
      {/* Second Feature */}
      <article className="flex w-full items-center gap-[40px_96px] flex-wrap mt-48 pr-[90px] max-md:max-w-full max-md:mt-10 max-md:pr-5">
        <div className="self-stretch flex min-w-60 grow shrink w-[659px] my-auto max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/d1d9b3f0ed6b4f95697eaf082283eb761758c1b1?placeholderIfAbsent=true"
            alt="Subtitles demo"
            className="aspect-[1.57] object-contain w-[753px] shadow-[10px_28px_77px_rgba(135,135,135,0.3)] min-w-60 max-w-[753px] rounded-[0px_12px_12px_0px]"
          />
        </div>
        <div className="self-stretch flex min-w-60 flex-col grow shrink w-[375px] max-w-[469px] my-auto pr-16 py-8 max-md:max-w-full">
          <div className="flex w-10 justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/00edbdaec7adb704af9896f0801c25f9f92de6f1?placeholderIfAbsent=true"
              alt="Subtitles icon"
              className="aspect-[1.38] object-contain w-10"
            />
          </div>
          <h3 className="max-w-full w-[405px] text-4xl text-[rgba(24,25,27,1)] font-medium leading-10 mt-6 pr-[84px] max-md:pr-5">
            Add Subtitles with a<br />
            Single Click
          </h3>
          <p className="max-w-full w-[405px] text-lg text-neutral-700 font-normal leading-7 mt-6 pr-[22px] max-md:pr-5">
            Use our AI automatic subtitling tool to
            <br />
            transcribe your video's audio to text in just a few
            <br />
            seconds. Make easy edits and even add subtitle
            <br />
            animations
          </p>
          <Link
            to="/auto-subtitles"
            className="bg-white flex items-center gap-[25px] justify-center mt-6 pr-8 py-4 rounded-full hover:bg-gray-50 transition-colors max-md:pr-5"
          >
            <span className="text-[rgba(0,152,253,1)] text-lg font-medium leading-loose self-stretch my-auto">
              Discover Auto Subtitles
            </span>
            <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/5bc2f0f8fea3686bdd5a010881c9d2644945795b?placeholderIfAbsent=true"
                alt="Arrow right"
                className="aspect-[0.97] object-contain w-7"
              />
            </div>
          </Link>
        </div>
      </article>
      
      {/* Third Feature */}
      <div className="self-center flex w-[512px] max-w-full flex-col items-center mt-48 px-4 max-md:mt-10">
        <div className="flex w-[43px] justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/c93245a52023c63d9d828091aa7656f5dfbe2433?placeholderIfAbsent=true"
            alt="Edit icon"
            className="aspect-[1.05] object-contain w-[43px]"
          />
        </div>
        <h3 className="w-full text-4xl text-[rgba(24,25,27,1)] font-medium text-center leading-10 mt-6 pl-[39px] pr-[38px] max-md:px-5">
          Edit and publish polished
          <br />
          videos.
        </h3>
        <div className="flex w-full max-w-[480px] flex-col items-stretch text-lg text-center leading-loose mt-6 px-5 max-md:max-w-full">
          <p className="text-neutral-700 font-normal max-md:max-w-full max-md:mr-1">
            Enhance your videos with auto-generated subtitles and
          </p>
          <div className="flex items-stretch gap-[13px]">
            <span className="text-neutral-700 font-normal grow">
              soundwaves, instantly{" "}
            </span>
            <span className="text-[rgba(0,152,253,1)] font-medium grow shrink w-[216px] basis-auto">
              remove background noise from
            </span>
          </div>
          <div className="self-center flex w-[325px] max-w-full items-stretch gap-[5px]">
            <span className="text-[rgba(0,152,253,1)] font-medium">
              audio
            </span>
            <span className="text-neutral-700 font-normal grow shrink w-[266px] basis-auto">
              , and more. All it takes is one click.
            </span>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/c734cbde8351c4e607a109b4ae26fcd160e1a394?placeholderIfAbsent=true"
        alt="Video editing interface"
        className="aspect-[2.72] object-contain w-full mt-12 max-md:max-w-full max-md:mt-10"
      />
    </section>
  );
};

export default ProductFeatures;
