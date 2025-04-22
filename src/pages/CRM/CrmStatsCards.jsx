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

const CrmStatsCards = () => {
  // Data for the three cards
  const CrmStatsCards = [
    {
      title: "Total Leads",
      increase: "18% High than last month",
      colors: ["#26a69a", "#e0f2f1"],
      percentages: {
        overall: "76.12%",
        monthly: "16.40%",
        day: "4.56%",
      },
      series: {
        name: "Total Leads",
        data: [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31].map(
          (v) => v * 0.8
        ), // Approximate data
      },
    },
    {
      title: "Total Vendors",
      increase: "24% High than last month",
      colors: ["#ff8a65", "#ffe0d6"],
      percentages: {
        overall: "68.52%",
        monthly: "28.90%",
        day: "13.50%",
      },
      series: {
        name: "Total Vendors",
        data: [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31].map(
          (v) => v * 0.9
        ), // Approximate data
      },
    },
    {
      title: "Invoice Generate",
      increase: "20% High than last month",
      colors: ["#66bb6a", "#e8f5e9"],
      percentages: {
        overall: "68.52%",
        monthly: "28.90%",
        day: "13.50%",
      },
      series: {
        name: "Invoice Generate",
        data: [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31].map(
          (v) => v * 0.85
        ), // Approximate data
      },
    },
  ];

  const chartOptions = (title, colors) => ({
    chart: {
      height: 150,
      type: "area",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: colors[0],
            opacity: 1,
          },
          {
            offset: 100,
            color: colors[1],
            opacity: 1,
          },
        ],
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ],
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  });

  return (
    <div
      className="container mt-4"
      style={{ maxWidth: "1200px", padding: "20px" }}
    >
      <CRow className="gx-4 gy-4">
        {CrmStatsCards.map(
          (
            card,
            index // Changed cardData to CrmStatsCards
          ) => (
            <CCol key={index} lg={4} md={12}>
              <CCard
                className="h-100"
                style={{
                  background: "#f5f7fa",
                  border: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <CCardBody>
                  <CCardTitle>{card.title}</CCardTitle>
                  <CCardText
                    className="text-success"
                    style={{ fontSize: "12px" }}
                  >
                    ↑ {card.increase}
                  </CCardText>
                  <div>
                    <CRow>
                      <CCol lg={4} md={12}>
                        <CCardText>
                          <span className="fw-bold">Overall</span> <br />
                          {card.percentages.overall}
                        </CCardText>
                      </CCol>
                      <CCol lg={4} md={12}>
                        <CCardText>
                          <span className="fw-bold">Monthly</span>{" "}
                          {card.percentages.monthly}
                        </CCardText>
                      </CCol>
                      <CCol lg={4} md={12}>
                        <CCardText>
                          <span className="fw-bold">Day</span>{" "} <br />
                          {card.percentages.day}
                        </CCardText>
                      </CCol>
                    </CRow>
                  </div>
                  <Chart
                    options={chartOptions(card.title, card.colors)}
                    series={[card.series]}
                    type="area"
                    height={100}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          )
        )}
      </CRow>
    </div>
  );
};

export default CrmStatsCards;
