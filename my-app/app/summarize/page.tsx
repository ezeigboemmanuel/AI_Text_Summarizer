import { Button } from "@/components/ui/button";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SummarizePage = () => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-center items-center px-4 md:px-12 h-[90vh]">
      <div className="bg-white w-full h-[70vh] shadow-md rounded-2xl flex">
        <textarea
          className="w-full rounded-l-2xl p-5 resize-none md:border-r focus:outline-none"
          placeholder='Enter or paste your text and press "Generate Summary"'
        />

        <textarea
          disabled
          className="w-full rounded-r-2xl p-5 resize-none focus:outline-none hidden md:inline-flex"
          placeholder=""
        />
      </div>

      {/* <div className="bg-white w-full h-[70vh] shadow-md rounded-2xl md:hidden">
        <Tabs defaultValue="account" className="h-full">
          <TabsList className="rounded-none bg-white">
            <TabsTrigger value="summarizer">Summarizer</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
          </TabsList>
          <TabsContent value="summarizer" className="p-3">
            <textarea
              className="w-full h-full resize-none focus:outline-none"
              placeholder='Enter or paste your text and press "Generate Summary"'
            />
          </TabsContent>
          <TabsContent value="summary" className="p-3">
            <textarea
              disabled
              className="w-full h-full resize-none focus:outline-none"
              placeholder=""
            />
          </TabsContent>
        </Tabs>
      </div> */}

      <Button className="mt-8">Generate Summary</Button>
    </div>
  );
};

export default SummarizePage;
