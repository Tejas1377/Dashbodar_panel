import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { FaMapMarkerAlt, FaClock, FaUser, FaCheckCircle } from 'react-icons/fa';

const CrmActivites = () => {
  const activities = [
    {
      time: 'just now',
      icon: <FaUser />,
      name: 'John Doe',
      message: 'The trip was an amazing and a life changing experience!!',
      images: ['https://demo.dashboardpack.com/adminty-html/files/assets/images/mega-menu/01.jpg', 'https://demo.dashboardpack.com/adminty-html/files/assets/images/mega-menu/03.jpg'],
    },
    {
      time: '5 min ago',
      icon: <FaMapMarkerAlt />,
      name: 'Administrator',
      message: 'Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!',
    },
    {
      time: '2 hrs ago',
      icon: <FaClock />,
      name: 'Jeny William',
      message: 'Happy Hour! Free drinks at Cafe-Bar all day long!',
      mapImage: 'https://via.placeholder.com/300x150',
    },
  ];

  const tasks = {
    finished: 45,
    remaining: 30,
  };

  const deadlines = [
    { title: 'New able - Redesign', days: '2 Days Remaining', image: 'https://demo.dashboardpack.com/adminty-html/files/assets/images/mega-menu/01.jpg' },
    { title: 'New Admin Dashboard Proposal in 6 Days', image: 'https://demo.dashboardpack.com/adminty-html/files/assets/images/mega-menu/02.jpg' },
    { title: 'Logo Design', days: '10 Days Remaining', image: 'https://demo.dashboardpack.com/adminty-html/files/assets/images/mega-menu/03.jpg' },
  ];

  const pieChartOptions = {
    chart: {
      type: 'pie',
      width: '100%', // Use 100% width to make it responsive to container
      height: 200, // Default height
    },
    labels: ['Finished', 'Remaining'],
    colors: ['#28a745', '#17a2b8'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `${val}%`;
      },
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        colors: ['#000'],
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: false,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200, // Large screens (lg)
        options: {
          chart: {
            width: '100%',
            height: 180,
          },
        },
      },
      {
        breakpoint: 992, // Medium screens (md)
        options: {
          chart: {
            width: '100%',
            height: 160,
          },
        },
      },
      {
        breakpoint: 768, // Small screens (sm)
        options: {
          chart: {
            width: '100%',
            height: 140,
          },
        },
      },
      {
        breakpoint: 576, // Extra small screens (xs)
        options: {
          chart: {
            width: '100%',
            height: 120,
          },
          dataLabels: {
            style: {
              fontSize: '12px', // Smaller font for small screens
            },
          },
        },
      },
    ],
  };

  const pieChartSeries = [tasks.finished, tasks.remaining];

  return (
    <Container fluid className="p-4">
      <Row>
        <Col lg={8} md={12} xs={12} className="mb-4" >
          <Card className="border-0 shadow-sm bg-white p-3" style={{ border: '1px solid #f5f7fa', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Card.Title className="mb-3">Latest Activity</Card.Title>
            <ListGroup variant="flush">
              {activities.map((activity, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-start mb-3 p-2">
                  <div className="me-2">
                    <span className="text-muted">{activity.time}</span>
                  </div>
                  <div className="me-3">
                    <span className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      {activity.icon}
                    </span>
                  </div>
                  <div>
                    <p className="mb-1">{activity.name}</p>
                    <p className="text-muted mb-0">{activity.message}</p>
                    {/* {(activity.images || activity.mapImage) && (
                      <div className="mt-2">
                        {activity.images && activity.images.map((img, imgIndex) => (
                          <img key={imgIndex} src={img} alt="activity" className="me-2" style={{ width: '100px', height: '80px', objectFit: 'cover' }} />
                        ))}
                        {activity.mapImage && (
                          <div>
                            <img src={activity.mapImage} alt="map" className="w-100" style={{ height: '150px', objectFit: 'cover' }} />
                            <div className="position-absolute bg-white p-2 mt-n2" style={{ left: '10px' }}>
                              This page can't load Google Maps correctly. <br /> For development purposes only. Do you own this website? <Button variant="link" size="sm" className="p-0">OK</Button>
                            </div>
                          </div>
                        )}
                      </div>
                    )} */}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant="link" className="text-primary mt-3">View all Activity</Button>
          </Card>
        </Col>
        <Col lg={4} md={12} xs={12}>
          <Card className="border-0 shadow-sm bg-white p-3 mb-3" style={{ border: '1px solid #f5f7fa', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Card.Title className="mb-3">Your Tasks</Card.Title>
            <div className="d-flex justify-content-between mb-4">
            <Row>
                <Col lg={6} md={12}>
              <div className="text-center">
                
                <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" />
                <p className="mb-0">Finished </p>
                <p><span className="text-success">{tasks.finished}</span></p>
                {/* <p className="mb-0">Remaining <span className="text-info">{tasks.remaining}</span></p> */}
                <Button variant="outline-success rounded-pill mt-3">Manage</Button>
              </div>
              </Col>
              <Col lg={6} md={12}>
              <div className="text-center">
                <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" />
                {/* <p className="mb-0">Finished <span className="text-success">{tasks.finished}</span></p> */}
                <p className="mb-0">Remaining</p>
                <p><span className="text-info">{tasks.remaining}</span></p>
                <Button variant="outline-success rounded-pill mt-3">Manage</Button>
              </div>
              </Col>
            </Row>
            </div>
          </Card>
          <Card className="border-0 shadow-sm bg-white p-3">
            <Card.Title className="mb-3">Upcoming Deadlines</Card.Title>
            <ListGroup variant="flush">
              {deadlines.map((deadline, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center mb-2 p-2">
                  <img src={deadline.image} alt={deadline.title} className="me-2" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                  <div>
                    <p className="mb-0">{deadline.title}</p>
                    {deadline.days && <small className="text-danger">{deadline.days}</small>}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant="link" className="text-primary mt-3">View all Feeds</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CrmActivites;


// update the size of the pie chart as per the screen size