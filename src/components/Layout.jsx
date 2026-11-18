import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BrandFooter from './BrandFooter';

export default function Layout({ cartCount, currentLook, onShowToast }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col font-sans relative overflow-x-hidden bg-[#FBF8F3]">
      {/* Persistent Top Navigation */}
      <Navbar
        currentLook={currentLook}
        cartCount={cartCount}
        onCartClick={() => navigate('/bag')}
      />

      {/* Dynamic Page Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <BrandFooter onShowToast={onShowToast} />
    </div>
  );
}