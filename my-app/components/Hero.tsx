import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-12 flex flex-col justify-center items-center h-[85vh] relative">
      <h1 className="text-[8vw]">AI Text Summarizer</h1>
      <p className="text-[3vw] text-gray-700 italic mb-8">
        Summarize text in Seconds
      </p>

      <Link href="/summarize">
        <Button>Get Started</Button>
      </Link>

      <div className="absolute bottom-0 left-5">
        <p>
          By{" "}
          <Link
            href="https://zgboportfolio.vercel.app"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Emmanuel Ezeigbo
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
