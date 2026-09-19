// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Turisareahotelupdate() {
//     const { id } = useParams(); // Ambil id kontak dari URL
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     // const [phone, setPhone] = useState('');

//     // Mendapatkan detail kontak dari server saat komponen dimuat
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 const { name } = response.data;
//                 setName(name);
//                 // setPhone(phone);
//             } catch (error) {
//                 console.error('Error fetching contact details:', error);
//             }
//         };

//         fetchData();
//     }, [id]); // Jadikan id sebagai dependensi untuk memperbarui data saat id berubah

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://127.0.0.1:5000/turisareahotel/${id}/edit`, { name});
//             window.alert('Edit data berhasil');
//             navigate('/TouristAreaHotel'); // Navigasi kembali ke halaman daftar kontak setelah pembaruan berhasil
//         } catch (error) {
//             console.error('Error updating contact:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Update Area Wisata</h2>
//             <form onSubmit={handleUpdate}>
//                 <label>Name:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//                 <br />
//                 <button type="submit" style={{ marginRight: '10px' }}>Update contact</button>
//                 <Link to='/turisareahotel' className='btn'>Back</Link>
//             </form>
//         </div>
//     );
// }

// export default Turisareahotelupdate;




// fixx1111
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Turisareahotelupdate() {
//     const { id } = useParams(); // Ambil id dari URL
//     const navigate = useNavigate();
//     const [name, setName] = useState('');

//     // Ambil detail area wisata berdasarkan ID saat komponen dimuat
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 const { name } = response.data.data; // Pastikan server mengirim data dalam format ini
//                 setName(name);
//             } catch (error) {
//                 console.error('Error fetching area details:', error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             // Gunakan FormData untuk format form-urlencoded
//             const formData = new FormData();
//             formData.append('name', name);
    
//             // Lakukan permintaan PUT
//             await axios.put(`http://127.0.0.1:5000/turisareahotel/${id}/edit`, formData, {
//                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//             });
    
//             window.alert('Edit data berhasil');
//             navigate('/turisareahotel'); // Navigasi kembali ke halaman daftar
//         } catch (error) {
//             console.error('Error updating area:', error);
//         }
//     };
    

//     return (
//         <div className="container">
//             <h2>Update Area Wisata</h2>
//             <form onSubmit={handleUpdate}>
//                 <label>Nama Area Wisata:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <button type="submit" style={{ marginRight: '10px' }}>Update Area</button>
//                 <Link to='/turisareahotel' className='btn'>Kembali</Link>
//             </form>
//         </div>
//     );
// }

// export default Turisareahotelupdate;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Turisareahotelupdate() {
//     const { id } = useParams(); // Ambil id dari URL
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [image, setImage] = useState(''); // Tambahkan state untuk link gambar

//     // Ambil detail area wisata berdasarkan ID saat komponen dimuat
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 const { name, image } = response.data.data; // Pastikan server mengirim data dalam format ini
//                 setName(name);
//                 setImage(image); // Set state image
//             } catch (error) {
//                 console.error('Error fetching area details:', error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             // Gunakan FormData untuk format form-urlencoded
//             const formData = new FormData();
//             formData.append('name', name);
//             formData.append('image', image); // Tambahkan image ke formData
    
//             // Lakukan permintaan PUT
//             await axios.put(`http://127.0.0.1:5000/turisareahotel/${id}/edit`, formData, {
//                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//             });
    
//             window.alert('Edit data berhasil');
//             navigate('/turisareahotel'); // Navigasi kembali ke halaman daftar
//         } catch (error) {
//             console.error('Error updating area:', error);
//         }
//     };
    

//     return (
//         <div className="container">
//             <h2>Update Area Wisata</h2>
//             <form onSubmit={handleUpdate}>
//                 <label>Nama Area Wisata:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Link Gambar:</label>
//                 <input
//                     type="text"
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <button type="submit" style={{ marginRight: '10px' }}>Update Area</button>
//                 <Link to='/turisareahotel' className='btn'>Kembali</Link>
//             </form>
//         </div>
//     );
// }

// export default Turisareahotelupdate;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Turisareahotelupdate() {
//     const { id } = useParams(); // Ambil id dari URL
//     const navigate = useNavigate();
//     const [name, setName] = useState(''); // Inisialisasi dengan string kosong
//     const [image_url, setImage_url] = useState(''); // Inisialisasi dengan string kosong

//     // Ambil detail area wisata berdasarkan ID saat komponen dimuat
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 const { name, image_url } = response.data.data; // Pastikan server mengirim data dalam format ini
//                 setName(name || ''); // Pastikan untuk mengatur nilai default jika undefined
//                 setImage_url(image_url || ''); // Pastikan untuk mengatur nilai default jika undefined
//             } catch (error) {
//                 console.error('Error fetching area details:', error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             // Gunakan FormData untuk format form-urlencoded
//             const formData = new FormData();
//             formData.append('name', name);
//             formData.append('image', image_url); // Tambahkan image ke formData
    
//             // Lakukan permintaan PUT
//             await axios.put(`http://127.0.0.1:5000/turisareahotel/${id}/edit`, formData, {
//                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//             });
    
//             window.alert('Edit data berhasil');
//             navigate('/turisareahotel'); // Navigasi kembali ke halaman daftar
//         } catch (error) {
//             console.error('Error updating area:', error);
//         }
//     };
    

//     return (
//         <div className="container">
//             <h2>Update Area Wisata</h2>
//             <form onSubmit={handleUpdate}>
//                 <label>Nama Area Wisata:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Link Gambar:</label>
//                 <input
//                     type="text"
//                     value={image_url}
//                     onChange={(e) => setImage_url(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <button type="submit" style={{ marginRight: '10px' }}>Update Area</button>
//                 <Link to='/turisareahotel' className='btn'>Kembali</Link>
//             </form>
//         </div>
//     );
// }

// export default Turisareahotelupdate;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function Turisareahotelupdate() {
//     const { id } = useParams(); // Ambil id dari URL
//     const navigate = useNavigate();
//     const [name, setName] = useState(''); // Inisialisasi dengan string kosong
//     const [image_url, setImageUrl] = useState(''); // Untuk URL gambar

//     // Ambil detail area wisata berdasarkan ID saat komponen dimuat
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 const { name, image_url } = response.data.data; // Pastikan server mengirim data dalam format ini
//                 setName(name || ''); // Pastikan untuk mengatur nilai default jika undefined
//                 setImageUrl(image_url || ''); // Pastikan untuk mengatur nilai default jika undefined
//             } catch (error) {
//                 console.error('Error fetching area details:', error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             // Kirim data dalam format URL-encoded
//             const params = new URLSearchParams();
//             params.append('name', name);
//             params.append('image_url', image_url); // Kirimkan URL gambar

//             // Lakukan permintaan PUT
//             const response = await axios.put(`http://127.0.0.1:5000/turisareahotel/${id}/edit`, params, {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded' // Menyatakan tipe konten
//                 }
//             });

//             if (response.data.success) {
//                 window.alert('Edit data berhasil');
//                 navigate('/turisareahotel'); // Navigasi kembali ke halaman daftar
//             } else {
//                 window.alert('Edit data gagal');
//             }
//         } catch (error) {
//             console.error('Error updating area:', error);
//             window.alert('Terjadi kesalahan saat memperbarui data');
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Update Area Wisata</h2>
//             <form onSubmit={handleUpdate}>
//                 <label>Nama Area Wisata:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Link Gambar:</label>
//                 <input
//                     type="text"
//                     value={image_url}
//                     onChange={(e) => setImageUrl(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <button type="submit" style={{ marginRight: '10px' }}>Update Area</button>
//                 <Link to='/turisareahotel' className='btn'>Kembali</Link>
//             </form>
//         </div>
//     );
// }

// export default Turisareahotelupdate;


// fixx1111

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";


// function Turisareahotelupdate() {
//     const { id } = useParams(); // Ambil id dari URL
//     const navigate = useNavigate();
//     const [name, setName] = useState(''); // Pastikan state memiliki default string kosong
//     const [image_url, setImageUrl] = useState(''); // Pastikan state memiliki default string kosong

//     // Ambil detail area wisata berdasarkan ID saat komponen dimuat
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 const { name, image_url } = response.data.data; // Mengambil data dari response
//                 setName(name || ''); // Pastikan fallback ke string kosong jika tidak ada data
//                 setImageUrl(image_url || ''); // Pastikan fallback ke string kosong jika tidak ada data
//             } catch (error) {
//                 console.error('Error fetching area details:', error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             // Gunakan FormData untuk mengirim data
//             const formData = new FormData();
//             formData.append('name', name);
//             formData.append('image_url', image_url);

//             // Lakukan permintaan PUT
//             await axios.put(`http://127.0.0.1:5000/turisareahotel/${id}/edit`, formData, {
//                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//             });

//             window.alert('Edit data berhasil');
//             navigate('/turisareahotel'); // Navigasi kembali ke halaman daftar
//         } catch (error) {
//             console.error('Error updating area:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Update Area Wisata</h2>
//             <form onSubmit={handleUpdate}>
//                 <label>Nama Area Wisata:</label>
//                 <input
//                     type="text"
//                     value={name} // Pastikan value tidak undefined
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Link Gambar Area Wisata:</label>
//                 <input
//                     type="text"
//                     value={image_url} // Pastikan value tidak undefined
//                     onChange={(e) => setImageUrl(e.target.value)}
//                     required
//                 />
//                 <br/>
//                 <button type="submit" style={{ marginRight: '10px' }}>Update Area</button>
//                 <Link to='/turisareahotel' className='btn'>Kembali</Link>
//             </form>
//         </div>
//     );
// }

// export default Turisareahotelupdate;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Turisareahotelupdate() {
    const { id } = useParams(); // Ambil id dari URL
    const navigate = useNavigate();
    const [name, setName] = useState(''); // Default state
    const [image_url, setImageUrl] = useState(''); // Default state

    // Ambil detail area wisata berdasarkan ID saat komponen dimuat
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
                const { name, image_url } = response.data.data; 
                setName(name || ''); 
                setImageUrl(image_url || ''); 
            } catch (error) {
                console.error('Error fetching area details:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('image_url', image_url);

            await axios.put(`http://127.0.0.1:5000/turisareahotel/${id}/edit`, formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            window.alert('Edit data berhasil');
            navigate('/turisareahotel'); 
        } catch (error) {
            console.error('Error updating area:', error);
        }
    };

    return (
        <div
            className="container"
            style={{
                maxWidth: "600px",
                margin: "auto",
                padding: "20px",
                background: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Update Area Wisata
            </h2>
            <form
                onSubmit={handleUpdate}
                style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
                <label>Nama Area Wisata:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                />
                <label>Link Gambar Area Wisata:</label>
                <input
                    type="text"
                    value={image_url}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            background: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Update Area
                    </button>
                    <Link
                        to="/turisareahotel"
                        style={{
                            padding: "10px 20px",
                            textDecoration: "none",
                            color: "#fff",
                            background: "#6c757d",
                            borderRadius: "4px",
                            textAlign: "center",
                        }}
                    >
                        Kembali
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Turisareahotelupdate;
