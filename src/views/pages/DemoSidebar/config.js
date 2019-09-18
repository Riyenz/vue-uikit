export const MENUS = [
  {
    icon: 'home',
    name: 'Home',
    type: 'link',
    href: '/',
  },
  {
    icon: 'bell',
    name: 'Notifications',
    type: 'link',
    href: '/notifications',
  },
  {
    icon: 'book',
    name: 'Sidebar Docs',
    type: 'link',
    href: '/sidebar',
  },
  {
    icon: 'bars',
    name: 'Pages',
    type: 'list',
    items: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Notifications',
        href: '/notifications',
      },
      {
        name: 'Settings',
        href: '/settings',
      },
    ],
  },
];

export const USER = {
  role: 'Edukasyon Admin',
  name: 'Kristel Balbido',
  initials: 'kb',
  profileUrl: '/me',
  settingsUrl: '/me/settings',
  picture: '',
};

export const PROFILE_PROGRESS = {
  level: '26',
  progress: 54,
};

export const ACHIEVEMENTS = [
  { icon: 'https://via.placeholder.com/75', tooltip: 'Bronze Medal' },
  { icon: 'https://via.placeholder.com/75', tooltip: 'Silver Medal' },
  { icon: 'https://via.placeholder.com/75', tooltip: 'Gold Medal' },
];

export const FOOTER_LINKS = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Advocacy',
    href: '/',
  },
  {
    name: 'Team',
    href: '/',
  },
  {
    name: 'Careers',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/',
  },
];

export const FOOTER_LINKS_SECONDARY = [
  {
    name: 'FAQ',
    href: '/',
  },
  {
    name: 'Sitemap',
    href: '/',
  },
  {
    name: 'Privacy Policy',
    href: '/',
  },
  {
    name: 'Terms of Service',
    href: '/',
  },
  {
    name: 'Cookie Policy',
    href: '/',
  },
];
