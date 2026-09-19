// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function EditHotel() {
//     const { id } = useParams(); // Ambil ID hotel dari URL
//     const navigate = useNavigate();
//     const [hotel, setHotel] = useState({
//         name: "",
//         // address: "",
//         cost: "",
//         benefit: "",
//         rating: ""
//     });
//     const [turistareahotel, setTuristareahotel] = useState(null);

//     // Fetch data hotel dan area wisata
//     useEffect(() => {
//         const fetchHotelData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/hotel/${id}`);
//                 const hotelData = response.data.data;
//                 setHotel({
//                     name: hotelData.name || "",
//                     // address: hotelData.address || "",
//                     cost: hotelData.cost || "",
//                     benefit: hotelData.benefit || "",
//                     rating: hotelData.rating || ""
//                 });

//                 const areaResponse = await axios.get(`http://127.0.0.1:5000/turisareahotel/${id}`);
//                 setTuristareahotel(areaResponse.data.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchHotelData();
//     }, [id]);

//     // Handle perubahan form input
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setHotel({ ...hotel, [name]: value });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Buat FormData untuk mengirim data dalam bentuk form
//         const formData = new FormData();
//         formData.append("name", hotel.name);
//         // formData.append("address", hotel.address);
//         formData.append("cost", hotel.cost);
//         formData.append("benefit", hotel.benefit);
//         formData.append("rating", hotel.rating);
    
//         try {
//             // Pastikan menggunakan PUT (bukan GET)
//             await axios.put(`http://127.0.0.1:5000/turisareahotel/hotel/${id}/edithotel`, formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             alert("Hotel updated successfully!");
//             navigate(`/turisareahotel/`);
//         } catch (error) {
//             console.error("Error updating hotel:", error);
//             alert("Error updating hotel. Please check your input.");
//         }
//     };
    

//     return (
//         <div className="container">
//             <h2>Edit Hotel</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Hotel Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={hotel.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Cost:</label>
//                     <input
//                         type="number"
//                         name="cost"
//                         value={hotel.cost}
//                         onChange={handleChange}
//                         step="0.01"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Benefits:</label>
//                     <input
//                         type="text"
//                         name="benefit"
//                         value={hotel.benefit}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Rating:</label>
//                     <input
//                         type="number"
//                         name="rating"
//                         value={hotel.rating}
//                         onChange={handleChange}
//                         step="0.1"
//                         min="0"
//                         max="5"
//                     />
//                 </div>
//                 <button type="submit" className="btn">Update Hotel</button>
//             </form>
            
//             <br />
//             <Link to={`/turisareahotel`} className="btn">Back to Details</Link>
//         </div>
//     );
// }

// export default EditHotel;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function EditHotel() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [hotel, setHotel] = useState({
//         name: "",
//         cost: "",
//         benefit: "",
//         rating: "",
//         image_url: ""
//     });

