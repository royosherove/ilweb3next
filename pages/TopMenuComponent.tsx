import React from "react"
const TopMenuComponent = () => (
  <div 
  className="group h-10 float-left rounded-r bg-violet-500 py-2 md:text-lg text-center  md:w-1/4 divide-x-2 space-x-2 md:space-x-6  ">
    <a
      className="text-white group-hover:text-yellow-500 pl-1 pt-0 text-sm md:text-lg "
      href="https://discord.gg/YnpgKfcyyW"
      target="_blank"
      rel="noreferrer"
    >
      Discord
    </a>
    <a
      className="text-white group-hover:text-yellow-500 pl-1 pr-1  text-sm md:text-lg"
      href="https://www.meetup.com/ilw3-israel-web-3-0-smart-contracts-dev-meetup/"
      target="_blank"
      rel="noreferrer"
    >
      Meetup
    </a>
  </div>
);

export default TopMenuComponent;