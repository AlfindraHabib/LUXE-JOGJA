// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Areahotelform() {
// //   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://127.0.0.1:5000/turisareahotel/add', { name});
//       ('');
//       setName('');
//       window.alert('Tambah data berhasil');
//       navigate('/turisareahotel');
//     } catch (error) {
//       console.error('Error adding contact:', error);
//     }
//   };

//   return (
//     <div className='container'>
//       <h2>Add Contact</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Nama Area Wisata:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         <br />
//         <button type="submit" style={{ marginRight: '10px' }}>Tambah Area</button>
//         <Link to='/turisareahotel' className='btn'>Back</Link>
//       </form>
//     </div>
//   );
// }

// export default Areahotelform;



// fix!!
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Areahotelform() {
//   const [name, setName] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validasi sederhana
//     if (!name.trim()) {
//       setErrorMessage('Nama area wisata harus diisi.');
//       return;
//     }

//     try {
//       // Kirim data ke API
//       await axios.post('http://127.0.0.1:5000/turisareahotel/add', { name });
//       setName(''); // Reset input
//       setErrorMessage(''); // Hapus pesan kesalahan
//       window.alert('Tambah data berhasil');
//       navigate('/turisareahotel'); // Redirect ke halaman daftar
//     } catch (error) {
//       console.error('Error adding area:', error);
//       setErrorMessage('Gagal menambah area wisata. Silakan coba lagi.');
//     }
//   };

//   return (
//     <div className='container'>
//       <h2>Tambah Area Wisata</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Nama Area Wisata:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         {/* Tampilkan pesan kesalahan jika ada */}
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

//         <br />
//         <button type="submit" style={{ marginRight: '10px' }}>Tambah Area</button>
//         <Link to='/turisareahotel' className='btn'>Kembali</Link>
//       </form>
//     </div>
//   );
// }

// export default Areahotelform;


// fixxxx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';


// function Areahotelform() {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(''); // Tambahkan state untuk link gambar
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validasi sederhana
//     if (!name.trim() || !image.trim()) {
//       setErrorMessage('Nama area wisata dan link gambar harus diisi.');
//       return;
//     }

//     try {
//       // Kirim data ke API
//       await axios.post('http://127.0.0.1:5000/turisareahotel/add', { name, image }); // Tambahkan image ke data yang dikirim
//       setName(''); // Reset input
//       setImage(''); // Reset input gambar
//       setErrorMessage(''); // Hapus pesan kesalahan
//       window.alert('Tambah data berhasil');
//       navigate('/turisareahotel'); // Redirect ke halaman daftar
//     } catch (error) {
//       console.error('Error adding area:', error);
//       setErrorMessage('Gagal menambah area wisata. Silakan coba lagi.');
//     }
//   };

//   return (
//     <div className='container'>
//       <h2>Tambah Area Wisata</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Nama Area Wisata:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Link Gambar:</label>
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//           />
//         </div>

//         {/* Tampilkan pesan kesalahan jika ada */}
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

//         <br />
//         <button type="submit" style={{ marginRight: '10px' }}>Tambah Area</button>
//         <Link to='/turisareahotel' className='btn'>Kembali</Link>
//       </form>
//     </div>
//   );
// }

// export default Areahotelform;

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Areahotelform() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(''); // Tambahkan state untuk link gambar
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!name.trim() || !image.trim()) {
      setErrorMessage('Nama area wisata dan link gambar harus diisi.');
      return;
    }

    try {
      // Kirim data ke API
      await axios.post('http://127.0.0.1:5000/turisareahotel/add', { name, image }); // Tambahkan image ke data yang dikirim
      setName(''); // Reset input
      setImage(''); // Reset input gambar
      setErrorMessage(''); // Hapus pesan kesalahan
      window.alert('Tambah data berhasil');
      navigate('/turisareahotel'); // Redirect ke halaman daftar
    } catch (error) {
      console.error('Error adding area:', error);
      setErrorMessage('Gagal menambah area wisata. Silakan coba lagi.');
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
      <h2 style={headingStyle}>Tambah Area Wisata</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Nama Area Wisata:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Link Gambar:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={inputStyle}
            required
          />
        </div>

        {/* Tampilkan pesan kesalahan jika ada */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <br />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Tambah Area
        </button>
        <Link
          to='/turisareahotel'
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
        >
          Kembali
        </Link>
      </form>
    </div>
  );
}

export default Areahotelform;
