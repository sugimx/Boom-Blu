export const navItems = [
  {
    type: 'link',
    href: '/#',
    label: 'Home',
  },
    {
    type: 'link',
    label: 'Features',
    href: '/#features',
  },
  {
    type: 'link',
    label: 'Products',
    href: '/#benefits',
  },
  {
    type: 'link',
    label: 'Pricing',
    href: '/#pricing',
  },
  // {
  //   type: 'link',
  //   label: 'About',
  //   href: '/about',
  // },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
        items: Array<{ href: string; label: string }>;
      }
  );
