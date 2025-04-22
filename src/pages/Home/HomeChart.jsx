import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { CButton, CCardBody, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';

const RiskIndicator = () => {
  return (
    <div
      style={{
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
    >
      <h3 style={{ color: '#333', fontSize: '18px', marginBottom: '20px' }}>
        Project Risk
      </h3>
      <div style={{ position: 'relative' }}>
        <svg width="120" height="120">
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#ff6f61"
            strokeWidth="10"
            strokeDasharray="314"
            strokeDashoffset="157"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
          <text
            x="60"
            y="65"
            textAnchor="middle"
            fill="#ff6f61"
            fontSize="30"
            fontWeight="bold"
          >
            5
          </text>
        </svg>
      </div>
    </div>
  );
};

const HomeChart = () => {
  const [lineChartState, setLineChartState] = React.useState({
    series: [
      {
        name: 'Sales',
        data: [
          -0.4, -0.3, -0.2, -0.15, -0.1, -0.05, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5,
          0.6, 0.55, 0.5, 0.6, 0.6,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'straight', width: 2 },
      markers: {
        size: 5,
        colors: ['#fff'],
        strokeColors: '#ff6f61',
        strokeWidth: 2,
        hover: { size: 7 },
      },
      title: { text: 'Sales Analytics', align: 'left' },
      grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
      xaxis: {
        type: 'datetime',
        categories: [
          new Date('1950-01-01').getTime(),
          new Date('1955-01-01').getTime(),
          new Date('1960-01-01').getTime(),
          new Date('1965-01-01').getTime(),
          new Date('1970-01-01').getTime(),
          new Date('1975-01-01').getTime(),
          new Date('1980-01-01').getTime(),
          new Date('1985-01-01').getTime(),
          new Date('1990-01-01').getTime(),
          new Date('1992-01-01').getTime(),
          new Date('1994-01-01').getTime(),
          new Date('1996-01-01').getTime(),
          new Date('1998-01-01').getTime(),
          new Date('1999-01-01').getTime(),
          new Date('2000-01-01').getTime(),
          new Date('2001-01-01').getTime(),
          new Date('2002-01-01').getTime(),
        ],
        labels: {
          format: 'yyyy',
          show: true,
          style: {
            fontSize: '12px',
          },
        },
        axisTicks: { show: true },
        axisBorder: { show: true },
        tickAmount: 8,
      },
      colors: ['#ffa500', '#ff6f61'],
      yaxis: { min: -0.5, max: 0.7, title: { text: 'JS chart by amCharts' } },
      annotations: {
        xaxis: [
          {
            x: new Date('1980-01-01').getTime(),
            borderColor: '#fff',
            label: { text: '', style: { color: '#fff', background: '#fff' } },
          },
        ],
      },
    },
  });

  return (
    <div
      style={{
        maxWidth: "1300px",
        margin: "40px 10px",
        width: '100%',
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <CRow className="gx-3">
        <CCol
          lg={8}
          md={12}
          xs={12}
          style={{ border: '1px solid #e9ecef', marginRight: "40px", backgroundColor: 'white' }}
          className="mb-3"
        >
          <section id="section-1">
            <h2>Sales Analytics</h2>
            <p>For more details about usage, please refer amCharts licenses.</p>
            <div id="chart">
              <ReactApexChart
                options={lineChartState.options}
                series={lineChartState.series}
                type="line"
                height={330}
              />
            </div>
          </section>
          <div id="html-dist"></div>
        </CCol>
        <CCol
          lg={3}
          md={12}
          xs={12}
          style={{ border: '1px solid #e9ecef', backgroundColor: 'white' }}
          className="mb-3"
        >
          <section id="section-2">
            <CCardBody>
              <RiskIndicator />
              <CCardText className="text-center">Balanced</CCardText>
              <CCardText className="text-center">Change Your Risk</CCardText>
              <div id="html-dist">
                <CRow>
                  <CCol lg={6} md={6} xs={12}>
                    <CCardText className="text-center">Nr</CCardText>
                    <CCardTitle className="text-center">AWS 2455</CCardTitle>
                  </CCol>
                  <CCol lg={6} md={6} xs={12}>
                    <CCardText className="text-center">Created</CCardText>
                    <CCardTitle className="text-center">30th Sep</CCardTitle>
                  </CCol>
                </CRow>
                <CButton
                  className="text-light text-center mt-3 w-100"
                  style={{
                    background:
                      'linear-gradient(to right, rgb(254, 147, 101), rgb(254, 183, 152))',
                    border: 'none',
                  }}
                >
                  View all Projects
                </CButton>
              </div>
            </CCardBody>
          </section>
        </CCol>
      </CRow>
    </div>
  );
};

export default HomeChart;