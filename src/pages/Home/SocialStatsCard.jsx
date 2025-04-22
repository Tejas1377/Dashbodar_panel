import React from 'react';
import { CCard, CCardBody, CCardTitle, CCardText, CRow, CCol } from '@coreui/react';
import { FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialStatsCard = () => {
  const cards = [
    {
      title: 'Mail',
      icon: <FaEnvelope size={24} color="#ffffff" />,
      color: '#26A69A',
      downloads: '231.2w downloads',
      text: 'Lorem Ipsum is simply dummy text of the printing',
    },
    {
      title: 'twitter',
      icon: <FaTwitter size={24} color="#ffffff" />,
      color: '#EF5350',
      downloads: '231.2w downloads',
      text: 'Lorem Ipsum is simply dummy text of the printing',
    },
    {
      title: 'Instagram',
      icon: <FaInstagram size={24} color="#ffffff" />,
      color: '#26A69A',
      downloads: '231.2w downloads',
      text: 'Lorem Ipsum is simply dummy text of the printing',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {cards.map((card, index) => (
        <CCard
          key={index}
          style={{
            width: '350px',
            backgroundColor: card.color,
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: 'none',
          }}
        >
          <CCardBody>
            <CRow>
              <CCol xs="3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '10px' }}>{card.icon}</div>
              </CCol>
              <CCol xs="9" style={{ textAlign: 'left', paddingLeft: '15px' }}>
                <CCardTitle style={{ fontSize: '18px', color: '#ffffff', marginBottom: '5px' }}>
                  {card.title}
                </CCardTitle>
                <CCardText style={{ fontSize: '14px', color: '#ffffff', marginBottom: '5px' }}>
                  {card.downloads}
                </CCardText>
                <CCardText style={{ fontSize: '12px', color: '#ffffff' }}>{card.text}</CCardText>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default SocialStatsCard;