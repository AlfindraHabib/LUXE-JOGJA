import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/Navbar.css"; // Pastikan untuk mengimpor CSS jika diperlukan

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleHotelHomeClick = (event) => {
    event.preventDefault();
    alert("Anda harus masuk atau membuat akun terlebih dahulu.");
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap", // Membuat elemen menjadi fleksibel untuk membungkus di layar kecil
      }}
    >
      <div
        className="logo"
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <img
          src="img/logo1.png"
          alt="Luxe Jogja"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#FFA726",
          }}
        >
          Luxe Jogja
        </span>
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row", // Default: Horizontal
          flexWrap: "wrap", // Bungkus di layar kecil
          margin: 0,
          padding: 0,
          gap: "15px", // Jarak antar item
        }}
      >
        <li>
          <span
            onClick={handleNavigateToHome}
            style={{
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FFA726")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            Beranda
          </span>
        </li>
        <li>
          <span
            onClick={handleHotelHomeClick}
            style={{
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FFA726")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            Hotel & Penginapan
          </span>
        </li>
        <li>
          <span
            onClick={handleHotelHomeClick}
            style={{
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FFA726")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            Contact
          </span>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Link
          to="/login"
          className="btn btn-light"
          style={{
            color: "#fff",
            backgroundColor: "#FFA726",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Masuk
        </Link>
        <Link
          to="/register"
          className="btn btn-outline-light"
          style={{
            color: "#FFA726",
            border: "1px solid #FFA726",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Buat Akun
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
