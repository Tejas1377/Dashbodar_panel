import React, { useState } from 'react';
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
} from '@coreui/react';
import { IoDocumentText } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <CNavbar
        colorScheme="dark"
        className="bg-dark"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '56px',
          width: '100%',
          overflowX: 'hidden', // Prevent horizontal scrollbar
        }}
      >
        <CContainer
          fluid
          style={{ maxWidth: '100%', padding: '0 15px', overflowX: 'hidden' }}
        >
          <div className="row w-100 align-items-center justify-content-between gx-0">
            <div className="col-6 col-md-6 col-lg-6 d-flex align-items-center">
              <CNavbarBrand
                href="#"
                className="text-white me-2 w-100 w-md-auto"
              >
                Adminty
              </CNavbarBrand>
            </div>
            <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-end">
              <CNavbarNav className="align-items-center flex-row">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle me-1 me-md-2"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: 'yellow',
                  }}
                >
                  <IoDocumentText
                    style={{
                      fontSize: '1.5rem',
                      color: 'black',
                    }}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle me-1 me-md-2"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: 'green',
                  }}
                >
                  <FaShoppingCart
                    style={{
                      fontSize: '1.5rem',
                      color: 'white',
                    }}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <MdOutlineCancel
                    style={{
                      fontSize: '1.5rem',
                      color: 'red',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsVisible(false)}
                  />
                </div>
              </CNavbarNav>
            </div>
          </div>
        </CContainer>
      </CNavbar>
      <div style={{ height: '56px' }} /> {/* Spacer for fixed header */}
    </>
  );
};

export default Header;