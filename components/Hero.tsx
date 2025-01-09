import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=' text-center mt-8'>
      <h1 className='font-bold text-5xl md:text-6xl xl:text-7xl'>
        Explore Delicious Recipes{' '}
        <span className='text-primary '>with Recipe Finder</span>
      </h1>
      <p className='mt-8 lg:w-2/3 text-center mx-auto'>
        Discover a world of culinary inspiration with Recipe Finder. Find
        thousands of recipes, from simple weeknight meals to elaborate desserts.
      </p>
      <div className='mt-16 flex flex-col sm:flex-row items-center justify-center sm:gap-x-4 gap-y-4'>
        <Link href='/allrecipes'>
          <Button
            size='lg'
            className='text-lg rounded-lg text-white transition duration-300 hover:scale-105 w-full sm:w-max'
          >
            Browse Recipes
          </Button>
        </Link>
        <Link href='/allrecipes'>
          <Button
            size='lg'
            variant='outline'
            className='text-lg rounded-lg border-2 border-primary transition duration-300 hover:scale-105 w-full sm:w-max'
          >
            Search Recipes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
