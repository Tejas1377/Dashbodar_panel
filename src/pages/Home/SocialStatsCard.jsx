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
      title: 'Twitter',
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
    <div className="d-flex flex-wrap justify-content-around p-3 gap-3">
      {cards.map((card, index) => (
        <CCard
          key={index}
          className="flex-fill flex-lg-grow-0"
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
              <CCol xs="3" className="d-flex align-items-center justify-content-center">
                <div style={{ marginBottom: '10px' }}>{card.icon}</div>
              </CCol>
              <CCol xs="9" className="text-start ps-3">
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