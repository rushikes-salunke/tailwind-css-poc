import { MenuItem } from "../model/menu.model";


export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Dashboard', route: '/dashboard/' },
            { label: 'Posts', route: '/dashboard/posts' }
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
          ],
        },
      ],
    },
  
  ];
}
