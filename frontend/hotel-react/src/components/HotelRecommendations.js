import React from "react";
import "../components/css/HotelRecommendation.css"; // Import custom CSS for additional styling

const HotelRecommendation = () => {
  return (
    <section className="hotel-recommendation py-5">
      <div className="container text-start" >
        <h2 className="mb-4 text-center">Cari hotel terdekat dengan destinasi wisata Anda</h2>
        <p className="mb-4 text-center">Cek disini saja, rekomendasi hotel pilihan terbaik!</p>
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-4" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="200">
            <div className="card h-100">
              <img src="img/ambarrukmo hotel.jpg" className="card-img-top" alt="Royal Ambarrukmo" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Royal Ambarrukmo</h5>
                <p className="card-text">Ambarrukmo, Depok</p>
                <div className="mt-auto text-end">
                  <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="400">
            <div className="card h-100">
              <img src="img/marriothotel.jpg" className="card-img-top" alt="Marriott Hotel" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Marriott Hotel</h5>
                <p className="card-text">Condong Catur, Sleman</p>
                <div className="mt-auto text-end">
                  <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="600">
            <div className="card h-100">
              <img src="img/expedia-hotels.jpg" className="card-img-top" alt="The Phoenix Hotel" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">The Phoenix Hotel</h5>
                <p className="card-text">Jetis, Yogyakarta</p>
                <div className="mt-auto text-end">
                  <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelRecommendation;
