import { useState } from "react";
import { sideBarMenu } from "../../Utils/sideBarMenu";
import { useSelector } from "react-redux";
import DesktopSidebar from "./DesktopSidebar";
import MobileMenu from "./MobileMenu";

export default function Example({
  mobileMenuOpen,
  setMobileMenuOpen,
  userNavigation,
  classNames,
}) {
  const [sidebarNavigation, setSidebarNavigation] = useState(sideBarMenu);
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <DesktopSidebar
        nav={sidebarNavigation}
        setNav={setSidebarNavigation}
        auth={auth}
      />

      {/* Mobile menu */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        nav={sidebarNavigation}
        setNav={setSidebarNavigation}
        auth={auth}
      />
    </>
  );
}
