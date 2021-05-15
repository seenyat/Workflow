import React from "react";
import Logo from "../../Components/Partials/Logo";
import MenuItem from "../../Components/Partials/MenuItem";

export default function DesktopSidebar({ nav, setNav, auth }) {
  return (
    <div className="hidden w-28 bg-gray-700 overflow-y-auto md:block">
      <div className="w-full py-6 flex flex-col items-center">
        <Logo />
        <div className="flex-1 mt-6 w-full px-2 space-y-1">
          {nav.map((item) => {
            if (item.private !== "invert" || !auth) {
              if (item.private !== true || auth) {
                return <MenuItem item={item} nav={nav} setNav={setNav} />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}
