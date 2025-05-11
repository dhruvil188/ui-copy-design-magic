import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(246,243,243,1)] flex w-full pt-12 pb-32 px-6 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex min-w-60 w-[1392px] gap-8 flex-wrap">
        <div className="grow shrink w-[164px] pr-2">
          <Link to="/" className="flex pr-[65px] max-md:pr-5">
            <div className="flex max-w-[197px] w-[132px] justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/cfa5e93ac9bd5f23e621290232332ccfe669b459?placeholderIfAbsent=true"
                alt="Veed.io Logo"
                className="aspect-[5.49] object-contain w-[132px]"
              />
            </div>
          </Link>
          <p className="text-base text-[rgba(92,94,101,1)] font-normal leading-6 mt-6 pr-[31px] max-md:pr-5">
            The easy way to create
            <br />
            stunning videos, add
            <br />
            subtitles and grow your
            <br />
            audience.
          </p>
          <div className="flex text-sm text-[rgba(61,62,67,1)] font-normal whitespace-nowrap leading-none mt-6 pr-[126px] max-md:pr-5">
            <div className="flex flex-col relative z-10 aspect-[3.55] w-[71px] py-px">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/35ad13cb-50a9-4005-b528-3a2011c9ede3?placeholderIfAbsent=true"
                alt="Language selector"
                className="absolute h-full w-full object-cover inset-0"
              />
              English
            </div>
          </div>
          <div className="flex gap-2 mt-6 pr-[25px] max-md:pr-5">
            <Link to="#" className="bg-[rgba(0,152,253,1)] flex items-center w-7 h-7 p-1.5 rounded-full hover:bg-blue-600 transition-colors">
              <div className="flex w-4 overflow-hidden justify-center">
                <div className="flex w-4 py-0.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/2da5d9a02ec569ee225f4186e2b6fb63e57439c7?placeholderIfAbsent=true"
                    alt="Twitter"
                    className="aspect-[1.23] object-contain w-4"
                  />
                </div>
              </div>
            </Link>
            <Link to="#" className="bg-[rgba(0,152,253,1)] flex items-center w-7 h-7 p-1.5 rounded-full hover:bg-blue-600 transition-colors">
              <div className="flex w-4 overflow-hidden justify-center">
                <div className="flex w-4 py-[3px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/43ed616e6230c871a362d5eaad113b41efe9f494?placeholderIfAbsent=true"
                    alt="Facebook"
                    className="aspect-[1.45] object-contain w-4"
                  />
                </div>
              </div>
            </Link>
            <Link to="#" className="bg-[rgba(0,152,253,1)] flex items-center w-7 h-7 p-1.5 rounded-full hover:bg-blue-600 transition-colors">
              <div className="flex w-4 overflow-hidden justify-center">
                <div className="flex w-4 p-px">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/d9faf6a9d84aedf620f69fee8646be4dc7ded9f6?placeholderIfAbsent=true"
                    alt="Instagram"
                    className="aspect-[1] object-contain w-3.5"
                  />
                </div>
              </div>
            </Link>
            <Link to="#" className="bg-[rgba(0,152,253,1)] flex items-center w-7 h-7 p-1.5 rounded-full hover:bg-blue-600 transition-colors">
              <div className="flex w-4 overflow-hidden justify-center">
                <div className="flex w-4 px-px">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/df24d165137d73ed02af07841990dd4d3b26b184?placeholderIfAbsent=true"
                    alt="LinkedIn"
                    className="aspect-[0.87] object-contain w-3.5"
                  />
                </div>
              </div>
            </Link>
            <Link to="#" className="bg-[rgba(0,152,253,1)] flex items-center w-7 h-7 p-1.5 rounded-full hover:bg-blue-600 transition-colors">
              <div className="flex w-4 overflow-hidden justify-center">
                <div className="flex w-4 py-0.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/33e26b0290e4183f3e4f238f9085b22977c7e5de?placeholderIfAbsent=true"
                    alt="YouTube"
                    className="aspect-[1.33] object-contain w-4"
                  />
                </div>
              </div>
            </Link>
          </div>
          <p className="text-xs text-[rgba(143,145,153,1)] font-normal leading-none mt-6 pr-[71px] max-md:pr-5">
            © Copyright 2023 VEED
          </p>
        </div>
        
        <div className="text-sm text-[rgba(113,115,124,1)] font-normal leading-none grow shrink w-[165px]">
          <h3 className="max-w-full w-[205px] text-[15px] text-[rgba(61,62,67,1)] font-medium whitespace-nowrap leading-[1.6] pr-[168px] max-md:pr-5">
            Tools
          </h3>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[129px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Video Editor
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[89px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Video Compressor
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[105px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Video Converter
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[102px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Screen Recorder
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[113px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Video Trimmer
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[121px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Video Merger
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-8 pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Video Background Remover
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[60px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Auto Subtitle Generator
          </Link>
          <Link to="#" className="block max-w-full w-[205px] mt-[17px] pr-[126px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Audio Joiner
          </Link>
        </div>
        
        <div className="text-sm text-[rgba(113,115,124,1)] font-normal grow shrink w-[164px]">
          <h3 className="max-w-full w-[205px] text-base text-[rgba(61,62,67,1)] font-medium whitespace-nowrap pr-[157px] max-md:pr-5">
            Create
          </h3>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[126px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Video Maker
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[43px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Social Media Video Maker
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[86px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Photo Video Maker
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[94px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Lyric Video Maker
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[61px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Voiceover Video Maker
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[89px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Mockup Generator
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-28 pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Cartoon Maker
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[93px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Collage Generator
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[98px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Animation Maker
          </Link>
        </div>
        
        <div className="text-sm text-[rgba(113,115,124,1)] font-normal whitespace-nowrap grow shrink w-[164px]">
          <h3 className="max-w-full w-[205px] text-base text-[rgba(61,62,67,1)] font-medium pr-[148px] max-md:pr-5">
            Product
          </h3>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[161px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Pricing
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[141px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Enterprise
          </Link>
        </div>
        
        <div className="text-sm text-[rgba(113,115,124,1)] font-normal grow shrink w-[165px]">
          <h3 className="max-w-full w-[205px] text-base text-[rgba(61,62,67,1)] font-medium whitespace-nowrap pr-[129px] max-md:pr-5">
            Resources
          </h3>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[139px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            VEED Blog
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[103px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            YouTube Guides
          </Link>
        </div>
        
        <div className="text-sm text-[rgba(113,115,124,1)] font-normal grow shrink w-[164px]">
          <h3 className="max-w-full w-[205px] text-base text-[rgba(61,62,67,1)] font-medium whitespace-nowrap pr-[137px] max-md:pr-5">
            Company
          </h3>
          <Link to="#" className="block max-w-full w-[205px] whitespace-nowrap leading-none mt-[17px] pr-[174px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Jobs
          </Link>
          <Link to="#" className="block max-w-full w-[205px] whitespace-nowrap leading-none mt-[17px] pr-[159px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Privacy
          </Link>
          <Link to="#" className="block max-w-full w-[205px] whitespace-nowrap leading-none mt-[17px] pr-[165px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Terms
          </Link>
          <Link to="#" className="block max-w-full w-[205px] whitespace-nowrap leading-none mt-[17px] pr-[154px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Cookies
          </Link>
          <Link to="#" className="block max-w-full w-[205px] leading-none mt-[17px] pr-[103px] pb-px max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
