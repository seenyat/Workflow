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
    name: "Лента",
    href: "/",
    icon: CollectionIcon,
    current: true,
    private: false,
  },
  {
    name: "Новое",
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
    private: true,
  },
  {
    name: "Профиль",
    href: "/profile",
    icon: UserIcon,
    current: false,
    private: true,
  },
  {
    name: "О нас",
    href: "/about",
    icon: PlayIcon,
    current: false,
    private: false,
  },
  {
    name: "Войти",
    href: "/login",
    icon: LoginIcon,
    current: false,
    private: "invert",
  },
];
