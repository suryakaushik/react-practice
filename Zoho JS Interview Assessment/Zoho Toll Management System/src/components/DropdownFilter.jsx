import React from 'react';

import filter from '../assets/filter.svg';

function DropdownFilter({
  toggleDropdown,
  setToggleDropdown,
  setTollNameFilter,
  tollNameFilter,
  children,
  tollList,
}) {
  const onDropdownChange = (e) => {
    setTollNameFilter(e.target.innerHTML);
    setToggleDropdown(false);
  };
  return (
    <section className="flex flex-row justify-center self-center">
      <div
        className={`${
          toggleDropdown && 'left-0 top-0 bottom-0 right-0 w-full h-full fixed'
        }`}
        onClick={() => setToggleDropdown(false)}
      />
      <span className="relative inline-block self-center">
        <a
          className="cursor-pointer"
          onClick={(e) => {
            setToggleDropdown((a) => !a);
            e.stopPropagation();
          }}
        >
          <img src={filter} className="w-8" />
        </a>

        {toggleDropdown && (
          <ul className="dropdown z-50 bg-white text-black font-medium mt-2 border border-2 rounded-md border-[#64ff98]">
            <li
              className={`${
                tollNameFilter == 'All' &&
                'bg-violet-500 text-white hover:text-black'
              }`}
              onClick={onDropdownChange}
            >
              {'All'}
            </li>
            {tollList.map((item, i) => {
              return (
                <li
                  className={`${
                    tollNameFilter == item['tollName'] &&
                    'bg-violet-500 text-white hover:text-black'
                  }`}
                  onClick={onDropdownChange}
                  value={item['tollName']}
                  key={item['tollName']}
                >
                  {item['tollName']}
                </li>
              );
            })}
          </ul>
        )}
      </span>
      {children}
    </section>
  );
}

DropdownFilter.defaultProps = {
  onHideDropdownFilter: null,
  title: '',
  children: null,
};

export default React.memo(DropdownFilter);
