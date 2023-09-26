import React from 'react';

function OurServices() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-4 text-center mb-5">Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="Diamond5.jpg"
                alt="Service 1"
                className="card-img-top"
                style={{ width: '100%', maxHeight: '280px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Service 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="Diamond8.jpg.jpg"
                alt="Service 2"
                className="card-img-top"
                style={{ width: '100%',maxHeight: '400px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Service 2</h5>
                <p className="card-text">
                  Integer sodales scelerisque tincidunt. Duis vitae justo at justo finibus scelerisque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="Diamond9.jpg.jpg"
                alt="Service 3"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Service 3</h5>
                <p className="card-text">
                  Proin venenatis, velit et tincidunt iaculis, tellus nulla congue dui, ac consectetur metus ipsum non ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
