
import React, { useState } from 'react';
import axios from 'axios';

const HotelSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!searchQuery) {
            alert("Masukkan lokasi untuk mencari hotel.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:5000/turisareahotel/${encodeURIComponent(searchQuery)}/rank`);
            setHotels(response.data.data); // Asumsikan backend mengirim data dalam format ini
        } catch (err) {
            setError(err.response?.data?.message || "Terjadi kesalahan.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section
                className="hero text-white text-center"
                style={{
                    background: "url('img/prambanan.jpg') no-repeat center center",
                    backgroundSize: 'cover',
                    borderRadius: '20px',
                    height: '85vh',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div>
                    <h1>Penginapan di Yogyakarta</h1>
                    <div className="input-group mt-4 w-100 w-md-50 px-3" data-aos="fade-up" data-aos-duration="8000">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cari Lokasi"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="btn btn-success" onClick={handleSearch}>Cari</button>
                    </div>
                </div>
            </section>

            {/* Hotel Recommendations */}
            <div className="container py-5">
                {loading && <p className="text-center">Sedang memuat...</p>}
                {error && <p className="text-center text-danger">{error}</p>}
                {hotels.length === 0 && !loading && !error && <p className="text-center">Tidak ada data hotel untuk lokasi ini.</p>}

                <div className="row g-4">
                    {hotels.map((hotel) => (
                        <div className="col-12" key={hotel.id} data-aos="fade-up" data-aos-duration="4000">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={hotel.image_url || 'img/default-hotel.jpg'}
                                            className="img-fluid rounded-start"
                                            alt={hotel.name}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{hotel.name}</h5>
                                            <p className="card-text text-muted">Fasilitas:  {hotel.benefit} </p>
                                            <p className="card-text text-muted">Hotel Bintang: ⭐ {hotel.rating} </p>
                                            <p className="card-text text-muted">Jarak: {hotel.distance} km</p>
                                            <p className="card-text text-muted">Harga: Rp{hotel.cost.toLocaleString()}</p>
                                            {/* <a href="#" className="btn btn-primary btn-sm">Selengkapnya</a> */}
                                            <a href={hotel.hotel_url} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HotelSearch;
