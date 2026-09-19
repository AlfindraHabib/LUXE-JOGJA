import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection1 = () => {
    const navigate = useNavigate(); // Inisialisasi useNavigate
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State untuk dropdown

    const handleUserLogin = () => {
        navigate("/loginuser"); // Navigasi ke halaman login user
        setDropdownOpen(false); // Tutup dropdown setelah memilih
    };

    const handleAdminLogin = () => {
        navigate("/loginadmin"); // Navigasi ke halaman login admin
        setDropdownOpen(false); // Tutup dropdown setelah memilih
    };

    return (
        <section
            className="hero text-white text-center py-5"
            style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/tugu.jpg') no-repeat center center",
                backgroundSize: "cover",
                borderRadius: "20px",
                height: "100vh",
                width: "100%",
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
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    width: "90%",
                    maxWidth: "400px",
                }}
            >
                <h2 className="text-center mb-4 text-dark">Masuk Sebagai</h2>
                <div className="dropdown">
                    <button
                        className="btn btn-primary w-100 mb-3"
                        onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown
                    >
                        Pilih Opsi
                    </button>
                    {isDropdownOpen && (
                        <div
                            className="dropdown-menu"
                            style={{
                                display: "block",
                                position: "absolute",
                                backgroundColor: "#fff",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                borderRadius: "5px",
                                marginTop: "8px",
                                zIndex: 10,
                                width: "100%",
                            }}
                        >
                            <button
                                className="dropdown-item btn btn-light text-start w-100 mb-2"
                                onClick={handleUserLogin}
                            >
                                User
                            </button>
                            <button
                                className="dropdown-item btn btn-light text-start w-100"
                                onClick={handleAdminLogin}
                            >
                                Admin
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection1;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         // level: "user", // Default role adalah user
//     });
//     const [error, setError] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(""); // Reset error sebelum proses login
//         try {
//             // Encode data ke dalam format URL-encoded
//             const formBody = new URLSearchParams(formData);

//             const response = await fetch("http://localhost:5000/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//                 body: formBody.toString(),
//             });

//             const data = await response.json();

//             if (data.success) {
//                 alert(`Sukses login sebagai ${formData.role}!`);

//                 // Arahkan ke tampilan sesuai role
//                 if (formData.level === "admin") {
//                     navigate("/admin-dashboard");
//                 } else {
//                     navigate("/beranda");
//                 }
//             } else {
//                 setError(data.message || "Terjadi kesalahan saat login.");
//             }
//         } catch (err) {
//             setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
//         }
//     };

//     return (
//         <section
//             className="hero text-white text-center py-5"
//             style={{
//                 background:
//                     "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('img/peta.jpg') no-repeat center center",
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
//                     background: "rgba(255, 255, 255, 0.9)",
//                     borderRadius: "10px",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     width: "90%",
//                     maxWidth: "400px",
//                 }}
//             >
//                 <h2 className="text-center mb-4 text-dark">Masuk</h2>
//                 {error && (
//                     <div
//                         className="alert alert-danger"
//                         style={{
//                             padding: "10px",
//                             marginBottom: "15px",
//                             borderRadius: "5px",
//                         }}
//                     >
//                         {error}
//                     </div>
//                 )}
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="form-control mb-3"
//                         style={{
//                             height: "45px",
//                             borderRadius: "5px",
//                             border: "1px solid #ccc",
//                         }}
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                         className="form-control mb-3"
//                         style={{
//                             height: "45px",
//                             borderRadius: "5px",
//                             border: "1px solid #ccc",
//                         }}
//                     />
//                     <select
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                         required
//                         className="form-select mb-4"
//                         style={{
//                             height: "45px",
//                             borderRadius: "5px",
//                         }}
//                     >
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                     <button
//                         type="submit"
//                         className="btn btn-primary w-100 mb-3"
//                         style={{
//                             height: "45px",
//                             fontSize: "16px",
//                             borderRadius: "5px",
//                             transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                         }}
//                         onMouseOver={(e) => {
//                             e.target.style.transform = "scale(1.05)";
//                             e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
//                         }}
//                         onMouseOut={(e) => {
//                             e.target.style.transform = "scale(1)";
//                             e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//                         }}
//                     >
//                         Masuk
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Login;


