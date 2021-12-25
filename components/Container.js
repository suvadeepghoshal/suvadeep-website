import React from "react";
import { Popover } from "@headlessui/react";
import NavBar from "../components/NavBar";
import Bio from "../components/Bio";

function Container() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          {/* Headlessui popover component */}
          <Popover>
            {/* Inserting the nav bar component */}
            <NavBar />
          </Popover>
          {/* Inserting the Bio component */}
          <Bio />
        </div>
      </div>
    </div>
  );
}

export default Container;
