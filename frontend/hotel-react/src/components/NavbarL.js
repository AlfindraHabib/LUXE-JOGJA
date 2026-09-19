import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import fotoprofile from '../img/pp.JPG';

const NavbarL = () => {
    const navigate = useNavigate(); 

    const handleNavigateToHome = () => {
        navigate("/beranda"); // Navigasi ke halaman Home
    };

    const handleHotelHomeClick = (event) => {
        event.preventDefault(); // Mencegah perilaku default link
        navigate("/hotelsearch"); // Navigasi ke halaman Hotel Search
    };

    const handleNavigateContact = () => {
        navigate("#"); // Navigasi ke halaman Home
    };

    const handleSignOut = () => {
        // Logika untuk sign out (jika ada)
        // Misalnya, menghapus token atau informasi pengguna dari localStorage
        // localStorage.removeItem('token'); // Contoh

        // Navigasi kembali ke halaman beranda
        navigate("/");
    };

    return (
        <nav style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="img/logo1.png" // Ganti dengan path yang sesuai untuk logo Anda
                    alt="Luxe Jogja"
                    style={{ height: "40px", marginRight: '10px' }} // Menambahkan margin untuk jarak antara logo dan teks
                />
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFA726' }}>
                    Luxe Jogja
                </span>
            </div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                margin: 0,
                padding: 0,
            }}>
                <li style={{ margin: '0 15px' }}>
                    <span
                        onClick={handleNavigateToHome}
                        style={{ color: '#fff', cursor: 'pointer', fontSize: '1rem', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FFA726'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                    >
                        Beranda
                    </span>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <span
                        onClick={handleHotelHomeClick}
                        style={{ color: '#fff', cursor: 'pointer', fontSize: '1rem', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FFA726'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                    >
                        Hotel & Penginapan
                    </span>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <span
                        onClick={handleNavigateContact}
                        style={{ color: '#fff', cursor: 'pointer', fontSize: '1rem', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FFA726'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                    >
                        Contact
                    </span>
                </li>
            </ul>
            <div className="d-flex align-items-center">
                <form className="w-100 me-3" role="search">
                    <div className="flex-shrink-0 dropdown">
                    <button
                        type="button"
                        className="d-block link-body-emphasis text-decoration-none dropdown-toggle btn btn-link p-0 border-0 bg-transparent"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                        src={fotoprofile}
                        alt="Profile"
                        width="32"
                        height="32"
                        className="rounded-circle"
                        />
                    </button>
                    <ul className="dropdown-menu text-small shadow">
                        <li>
                        <a className="dropdown-item" href="/" onClick={handleSignOut}>
                            Sign out
                        </a>
                        </li>
                    </ul>
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default NavbarL;