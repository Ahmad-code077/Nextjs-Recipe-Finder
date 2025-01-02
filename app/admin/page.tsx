'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      router.push('/');
      return;
    }

    const user = JSON.parse(loggedInUser);
    if (user.email !== 'admin@gmail.com') {
      router.push('/'); // If not admin, redirect to home
    }
  }, [router]);

  return (
    <div className='admin-container'>
      <h1>Admin Page</h1>
      {/* Your admin-specific content here */}
    </div>
  );
};

export default AdminPage;
