import React from 'react';

const About: React.FC = () => {
  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6'>
        About <span className='text-primary'>Recipe Finder</span>
      </h1>
      <p className='text-lg text-gray-600 dark:text-gray-300 mb-6'>
        Welcome to <strong>Recipe Finder</strong>, your ultimate destination for
        discovering delicious recipes from all over the world! Whether
        you&apos;re a seasoned chef or just starting in the kitchen, our goal is
        to provide you with easy access to recipes that suit your taste, dietary
        preferences, and cooking skills.
      </p>

      <h2 className='text-2xl font-medium text-gray-800 dark:text-white mb-4'>
        Our Mission
      </h2>
      <p className='text-lg text-gray-600 dark:text-gray-300 mb-6'>
        At Recipe Finder, we believe that cooking should be fun, easy, and
        accessible to everyone. Our mission is to help you find the perfect
        recipes based on your ingredients, preferences, and time. We aim to
        inspire home cooks to try new recipes, create delicious meals, and enjoy
        the art of cooking.
      </p>

      <h2 className='text-2xl font-medium text-gray-800 dark:text-white mb-4'>
        What We Offer
      </h2>
      <ul className='list-disc pl-6 text-lg text-gray-600 dark:text-gray-300 mb-6'>
        <li>Explore a vast collection of recipes from various cuisines.</li>
        <li>
          Use our powerful search bar and filters to find recipes based on
          ingredients, cooking time, and more.
        </li>
        <li>
          Each recipe includes clear instructions, ingredient lists, and
          nutrition information.
        </li>
        <li>
          Our platform is designed to be simple, intuitive, and responsive
          across all devices.
        </li>
      </ul>

      <h2 className='text-2xl font-medium text-gray-800 dark:text-white mb-4'>
        Our Story
      </h2>
      <p className='text-lg text-gray-600 dark:text-gray-300 mb-6'>
        Recipe Finder was created by a passionate team of food lovers and tech
        enthusiasts who wanted to make it easier for everyone to explore the
        culinary world. We understand the joy of discovering new flavors,
        experimenting with ingredients, and creating delicious meals to share
        with loved ones. That&apos;s why we&apos;ve built this platform to bring
        you a wide range of recipes and make the cooking process more enjoyable.
      </p>
    </div>
  );
};

export default About;
