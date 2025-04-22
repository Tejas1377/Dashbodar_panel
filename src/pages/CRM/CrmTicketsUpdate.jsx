import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
  CBadge,
  CButton,
  CCardTitle,
} from '@coreui/react';
import { IoIosContact } from 'react-icons/io';
import { FiBriefcase, FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

const CrmTicketsUpdat = () => {
  const tickets = [
    { status: 'Open', subject: 'Website down for one week', department: 'Support', date: 'Today 2:00' },
    { status: 'Progress', subject: 'Loosing control on server', department: 'Support', date: 'Yesterday' },
    { status: 'Closed', subject: 'Authorizations keys', department: 'Support', date: '27. Aug' },
    { status: 'Open', subject: 'Restoring default settings', department: 'Support', date: 'Today 9:00' },
    { status: 'Progress', subject: 'Loosing control on server', department: 'Support', date: 'Yesterday' },
    { status: 'Open', subject: 'Restoring default settings', department: 'Support', date: 'Today 9:00' },
    { status: 'Closed', subject: 'Authorizations keys', department: 'Support', date: '27. Aug' },
    { status: 'Open', subject: 'Restoring default settings', department: 'Support', date: 'Today 9:00' },
    { status: 'Progress', subject: 'Loosing control on server', department: 'Support', date: 'Yesterday' },
  ];

  const updates = [
    { time: '2 hrs ago', icon: <FiTwitter />, message: 'You’re getting more and more followers, keep it up!', count: '+1652 Followers' },
    { time: '4 hrs ago', icon: <FiBriefcase />, message: 'New Products were added! Congratulations!', count: '+5 New Products' },
    { time: '1 day ago', icon: <FaCheck />, message: 'Database backup completed!', count: ' Download the latest backup.' },
    { time: '2 days ago', icon: <FiFacebook />, message: 'This is great, keep it up!', count: '+2 Friend Requests' },
  ];

  const teamMembers = [
    { name: 'Jeny William', role: 'Graphic Designer', image: 'https://via.placeholder.com/40' },
    { name: 'John Doe', role: 'Web Designer', image: 'https://via.placeholder.com/40' },
  ];

  return (
    <CRow className="dashboard-container mt-4">
      <CCol xs={12} md={12} lg={6}>
        {/* Recent Tickets Section */}
        <CCard className="mb-4" style={{ border: '1px solid #f5f7fa', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          {/* <CCardHeader>Recent Tickets</CCardHeader> */}
          <CCardBody style={{ padding: '1rem' }}>
          <CCardTitle>Recent Tickets</CCardTitle>
            <CTable hover responsive>
          
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Subject</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Department</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tickets.map((ticket, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>
                      <CBadge
                        color={ticket.status === 'Open' ? 'success' : ticket.status === 'Progress' ? 'info' : 'danger'}
                        className="me-2"
                      >
                        {ticket.status}
                      </CBadge>
                    </CTableDataCell>
                    <CTableDataCell>{ticket.subject}</CTableDataCell>
                    <CTableDataCell>{ticket.department}</CTableDataCell>
                    <CTableDataCell>{ticket.date}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12} md={12} lg={6}>
        {/* Latest Updates Section */}
        <CCard className="mb-4" style={{ border: '1px solid #f5f7fa', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          {/* <CCardHeader>Latest Updates</CCardHeader> */}
          <CCardBody style={{ padding: '1rem' }}>
          <CCardTitle>Latest Updates</CCardTitle>
            <CListGroup>
              {updates.map((update, index) => (
                <CListGroupItem key={index} className="d-flex align-items-start">
                  <div className="me-3">
                    <small className="text-muted">{update.time}</small>
                  </div>
                  <div className="flex-shrink-0">
                    <CBadge
                      color="secondary"
                      shape="rounded-circle"
                      style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {update.icon}
                    </CBadge>
                  </div>
                  <div className="ms-3">
                    <p className="mb-1">{update.count}</p>
                    {update.count && <small className="text-muted">{update.message}</small>}
                  </div>
                </CListGroupItem>
              ))}
            </CListGroup>

            {/* Team Members */}
            <div className="mt-4">
              {teamMembers.map((member, index) => (
                <CListGroupItem key={index} className="d-flex align-items-center">
                  <IoIosContact style={{ fontSize: '40px', marginRight: '12px', marginBottom: '15px' }} />
                  <div style={{ marginBottom: '15px' }}>
                    <p className="mb-0">{member.name}</p>
                    <small className="text-muted">{member.role}</small>
                  </div>
                </CListGroupItem>
              ))}
            </div>

            {/* View all Projects */}
            <CButton color="link" className="mt-3 float-end" href="#">
              View all Projects
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Add Custom CSS */}
      <style jsx>{`
        .dashboard-container .card {
          height: auto !important; /* Ensure card height is auto */
          min-height: 0; /* Remove any minimum height */
        }
        .dashboard-container .card-body {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow: visible !important; /* Prevent overflow causing scrollbars */
        }
        .dashboard-container .table-responsive {
          max-height: none !important; /* Remove any max-height restrictions on table */
          overflow: visible !important; /* Prevent table scrollbars */
        }
        .dashboard-container .list-group {
          max-height: none !important; /* Remove any max-height restrictions on list */
          overflow: visible !important; /* Prevent list scrollbars */
        }
        .dashboard-container {
          height: auto !important; /* Ensure container height is auto */
          overflow: visible !important; /* Prevent container scrollbars */
        }
      `}</style>
    </CRow>
  );
};

export default CrmTicketsUpdat;