import { Button } from "@/components/ui/button";
import React from "react";

const SummarizePage = () => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-center items-center px-12 h-[90vh]">
      <div className="bg-white w-full h-[70vh] shadow-md rounded-2xl flex ">
        <textarea className="w-full rounded-l-2xl p-5 resize-none border-r focus:outline-none" placeholder='Enter or paste your text and press "Generate Summary"' />

        <textarea disabled className="w-full rounded-r-2xl p-5 resize-none focus:outline-none" placeholder="" />
      </div>

      <Button className="mt-8">Generate Summary</Button>
    </div>
  );
};

export default SummarizePage;
