import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center items-center hero py-8  bg-base-200 max-w-6xl mx-auto">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold tracking-tight">
            Aaron K<span className="text-accent font-bold">.</span> Altman
          </h1>
          <p className="py-6 tracking-wide leading-8">
            Welcome to the digital playground where creativity meets code—my
            corner of the internet where innovative design and cutting-edge
            development converge.{" "}
            <span className="font-bold text-primary underline">
              As a passionate full-stack developer based in Atlanta, GA,
            </span>{" "}
            I specialize in crafting seamless, dynamic web experiences that
            breathe life into ideas. Leveraging a robust skill set in{" "}
            <span className="text-accent font-bold underline">
              WordPress, JavaScript, React, Next.js, Python, and Django
            </span>{" "}
            , my mission is to build intuitive, accessible, and engaging digital
            solutions. Dive into my portfolio to explore how I blend aesthetic
            vision with technical expertise to transform concepts into reality,
            one line of code at a time.
          </p>
          <button className="btn btn-accent w-1/3">Learn More</button>
        </div>
      </div>
    </div>
  );
}
