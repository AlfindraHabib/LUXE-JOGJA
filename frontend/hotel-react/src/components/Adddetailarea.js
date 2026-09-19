// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function AddDetailArea() {
//     const { turiareahotel_id } = useParams(); // Ambil ID area wisata dari URL
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [benefit, setBenefit] = useState('');
//     const [rating, setRating] = useState('');
    
//     const handleAddHotel = async (e) => {
//         e.preventDefault();
//         try {
//             // Kirim data ke backend menggunakan POST request
//             const response = await axios.post(`http://127.0.0.1:5000/turisareahotel/${turiareahotel_id}/hotel`, {
//                 name,
//                 cost,
//                 benefit,
//                 rating
//             });

//             alert('Hotel berhasil ditambahkan!');
//             navigate(`/turisareahotel/${turiareahotel_id}`); // Navigasi kembali ke halaman area wisata
//         } catch (error) {
//             console.error('Error adding hotel:', error);
//             alert('Gagal menambahkan hotel.');
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Tambah Hotel ke Area Wisata</h2>
//             <form onSubmit={handleAddHotel}>
//                 <label>Nama Hotel:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Harga:</label>
//                 <input
//                     type="number"
//                     value={cost}
//                     onChange={(e) => setCost(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Fasilitas:</label>
//                 <textarea
//                     value={benefit}
//                     onChange={(e) => setBenefit(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Rating:</label>
//                 <input
//                     type="number"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <button type="submit">Tambah Hotel</button>
//             </form>
//         </div>
//     );
// }

// export default AddDetailArea;

// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function AddDetailArea() {
//     const { turiareahotel_id } = useParams(); // Ambil ID area wisata dari URL
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [benefit, setBenefit] = useState('');
//     const [rating, setRating] = useState('');

//     const handleAddHotel = async (e) => {
//         e.preventDefault();
    
//         if (!name || !cost || !benefit || !rating) {
//             alert('Semua field harus diisi!');
//             return;
//         }
    
//         try {
//             // Kirim data ke backend menggunakan POST request
//             const response = await axios.post(`http://127.0.0.1:5000/turisareahotel/${turiareahotel_id}/hotel`, {
//                 name,
//                 cost: parseFloat(cost), // Pastikan ini berupa angka
//                 benefit,
//                 rating: parseFloat(rating), // Pastikan ini berupa angka
//             });
    
//             alert('Hotel berhasil ditambahkan!');
//             navigate(`/turisareahotel/${turiareahotel_id}`); // Navigasi kembali ke halaman area wisata
//         } catch (error) {
//             console.error('Error adding hotel:', error);
//             alert(`Gagal menambahkan hotel. ${error.response?.data?.message || ''}`);
//         }
//     };
    

//     return (
//         <div className="container">
//             <h2>Tambah Hotel ke Area Wisata</h2>
//             <form onSubmit={handleAddHotel}>
//                 <label>Nama Hotel:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Harga:</label>
//                 <input
//                     type="number"
//                     value={cost}
//                     onChange={(e) => setCost(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Manfaat:</label>
//                 <textarea
//                     value={benefit}
//                     onChange={(e) => setBenefit(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Rating:</label>
//                 <input
//                     type="number"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <button type="submit">Tambah Hotel</button>
//             </form>
//         </div>
//     );
// }

// export default AddDetailArea;

// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function AddDetailArea() {
//     const { turiareahotel_id } = useParams();
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [benefit, setBenefit] = useState('');
//     const [rating, setRating] = useState('');

//     const handleAddHotel = async (e) => {
//         e.preventDefault();

//         if (!name || !cost || !benefit || !rating) {
//             alert('Semua field harus diisi!');
//             return;
//         }

//         try {
//             const response = await axios.post(
//                 `http://127.0.0.1:5000/turisareahotel/${turiareahotel_id}/hotel`,
//                 {
//                     name,
//                     cost: parseFloat(cost),
//                     benefit,
//                     rating: parseFloat(rating),
//                 },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             alert('Hotel berhasil ditambahkan!');
//             navigate(`/turisareahotel/${turiareahotel_id}`);
//         } catch (error) {
//             console.error('Error adding hotel:', error);
//             alert(`Gagal menambahkan hotel. ${error.response?.data?.message || ''}`);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Tambah Hotel ke Area Wisata</h2>
//             <form onSubmit={handleAddHotel}>
//                 <label>Nama Hotel:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <label>Harga:</label>
//                 <input
//                     type="number"
//                     value={cost}
//                     onChange={(e) => setCost(e.target.value)}
//                     step="0.01"
//                     required
//                 />
//                 <label>Fasilitas:</label>
//                 <textarea
//                     value={benefit}
//                     onChange={(e) => setBenefit(e.target.value)}
//                     required
//                 />
//                 <label>Rating:</label>
//                 <input
//                     type="number"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     step="0.1"
//                     required
//                 />
//                 <button type="submit">Tambah Hotel</button>
//             </form>
//         </div>
//     );
// }

