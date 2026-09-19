import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterAdmin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        level: "admin", // Default sebagai admin
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Encode data ke dalam format URL-encoded
            const formBody = new URLSearchParams(formData);

            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody.toString(),
            });

            const data = await response.json();

            if (data.success) {
                alert(`Registrasi berhasil sebagai ${formData.level}!`);
                navigate("/login"); // Navigasi ke halaman login setelah registrasi sukses
            } else {
                setError(data.message || "Terjadi kesalahan saat registrasi.");
            }
        } catch (err) {
            setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
        }
    };

    return (
        <section
            className="hero text-white text-center py-5"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/tugu.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh", // Memastikan elemen mengambil seluruh tinggi viewport
                width: "100vw", // Memastikan elemen mengambil seluruh lebar viewport
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px", // Jika ingin mempertahankan border-radius
                overflow: "hidden",
            }}
        >
            <div
                className="form-container p-4"
                style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    width: "90%",
                    maxWidth: "400px",
                }}
            >
                <h2 className="text-center mb-4 text-dark">Registrasi</h2>
                {error && (
                    <div
                        className="alert alert-danger"
                        style={{
                            padding: "10px",
                            marginBottom: "15px",
                            borderRadius: "5px",
                        }}
                    >
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control mb-3"
                        style={{
                            height: "45px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control mb-3"
                        style={{
                            height: "45px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="form-control mb-3"
                        style={{
                            height: "45px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        className="form-select mb-4"
                        style={{
                            height: "45px",
                            borderRadius: "5px",
                        }}
                    >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mb-3"
                        style={{
                            height: "45px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        Daftar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RegisterAdmin;
