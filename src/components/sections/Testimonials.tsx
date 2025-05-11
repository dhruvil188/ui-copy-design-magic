import React from "react";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/acb6497812fe932dfb7d47d722cdffdc4b9a9bb9?placeholderIfAbsent=true",
      quote: "I love using VEED. The speech to subtitles transcription is the most accurate I've seen on the market. It's enabled me to edit videos in just minutes - taking my content to the next level.",
      author: "Laura Haleydt",
      role: "Brand Marketing Manager",
      company: "Carlsberg Importers"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/299cb31e318f141079032dede8fa69111487334b?placeholderIfAbsent=true",
      quote: "VEED's product has been game-changing. It's allowed us to create gorgeous content for social promotion and ad units with ease.",
      author: "Max Alter",
      role: "Director of Audience Development",
      company: "NBC"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/3fb446d64316d24504ee6a85ebd878fdf274f6f9?placeholderIfAbsent=true",
      quote: "VEED saves us valuable time and money. It's allowed my team to add subtitles and repurpose assets for different channels in just a few clicks.",
      author: "Adam Harrison",
      role: "VP of Marketing",
      company: "Weavr"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/69c8a8f6bd904fa2367f8b78a67dd223f763198f?placeholderIfAbsent=true",
      quote: "VEED enables subtitling, editing, encoding and many more advanced features: other editors just can't compete.",
      author: "Chris Y.",
      role: "Content Creator",
      company: ""
    }
  ];

  return (
    <section className="bg-white flex min-h-[792px] w-full max-w-[1408px] flex-col overflow-hidden items-center py-20 rounded-xl max-md:max-w-full">
      <div className="flex w-[939px] max-w-full text-6xl text-[rgba(24,25,27,1)] font-medium text-center tracking-[-1.5px] leading-[60px] px-16 max-md:text-[40px] max-md:leading-[44px] max-md:px-5">
        <h2 className="min-w-60 w-[811px] px-[75px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:px-5">
          Loved by content creators
          <br />
          and teams
        </h2>
      </div>
      <div className="flex w-full overflow-hidden pt-20 max-md:max-w-full">
        <div className="flex min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] pb-8 px-8 max-md:max-w-full max-md:px-5">
          <div className="flex min-w-60 w-full gap-6 justify-center flex-wrap flex-1 shrink basis-[0%] px-[88px] max-md:max-w-full max-md:px-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                imageSrc={testimonial.imageSrc}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
