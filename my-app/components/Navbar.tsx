import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center py-5 px-8">
      <div>
        <Link href="/" className="text-lg font-semibold">
          AiSum
        </Link>
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
