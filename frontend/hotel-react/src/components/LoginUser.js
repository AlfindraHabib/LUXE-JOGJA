import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    email,
                    password,
                    
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.message || "Login gagal!");
                return;
            }

            localStorage.setItem("access_token", result.data.access_token);
            localStorage.setItem("refresh_token", result.data.refresh_token);

            alert("Login berhasil!");
            navigate("/beranda");
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat login!");
        }
    };

    return (
        <section
            className="hero text-white text-center py-5"
            style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/peta.jpg') no-repeat center center",
                backgroundSize: "cover",
                borderRadius: "20px",
                height: "85vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="form-container p-4"
                style={{
                    background: "rgba(10, 10, 10, 0.71)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(238, 13, 13, 0.2)",
                    width: "90%",
                    maxWidth: "400px",
                }}
            >
                <h2 className="text-center mb-4">Masuk User</h2>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Masukkan Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Masukkan Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Masuk</button>
                </form>
            </div>
        </section>
    );
};

export default LoginUser;
