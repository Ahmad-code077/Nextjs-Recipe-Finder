import Link from 'next/link';
import { data } from './Navbar';

const Footer = () => {
  return (
    <footer className='max-w-6xl mx-auto px-4 mt-4 border-t border-primary pt-6 my-4'>
      <main className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-8'>
        <div className='flex flex-col gap-4 border-b md:border-none'>
          <Link href='/' className='text-2xl font-bold text-primary'>
            Recipies Here
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellendus eos molestias odit id error laborum, ipsa exercitationem
            distinctio dolor excepturi consequatur quae non facere velit sit
            dolore veritatis maiores?
          </p>
        </div>
        <div className='flex flex-col  gap-4'>
          <h1 className='text-2xl font-bold text-primary'>Socials Links</h1>{' '}
          <div className='flex flex-col gap-4 border-b md:border-none'>
            {data.map((item) => {
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
          </div>{' '}
        </div>
        <div className='flex flex-col gap-4 border-b md:border-none'>
          <h1 className='text-2xl font-bold text-primary'>Contact info</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            corrupti assumenda impedit harum debitis omnis, rerum nulla. Magnam,
            eligendi nam eaque commodi consequatur, explicabo at fugit adipisci
            veritatis, aut distinctio.
          </div>
        </div>
      </main>
    </footer>
  );
};
export default Footer;
