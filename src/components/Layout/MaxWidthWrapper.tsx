import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type MaxWidthWrapperProps = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => (
  <div
    className={twMerge(
      'mx-auto h-full w-full max-w-screen-xl px-2.5 lg:px-8',
      className,
    )}
  >
    {children}
  </div>
);

export default MaxWidthWrapper;
