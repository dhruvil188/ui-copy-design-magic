import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(246,243,243,1)] w-full">
      <nav className="flex min-h-20 w-full justify-center p-4 max-md:max-w-full">
        <div className="flex min-w-60 w-[1408px] gap-2 flex-wrap max-md:max-w-full">
          <div className="flex min-w-60 items-center gap-4 flex-wrap grow shrink w-[832px] pr-40 max-md:max-w-full">
            <div className="self-stretch flex grow shrink w-[118px] my-auto p-2">
              <Link to="/" className="flex max-w-[148px] w-[132px] justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/de886305e6613fed3997b12dc9f49fb33664fa06?placeholderIfAbsent=true"
                  alt="Veed.io Logo"
                  className="aspect-[5.49] object-contain w-[132px]"
                />
              </Link>
            </div>
            <div className="self-stretch flex min-w-60 items-center gap-2 justify-center flex-wrap grow shrink w-[573px] my-auto max-md:max-w-full">
              <div className="self-stretch flex grow shrink w-24 my-auto">
                <button className="flex items-center gap-2.5 justify-center p-3 rounded-full hover:bg-gray-100 transition-colors">
                  <span className="text-[rgba(24,25,27,1)] text-base font-medium self-stretch my-auto">
                    Products
                  </span>
                  <div className="self-stretch flex overflow-hidden justify-center w-3 my-auto">
                    <div className="flex w-3 pl-px py-[3px]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/08aac3e8d190209f924fa8e8fe853a13d31218aa?placeholderIfAbsent=true"
                        alt="Dropdown arrow"
                        className="aspect-[1.83] object-contain w-[11px]"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex grow shrink w-[107px] my-auto">
                <button className="flex items-center gap-2.5 justify-center p-3 rounded-full hover:bg-gray-100 transition-colors">
                  <span className="text-[rgba(24,25,27,1)] text-base font-medium self-stretch my-auto">
                    Use Cases
                  </span>
                  <div className="self-stretch flex overflow-hidden justify-center w-3 my-auto">
                    <div className="flex w-3 px-px py-[3px]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/e08524df7ea144fad826786b880d49f9661930f8?placeholderIfAbsent=true"
                        alt="Dropdown arrow"
                        className="aspect-[1.67] object-contain w-2.5"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex grow shrink w-[108px] my-auto">
                <button className="flex items-center gap-2.5 justify-center pl-[13px] pr-3 py-3 rounded-full hover:bg-gray-100 transition-colors">
                  <span className="text-[rgba(24,25,27,1)] text-base font-medium text-center self-stretch my-auto">
                    Resources
                  </span>
                  <div className="self-stretch flex overflow-hidden justify-center w-3 my-auto">
                    <div className="flex w-3 px-px py-[3px]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/e3b0f9810fdd762aed170f70c98723f97a266e16?placeholderIfAbsent=true"
                        alt="Dropdown arrow"
                        className="aspect-[1.67] object-contain w-2.5"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex grow shrink w-[125px] my-auto">
                <button className="flex items-center gap-[9px] justify-center pl-3.5 pr-3 py-3 rounded-full hover:bg-gray-100 transition-colors">
                  <span className="text-[rgba(24,25,27,1)] text-base font-medium text-center self-stretch my-auto">
                    For Business
                  </span>
                  <div className="self-stretch flex overflow-hidden justify-center w-3 my-auto">
                    <div className="flex w-3 px-px py-[3px]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/14b2070cce8da481a6e2494c7cd131f8b3dd7b13?placeholderIfAbsent=true"
                        alt="Dropdown arrow"
                        className="aspect-[1.67] object-contain w-2.5"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch">
                <Link to="/pricing" className="text-base text-[rgba(24,25,27,1)] font-medium whitespace-nowrap grow shrink w-[60px] my-auto p-3 rounded-full hover:bg-gray-100 transition-colors block">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
          <div className="flex min-w-60 items-center gap-2 text-base font-medium grow shrink w-[378px] pl-40 max-md:max-w-full">
            <div className="self-stretch flex gap-2 text-[rgba(24,25,27,1)] w-[207px] my-auto">
              <Link to="/contact" className="self-stretch w-[127px] pl-3 pr-[15px] py-3 rounded-full hover:bg-gray-100 transition-colors">
                Contact Sales
              </Link>
              <Link to="/login" className="self-stretch bg-white whitespace-nowrap w-[72px] px-4 py-3 rounded-full hover:bg-gray-50 transition-colors">
                Login
              </Link>
            </div>
            <Link to="/signup" className="self-stretch bg-[rgba(24,25,27,1)] text-white w-[97px] my-auto pl-5 pr-[21px] py-3 rounded-full hover:bg-black transition-colors max-md:pr-5">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
