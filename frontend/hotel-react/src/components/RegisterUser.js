// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const RegisterUser = () => {
//     const navigate = useNavigate(); // Inisialisasi useNavigate

//     // State untuk menyimpan input form
//     const [namaDepan, setNamaDepan] = useState("");
//     const [namaBelakang, setNamaBelakang] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(""); // State untuk menyimpan pesan kesalahan

//     // Fungsi untuk menangani submit form
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Mencegah reload halaman

//         // Validasi untuk memastikan nama depan dan nama belakang tidak sama
//         if (namaDepan.trim() === namaBelakang.trim()) {
//             setError("Nama depan dan nama belakang tidak boleh sama.");
//             return; // Hentikan eksekusi jika validasi gagal
//         }

//         // Reset pesan kesalahan jika validasi berhasil
//         setError("");

//         // Lakukan logika pendaftaran di sini (misalnya, panggil API)

//         // Setelah pendaftaran berhasil, navigasi ke halaman lain
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
//                 <h2 className="text-center mb-4">Buat Akun User</h2>
//                 {error && <div className="alert alert-danger">{error}</div>} {/* Tampilkan pesan kesalahan */}
//                 <form id="loginForm" onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="namaDepan" className="form-label">Nama Depan</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="namaDepan"
//                             placeholder="Masukkan Nama Depan"
//                             value={namaDepan}
//                             onChange={(e) => setNamaDepan(e.target.value)} // Update state saat input berubah
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="namaBelakang" className="form-label">Nama Belakang</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="namaBelakang"
//                             placeholder="Masukkan Nama Belakang"
//                             value={namaBelakang}
//                             onChange={(e) => setNamaBelakang(e.target.value)} // Update state saat input berubah
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
//                             placeholder="Buat Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)} // Update state saat input berubah
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Buat Akun</button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default RegisterUser;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterUser = () => {
    const navigate = useNavigate(); // Inisialisasi useNavigate

    // State untuk menyimpan input form
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State untuk menyimpan pesan kesalahan

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah reload halaman

        // Validasi jika username atau email kosong
        if (!username || !email || !password) {
            setError("Semua field harus diisi!");
            return; // Hentikan eksekusi jika ada field yang kosong
        }

        // Reset pesan kesalahan jika validasi berhasil
        setError("");

        // Lakukan logika pendaftaran di sini (misalnya, panggil API)

        // Setelah pendaftaran berhasil, navigasi ke halaman lain
        navigate("/login"); // Ganti dengan rute yang sesuai
    };

    return (
        <section
            className="hero text-white text-center py-5"
            style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/peta.jpg') no-repeat center center",
                backgroundSize: "cover",
                borderRadius: "20px",
                height: "85vh",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
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
                <h2 className="text-center mb-4">Buat Akun User</h2>
                {error && <div className="alert alert-danger">{error}</div>} {/* Tampilkan pesan kesalahan */}
                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Masukkan Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Update state saat input berubah
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Masukkan Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Buat Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update state saat input berubah
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Buat Akun</button>
                </form>
            </div>
        </section>
    );
};

export default RegisterUser;