//     useEffect(() => {
//         const fetchHotelData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/hotel/${id}`);
//                 const hotelData = response.data.data;
//                 setHotel({
//                     name: hotelData.name || "",
//                     cost: hotelData.cost || "",
//                     benefit: hotelData.benefit || "",
//                     rating: hotelData.rating || "",
//                     image_url: hotelData.image_url || ""
//                 });
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchHotelData();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setHotel({ ...hotel, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(
//                 `http://127.0.0.1:5000/turisareahotel/hotel/${id}/edithotel`,
//                 hotel
//             );
//             alert("Hotel updated successfully!");
//             navigate(`/turisareahotel/`);
//         } catch (error) {
//             console.error("Error updating hotel:", error);
//             alert("Error updating hotel.");
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Edit Hotel</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Hotel Name:</label>
//                 <input type="text" name="name" value={hotel.name} onChange={handleChange} required />
//                 <label>Cost:</label>
//                 <input type="number" name="cost" value={hotel.cost} onChange={handleChange} step="0.01" />
//                 <label>Benefits:</label>
//                 <input type="text" name="benefit" value={hotel.benefit} onChange={handleChange} />
//                 <label>Rating:</label>
//                 <input type="number" name="rating" value={hotel.rating} onChange={handleChange} step="0.1" />
//                 <label>Link Gambar Hotel:</label>
//                 <input type="text" name="image_url" value={hotel.image_url} onChange={handleChange} />
//                 <button type="submit">Update Hotel</button>
//             </form>
//             <Link to={`/turisareahotel`} className="btn">Kembali</Link>
//         </div>
//     );
// }

// export default EditHotel;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function EditHotel() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [hotel, setHotel] = useState({
//         name: "",
//         cost: "",
//         benefit: "",
//         distance: "",
//         rating: "",
//         image_url: ""
//     });

//     const [errors, setErrors] = useState(""); // State untuk error handling

//     useEffect(() => {
//         const fetchHotelData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/hotel/${id}`);
//                 const hotelData = response.data.data;

//                 setHotel({
//                     name: hotelData.name || "",
//                     cost: hotelData.cost || "",
//                     benefit: hotelData.benefit || "",
//                     distance: hotelData.distance || "",
//                     rating: hotelData.rating || "",
//                     image_url: hotelData.image_url || ""
//                 });
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 alert("Error fetching hotel data.");
//             }
//         };

//         fetchHotelData();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setHotel({ ...hotel, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validasi data sebelum dikirim
//         const { name, cost, benefit, rating, image_url } = hotel;
//         if (!name || !cost || !benefit || !distance || !rating || !image_url) {
//             alert("Semua field harus diisi!");
//             return;
//         }

//         // Menggunakan FormData untuk request.form di backend
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("cost", cost);
//         formData.append("benefit", benefit);
//         formData.append("distance", distance);
//         formData.append("rating", rating);
//         formData.append("image_url", image_url);

//         try {
//             console.log("Submitting FormData..."); // Debugging
//             await axios.put(
//                 `http://127.0.0.1:5000/turisareahotel/hotel/${id}/edithotel`,
//                 formData, // Kirim sebagai FormData
//                 {
//                     headers: { "Content-Type": "multipart/form-data" } // Penting!
//                 }
//             );

//             alert("Hotel updated successfully!");
//             navigate(`/turisareahotel/`);
//         } catch (error) {
//             console.error("Error updating hotel:", error);

//             // Tampilkan error server
//             if (error.response) {
//                 console.error("Response Error:", error.response.data);
//                 setErrors(error.response.data.message || "An error occurred.");
//                 alert(`Error updating hotel: ${error.response.data.message || "Bad Request"}`);
//             } else {
//                 alert("Error updating hotel.");
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Edit Hotel</h2>
//             {errors && <p style={{ color: "red" }}>{errors}</p>}

//             <form onSubmit={handleSubmit}>
//                 <label>Hotel Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={hotel.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Harga :</label>
//                 <input
//                     type="number"
//                     name="cost"
//                     value={hotel.cost}
//                     onChange={handleChange}
//                     step="0.01"
//                     required
//                 />

//                 <label>Fasilitas:</label>
//                 <input
//                     type="text"
//                     name="benefit"
//                     value={hotel.benefit}
//                     onChange={handleChange}
//                     required
//                 />
//                 <label>Jarak (KM) :</label>
//                 <input
//                     type="text"
//                     distance="distance"
//                     value={hotel.distance}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Bintang:</label>
//                 <input
//                     type="number"
//                     name="rating"
//                     value={hotel.rating}
//                     onChange={handleChange}
//                     step="0.1"
//                     required
//                 />

//                 <label>Link Gambar Hotel:</label>
//                 <input
//                     type="text"
//                     name="image_url"
//                     value={hotel.image_url}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">Update Hotel</button>
//             </form>

//             <Link to={`/turisareahotel`} className="btn">
//                 Kembali
//             </Link>
//         </div>
//     );
// }

// export default EditHotel;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function EditHotel() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [hotel, setHotel] = useState({
//         name: "",
//         cost: "",
//         benefit: "",
//         distance: "",
//         rating: "",
//         image_url: ""
//     });

//     const [errors, setErrors] = useState(""); // State untuk error handling

//     useEffect(() => {
//         const fetchHotelData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/hotel/${id}`);
//                 const hotelData = response.data.data;

//                 setHotel({
//                     name: hotelData.name || "",
//                     cost: hotelData.cost || "",
//                     benefit: hotelData.benefit || "",
//                     distance: hotelData.distance || "",
//                     rating: hotelData.rating || "",
//                     image_url: hotelData.image_url || ""
//                 });
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 alert("Error fetching hotel data.");
//             }
//         };

//         fetchHotelData();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setHotel({ ...hotel, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validasi data sebelum dikirim
//         const { name, cost, benefit, distance, rating, image_url } = hotel;
//         if (!name || !cost || !benefit || !distance || !rating || !image_url) {
//             alert("Semua field harus diisi!");
//             return;
//         }

//         // Menggunakan FormData untuk request.form di backend
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("cost", cost);
//         formData.append("benefit", benefit);
//         formData.append("distance", distance);
//         formData.append("rating", rating);
//         formData.append("image_url", image_url);

//         try {
//             console.log("Submitting FormData..."); // Debugging
//             await axios.put(
//                 `http://127.0.0.1:5000/turisareahotel/hotel/${id}/edithotel`,
//                 formData, // Kirim sebagai FormData
//                 {
//                     headers: { "Content-Type": "multipart/form-data" } // Penting!
//                 }
//             );

//             alert("Hotel updated successfully!");
//             navigate(`/turisareahotel/`);
//         } catch (error) {
//             console.error("Error updating hotel:", error);

//             // Tampilkan error server
//             if (error.response) {
//                 console.error("Response Error:", error.response.data);
//                 setErrors(error.response.data.message || "An error occurred.");
//                 alert(`Error updating hotel: ${error.response.data.message || "Bad Request"}`);
//             } else {
//                 alert("Error updating hotel.");
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Edit Hotel</h2>
//             {errors && <p style={{ color: "red" }}>{errors}</p>}

//             <form onSubmit={handleSubmit}>
//                 <label>Hotel Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={hotel.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Harga :</label>
//                 <input
//                     type="number"
//                     name="cost"
//                     value={hotel.cost}
//                     onChange={handleChange}
//                     step="0.01"
//                     required
//                 />

//                 <label>Fasilitas:</label>
//                 <input
//                     type="text"
//                     name="benefit"
//                     value={hotel.benefit}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Jarak (KM) :</label>
//                 <input
//                     type="number"
//                     name="distance"  
//                     value={hotel.distance}
//                     onChange={handleChange}
//                     required
//                     step="0.1" 
//                 />

//                 <label>Bintang:</label>
//                 <input
//                     type="number"
//                     name="rating"
//                     value={hotel.rating}
//                     onChange={handleChange}
//                     step="0.1"
//                     required
//                 />

//                 <label>Link Gambar Hotel:</label>
//                 <input
//                     type="text"
//                     name="image_url"
//                     value={hotel.image_url}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">Update Hotel</button>
//             </form>

//             <Link to={`/turisareahotel`} className="btn">
//                 Kembali
//             </Link>
//         </div>
//     );
// }

// export default EditHotel;


// fixxx
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function EditHotel() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [hotel, setHotel] = useState({
//         name: "",
//         cost: "",
//         benefit: "",
//         distance: "",
//         rating: "",
//         image_url: ""
//     });

//     const [errors, setErrors] = useState(""); // State untuk error handling

//     useEffect(() => {
//         const fetchHotelData = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/hotel/${id}`);
//                 const hotelData = response.data.data;

//                 setHotel({
//                     name: hotelData.name || "",
//                     cost: hotelData.cost || "",
//                     benefit: hotelData.benefit || "",
//                     distance: hotelData.distance || "",
//                     rating: hotelData.rating || "",
//                     image_url: hotelData.image_url || ""
//                 });
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 alert("Error fetching hotel data.");
//             }
//         };

//         fetchHotelData();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setHotel({ ...hotel, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validasi data sebelum dikirim
//         const { name, cost, benefit, rating, image_url, distance } = hotel;
//         if (!name || !cost || !benefit || !distance || !rating || !image_url) {
//             alert("Semua field harus diisi!");
//             return;
//         }

//         // Menggunakan FormData untuk request.form di backend
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("cost", cost);
//         formData.append("benefit", benefit);
//         formData.append("distance", distance);
//         formData.append("rating", rating);
//         formData.append("image_url", image_url);

//         try {
//             console.log("Submitting FormData..."); // Debugging
//             await axios.put(
//                 `http://127.0.0.1:5000/turisareahotel/hotel/${id}/edithotel`,
//                 formData, // Kirim sebagai FormData
//                 {
//                     headers: { "Content-Type": "multipart/form-data" } // Penting!
//                 }
//             );

//             alert("Hotel updated successfully!");
//             navigate(`/turisareahotel/`);
//         } catch (error) {
//             console.error("Error updating hotel:", error);
//             setErrors("Terjadi kesalahan saat mengupdate hotel.");
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Edit Hotel</h2>
//             {errors && <p style={{ color: "red" }}>{errors}</p>}

//             <form onSubmit={handleSubmit}>
//                 <label>Hotel Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={hotel.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Harga :</label>
//                 <input
//                     type="number"
//                     name="cost"
//                     value={hotel.cost}
//                     onChange={handleChange}
//                     step="0.01"
//                     required
//                 />

//                 <label>Fasilitas:</label>
//                 <input
//                     type="text"
//                     name="benefit"
//                     value={hotel.benefit}
//                     onChange={handleChange}
//                     required
//                 />
//                 <label>Jarak (KM) :</label>
//                 <input
//                     type="number"
//                     name="distance"
//                     value={hotel.distance}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Hotel Bintang:</label>
//                 <input
//                     type="number"
//                     name="rating"
//                     value={hotel.rating}
//                     onChange={handleChange}
//                     step="0.1"
//                     required
//                 />

//                 <label>Link Gambar Hotel:</label>
//                 <input
//                     type="text"
//                     name="image_url"
//                     value={hotel.image_url}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">Update Hotel</button>
//             </form>

//             <Link to={`/turisareahotel`} className="btn">
//                 Kembali
//             </Link>
//         </div>
//     );
// }

// export default EditHotel;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditHotel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState({
        name: "",
        cost: "",
        benefit: "",
        distance: "",
        rating: "",
        image_url: "",
        hotel_url: ""
    });

    const [errors, setErrors] = useState(""); // State untuk error handling

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/turisareahotel/hotel/${id}`);
                const hotelData = response.data.data;

                setHotel({
                    name: hotelData.name || "",
                    cost: hotelData.cost || "",
                    benefit: hotelData.benefit || "",
                    distance: hotelData.distance || "",
                    rating: hotelData.rating || "",
                    image_url: hotelData.image_url || "",
                    hotel_url : hotelData.hotel_url || ""
                });
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Error fetching hotel data.");
            }
        };

        fetchHotelData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel({ ...hotel, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, cost, benefit, rating, image_url, distance ,hotel_url} = hotel;
        if (!name || !cost || !benefit || !distance || !rating || !image_url || !hotel_url) {
            alert("Semua field harus diisi!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("cost", cost);
        formData.append("benefit", benefit);
        formData.append("distance", distance);
        formData.append("rating", rating);
        formData.append("image_url", image_url);
        formData.append("hotel_url", hotel_url);

        try {
            console.log("Submitting FormData...");
            await axios.put(
                `http://127.0.0.1:5000/turisareahotel/hotel/${id}/edithotel`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                }
            );

            alert("Hotel updated successfully!");
            navigate(`/turisareahotel/`);
        } catch (error) {
            console.error("Error updating hotel:", error);
            setErrors("Terjadi kesalahan saat mengupdate hotel.");
        }
    };

    return (
        <div className="container" style={{ maxWidth: "600px", margin: "auto", padding: "20px", background: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Edit Hotel</h2>
            {errors && <p style={{ color: "red", textAlign: "center" }}>{errors}</p>}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <label>Hotel Name:</label>
                <input
                    type="text"
                    name="name"
                    value={hotel.name}
                    onChange={handleChange}
                    required
                    style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                <label>Harga :</label>
                <input
                    type="number"
                    name="cost"
                    value={hotel.cost}
                    onChange={handleChange}
                    step="0.01"
                    required
                    style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                <label>Fasilitas:</label>
                <input
                    type="text"
                    name="benefit"
                    value={hotel.benefit}
                    onChange={handleChange}
                    required
                    style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                <label>Jarak (KM) :</label>
                <input
                    type="number"
                    name="distance"
                    value={hotel.distance}
                    onChange={handleChange}
                    required
                    style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                <label>Hotel Bintang:</label>
                <input
                    type="number"
                    name="rating"
                    value={hotel.rating}
                    onChange={handleChange}
                    step="0.1"
                    required
                    style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                <label>Website Hotel:</label>
                <input
                    type="text"
                    name="hotel_url"
                    value={hotel.hotel_url}
                    onChange={handleChange}
                    required
                    style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                <label>Link Gambar Hotel:</label>
                <input
                    type="text"
                    name="image_url"
                    value={hotel.image_url}
                    onChange={handleChange}
                    required
                    style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                <button type="submit" style={{ padding: "10px 20px", background: "#28a745", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Update Hotel
                </button>
            </form>

            <Link to={`/turisareahotel`} style={{ display: "block", marginTop: "20px", textAlign: "center", textDecoration: "none", color: "#fff", background: "#6c757d", padding: "10px 20px", borderRadius: "4px" }}>
                Kembali
            </Link>
        </div>
    );
}

export default EditHotel;
