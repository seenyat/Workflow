import {
  BadgeCheckIcon,
  CollectionIcon,
  LoginIcon,
  PlayIcon,
  UserIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

export const sideBarMenu = [

  {
    name: "Feed",
    href: "/",
    icon: CollectionIcon,
    current: true,
    private: false,
  },
  {
    name: "Latest",
    href: "/latest",
    icon: ViewGridIcon,
    current: false,
    private: false,
  },
  {
    name: "Workflows",
    href: "/workflows",
    icon: BadgeCheckIcon,
    current: false,
    private: false,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
    current: false,
    private: true,
  },
  {
    name: "About Us",
    href: "/about",
    icon: PlayIcon,
    current: false,
    private: false,
  },
  {
    name: "Login",
    href: "/login",
    icon: LoginIcon,
    current: false,
    private: "invert",
  },


];
