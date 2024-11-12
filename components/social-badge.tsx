import Link from 'next/link';
import { type ReactNode } from 'react';

interface SocialLinkProps {
  icon: ReactNode;
  text: string;
  href?: string;
}

export const SocialBadge = ({ icon, text, href }: SocialLinkProps) => {
  const children = (
    <>
      {icon}
      {'  '}
      {text}
    </>
  );

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return href ? (
    <Link href={href} target="_blank">
      {children}
    </Link>
  ) : (
    <div className="inline-flex items-center">{children}</div>
  );
};
