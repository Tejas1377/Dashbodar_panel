import React from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from '@coreui/react';
import { FiBarChart, FiTrendingUp } from 'react-icons/fi';

const HomeCard = () => {
  const cardsData = [
    {
      title: '$30200',
      text: 'All Earnings',
      icon: <FiBarChart />,
      change: '%',
      footerBg: 'linear-gradient(to right, rgb(254, 147, 101), rgb(254, 183, 152))',
    },
    {
      title: '290+',
      text: 'Page Views',
      icon: <FiBarChart />,
      change: '%',
      footerBg: 'linear-gradient(to right, rgb(10, 194, 130), rgb(13, 243, 163))',
    },
    {
      title: '145',
      text: 'Task Completed',
      icon: <FiBarChart />,
      change: '+%',
      footerBg: 'linear-gradient(to right, rgb(254, 93, 112), rgb(254, 144, 157))',
    },
    {
      title: '500',
      text: 'Downloads',
      icon: <FiBarChart />,
      change: '%',
      footerBg: 'linear-gradient(to right, rgb(1, 169, 172), rgb(1, 219, 223))',
    },
  ];

  return (
    <div
      className="container"
      style={{
        margin: '40px auto',
        maxWidth: '1200px',
        padding: '0 15px',
        overflowX: 'hidden', // Prevent horizontal scrollbar
      }}
    >
      <CRow className="gx-4 gy-4" style={{ justifyContent: 'center' }}>
        {cardsData.map((card, index) => (
          <CCol
            key={index}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <CCard
              style={{
                width: '100%',
                maxWidth: '300px', // Cap card width
                position: 'relative',
                background: card.footerBg,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  fontSize: '24px',
                  color: '#666',
                }}
              >
                {card.icon}
              </div>
              <CCardBody>
                <CCardTitle style={{ color: 'white' }}>{card.title}</CCardTitle>
                <CCardText style={{ color: 'white' }}>{card.text}</CCardText>
              </CCardBody>
              <CCardFooter
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '14px',
                  padding: '10px 16px',
                  color: 'white',
                  background: 'transparent',
                }}
              >
                <span style={{ fontWeight: '500' }}>{card.change} Change</span>
                <FiTrendingUp style={{ fontSize: '18px' }} />
              </CCardFooter>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default HomeCard;