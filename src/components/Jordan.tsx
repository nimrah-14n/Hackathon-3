import Link from "next/link";
import React from "react";
import { SiJordan } from "react-icons/si";

export const Jordan = () => {
  return (
    <Link href={"/"}>
      <h1
        className=
          "text-2xl text-black hover:text-blue-700 font-bold uppercase relative group overflow-hidden duration-300"
        
      >
        <SiJordan className="text-4xl ml-3 inline-block" />
      </h1>
    </Link>
  );
};
