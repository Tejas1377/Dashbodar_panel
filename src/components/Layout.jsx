import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate sidebar width based on screen size (same logic as in Sidebar.jsx)
  const getSidebarWidth = () => {
    if (windowWidth < 576) return '80%'; // Small screens
    if (windowWidth < 768) return '60%'; // Medium screens
    return '250px'; // Large screens
  };

  // Convert sidebar width to pixels for calculations (for % values, compute based on windowWidth)
  const getSidebarWidthInPixels = () => {
    const width = getSidebarWidth();
    if (width.includes('%')) {
      const percentage = parseFloat(width) / 100;
      return windowWidth * percentage;
    }
    return parseFloat(width);
  };

  // Determine content width and margin
  const sidebarWidthPx = sidebarVisible ? getSidebarWidthInPixels() : 0;
  const contentWidth = windowWidth < 768 ? '100vw' : `calc(100vw - ${sidebarWidthPx}px)`;

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        overflowX: 'hidden',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <Header />
      <div style={{ display: 'flex', flex: 1, overflowX: 'hidden' }}>
        <Sidebar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <main
          className="content"
          style={{
            flex: 1,
            padding: '20px',
            width: contentWidth,
            marginLeft: sidebarVisible && windowWidth >= 768 ? `${sidebarWidthPx}px` : '0',
            transition: 'margin-left 0.3s ease, width 0.3s ease',
            backgroundColor: '#f8f9fa',
            maxWidth: '100vw',
            overflowX: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          <div
            className="container"
            style={{
              margin: '0 auto',
              maxWidth: '1200px',
              width: '100%',
              overflowX: 'hidden',
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;