// export default AddDetailArea;

// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function AddDetailArea() {
//     const { turiareahotel_id } = useParams();  // Mengambil ID area wisata dari URL
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [benefit, setBenefit] = useState('');
//     const [rating, setRating] = useState('');

//     const handleAddHotel = async (e) => {
//         e.preventDefault();

//         // Validasi input
//         if (!name || !cost || !benefit || !rating) {
//             alert('Semua field harus diisi!');
//             return;
//         }

//         // Validasi jika cost dan rating adalah angka
//         if (isNaN(cost) || isNaN(rating)) {
//             alert('Harga dan rating harus berupa angka!');
//             return;
//         }

//         try {
//             // Mengirim data ke server dengan format application/x-www-form-urlencoded
//             const formData = new URLSearchParams();
//             formData.append('name', name);
//             formData.append('cost', parseFloat(cost));
//             formData.append('benefit', benefit);
//             formData.append('rating', parseFloat(rating));

//             // Mengirimkan data ke server
//             await axios.post(
//                 `http://localhost:5000/turisareahotel/${turiareahotel_id}/hotel`,{name,cost,benefit,rating}
                
//             );

//             // Reset input form setelah berhasil
//             setName('');
//             setCost('');
//             setBenefit('');
//             setRating('');

//             alert('Hotel berhasil ditambahkan!');
//             navigate(`/turisareahotel/${turiareahotel_id}`);  // Navigasi kembali ke halaman area wisata
//         } catch (error) {
//             console.error('Error adding hotel:', error);
//             alert(`Gagal menambahkan hotel. ${error.response?.data?.message || 'Tidak ada detail kesalahan'}`);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Tambah Hotel ke Area Wisata</h2>
//             <form onSubmit={handleAddHotel}>
//                 <label>Nama Hotel:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Harga:</label>
//                 <input
//                     type="number"
//                     value={cost}
//                     onChange={(e) => setCost(e.target.value)}
//                     step="0.01"
//                     required
//                 />
//                 <br />
//                 <label>Fasilitas:</label>
//                 <textarea
//                     value={benefit}
//                     onChange={(e) => setBenefit(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Rating:</label>
//                 <input
//                     type="number"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     step="0.1"
//                     required
//                 />
//                 <br />
//                 <button type="submit">Tambah Hotel</button>
//             </form>
//         </div>
//     );
// }

// export default AddDetailArea;


// import React, { useState } from 'react';
// import { useParams, useNavigate,Link } from 'react-router-dom';
// import axios from 'axios';

// function AddDetailArea() {
//     const { turiareahotel_id } = useParams();  // Mengambil ID area wisata dari URL
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [benefit, setBenefit] = useState('');
//     const [distance,setDistance] = useState('');
//     const [rating, setRating] = useState('');

//     const handleAddHotel = async (e) => {
//         e.preventDefault();

//         // Validasi input
//         if (!name || !cost || !benefit || !distance || !rating) {
//             alert('Semua field harus diisi!');
//             return;
//         }

//         // Validasi jika cost dan rating adalah angka
//         if (isNaN(cost) || isNaN(rating)) {
//             alert('Harga dan rating harus berupa angka!');
//             return;
//         }

//         try {
//             // Mengirimkan data ke server dalam format JSON
//             const response = await axios.post(
//                 `http://localhost:5000/turisareahotel/${turiareahotel_id}/hotel`,
//                 { name, cost: parseFloat(cost), benefit, rating: parseFloat(rating) },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",  // Pastikan header ini sesuai untuk JSON
//                     },
//                 }
//             );

//             // Reset input form setelah berhasil
//             setName('');
//             setCost('');
//             setBenefit('');
//             setDistance('');
//             setRating('');

