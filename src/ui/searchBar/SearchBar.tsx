import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-[85%] mx-auto my-4">
      <div className="flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-neutral-200 overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-600 p-4">
          <i className="ri-search-2-line ri-xl"></i>
        </div>

        <input
          className="peer h-full w-full outline-none text-base font-medium text-gray-700 pr-2 bg-neutral-200"
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};

export default SearchBar;
