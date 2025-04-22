import React from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import Chart from "react-apexcharts";
import { CIcon } from "@coreui/icons-react";
import { cilClock, cilCart, cilCheckCircle } from "@coreui/icons";

const CrmChart = () => {
  const options = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Monthly View",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    subtitle: {
      text: "For more details about usage, please refer amCharts licenses.",
      align: "left",
      style: {
        fontSize: "12px",
        color: "#999",
      },
    },
    stroke: {
      width: [0, 4], // Width for column (0) and line (4)
      curve: "smooth", // Smooth curve for the line series
      dashArray: [0, 5], // No dash for column, 5px dash for line to make it dotted
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1], // Enable data labels only on the line series
      style: {
        colors: ["#fff"], // White text for data labels on line
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#999",
        opacity: 0.9,
      },
    },
    xaxis: {
      categories: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"],
      labels: {
        style: {
          colors: "#666",
        },
      },
    },
    yaxis: [
      {
        title: {
          text: "Student",
          style: {
            color: "#666",
          },
        },
        labels: {
          style: {
            colors: "#666",
          },
        },
      },
    ],
    colors: ["#26a69a", "#ff4081"], // Teal for bars, Pink for line
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [200, 400, 300, 500, 300, 400, 200, 300, 600, 300, 250, 150, 500, 400, 300], // Approximate data
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 50, 60, 45], // Approximate data
      },
    ],
    annotations: {
      yaxis: [
        {
          y: 400,
          yAxisIndex: 0,
          strokeDashArray: 5, // Dotted line
          borderColor: "#000", // Black dotted line
          label: {
            text: "",
            style: {
              color: "#fff",
              background: "#000",
            },
          },
        },
        {
          y: 500,
          yAxisIndex: 0,
          strokeDashArray: 5, // Dotted line
          borderColor: "#ff0000", // Red dotted line
          label: {
            text: "",
            style: {
              color: "#fff",
              background: "#ff0000",
            },
          },
        },
      ],
      points: [
        {
          x: "02",
          y: 400,
          marker: {
            size: 6,
            fillColor: "#26a69a",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            text: "New York",
            style: {
              color: "#fff",
              background: "#26a69a",
            },
            offsetY: -10,
          },
        },
        {
          x: "06",
          y: 400,
          marker: {
            size: 6,
            fillColor: "#26a69a",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            text: "Houston",
            style: {
              color: "#fff",
              background: "#26a69a",
            },
            offsetY: -10,
          },
        },
        {
          x: "05",
          y: 300,
          marker: {
            size: 6,
            fillColor: "#ff4081",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            text: "Miami",
            style: {
              color: "#fff",
              background: "#ff4081",
            },
            offsetY: -10,
          },
        },
        {
          x: "12",
          y: 600,
          marker: {
            size: 6,
            fillColor: "#26a69a",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            text: "Denver",
            style: {
              color: "#fff",
              background: "#26a69a",
            },
            offsetY: -10,
          },
        },
        {
          x: "15",
          y: 300,
          marker: {
            size: 6,
            fillColor: "#26a69a",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            text: "Las Vegas",
            style: {
              color: "#fff",
              background: "#26a69a",
            },
            offsetY: -10,
          },
        },
      ],
    },
    grid: {
      borderColor: "#e0e0e0",
      row: {
        colors: ["#f5f5f5", "transparent"], // Alternate grid colors
        opacity: 0.5,
      },
    },
    legend: {
      show: false, // Hide legend to match screenshot
    },
  };

  // Data for the second card (Feeds)
  const feedsData = [
    {
      icon: cilClock,
      color: "#17a2b8", // Blue
      text: "You have 3 pending tasks.",
      time: "Just Now",
    },
    {
      icon: cilCart,
      color: "#dc3545", // Red
      text: "New order received",
      time: "Just Now",
    },
    {
      icon: cilCheckCircle,
      color: "#28a745", // Green
      text: "You have 3 pending tasks.",
      time: "Just Now",
    },
    {
      icon: cilCart,
      color: "#dc3545", // Red
      text: "New order received",
      time: "Just Now",
    },
    {
      icon: cilCheckCircle,
      color: "#28a745", // Green
      text: "You have 3 pending tasks.",
      time: "Just Now",
    },
  ];

  return (
    <div className="container mt-4" style={{ maxWidth: "1200px", padding: "20px" }}>
      <CRow className="gx-4 gy-4">
        {/* First Card (3x wider) with Chart */}
        <CCol lg={8} md={12}>
          <CCard className="h-100" style={{ background: "white", border: '1px solid #f5f7fa',  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",}}>
            <CCardBody>
              <Chart options={options} series={options.series} type="line" height={350} />
            </CCardBody>
          </CCard>
        </CCol>

        {/* Second Card (1x width) with Feeds */}
        <CCol lg={4} md={12}>
          <CCard className="h-100" style={{ background: "white", border: '1px solid #f5f7fa',  boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <CCardBody>
              <CCardTitle>Feeds</CCardTitle>
              {feedsData.map((feed, index) => (
                <div key={index} className="d-flex  mb-4"> {/* Changed mb-3 to mb-4 for more space */}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: feed.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: '10px',
                      marginBottom: "10px",
                    }}
                  >
                    <CIcon icon={feed.icon} size="sm" style={{ color: "#fff" }} />
                  </div>
                  <div className="flex-grow-1">
                    <CRow className="g-0">
                      <CCol lg={8} md={12}>
                        <CCardText>{feed.text}</CCardText>
                      </CCol>
                      <CCol lg={4} md={12} className="text-end">
                        <CCardText className="text-muted small">
                          {feed.time}
                        </CCardText>
                      </CCol>
                    </CRow>
                  </div>
                </div>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default CrmChart;