'use client';

import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
// import { ModeToggle } from './ModeToggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const data = [
  { id: 4, link: '/', title: 'Home' },
  { id: 1, link: '/allrecipes', title: 'Recipes' },
  { id: 2, link: '/about', title: 'About' },
  { id: 3, link: '/contact', title: 'Contact' },
];
interface User {
  email: string;
  // Add other fields if necessary
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Handle login state and load user from localStorage
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser)); // Assuming user data is stored as a JSON object
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null); // Reset user state
  };

  const safeData = Array.isArray(data) ? data : [];

  return (
    <nav className='bg-opacity-30 backdrop-blur-sm shadow-lg sticky top-0 left-0 w-full'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' className='text-2xl font-bold'>
              Recipes Here
            </Link>
          </div>
          <div className='hidden md:flex items-center gap-x-8 font-bold'>
            {safeData.map((item) => {
              const { id, link, title } = item;
              return (
                <Link
                  href={link}
                  key={id}
                  className='hover:text-primary transition duration-300'
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <div className='flex items-center gap-4'>
            {/* <ModeToggle /> */}
            {user?.email === 'admin@gmail.com' && (
              <Link href={'/admin'}>Dashboard</Link>
            )}
            {!user ? (
              <div>
                <Link href={'/login'}>Login</Link>
                <span> / </span>
                <Link href={'/signup'}>Signup</Link>
              </div>
            ) : (
              <div className='relative'>
                {/* User Avatar with Dropdown */}
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className='flex items-center gap-2 w-9 rounded-full h-9'
                >
                  <Avatar>
                    <AvatarImage
                      className='rounded-full'
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className='absolute right-0 mt-2 w-48  border rounded-lg shadow-lg p-2'>
                    <button
                      onClick={handleLogout}
                      className='w-full text-left px-4 py-2 transition-scale duration-500 hover:scale-105'
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
            <Sheet>
              <SheetTrigger>
                <FaBars className='md:hidden text-2xl' />
              </SheetTrigger>
              <SheetContent className=' bg-white p-4'>
                <SheetHeader>
                  <SheetTitle>
                    <Link className='flex' href={'/'}>
                      Logo
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className='flex flex-col mt-10 font-bold'>
                  {safeData.map((item) => {
                    const { id, link, title } = item;
                    return (
                      <Link
                        href={link}
                        key={id}
                        className='hover:text-primary border-b-2 py-4 transition duration-300'
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
