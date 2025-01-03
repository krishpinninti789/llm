import React from "react";

const Features = () => {
  return (
    <section className="min-h-[100svh] w-[100svw] bg-[#090A0B] p-8">
      <h1 className="text-white text-4xl lg:text-6xl md:text-5xl font-light mb-4">
        Study without{" "}
        <span className="text-brand1 font-serif">distraction</span>
      </h1>
      {/* <div className="featuresGrid">
        <div className="featuresGridRow1">
          <div className="featuresGridDiv"></div>
          <div className="featuresGridDiv"></div>
        </div>
        <div className="featuresGridRow2">
          <div className="featuresGridDiv"></div>
          <div className="featuresGridDiv"></div>
        </div>
      </div> */}
      <div className="parent min-h-[87vh]">
        <div className="div1 featuresGridDiv borderGradient">1</div>
        <div className="div2 featuresGridDiv borderGradient">2</div>
        <div className="div3 featuresGridDiv borderGradient">3</div>
        <div className="div4 featuresGridDiv borderGradient">4</div>
      </div>
    </section>
  );
};

export default Features;
