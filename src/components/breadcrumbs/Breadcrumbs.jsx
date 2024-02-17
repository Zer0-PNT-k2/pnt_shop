import React from "react";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { MdOutlineNavigateNext } from "react-icons/md";
import Wrapper from "../wrapper";

export default function Breadcrumbs({ breadcrumbs }) {
  const lastIndex = breadcrumbs.length - 1;
  const lastItemAtrr = { "aria-current": "page" };

  return (
    <div className="w-full h-24 bg-gray-200 text-base font-['Open_Sans'] mb-24">
      <Wrapper>
        <nav className="flex  h-24 items-center" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700"
              >
                <TiHome className="w-5 h-5 mr-1.5 mb-1" />
                Trang chủ
              </Link>
            </li>
            {breadcrumbs.map((breadcrumb, i) => {
              return (
                <li key={i} {...(lastIndex === i ? lastItemAtrr : {})}>
                  <div className="flex items-center">
                    <MdOutlineNavigateNext className="w-6 h-6 text-gray-700 mx-1" />
                    <Link to={lastIndex === i ? "#" : breadcrumb.to}>
                      <span
                        className={`ms-1 text-sm font-medium md:ms-2 ${
                          lastIndex === i ? "text-red-600 cursor-default" : ""
                        }`}
                      >
                        {breadcrumb.title}
                      </span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </Wrapper>
    </div>
  );
}
