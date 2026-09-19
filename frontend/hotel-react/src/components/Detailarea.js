// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function DetailArea() {
//     const { id } = useParams(); // Ambil ID area wisata dari URL
//     const [areaDetail, setAreaDetail] = useState(null);
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchDetailArea = async () => {
//             try {
//                 // Permintaan data detail area wisata
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 if (response.data && response.data.data) {
//                     const { data } = response.data; // Pastikan format respons server sesuai
//                     setAreaDetail(data);
//                     setHotels(data.hotels || []); // Pastikan data.hotels tersedia
//                 } else {
//                     console.error("Data tidak ditemukan atau format tidak sesuai");
//                 }
//             } catch (error) {
//                 console.error("Error fetching area details:", error);
//             }
//         };

//         fetchDetailArea();
//     }, [id]); // Hanya dijalankan ulang jika ID berubah

//     if (!areaDetail) {
//         return <div>Loading...</div>; // Tampilkan loading jika data belum siap
//     }

//     return (
//         <div className="container">
//             <h2>Detail Area Wisata</h2>

//             {/* Tampilkan detail area wisata */}
//             <div>
//                 <h3>{areaDetail.name}</h3>
//                 <p>ID: {areaDetail.id}</p>
//                 <p>Deskripsi: {areaDetail.description || "Tidak ada deskripsi"}</p>
//             </div>

//             {/* Tampilkan daftar hotel terkait */}
//             <h3>Daftar Hotel</h3>
//             {hotels.length > 0 ? (
//                 <ul>
//                     {hotels.map((hotel) => (
//                         <li key={hotel.id}>
//                             <p>Nama Hotel: {hotel.name}</p>
//                             <p>Alamat: {hotel.address || "Tidak ada alamat"}</p>
//                             <p>Harga: {hotel.cost}</p>
//                             <p>Fasilitas: {hotel.benefit}</p>
//                             <p>Rating: {hotel.rating}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Tidak ada hotel terkait dengan area ini.</p>
//             )}

//             {/* Tombol kembali */}
//             <Link to="/turisareahotel" className="btn">Kembali ke Daftar Area Wisata</Link>
//         </div>
//     );
// }

// export default DetailArea;


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function DetailArea() {
//     const { id } = useParams(); // Ambil ID area wisata dari URL
//     const [areaDetail, setAreaDetail] = useState(null);
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchDetailArea = async () => {
//             try {
//                 // Permintaan data detail area wisata
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 if (response.data && response.data.data) {
//                     const { data } = response.data; // Pastikan format respons server sesuai
//                     setAreaDetail(data);
//                     setHotels(data.hotels || []); // Pastikan data.hotels tersedia
//                 } else {
//                     console.error("Data tidak ditemukan atau format tidak sesuai");
//                 }
//             } catch (error) {
//                 console.error("Error fetching area details:", error);
//             }
//         };

//         fetchDetailArea();
//     }, [id]); // Hanya dijalankan ulang jika ID berubah

//     const handleDeleteHotel = async (hotelId) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/turisareahotel/hotel/${hotelId}/deletehotel`);
//             alert("Hotel berhasil dihapus!");
//             setHotels(hotels.filter(hotel => hotel.id !== hotelId)); // Hapus hotel dari daftar setelah penghapusan
//         } catch (error) {
//             console.error("Error deleting hotel:", error);
//             alert("Terjadi kesalahan saat menghapus hotel");
//         }
//     };

//     if (!areaDetail) {
//         return <div>Loading...</div>; // Tampilkan loading jika data belum siap
//     }

//     return (
//         <div className="container">
//             <h2>Detail Area Wisata</h2>

//             {/* Tampilkan detail area wisata */}
//             <div>
//                 <h3>{areaDetail.name}</h3>
//                 <p>ID: {areaDetail.id}</p>
//                 <p>Deskripsi: {areaDetail.description || "Tidak ada deskripsi"}</p>
//             </div>

//             {/* Tampilkan daftar hotel terkait */}
//             <h3>Daftar Hotel</h3>
//             {hotels.length > 0 ? (
//                 <ul>
//                     {hotels.map((hotel) => (
//                         <li key={hotel.id}>
//                             <p>Nama Hotel: {hotel.name}</p>
//                             <p>Alamat: {hotel.address || "Tidak ada alamat"}</p>
//                             <p>Harga: {hotel.cost}</p>
//                             <p>Fasilitas: {hotel.benefit}</p>
//                             <p>Rating: {hotel.rating}</p>

//                             {/* Tombol Edit */}
//                             <Link to={`/turisareahotel/hotel/${hotel.id}/edithotel`} className="btn btn-primary">Edit</Link>
 
//                             {/* Tombol Hapus */}
//                             <button onClick={() => handleDeleteHotel(hotel.id)} className="btn btn-danger">Hapus</button>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Tidak ada hotel terkait dengan area ini.</p>
//             )}

//             {/* Tombol kembali */}
//             <Link to="/turisareahotel" className="btn">Kembali ke Daftar Area Wisata</Link>
//             <Link to={`/turisareahotel/${turiareahotel_id}/addhotel`}>
//                         <button style={{ marginTop: '10px' }}>Tambah Hotel</button>
//             </Link>
//         </div>
//     );
// }

// export default DetailArea;


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function DetailArea() {
//     const { id } = useParams(); // Ambil ID area wisata dari URL
//     const [areaDetail, setAreaDetail] = useState(null);
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchDetailArea = async () => {
//             try {
//                 // Permintaan data detail area wisata
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 if (response.data && response.data.data) {
//                     const { data } = response.data; // Pastikan format respons server sesuai
//                     setAreaDetail(data);
//                     setHotels(data.hotels || []); // Pastikan data.hotels tersedia
//                 } else {
//                     console.error("Data tidak ditemukan atau format tidak sesuai");
//                 }
//             } catch (error) {
//                 console.error("Error fetching area details:", error);
//             }
//         };

//         fetchDetailArea();
//     }, [id]); // Hanya dijalankan ulang jika ID berubah

//     const handleDeleteHotel = async (hotelId) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/turisareahotel/hotel/${hotelId}/deletehotel`);
//             alert("Hotel berhasil dihapus!");
//             setHotels(hotels.filter(hotel => hotel.id !== hotelId)); // Hapus hotel dari daftar setelah penghapusan
//         } catch (error) {
//             console.error("Error deleting hotel:", error);
//             alert("Terjadi kesalahan saat menghapus hotel");
//         }
//     };

//     if (!areaDetail) {
//         return <div>Loading...</div>; // Tampilkan loading jika data belum siap
//     }

//     return (
//         <div className="container">
//             <h2>Detail Area Wisata</h2>

//             {/* Tampilkan detail area wisata */}
//             <div>
//                 <h3>{areaDetail.name}</h3>
//                 <p>ID: {areaDetail.id}</p>
//                 <p>Deskripsi: {areaDetail.description || "Tidak ada deskripsi"}</p>
//             </div>

//             {/* Tampilkan daftar hotel terkait */}
//             <h3>Daftar Hotel</h3>
//             {hotels.length > 0 ? (
//                 <ul>
//                     {hotels.map((hotel) => (
//                         <li key={hotel.id}>
//                             <p>Nama Hotel: {hotel.name}</p>
//                             <p>Alamat: {hotel.address || "Tidak ada alamat"}</p>
//                             <p>Harga: {hotel.cost}</p>
//                             <p>Fasilitas: {hotel.benefit}</p>
//                             <p>Rating: {hotel.rating}</p>

//                             {/* Tombol Edit */}
//                             <Link to={`/turisareahotel/hotel/${hotel.id}/edithotel`} className="btn btn-primary">Edit</Link>
 
//                             {/* Tombol Hapus */}
//                             <button onClick={() => handleDeleteHotel(hotel.id)} className="btn btn-danger">Hapus</button>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Tidak ada hotel terkait dengan area ini.</p>
//             )}

//             {/* Tombol kembali */}
//             <Link to="/turisareahotel" className="btn">Kembali ke Daftar Area Wisata</Link>

//             {/* Tombol tambah hotel */}
//             <Link to={`/turisareahotel/${id}/hotel`}>
//                 <button style={{ marginTop: '10px' }}>Tambah Hotel</button>
//             </Link>
//         </div>
//     );
// }

// export default DetailArea;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function DetailArea() {
//     const { id } = useParams();
//     const [areaDetail, setAreaDetail] = useState(null);
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchDetailArea = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 if (response.data && response.data.data) {
//                     const { data } = response.data;
//                     setAreaDetail(data);
//                     setHotels(data.hotels || []);
//                 } else {
//                     console.error("Data tidak ditemukan atau format tidak sesuai");
//                 }
//             } catch (error) {
//                 console.error("Error fetching area details:", error);
//             }
//         };

//         fetchDetailArea();
//     }, [id]);

//     const handleDeleteHotel = async (hotelId) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/turisareahotel/hotel/${hotelId}/deletehotel`);
//             alert("Hotel berhasil dihapus!");
//             setHotels(hotels.filter(hotel => hotel.id !== hotelId));
//         } catch (error) {
//             console.error("Error deleting hotel:", error);
//             alert("Terjadi kesalahan saat menghapus hotel");
//         }
//     };

//     if (!areaDetail) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container">
//             <h2>Detail Area Wisata</h2>
//             <div>
//                 <h3>{areaDetail.name}</h3>
//                 <p>ID: {areaDetail.id}</p>
//                 <p>Deskripsi: {areaDetail.description || "Tidak ada deskripsi"}</p>
//             </div>
//             <h3>Daftar Hotel</h3>
//             {hotels.length > 0 ? (
//                 <ul>
//                     {hotels.map((hotel) => (
//                         <li key={hotel.id}>
//                             <p>Nama Hotel: {hotel.name}</p>
//                             <p>Harga: {hotel.cost}</p>
//                             <p>Fasilitas: {hotel.benefit}</p>
//                             <p>Jarak: {hotel.distance}</p>
//                             <p>Rating: {hotel.rating}</p>
//                             <Link to={`/turisareahotel/hotel/${hotel.id}/edithotel`} className="btn btn-primary">Edit</Link>
//                             <button onClick={() => handleDeleteHotel(hotel.id)} className="btn btn-danger">Hapus</button>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Tidak ada hotel terkait dengan area ini.</p>
//             )}
//             <Link to="/turisareahotel" className="btn">Kembali ke Daftar Area Wisata</Link>
//             <Link to={`/turisareahotel/${id}/hotel`}>
//                 <button style={{ marginTop: '10px' }}>Tambah Hotel</button>
//             </Link>
//         </div>
//     );
// }

// export default DetailArea;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function DetailArea() {
//     const { id } = useParams();
//     const [areaDetail, setAreaDetail] = useState(null);
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchDetailArea = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 if (response.data && response.data.data) {
//                     const { data } = response.data;
//                     setAreaDetail(data);
//                     setHotels(data.hotels || []);
//                 } else {
//                     console.error("Data tidak ditemukan atau format tidak sesuai");
//                 }
//             } catch (error) {
//                 console.error("Error fetching area details:", error);
//             }
//         };

//         fetchDetailArea();
//     }, [id]);

//     const handleDeleteHotel = async (hotelId) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/turisareahotel/hotel/${hotelId}/deletehotel`);
//             alert("Hotel berhasil dihapus!");
//             setHotels(hotels.filter(hotel => hotel.id !== hotelId));
//         } catch (error) {
//             console.error("Error deleting hotel:", error);
//             alert("Terjadi kesalahan saat menghapus hotel");
//         }
//     };

//     if (!areaDetail) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container">
//             <h2>Detail Area Wisata</h2>
//             <div>
//                 <h3>{areaDetail.name}</h3>
//                 <p>ID: {areaDetail.id}</p>
//                 <p>Deskripsi: {areaDetail.description || "Tidak ada deskripsi"}</p>
//             </div>
//             <h3>Daftar Hotel</h3>
//             {hotels.length > 0 ? (
//                 <ul>
//                     {hotels.map((hotel) => (
//                         <li key={hotel.id}>
//                             <p>Nama Hotel: {hotel.name}</p>
//                             <p>Harga: {hotel.cost}</p>
//                             <p>Fasilitas: {hotel.benefit}</p>
//                             <p>Jarak (km) : {hotel.distance}</p>
//                             <p>Rating: {hotel.rating}</p>
//                             {hotel.image_url && <img src={hotel.image_url} alt={hotel.name} style={{ width: '150px', height: 'auto' }} />}
//                             <Link to={`/turisareahotel/hotel/${hotel.id}/edithotel`} className="btn btn-primary">Edit</Link>
//                             <button onClick={() => handleDeleteHotel(hotel.id)} className="btn btn-danger">Hapus</button>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Tidak ada hotel terkait dengan area ini.</p>
//             )}
//             <Link to="/turisareahotel" className="btn">Kembali ke Daftar Area Wisata</Link>
//             <Link to={`/turisareahotel/${id}/hotel`}>
//                 <button style={{ marginTop: '10px' }}>Tambah Hotel</button>
//             </Link>
//         </div>
//     );
// }

// export default DetailArea;


// fixxxx
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function DetailArea() {
//     const { id } = useParams();
//     const [areaDetail, setAreaDetail] = useState(null);
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchDetailArea = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 if (response.data && response.data.data) {
//                     const { data } = response.data;
//                     setAreaDetail(data);
//                     setHotels(data.hotels || []);
//                 } else {
//                     console.error("Data tidak ditemukan atau format tidak sesuai");
//                 }
//             } catch (error) {
//                 console.error("Error fetching area details:", error);
//             }
//         };

//         fetchDetailArea();
//     }, [id]);

//     const handleDeleteHotel = async (hotelId) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/turisareahotel/hotel/${hotelId}/deletehotel`);
//             alert("Hotel berhasil dihapus!");
//             setHotels(hotels.filter(hotel => hotel.id !== hotelId));
//         } catch (error) {
//             console.error("Error deleting hotel:", error);
//             alert("Terjadi kesalahan saat menghapus hotel");
//         }
//     };

//     if (!areaDetail) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container">
//             <h1>Detail Area Wisata</h1>
//             <div>
//                 <h3>{areaDetail.name}</h3>
//                 <p>ID: {areaDetail.id}</p>
//                 <p>Deskripsi: {areaDetail.description || "Tidak ada deskripsi"}</p>
//             </div>
//             <h3>Daftar Hotel</h3>
//             {hotels.length > 0 ? (
//                 <ul>
//                     {hotels.map((hotel) => (
//                         <li key={hotel.id}>
//                             <p>Nama Hotel: {hotel.name}</p>
//                             <p>Harga:Rp. {hotel.cost}</p>
//                             <p>Fasilitas: {hotel.benefit}</p>
//                             <p>Jarak : {hotel.distance} km</p>
//                             <p>Hotel Bintang: {hotel.rating}</p>
//                             {hotel.image_url && <img src={hotel.image_url} alt={hotel.name} style={{ width: '150px', height: 'auto' }} />}
//                             <Link to={`/turisareahotel/hotel/${hotel.id}/edithotel`} className="btn btn-primary">Edit</Link>
//                             <button onClick={() => handleDeleteHotel(hotel.id)} className="btn btn-danger">Hapus</button>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Tidak ada hotel terkait dengan area ini.</p>
//             )}
//             <Link to="/turisareahotel" className="btn">Kembali ke Daftar Area Wisata</Link>
//             <Link to={`/turisareahotel/${id}/hotel`}>
//                 <button style={{ marginTop: '10px' }}>Tambah Hotel</button>
//             </Link>
//         </div>
//     );
// }

// export default DetailArea;

// fixx
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function DetailArea() {
//     const { id } = useParams();
//     const [areaDetail, setAreaDetail] = useState(null);
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchDetailArea = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 if (response.data && response.data.data) {
//                     const { data } = response.data;
//                     setAreaDetail(data);
//                     setHotels(data.hotels || []);
//                 } else {
//                     console.error("Data tidak ditemukan atau format tidak sesuai");
//                 }
//             } catch (error) {
//                 console.error("Error fetching area details:", error);
//             }
//         };

//         fetchDetailArea();
//     }, [id]);

//     const handleDeleteHotel = async (hotelId) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/turisareahotel/hotel/${hotelId}/deletehotel`);
//             alert("Hotel berhasil dihapus!");
//             setHotels(hotels.filter(hotel => hotel.id !== hotelId));
//         } catch (error) {
//             console.error("Error deleting hotel:", error);
//             alert("Terjadi kesalahan saat menghapus hotel");
//         }
//     };

//     if (!areaDetail) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container" style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//             <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Detail Area Wisata</h1>
//             <div style={{ padding: "15px", background: "#f9f9f9", borderRadius: "8px", marginBottom: "20px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
//                 <h3>{areaDetail.name}</h3>
//                 <p><strong>ID:</strong> {areaDetail.id}</p>
//                 <p><strong>Deskripsi:</strong> {areaDetail.description || "Tidak ada deskripsi"}</p>
//             </div>
//             <h3>Daftar Hotel</h3>
//             {hotels.length > 0 ? (
//                 <ul style={{ listStyle: "none", padding: 0 }}>
//                     {hotels.map((hotel) => (
//                         <li key={hotel.id} style={{ padding: "15px", marginBottom: "15px", background: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
//                             <p><strong>Nama Hotel:</strong> {hotel.name}</p>
//                             <p><strong>Harga:</strong> Rp. {hotel.cost}</p>
//                             <p><strong>Fasilitas:</strong> {hotel.benefit}</p>
//                             <p><strong>Jarak:</strong> {hotel.distance} km</p>
//                             <p><strong>Hotel Bintang:</strong> {hotel.rating}</p>
//                             <p><strong>Website Hotel:</strong> {hotel.hotel_url}</p>
//                             {hotel.image_url && (
//                                 <img 
//                                     src={hotel.image_url} 
//                                     alt={hotel.name} 
//                                     style={{ width: '150px', height: 'auto', borderRadius: '8px', margin: '10px 0' }} 
//                                 />
//                             )}
//                             <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//                                 <Link to={`/turisareahotel/hotel/${hotel.id}/edithotel`} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", textAlign: "center" }}>
//                                     Edit
//                                 </Link>
//                                 <button onClick={() => handleDeleteHotel(hotel.id)} style={{ backgroundColor: "#dc3545", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
//                                     Hapus
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p style={{ color: "#6c757d" }}>Tidak ada hotel terkait dengan area ini.</p>
//             )}
//             <div style={{ marginTop: "20px" }}>
//                 <Link to="/turisareahotel" style={{ backgroundColor: "#6c757d", color: "#fff", padding: "10px 20px", borderRadius: "4px", textDecoration: "none", marginRight: "10px" }}>
//                     Kembali ke Daftar Area Wisata
//                 </Link>
//                 <Link to={`/turisareahotel/${id}/hotel`}>
//                     <button style={{ backgroundColor: "#28a745", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
//                         Tambah Hotel
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default DetailArea;


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DetailArea() {
    const { id } = useParams();
    const [areaDetail, setAreaDetail] = useState(null);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchDetailArea = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
                if (response.data && response.data.data) {
                    const { data } = response.data;
                    setAreaDetail(data);
                    setHotels(data.hotels || []);
                } else {
                    console.error("Data tidak ditemukan atau format tidak sesuai");
                }
            } catch (error) {
                console.error("Error fetching area details:", error);
            }
        };

        fetchDetailArea();
    }, [id]);

    const handleDeleteHotel = async (hotelId) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/turisareahotel/hotel/${hotelId}/deletehotel`);
            alert("Hotel berhasil dihapus!");
            setHotels(hotels.filter(hotel => hotel.id !== hotelId));
        } catch (error) {
            console.error("Error deleting hotel:", error);
            alert("Terjadi kesalahan saat menghapus hotel");
        }
    };

    if (!areaDetail) {
        return <div>Loading...</div>;
    }

    const cardStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px",
    };

    const cardItemStyle = {
        backgroundColor: "#fff",
        padding: "15px",
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

    const linkStyle = {
        display: "block",
        maxWidth: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        color: "#007bff",
        textDecoration: "none",
    };

    const buttonStyle = {
        padding: "8px 16px",
        borderRadius: "5px",
        textDecoration: "none",
        cursor: "pointer",
    };

    return (
        <div className="container" style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Detail Area Wisata</h1>
            <div style={{ padding: "15px", background: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
                <h3>{areaDetail.name}</h3>
                <p><strong>ID:</strong> {areaDetail.id}</p>
                <p><strong>Deskripsi:</strong> {areaDetail.description || "Tidak ada deskripsi"}</p>
            </div>

            <h3 style={{ marginTop: "20px" }}>Daftar Hotel</h3>
            {hotels.length > 0 ? (
                <div style={cardStyle}>
                    {hotels.map((hotel) => (
                        <div key={hotel.id} style={cardItemStyle}>
                            {hotel.image_url && (
                                <img 
                                    src={hotel.image_url} 
                                    alt={hotel.name} 
                                    style={imageStyle} 
                                />
                            )}
                            <h4>{hotel.name}</h4>
                            <p><strong>Harga:</strong> Rp. {hotel.cost.toLocaleString()}</p>
                            <p><strong>Fasilitas:</strong> {hotel.benefit}</p>
                            <p><strong>Jarak:</strong> {hotel.distance} km</p>
                            <p><strong>Hotel Bintang:</strong> ⭐ {hotel.rating}</p>
                            <p><strong>Website:</strong> 
                                <a href={hotel.hotel_url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    {hotel.hotel_url}
                                </a>
                            </p>
                            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
                                <Link to={`/turisareahotel/hotel/${hotel.id}/edithotel`} style={{ ...buttonStyle, backgroundColor: "#007bff", color: "#fff" }}>
                                    Edit
                                </Link>
                                <button onClick={() => handleDeleteHotel(hotel.id)} style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "#fff", border: "none" }}>
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ color: "#6c757d", marginTop: "20px" }}>Tidak ada hotel terkait dengan area ini.</p>
            )}

            <div style={{ marginTop: "30px", textAlign: "center" }}>
                <Link to="/turisareahotel" style={{ backgroundColor: "#6c757d", color: "#fff", padding: "10px 20px", borderRadius: "4px", textDecoration: "none", marginRight: "10px" }}>
                    Kembali ke Daftar Area Wisata
                </Link>
                <Link to={`/turisareahotel/${id}/hotel`} style={{ backgroundColor: "#28a745", color: "#fff", padding: "10px 20px", borderRadius: "4px", textDecoration: "none" }}>
                    Tambah Hotel
                </Link>
            </div>
        </div>
    );
}

export default DetailArea;

