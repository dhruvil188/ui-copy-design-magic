import React from "react";

const Brands: React.FC = () => {
  return (
    <section className="z-0 flex w-[1408px] max-w-full flex-col overflow-hidden items-center py-20">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/e199c94e753333104dcdb6d49af384fd50b1694c?placeholderIfAbsent=true"
        alt="Trusted by top brands"
        className="aspect-[43.48] object-contain w-full"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a7e93a8978cb47af8b26cddee3bce179/39c1582130509b1cbe290fd0bc346c319f4fba86?placeholderIfAbsent=true"
        alt="More brand logos"
        className="aspect-[43.48] object-contain w-full mt-10"
      />
    </section>
  );
};

export default Brands;
