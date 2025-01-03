'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RecipeList from './RecipeList';
import AddRecipePopup from './AddRecipePopup';
import { Button } from '@/components/ui/button';

const AdminPage = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      router.push('/');
      return;
    }

    const user = JSON.parse(loggedInUser);
    if (user.email !== 'admin@gmail.com') {
      router.push('/'); // If not admin, redirect to home
    } else {
      fetchRecipes();
    }
  }, [router]);
  console.log('shokw', showAddPopup);
  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost:5000/recipes');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className='admin-container'>
      <div className='flex items-center justify-between my-6'>
        <h1>Admin Page</h1>

        <Button
          onClick={() => setShowAddPopup(true)}
          size='lg'
          className='text-lg rounded-lg text-white transition duration-300 hover:scale-105  sm:w-max'
        >
          Add New Recipe
        </Button>
      </div>
      <RecipeList recipes={recipes} refreshRecipes={fetchRecipes} />
      {showAddPopup && (
        <AddRecipePopup
          onClose={() => setShowAddPopup(false)}
          refreshRecipes={fetchRecipes}
        />
      )}
    </div>
  );
};

export default AdminPage;
