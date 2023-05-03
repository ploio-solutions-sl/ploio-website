'use client';

import { resolveHref } from 'lib/sanity.links';
import Link from 'next/link';
import { MenuItem } from 'types';

import NavLogo from '@/components/global/Logo';

interface NavbarProps {
  menuItems?: MenuItem[];
}

const Navbar = ({ menuItems }: NavbarProps) => {
  return (
    // <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-10 backdrop-blur md:px-16 md:py-5 lg:px-32">
    //   <div className="flex w-full items-center justify-between">
    //     <div className="h-auto w-24">
    //       <NavLogo />
    //     </div>

    //     <div>
    //       {menuItems &&
    //         menuItems.map((menuItem, key) => {
    //           const href = resolveHref(menuItem?._type, menuItem?.slug);
    //           if (!href) {
    //             return null;
    //           }
    //           return (
    //             <Link
    //               key={key}
    //               className={`text-lg hover:text-black md:text-xl ${
    //                 menuItem?._type === 'home'
    //                   ? 'font-extrabold text-black'
    //                   : 'text-gray-600'
    //               }`}
    //               href={href}
    //             >
    //               {menuItem.title}
    //             </Link>
    //           );
    //         })}
    //     </div>
    //   </div>
    // </div>

    <header className="py-10">
      <div className="mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <Link href="/" className="h-auto w-24">
            <NavLogo />
          </Link>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a
                href="mailto:"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Contáctanos
              </a>
            </div>
            <a className="group inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 active:bg-teal-800 active:text-teal-100">
              Contáctanos
            </a>
            <div className="-mr-1 md:hidden">
              <div>
                <button></button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
