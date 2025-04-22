import React, { useState, useEffect } from 'react';
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CCard,
  CRow,
  CCol,
  CBadge,
} from '@coreui/react';
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaEllipsisV,
  FaHome,
  FaColumns,
  FaStream,
  FaTh,
  FaCube,
  FaPlayCircle,
  FaAngleDown,
  FaAngleRight,
} from 'react-icons/fa';
import { IoIosContact, IoIosLogOut, IoMdContact } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { CiLock, CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarVisible, setSidebarVisible }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showIcons, setShowIcons] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  // Ensure body remains scrollable when sidebar is open
  useEffect(() => {
    if (sidebarVisible) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarVisible]);

  const handleToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleIconToggle = () => {
    setShowIcons(!showIcons);
  };

  const handleMenuToggle = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const getOffcanvasWidth = () => {
    if (windowWidth < 576) return '80%'; // Reduced to allow some content visibility
    if (windowWidth < 768) return '60%'; // Reduced to allow more content visibility
    return '250px';
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: FaHome,
      items: [
        { name: 'Default', to: '/' },
        { name: 'CRM', to: '/crm' },
        { name: 'Analytics', to: '/analytics' },
      ],
    },
    {
      title: 'Page layouts',
      icon: FaColumns,
      items: [{ name: 'NEW', to: '/page-layouts' }],
    },
    { title: 'Navigation', icon: FaStream, items: [] },
    {
      title: 'Widget',
      icon: FaTh,
      items: [{ name: '100+', to: '/widget', badge: '100+' }],
    },
    {
      title: 'UI Element',
      icon: FaCube,
      items: [
        { name: 'Basic Components', to: '/basic-components' },
        { name: 'Advance Components', to: '/advance-components' },
        { name: 'Extra Components', to: '/extra-components' },
        { name: 'Animations', to: '/animations', icon: FaPlayCircle },
        { name: 'Sticky Notes', to: '/sticky-notes', badge: 'HOT' },
        { name: 'Icons', to: '/icons' },
      ],
    },
  ];

  return (
    <>
      <style>
        {`
          body {
            overflow: auto !important;
          }
          .dashboard-container {
            overflow-y: auto;
            height: calc(100vh - 102px);
            position: relative;
            z-index: 1;
          }
          .custom-dropdown-menu {
            background: none !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          .custom-dropdown-menu .dropdown-item {
            background: none !important;
            color: #000 !important;
            padding: 5px 10px !important;
          }
          .custom-dropdown-menu .dropdown-item:hover {
            background: #f8f9fa !important;
          }
          .dashboard-button {
            font-size: 1rem;
          }
          .icon-sm, .text-sm {
            font-size: 1.2rem;
          }
          .sidebar-menu {
            background: #2c3e50;
            color: #fff;
            padding: 0;
            overflow-y: auto;
            max-height: calc(100vh - 107px);
          }
          .sidebar-menu .menu-item {
            display: block;
            width: 100%;
          }
          .sidebar-menu .menu-item .title-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 12px 20px;
            cursor: pointer;
          }
          .sidebar-menu .menu-item .title-content {
            display: flex;
            align-items: center;
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            line-height: 1.5;
            background: none;
            border: none;
            flex-grow: 1;
          }
          .sidebar-menu .menu-item .title-content:hover {
            background: #34495e;
          }
          .sidebar-menu .menu-item .arrow-button {
            background: none;
            border: none;
            color: #fff;
            padding: 0;
            cursor: pointer;
            font-size: 1rem;
            display: flex;
            align-items: center;
          }
          .sidebar-menu .menu-item .arrow-button:hover {
            background: #34495e;
          }
          .sidebar-menu .sub-items {
            background: #2c3e50;
            padding: 0;
            width: 100%;
          }
          .sidebar-menu .sub-item {
            color: #fff !important;
            padding: 10px 40px;
            display: flex;
            align-items: center;
            font-size: 0.95rem;
            line-height: 1.5;
            width: 100%;
            text-decoration: none;
          }
          .sidebar-menu .sub-item:hover {
            background: #34495e !important;
          }
          .sidebar-menu .icon {
            margin-right: 10px;
            font-size: 1.2rem;
          }
          .badge-new {
            background: #f39c12;
            color: #fff;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.75rem;
          }
          .badge-100 {
            background: #e74c3c;
            color: #fff;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.75rem;
          }
          .badge-hot {
            background: #e74c3c;
            color: #fff;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.75rem;
          }
        `}
      </style>
      <div
        className="container-fluid"
        style={{ backgroundColor: '#e9ecef', padding: '0px 0', position: 'fixed', zIndex: '1000' }}
      >
        <div className="row align-items-center gx-0">
          <div className="col-12 col-md-6 d-flex align-items-center mb-2 mb-md-0 ps-0">
            <CButton
              onClick={handleToggle}
              color="dark"
              className="bg-dark text-white me-2 d-flex align-items-center justify-content-between dashboard-button w-100"
              style={{ maxWidth: '250px', height: '50px' }}
            >
              <span>Dashboard</span>
              {sidebarVisible ? (
                <FaTimes style={{ fontSize: '1.2rem' }} />
              ) : (
                <FaBars style={{ fontSize: '1.2rem' }} />
              )}
            </CButton>
            <FaSearch className="ms-2 icon-sm" style={{ color: '#333' }} />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-md-end">
            <FaEllipsisV
              className="d-md-none icon-sm"
              style={{ color: '#333', cursor: 'pointer' }}
              onClick={handleIconToggle}
            />
            <div className="d-none d-md-flex align-items-center">
              <FaBell className="me-1 me-md-2 icon-sm" style={{ color: '#333' }} />
              <FaEnvelope className="me-1 me-md-2 icon-sm" style={{ color: '#333' }} />
              <IoMdContact className="me-1 me-md-2 icon-sm" style={{ color: '#333' }} />
              <span className="me-1 me-md-2 text-sm" style={{ color: '#333' }}>
                John Doe
              </span>
              <CDropdown>
                <CDropdownToggle color="secondary" size="sm" className="p-1" />
                <CDropdownMenu className="custom-dropdown-menu">
                  <CCard className="p-3">
                    <CRow className="mb-2">
                      <CCol lg={2}>
                        <IoSettingsOutline />
                      </CCol>
                      <CCol lg={10}>Settings</CCol>
                    </CRow>
                    <CRow className="mb-2">
                      <CCol lg={2}>
                        <FiUser />
                      </CCol>
                      <CCol lg={10}>Profile</CCol>
                    </CRow>
                    <CRow className="mb-2">
                      <CCol lg={2}>
                        <CiMail />
                      </CCol>
                      <CCol lg={10}>My Message</CCol>
                    </CRow>
                    <CRow className="mb-2">
                      <CCol lg={2}>
                        <CiLock />
                      </CCol>
                      <CCol lg={10}>Lock Screen</CCol>
                    </CRow>
                    <CRow className="mb-2">
                      <CCol lg={2}>
                        <IoIosLogOut />
                      </CCol>
                      <CCol lg={10}>Log out</CCol>
                    </CRow>
                  </CCard>
                </CDropdownMenu>
              </CDropdown>
            </div>
          </div>
        </div>
      </div>
      {showIcons && windowWidth < 768 && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex flex-row align-items-center justify-content-center p-2">
              <FaBell className="me-2 icon-sm" style={{ color: '#333' }} />
              <FaEnvelope className="me-2 icon-sm" style={{ color: '#333' }} />
              <IoMdContact className="me-2 icon-sm" style={{ color: '#333' }} />
              <span className="me-2 text-sm" style={{ color: '#333' }}>
                John Doe
              </span>
              <CDropdown>
                <CDropdownToggle color="secondary" size="sm" className="p-1" />
                <CDropdownMenu>
                  <CDropdownItem href="#">Profile</CDropdownItem>
                  <CDropdownItem href="#">Settings</CDropdownItem>
                  <CDropdownItem href="#">Logout</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
          </div>
        </div>
      )}
      <COffcanvas
        placement="start"
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        backdrop={false}
        style={{
          top: '102px',
          height: 'calc(100vh - 102px)',
          width: getOffcanvasWidth(),
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'fixed',
          zIndex: 1000,
          overflowY: 'auto',
        }}
      >
        <COffcanvasHeader
          style={{ backgroundColor: '#2c3e50' }}
          className="custom-offcanvas-header text-light"
        >
          <COffcanvasTitle>Navigation</COffcanvasTitle>
        </COffcanvasHeader>
        <COffcanvasBody className="sidebar-menu p-0" style={{ overflowY: 'auto' }}>
          {menuItems.map((section, index) => (
            <div key={index} className="menu-item">
              <div className="title-container" onClick={() => handleMenuToggle(index)}>
                <div className="title-content">
                  {section.icon && <section.icon className="icon me-2" />}
                  {section.title}
                  {section.items.length === 0 && <span className="ms-auto"></span>}
                </div>
                {section.items.length > 0 && (
                  <div className="arrow-button">
                    {expandedItem === index ? <FaAngleDown /> : <FaAngleRight />}
                  </div>
                )}
              </div>
              {expandedItem === index && section.items.length > 0 && (
                <div className="sub-items">
                  {section.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.to}
                      className="sub-item d-flex align-items-center"
                    >
                      {item.icon && <item.icon className="icon me-2" />}
                      {item.name}
                      {item.badge && (
                        <CBadge
                          className={`ms-2 ${
                            item.badge === 'NEW'
                              ? 'badge-new'
                              : item.badge === '100+'
                              ? 'badge-100'
                              : 'badge-hot'
                          }`}
                        >
                          {item.badge}
                        </CBadge>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default Sidebar;