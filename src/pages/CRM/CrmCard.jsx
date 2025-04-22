import React from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from "@coreui/react";
import {
  FiBarChart,
  FiFileText,
  FiCalendar,
  FiDownload,
  FiTrendingUp,
  FiCreditCard,
} from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { LuBook } from "react-icons/lu";
import { CgShoppingCart } from "react-icons/cg";

const CrmCard = () => {
  // Card data with individual gradient footers
  const cardsData = [
    {
      title: "852",
      text: "New Customer",
      icon: <FaRegUser />,
      change: "%",
      footerBg: "linear-gradient(to right, rgb(254, 147, 101), rgb(254, 183, 152))",
    },
    {
      title: "$5,852",
      text: "Income",
      icon: <FiCreditCard />,
      change: "%",
      footerBg: "linear-gradient(to right, rgb(10, 194, 130), rgb(13, 243, 163))",
    },
    {
      title: "42",
      text: "Ticket",
      icon: <LuBook />,
      change: "+%",
      footerBg: "linear-gradient(to right, rgb(254, 93, 112), rgb(254, 144, 157))",
    },
    {
      title: "$5,242",
      text: "Orders",
      icon: <CgShoppingCart />,
      change: "%",
      footerBg: "linear-gradient(to right, rgb(1, 169, 172), rgb(1, 219, 223))",
    },
  ];

  return (
    <div className="container" style={{ margin: "40px auto", maxWidth: "1200px" }}>
      <CRow className="gx-4 gy-4">
        {cardsData.map((card, index) => (
          <CCol key={index} lg={3} md={6} xs={12}>
            <CCard
              style={{
                width: "100%",
                position: "relative",
                background: card.footerBg, // Apply gradient to the entire card
              }}
            >
              {/* Top-right icon */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "24px",
                  color: "#666",
                }}
              >
                {card.icon}
              </div>

              <CCardBody>
              <CCardText style={{ color: "white" }}>{card.text}</CCardText>
                <CCardTitle style={{ color: "white" }}>{card.title}</CCardTitle>
              
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default CrmCard;