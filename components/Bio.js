import React from "react";
import { infoSchema } from "../public/infoSchema";
import Link from "next/link";

function Bio() {
  const ctaInHome = [
    { name: "Posts", url: "/posts" },
    { name: "Portfolio", url: "/potfolio" },
  ];
  let me = infoSchema();
  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center md:text-center lg:text-left">
          <img
            class="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
            src="/suvadeep.jpg"
            alt=""
            width="384"
            height="512"
          />
          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{me.firstName}</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              {me.lastName}
            </span>
          </h1>
          <p className="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
            {me.description}
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <Link href={ctaInHome[0].url}>
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  {ctaInHome[0].name}
                  <span className="lg:px-1 md:px-auto sm:px-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href={ctaInHome[1].url}>
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  {ctaInHome[1].name}
                  <span className="lg:px-1 md:px-auto sm:px-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Bio;