//             alert('Hotel berhasil ditambahkan!');
//             navigate(`/turisareahotel/${turiareahotel_id}`);  // Navigasi kembali ke halaman area wisata
//         } catch (error) {
//             console.error('Error adding hotel:', error);
//             alert(`Gagal menambahkan hotel. ${error.response?.data?.message || 'Tidak ada detail kesalahan'}`);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Tambah Hotel ke Area Wisata</h2>
//             <form onSubmit={handleAddHotel}>
//                 <label>Nama Hotel:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Harga:</label>
//                 <input
//                     type="number"
//                     value={cost}
//                     onChange={(e) => setCost(e.target.value)}
//                     step="0.01"
//                     required
//                 />
//                 <br />
//                 <label>Fasilitas:</label>
//                 <textarea
//                     value={benefit}
//                     onChange={(e) => setBenefit(e.target.value)}
//                     required
//                 />
//                 <br />

//                 <label>Jarak:</label>
//                 <input
//                     type="number"
//                     value={distance}
//                     onChange={(e) => setDistance(e.target.value)}
//                     required
//                 />
//                 <br />

//                 <label>Rating:</label>
//                 <input
//                     type="number"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     step="0.1"
//                     required
//                 />
//                 <br />
//                 <button type="submit">Tambah Hotel</button>
//             </form>
//             <br />
//             <Link to={`/turisareahotel`} className="btn">Kembali</Link>
//         </div>
//     );
// }

// export default AddDetailArea;


// import React, { useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// function AddDetailArea() {
//     const { turiareahotel_id } = useParams();  // Mengambil ID area wisata dari URL
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [benefit, setBenefit] = useState('');
//     const [distance,setDistance] = useState('');
//     const [rating, setRating] = useState('');

//     const handleAddHotel = async (e) => {
//         e.preventDefault();

//         // Validasi input
//         if (!name || !cost || !benefit || !distance || !rating) {
//             alert('Semua field harus diisi!');
//             return;
//         }

//         // Validasi jika cost, distance dan rating adalah angka
//         if (isNaN(cost) || isNaN(distance) || isNaN(rating)) {
//             alert('Harga, jarak dan rating harus berupa angka!');
//             return;
//         }

//         try {
//             // Mengirimkan data ke server dalam format JSON
//             const response = await axios.post(
//                 `http://localhost:5000/turisareahotel/${turiareahotel_id}/hotel`,
//                 { 
//                     name, 
//                     cost: parseFloat(cost), 
//                     benefit, 
//                     distance: parseFloat(distance), 
//                     rating: parseFloat(rating) 
//                 },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",  // Pastikan header ini sesuai untuk JSON
//                     },
//                 }
//             );

//             // Reset input form setelah berhasil
//             setName('');
//             setCost('');
//             setBenefit('');
//             setDistance('');
//             setRating('');

//             alert('Hotel berhasil ditambahkan!');
//             navigate(`/turisareahotel/${turiareahotel_id}`);  // Navigasi kembali ke halaman area wisata
//         } catch (error) {
//             console.error('Error adding hotel:', error);
//             alert(`Gagal menambahkan hotel. ${error.response?.data?.message || 'Tidak ada detail kesalahan'}`);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Tambah Hotel ke Area Wisata</h2>
//             <form onSubmit={handleAddHotel}>
//                 <label>Nama Hotel:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Harga:</label>
//                 <input
//                     type="number"
//                     value={cost}
//                     onChange={(e) => setCost(e.target.value)}
//                     step="0.01"
//                     required
//                 />
//                 <br />
//                 <label>Fasilitas:</label>
//                 <textarea
//                     value={benefit}
//                     onChange={(e) => setBenefit(e.target.value)}
//                     required
//                 />
//                 <br />

//                 <label>Jarak:</label>
//                 <input
//                     type="number"
//                     value={distance}
//                     onChange={(e) => setDistance(e.target.value)}
//                     required
//                 />
//                 <br />

//                 <label>Rating:</label>
//                 <input
//                     type="number"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     step="0.1"
//                     required
//                 />
//                 <br />
//                 <button type="submit">Tambah Hotel</button>
//             </form>
//             <br />
//             <Link to={`/turisareahotel`} className="btn">Kembali</Link>
//         </div>
//     );
// }

// export default AddDetailArea;


// fixxx
// import React, { useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';


// function AddDetailArea() {
//     const { turiareahotel_id } = useParams();
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [cost, setCost] = useState('');
//     const [benefit, setBenefit] = useState('');
//     const [distance, setDistance] = useState('');
//     const [rating, setRating] = useState('');
//     const [image_url, setImageUrl] = useState('');

//     const handleAddHotel = async (e) => {
//         e.preventDefault();

//         if (!name || !cost || !benefit || !distance || !rating || !image_url) {
//             alert('Semua field harus diisi!');
//             return;
//         }

