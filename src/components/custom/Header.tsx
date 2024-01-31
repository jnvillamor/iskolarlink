import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {});

  return (
    <nav className={`sticky top-0 py-6 w-full ${isScrolled ? 'bg-white' : 'bg-transparent'} z-10 2xl:px-32 lg:px-16 px-6`}>
      <div className='flex justify-between items-end'>
        <div>
          <Link to={'/'}>
            <img src='/logo-red.svg' alt='logo' className='inline h-7 lg:h-full' />
          </Link>
        </div>
        <div className='justify-between items-center min-w-fit w-1/3 text-secondary hidden lg:flex'>
          <Link to={'/'} className='hover:underline hover:text-black'>
            Home
          </Link>
          <Link to={'/'} className='hover:underline hover:text-black'>
            About
          </Link>
          <Link to={'/listing'} className='hover:underline hover:text-black'>
            Listing
          </Link>
          <Link to={'/'} className='hover:underline hover:text-black'>
            Contact Us
          </Link>
        </div>
        <div className='hidden gap-4 lg:flex'>
          <Button variant='ghost' className='rounded-full'>
            Log In
          </Button>
          <Button className='rounded-full'>Sign Up</Button>
        </div>
        {/* Mobile */}
        <div className='lg:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <img src='/icons/burger-menu.svg' alt='menu' className='h-6 w-6' />
            </SheetTrigger>
            <SheetContent>
              <div className='flex flex-col gap-12 mt-6'>
                <div className='justify-center items-center gap-6 min-w-fit w-full text-secondary flex flex-col'>
                  <Link to={'/'} className='text-black'>
                    Home
                  </Link>
                  <Link to={'/'} className='text-black'>
                    About
                  </Link>
                  <Link to={'/'} className='text-black'>
                    Listing
                  </Link>
                  <Link to={'/'} className='text-black'>
                    Contact Us
                  </Link>
                </div>
                <div className='gap-4 flex flex-col'>
                  <Button variant='ghost' className='rounded-full'>
                    Log In
                  </Button>
                  <Button className='rounded-full'>Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
