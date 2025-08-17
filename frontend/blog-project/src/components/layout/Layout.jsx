// components/Layout.js
import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setNavbarHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    if (footerRef.current){
      setFooterHeight(footerRef.current.getBoundingClientRect().height);
    }
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <>
      {/* Header에 ref와 토글 함수 전달 */}
      <div ref={headerRef}>
        <Header onToggleSidebar={toggleSidebar} />
      </div>

      <div style={{display: 'flex'}}>
        <Sidebar adjustHeight={navbarHeight+footerHeight} isOpen={isSidebarOpen} />
        <main>
          <Outlet /> {/* 여기에 자식 라우트들이 렌더링됨 */}
        </main>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
