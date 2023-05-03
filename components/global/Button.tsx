import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    teal: 'bg-teal-600 text-white hover:text-slate-100 hover:bg-teal-500 active:bg-teal-800 active:text-teal-100 focus-visible:outline-teal-600',
    white:
      'bg-white text-slate-900 hover:bg-teal-50 active:bg-teal-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-teal-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
};

export const Button = ({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  children,
}: {
  variant?: string;
  color?: string;
  className?: string;
  href?: string;
  children: ReactNode;
}) => {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  );
};
