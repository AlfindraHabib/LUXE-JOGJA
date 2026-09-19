// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate

// // const LoginAdmin = () => {
// //     const navigate = useNavigate(); // Inisialisasi useNavigate

// //     // State untuk menyimpan input form
// //     const [nama, setNama] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");

// //     // Fungsi untuk menangani submit form
// //     const handleSubmit = (e) => {
// //         e.preventDefault(); // Mencegah reload halaman
// //         // Lakukan logika login di sini (misalnya, panggil API)

// //         // Setelah login berhasil, navigasi ke halaman lain
// //         navigate("/beranda"); // Ganti dengan rute yang sesuai
// //     };

// //     return (
// //         <section
// //             className="hero text-white text-center py-5"
// //             style={{
// //                 background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/peta.jpg') no-repeat center center",
// //                 backgroundSize: "cover",
// //                 borderRadius: "20px",
// //                 height: "85vh",
// //                 position: "relative",
// //                 overflow: "hidden",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //             }}
// //         >
// //             <div
// //                 className="form-container p-4"
// //                 style={{
// //                     background: "rgba(10, 10, 10, 0.71)",
// //                     borderRadius: "10px",
// //                     boxShadow: "0 4px 8px rgba(238, 13, 13, 0.2)",
// //                     width: "90%",
// //                     maxWidth: "400px",
// //                 }}
// //             >
// //                 <h2 className="text-center mb-4">Masuk Admin</h2>
// //                 <form id="loginForm" onSubmit={handleSubmit}>
// //                     <div className="mb-3">
// //                         <label htmlFor="nama" className="form-label">Username</label>
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             id="nama"
// //                             placeholder="Masukkan Username"
// //                             value={nama}
// //                             onChange={(e) => setNama(e.target.value)} // Update state saat input berubah
// //                             required
// //                         />
// //                     </div>
// //                     <div className="mb-3">
// //                         <label htmlFor="email" className="form-label">Email</label>
// //                         <input
// //                             type="email"
// //                             className="form-control"
// //                             id="email"
// //                             placeholder="Masukkan Email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
// //                             required
// //                         />
// //                     </div>
// //                     <div className="mb-3">
// //                         <label htmlFor="password" className="form-label">Password</label>
// //                         <input
// //                             type="password"
// //                             className="form-control"
// //                             id="password"
// //                             placeholder="Masukkan Password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)} // Update state saat input berubah
// //                             required
// //                         />
// //                     </div>
// //                     <button type="submit" className="btn btn-primary w-100">Masuk</button>
// //                 </form>
// //             </div>
// //         </section>
// //     );
// // };

// // export default LoginAdmin;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Login = () => {
//     const navigate = useNavigate(); // Inisialisasi useNavigate

//     // State untuk menyimpan input form
//     const [nama, setNama] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isAdmin, setIsAdmin] = useState(false); // State untuk menentukan apakah login sebagai admin

//     // Fungsi untuk menangani submit form
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Mencegah reload halaman
//         // Lakukan logika login di sini (misalnya, panggil API)

//         // Setelah login berhasil, navigasi ke halaman lain
//         navigate("/beranda"); // Ganti dengan rute yang sesuai
//     };

//     return (
//         <section
//             className="hero text-white text-center py-5"
//             style={{
//                 background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/peta.jpg') no-repeat center center",
//                 backgroundSize: "cover",
//                 borderRadius: "20px",
//                 height: "85vh",
//                 position: "relative",
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//             }}
//         >
//             <div
//                 className="form-container p-4"
//                 style={{
//                     background: "rgba(10, 10, 10, 0.71)",
//                     borderRadius: "10px",
//                     boxShadow: "0 4px 8px rgba(238, 13, 13, 0.2)",
//                     width: "90%",
//                     maxWidth: "400px",
//                 }}
//             >
//                 <h2 className="text-center mb-4">Masuk Sebagai</h2>
//                 <div className="mb-3">
//                     <button
//                         className={`btn ${isAdmin ? "btn-secondary" : "btn-primary"} w-100 mb-2`}
//                         onClick={() => setIsAdmin(false)} // Pilih User
//                     >
//                         User
//                     </button>
//                     <button
//                         className={`btn ${isAdmin ? "btn-primary" : "btn-secondary"} w-100`}
//                         onClick={() => setIsAdmin(true)} // Pilih Admin
//                     >
//                         Admin
//                     </button>
//                 </div>
//                 <form id="loginForm" onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="nama" className="form-label">Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="nama"
//                             placeholder="Masukkan Username"
//                             value={nama}
//                             onChange={(e) => setNama(e.target.value)} // Update state saat input berubah
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             placeholder="Masukkan Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             placeholder="Masukkan Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)} // Update state saat input berubah
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Masuk</button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
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

            localStorage.setItem("admin_access_token", result.data.access_token);
            localStorage.setItem("admin_refresh_token", result.data.refresh_token);

            alert("Login admin berhasil!");
            navigate("/turisareahotel"); // Ganti dengan halaman admin yang sesuai
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat login!");
        }
    };

    return (
        <section
            className="hero text-white text-center py-5"
            style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/admin-bg.jpg') no-repeat center center",
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
                <h2 className="text-center mb-4">Masuk Admin</h2>
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

export default LoginAdmin;
