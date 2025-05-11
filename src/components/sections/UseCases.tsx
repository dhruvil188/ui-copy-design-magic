import React, { useState } from "react";

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("marketing");

  const tabs = [
    { id: "subtitles", label: "Subtitles and translations" },
    { id: "meetings", label: "Meetings and communication" },
    { id: "training", label: "Training and e-learning" },
    { id: "marketing", label: "Marketing and social media" },
  ];

  return (
    <section className="bg-white flex w-[1408px] max-w-full overflow-hidden rounded-xl">
      <div className="flex min-w-60 w-[1408px] flex-wrap max-md:max-w-full">
        <div className="min-w-60 w-[704px] p-16 max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-xl font-medium max-md:max-w-full">
            <p className="w-full text-base text-[rgba(0,152,253,1)] uppercase tracking-[0.4px] pr-[415px] max-md:pr-5">
              Endless use cases
            </p>
            <h2 className="w-full text-6xl text-[rgba(24,25,27,1)] tracking-[-1.5px] leading-[60px] mt-3 pr-[55px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:pr-5">
              Perfect for your next
              <br />
              project.
            </h2>
          </div>
          <div className="w-72 max-w-full mt-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex w-full max-w-72 items-center text-3xl ${
                  activeTab === tab.id
                    ? "text-[rgba(0,152,253,1)]"
                    : "text-[rgba(113,115,124,1)]"
                } font-medium leading-9 ${
                  tab.id === "marketing" ? "mt-2" : "mt-2"
                } pr-9 py-4 max-md:pr-5 hover:text-[rgba(0,152,253,1)] transition-colors`}
                onClick={() => setActiveTab(tab.id)}
              >
                <h3 className="self-stretch min-w-60 w-[252px] my-auto pr-[76px]">
                  {tab.label.split(" and ")[0]} and
                  <br />
                  {tab.label.split(" and ")[1]}
                </h3>
                {activeTab === tab.id && (
                  <div className="self-stretch flex overflow-hidden justify-center w-7 my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/0b90b3d8aff46c6fad20d3e822b6f3e6023e344a?placeholderIfAbsent=true"
                      alt="Selected"
                      className="aspect-[0.97] object-contain w-7"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex min-w-60 overflow-hidden flex-1 shrink basis-32 max-md:max-w-full">
          <div className="bg-[rgba(103,193,255,1)] flex min-w-60 w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] py-0.5 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/95c8ba9e54f5693fc4c043ee988951d31715eb68?placeholderIfAbsent=true"
              alt="Marketing and social media use case"
              className="aspect-[0.93] object-contain w-full max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