//         try {
//             await axios.post(
//                 `http://localhost:5000/turisareahotel/${turiareahotel_id}/hotel`,
//                 { 
//                     name, 
//                     cost: parseFloat(cost), 
//                     benefit, 
//                     distance: parseFloat(distance), 
//                     rating: parseFloat(rating),
//                     image_url
//                 },
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             setName(''); setCost(''); setBenefit(''); setDistance(''); setRating(''); setImageUrl('');
//             alert('Hotel berhasil ditambahkan!');
//             navigate(`/turisareahotel/${turiareahotel_id}`);
//         } catch (error) {
//             console.error('Error adding hotel:', error);
//             alert('Gagal menambahkan hotel.');
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Tambah Hotel ke Area Wisata</h2>
//             <form onSubmit={handleAddHotel}>
//                 <label>Nama Hotel:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//                 <br />
//                 <label>Harga:</label>
//                 <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} step="0.01" required />
//                 <br />
//                 <label>Fasilitas:</label>
//                 <textarea value={benefit} onChange={(e) => setBenefit(e.target.value)} required />
//                 <br />
//                 <label>Jarak:</label>
//                 <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} required />
//                 <br />
//                 <label>Hotel Bintang:</label>
//                 <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} step="0.1" min="0" max="5" required />
//                 <br />
//                 <label>Link Gambar Hotel:</label>
//                 <input type="text" value={image_url} onChange={(e) => setImageUrl(e.target.value)} required />
//                 <br />
//                 <button type="submit">Tambah Hotel</button>
//             </form>
//             <Link to={`/turisareahotel`} className="btn">Kembali</Link>
//         </div>
//     );
// }

// export default AddDetailArea;

import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function AddDetailArea() {
    const { turiareahotel_id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [benefit, setBenefit] = useState('');
    const [distance, setDistance] = useState('');
    const [rating, setRating] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [hotel_url, setHotelUrl] = useState('');

    const handleAddHotel = async (e) => {
        e.preventDefault();

        if (!name || !cost || !benefit || !distance || !rating || !image_url || !hotel_url) {
            alert('Semua field harus diisi!');
            return;
        }

        try {
            await axios.post(
                `http://localhost:5000/turisareahotel/${turiareahotel_id}/hotel`,
                { 
                    name, 
                    cost: parseFloat(cost), 
                    benefit, 
                    distance: parseFloat(distance), 
                    rating: parseFloat(rating),
                    image_url,
                    hotel_url
                },
                { headers: { "Content-Type": "application/json" } }
            );

            setName(''); setCost(''); setBenefit(''); setDistance(''); setRating(''); setImageUrl('');setHotelUrl('');
            alert('Hotel berhasil ditambahkan!');
            navigate(`/turisareahotel/${turiareahotel_id}`);
        } catch (error) {
            console.error('Error adding hotel:', error);
            alert('Gagal menambahkan hotel.');
        }
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
    };

    const labelStyle = {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#555',
        marginBottom: '5px',
        display: 'block',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    };

    const textareaStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        resize: 'vertical',
        height: '120px',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049',
    };

    const linkStyle = {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#007BFF',
        borderRadius: '4px',
    };

    const linkHoverStyle = {
        backgroundColor: '#0056b3',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Tambah Hotel ke Area Wisata</h2>
            <form onSubmit={handleAddHotel}>
                <label style={labelStyle}>Nama Hotel:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    required
                />
                <br />
                <label style={labelStyle}>Harga:</label>
                <input
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    step="0.01"
                    style={inputStyle}
                    required
                />
                <br />
                <label style={labelStyle}>Fasilitas:</label>
                <textarea
                    value={benefit}
                    onChange={(e) => setBenefit(e.target.value)}
                    style={textareaStyle}
                    required
                />
                <br />
                <label style={labelStyle}>Jarak:</label>
                <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    style={inputStyle}
                    required
                />
                <br />
                <label style={labelStyle}>Hotel Bintang:</label>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    step="0.1"
                    min="0"
                    max="5"
                    style={inputStyle}
                    required
                />
                <br />
                <label style={labelStyle}>Website Hotel:</label>
                <input
                    type="text"
                    value={hotel_url}
                    onChange={(e) => setHotelUrl(e.target.value)}
                    style={inputStyle}
                    required
                />
                <br />
                <label style={labelStyle}>Link Gambar Hotel:</label>
                <input
                    type="text"
                    value={image_url}
                    onChange={(e) => setImageUrl(e.target.value)}
                    style={inputStyle}
                    required
                />
                <br />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                >
                    Tambah Hotel
                </button>
            </form>
            <Link to={`/turisareahotel`} style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}>
                Kembali
            </Link>
        </div>
    );
}

export default AddDetailArea;
