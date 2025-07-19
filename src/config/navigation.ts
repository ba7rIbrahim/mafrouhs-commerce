export interface NavigationItems {
  id: number,
  label: string;
  path: string;
}

export const navigationItems: NavigationItems[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Products", path: "/products" },
  { id: 3, label: "Contact Us", path: "/contact-us" },
];
