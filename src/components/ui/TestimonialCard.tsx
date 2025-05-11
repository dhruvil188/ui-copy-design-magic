import React from "react";

interface TestimonialCardProps {
  imageSrc: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quote,
  author,
  role,
  company,
}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.002)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex min-w-60 overflow-hidden grow shrink w-[219px] rounded-2xl">
      <article className="min-w-60 w-[274px] pb-6">
        <img
          src={imageSrc}
          alt={`${author} from ${company}`}
          className="aspect-[1.76] object-contain w-full"
        />
        <div className="w-full max-w-[274px] pt-4 pb-5 px-5">
          <p className="w-full text-base text-neutral-700 font-normal leading-6 pr-[15px]">
            {quote}
          </p>
          <p className="w-full text-sm text-[rgba(24,25,27,1)] font-bold leading-5 mt-[23px] pr-[38px] pb-px max-md:pr-5">
            {author}, {role}
            <br />
            {company}
          </p>
        </div>
      </article>
    </div>
  );
};

export default TestimonialCard;
