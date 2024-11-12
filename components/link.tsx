import Link from 'next/link';
import { type ComponentProps } from 'react';

import { cn } from '@/lib/cn';

const links = {
  twitter: 'https://x.com/guijiangheng',
  gmail: 'mailto:kakaxizhh@gmail.com',
  github: 'https://github.com/guijiangheng',
  zhihu: 'https://www.zhihu.com/people/gui-jiang-heng',
  blog: 'https://guijiangheng.vercel.app/',
  dashboard: 'https://elated-archimedes-532086.netlify.app/',
  minpt: 'https://github.com/guijiangheng/minpt',
  toast: 'https://nano-toast-web.vercel.app/',
  particles: 'https://guijiangheng.github.io/interactive-particles/',
  tool: 'https://github.com/guijiangheng/create-common-app',
};

interface MyLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  type: keyof typeof links;
}

export const MyLink = ({ type, className, ...props }: MyLinkProps) => (
  <Link
    {...props}
    href={links[type]}
    target={type === 'gmail' ? undefined : '_blank'}
    className={cn(
      'mx-0.5 inline-flex items-center underline underline-offset-4',
      className,
    )}
  />
);
