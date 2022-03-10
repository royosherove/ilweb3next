import Link from "next/link";
import React from "react"
const TopMenuComponent = () => (
  <div className="group h-10 float-left text-white rounded-r bg-violet-500 py-2 md:text-lg text-center  space-x-2 md:space-x-6 pr-4  ">
    <Link href="/">Home</Link>
    <Link href="/host">Host</Link>
    <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/YnpgKfcyyW">Discord</a>
    <a target="_blank" rel="noreferrer noopener" href="https://www.meetup.com/ilw3-israel-web-3-0-smart-contracts-dev-meetup/">
      Meetup
    </a>
    <a target="_blank" rel="noreferrer noopener" href="https://youtube.com/channel/UCRfgLdabcXDFKhv_BFazjYw">
      YouTube
    </a>
    <a target="_blank" rel="noreferrer noopener" href="https://github.com/royosherove/ilweb3next">
      GitHub
    </a>
  </div>
);

export default TopMenuComponent;