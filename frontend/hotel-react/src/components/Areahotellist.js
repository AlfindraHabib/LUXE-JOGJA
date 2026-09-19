import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Areahotellist() {
    const [touristAreaHotels, setTouristAreaHotels] = useState([]);

    useEffect(() => {
        fetchTouristAreaHotels();
    }, []);

    const fetchTouristAreaHotels = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/turisareahotel");
            console.log(response.data); // Periksa struktur data dari API
            setTouristAreaHotels(response.data.data || []); // Sesuaikan dengan API response
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            try {
                await axios.delete(`http://127.0.0.1:5000/turisareahotel/${id}/delete`);
                window.alert('Data berhasil dihapus');
                fetchTouristAreaHotels(); // Refresh data setelah delete
            } catch (error) {
                console.error('Error deleting data:', error);
                window.alert('Gagal menghapus data');
            }
        }
    };

    const cardStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px",
    };

    const cardItemStyle = {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "15px",
    };

    const buttonGroupStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
    };

    const buttonStyle = {
        padding: "8px 12px",
        borderRadius: "5px",
        textDecoration: "none",
        cursor: "pointer",
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Daftar Area Wisata</h1>

            {/* Tombol Tambah Data */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Link
                    to="/turisareahotel/add"
                    style={{
                        ...buttonStyle,
                        backgroundColor: "#007bff",
                        color: "white",
                        marginRight: "10px",
                    }}
                >
                    Tambah Data
                </Link>
                <Link
                    to="/"
                    style={{
                        ...buttonStyle,
                        backgroundColor: "#6c757d",
                        color: "white",
                    }}
                >
                    Keluar
                </Link>
            </div>

            <div style={cardStyle}>
                {Array.isArray(touristAreaHotels) &&
                    touristAreaHotels.map((touristAreaHotel) => (
                        <div key={touristAreaHotel.id} style={cardItemStyle}>
                            <h5>{touristAreaHotel.name}</h5>
                            {/* Tampilkan gambar jika URL ada */}
                            {touristAreaHotel.image_url ? (
                                <img
                                    src={touristAreaHotel.image_url}
                                    alt={touristAreaHotel.name}
                                    style={imageStyle}
                                />
                            ) : (
                                <p>
                                    <em>Tidak ada gambar</em>
                                </p>
                            )}

                            <div style={buttonGroupStyle}>
                                <Link
                                    to={`/turisareahotel/${touristAreaHotel.id}`}
                                    style={{
                                        ...buttonStyle,
                                        backgroundColor: "#28a745",
                                        color: "white",
                                    }}
                                >
                                    Detail
                                </Link>
                                <Link
                                    to={`/turisareahotel/edit/${touristAreaHotel.id}`}
                                    style={{
                                        ...buttonStyle,
                                        backgroundColor: "#ffc107",
                                        color: "black",
                                    }}
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(touristAreaHotel.id)}
                                    style={{
                                        ...buttonStyle,
                                        backgroundColor: "#dc3545",
                                        color: "white",
                                        border: "none",
                                    }}
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Areahotellist;