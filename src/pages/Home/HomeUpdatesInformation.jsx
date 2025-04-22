import React from "react";
import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { IoIosContact, IoIosContacts } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaBriefcase, FaCheckCircle, FaFacebookF } from "react-icons/fa";

const HomeUpdatesInformation = () => {
  const updates = [
    {
      time: "4 hrs ago",
      icon: <FaBriefcase />,
      line1: "+ 5 New Products were added!",
      line2: "Congratulations!",
      color: "danger",
    },
    {
      time: "1 day ago",
      icon: <FaCheckCircle />,
      line1: "Database backup completed!",
      line2: "Download the latest backup.",
      color: "warning",
    },
    {
      time: "2 days ago",
      icon: <FaFacebookF />,
      line1: "+ 1 Friend Requests",
      line2: "This is great, keep it up!",
      color: "success",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Section: Latest Updates */}
        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card shadow-sm h-100" style={{ backgroundColor: "white" }}>
            <div className="card-body p-4">
              <h4 className="card-title mb-4">Latest Updates</h4>
              <div className="position-relative">
               
                {updates.map((update, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center mb-4"
                    style={{ minHeight: "2.5rem" }}
                  >
                    <CCardText
                      className="text-muted small me-4"
                      style={{ minWidth: "80px" }}
                    >
                      {update.time}
                    </CCardText>
                    <div
                      className="me-3 position-relative"
                      style={{ top: "0" }}
                    >
                      <span
                        className={`text-white bg-${update.color} rounded-circle p-2`}
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {update.icon}
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <CCardText>{update.line1}</CCardText>
                      <CCardText className="text-muted small">
                        {update.line2}
                      </CCardText>
                    </div>
                  </div>
                ))}
                <div className="d-flex align-items-start mb-4 ps-5">
                  <div className="me-3">
                  <IoIosContact style={{width: '30px', height: '30px'}} />
                  </div>
                  <div className="flex-grow-1">
                    <CCardText className="text-muted small mb-1">
                      Jeny William
                    </CCardText>
                    <CCardText>Graphic Designer</CCardText>
                  </div>
                </div>
                <CCardText className="text-info mt-3">
                  View all Projects
                </CCardText>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Information (unchanged) */}
        <div className="col-lg-6 col-md-12">
          <CCard className="card shadow-sm h-100">
            <CCardBody>
              <CRow className="h-100">
                <CCol
                  lg={4}
                  style={{
                    backgroundColor: "#2ecc71",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoIosContact style={{ color: "white" }} />
                  <CCardText style={{ color: "white" }}>
                    <b>Jeny William</b>
                  </CCardText>
                  <CCardText style={{ color: "white" }}>Web Designer</CCardText>
                  <BiEdit style={{ color: "white" }} />
                </CCol>

                <CCol lg={8}>
                  <CCardTitle>Information</CCardTitle>
                  <hr />
                  <CRow className="mb-4">
                    <CCol lg={6} md={12}>
                      <CCardText>
                        <b>Email</b>
                      </CCardText>
                      <CCardText>jeny@gmail.com</CCardText>
                    </CCol>
                    <CCol lg={6} md={12}>
                      <CCardText>
                        <b>Phone</b>
                      </CCardText>
                      <CCardText>0023-333-526136</CCardText>
                    </CCol>
                  </CRow>

                  <CCardTitle>Projects</CCardTitle>
                  <hr />
                  <CRow className="mb-3">
                    <CCol lg={6} md={12}>
                      <CCardText>
                        <b>Recent</b>
                      </CCardText>
                      <CCardText>Guruable Admin</CCardText>
                    </CCol>
                    <CCol lg={6} md={12}>
                      <CCardText>
                        <b>Most Viewed</b>
                      </CCardText>
                      <CCardText>Able Pro Admin</CCardText>
                    </CCol>
                  </CRow>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <LuFacebook />
                    <FiTwitter />
                    <FaInstagram />
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
};

export default HomeUpdatesInformation;