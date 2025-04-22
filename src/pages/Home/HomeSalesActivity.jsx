import React from 'react';
import { CCard, CCardBody, CCardText, CCol, CRow } from '@coreui/react';

const HomeSalesActivity = () => {
  // Sample data for applications and user activity
  const applications = [
    { name: 'Able Pro', subtitle: 'Powerful Admin Theme', sales: 16300, avgPrice: 53, total: 15652, color: 'text-success' },
    { name: 'Photoshop', subtitle: 'Design Software', sales: 26421, avgPrice: 35, total: 18785, color: 'text-primary' },
    { name: 'Guruable', subtitle: 'Best Admin Template', sales: 8265, avgPrice: 98, total: 9652, color: 'text-danger' },
    { name: 'Flatable', subtitle: 'Admin App', sales: 10652, avgPrice: 20, total: 7856, color: 'text-purple' },
  ];

  const userActivity = [
    { name: 'John Doe', text: 'Lorem ipsum is simply dummy text.', time: '2 min ago' },
    { name: 'John Doe', text: 'Lorem ipsum is simply dummy text.', time: '2 min ago' },
    { name: 'John Doe', text: 'Lorem ipsum is simply dummy text.', time: '2 min ago' },
    { name: 'John Doe', text: 'Lorem ipsum is simply dummy text.', time: '2 min ago' },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Section: Application Sales */}
        <div className="col-lg-8 col-md-12 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              {/* <h5 className="card-subtitle mb-2 text-muted">Sales Overview</h5> */}
              <h4 className="card-title d-flex justify-content-between align-items-center">
                Application Sales
                <span className="text-muted">
                  <i className="bi bi-dash"></i>
                </span>
              </h4>
              {/* Header Row with Checkbox */}
              <div className="row align-items-center py-2 border-bottom">
                <div className="col-lg-3 col-md-3 col-xs-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input me-2" />
                    <label className="form-check-label text-primary">Application</label>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-xs-2 text-end">
                  <CCardText>Sales</CCardText>
                </div>
                <div className="col-lg-2 col-md-2 col-xs-2 text-center">
                  <CCardText>Change</CCardText>
                </div>
                <div className="col-lg-2 col-md-2 col-xs-2 text-end">
                  <CCardText>Avg Price</CCardText>
                </div>
                <div className="col-lg-2 col-md-2 col-xs-2 text-end">
                  <CCardText>Total</CCardText>
                </div>
              </div>
              {/* Application Data */}
              {applications.map((app, index) => (
                <div key={index} className="row align-items-center py-2 border-bottom">
                  <div className="col-lg-3 col-md-3 col-xs-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input me-2" />
                      <label className="form-check-label text-primary">{app.name}</label>
                      {app.subtitle && <small className="text-muted d-block">{app.subtitle}</small>}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-2 text-end">
                    <CCardText>{app.sales.toLocaleString()}</CCardText>
                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-2 text-center">
                    <span className={app.color}>⤒⤓⤒⤓</span> {/* Simplified graph */}
                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-2 text-end">
                    <CCardText>${app.avgPrice}</CCardText>
                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-2 text-end">
                    <CCardText>${app.total.toLocaleString()}</CCardText>
                  </div>
                </div>
              ))}
              <CCardText className="text-info text-center mt-3">View all Projects</CCardText>
            </div>
          </div>
        </div>

        {/* Right Section: User Activity */}
        <div className="col-lg-4 col-md-12">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">User Activity</h4>
              {userActivity.map((user, index) => (
                <div key={index} className="d-flex align-items-center py-2 border-bottom">
                  <span className="text-primary fs-4 me-2">👤</span>
                  <div className="flex-grow-1">
                    <CCardText className="mb-1">{user.name}</CCardText>
                    <CCardText className="text-muted small mb-1">{user.text}</CCardText>
                    <CCardText className="text-muted small">{user.time}</CCardText>
                  </div>
                </div>
              ))}
              <CCardText className="text-info text-center mt-3">View all Projects</CCardText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSalesActivity;