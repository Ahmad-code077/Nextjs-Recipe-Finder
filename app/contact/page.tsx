import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center text-white mb-6'>
        Contact Us
      </h1>

      <h2 className='text-2xl font-medium text-white mb-4'>
        We Would Love to Hear From You!
      </h2>
      <p className='text-lg text-gray-300 mb-6'>
        If you have any questions, suggestions, or feedback, feel free to reach
        out to us at <strong>contact@recipefinder.com</strong>. We are always
        striving to improve and provide you with the best experience.
      </p>

      <h3 className='text-xl font-medium text-white mb-4'>Connect with Us</h3>
      <p className='text-lg text-gray-300 mb-6'>
        We love hearing from our users. Whether you have a question about a
        recipe, a suggestion for a new feature, or simply want to share your
        experience with Recipe Finder, don't hesitate to drop us a message. Our
        team is always here to assist you!
      </p>

      <p className='text-center text-lg text-gray-300 mt-6'>
        We appreciate your feedback and look forward to hearing from you!
      </p>
    </div>
  );
};

export default Contact;
