import { type ComponentProps } from 'react';

interface SectionProps extends ComponentProps<'section'> {
  title: string;
}

export const Section = ({ title, children, ...props }: SectionProps) => (
  <section {...props}>
    <h2 className="text-lg">{title}</h2>
    <div className="space-y-2">{children}</div>
  </section>
);
