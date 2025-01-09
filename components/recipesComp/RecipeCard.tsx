import Image from 'next/image';
import { Recipe } from './RecipeCompTypes';
import Link from 'next/link';

type RecipeCardProps = {
  recipe: Recipe;
};

// RecipeCard Component
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <blockquote
      key={recipe.id}
      className='flex flex-col-reverse items-center justify-between w-full p-6 transition-all duration-200 rounded-lg md:flex-row ease-in-out border-primary border text-center lg:text-left'
    >
      <div className='flex flex-col gap-6'>
        <h3 className='text-xl font-medium leading-5 truncate'>
          {recipe.title}
        </h3>
        <p className='mt-2 text-base text-gray-300 '>
          {recipe?.ingredients?.slice(0, 3).join(', ')}{' '}
          {recipe.ingredients.length > 3 && '...'}
        </p>
        <Link
          href={`/single/${recipe.id}`}
          className='mt-4  text-primary font-semibold hover:underline'
        >
          Read More
        </Link>
      </div>
      <Image
        className='flex-shrink-0 border-primary border-2 object-cover w-40 h-40 mb-5 rounded-full md:mb-0 hover:scale-105 transition-all duration-200'
        src={recipe.image}
        alt={recipe.title}
        priority
        width={96}
        height={96}
      />
    </blockquote>
  );
};

export default RecipeCard;
