import {
  CollectionIcon,
  LoginIcon,
  LogoutIcon,
  PlayIcon,
  UserIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

export const sideBarMenu = [
  { name: "Feed", href: "/", icon: CollectionIcon, current: true },
  { name: "Latest", href: "/latest", icon: ViewGridIcon, current: false },
  { name: "Profile", href: "/profile", icon: UserIcon, current: false },
  { name: "About Us", href: "/about", icon: PlayIcon, current: false },
  { name: "Login", href: "/login", icon: LoginIcon, current: false },
  { name: "Logout", href: "/logout", icon: LogoutIcon, current: false },
];
