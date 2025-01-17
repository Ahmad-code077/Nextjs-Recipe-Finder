'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Recipe } from '@/components/recipesComp/RecipeCompTypes';
import Image from 'next/image';

const SingleRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const { id } = useParams();
  const NumId = Number(id);
  useEffect(() => {
    if (!id) return;
    const fetchRecipe = async () => {
      try {
        // Using mock data from db.json
        const response = await fetch('http://localhost:5000/recipes');
        if (!response.ok) {
          throw new Error('Failed to fetch recipe');
        }
        const data: Recipe[] = await response.json();
        const foundRecipe = data.find((recipe: Recipe) => recipe.id == NumId);

        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading)
    return (
      <p className='text-center text-gray-300 text-lg font-medium shadow-lg p-6 rounded-lg'>
        Loading...
      </p>
    );
  if (error)
    return (
      <p className='text-center text-red-400 text-lg font-medium shadow-lg p-6 rounded-lg'>
        Error: {error}
      </p>
    );

  return (
    <section className='p-8 shadow-2xl bg-gray-900 rounded-xl'>
      {recipe ? (
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-extrabold text-white my-4 sm:my-12'>
              {recipe.title}
            </h1>
            <Image
              className='w-full h-[400px] object-cover rounded-lg shadow-lg border-4 border-gray-700'
              src={recipe.image}
              alt={recipe.title}
              priority
              width={960}
              height={540}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-2xl font-semibold text-white'>
                Ingredients:
              </h3>
              <ul className='flex flex-wrap gap-3'>
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className='px-4 py-2 rounded-full text-gray-200 bg-primary/90 bg-muted-800 font-medium text-lg shadow-md hover:bg-primary/70  cursor-pointer transition-all transform hover:scale-105'
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='text-2xl font-semibold text-white'>
                Instructions:
              </h3>
              <p className='text-lg text-gray-300'>{recipe.instructions}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-300 text-lg font-medium'>
          Recipe not found.
        </p>
      )}
    </section>
  );
};

export default SingleRecipe;
