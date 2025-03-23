import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const signedIn = true;
  return (
    <div className="bg-black text-white flex justify-between items-center py-5 px-4 md:px-8">
      <div>
        <Link href="/" className="text-lg font-semibold">
          AiSum
        </Link>
      </div>
      {signedIn ? (
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/summarize" className="hover:underline">Summarize</Link>
          <Link href="/history" className="hover:underline">History</Link>
          <Button>Log Out</Button>
        </div>
      ) : (
        <div>
          <Button>Sign In</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
