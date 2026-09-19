// import React from "react";
// import { Link } from "react-router-dom";

// class Landing extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1>Yogyakarta ku</h1>
//                 <div className="center">
//                     <img
//                     src="https://i.pinimg.com/236x/7b/11/81/7b1181fe7eb73ffa639e7c88b098185e.jpg"
//                     alt="logo" width={350} />
//                 </div>
//                 <br />
//                 <div className="center">
//                     <Link to="/turisareahotel" className="btn">Area Wisata</Link>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Landing;


// import React from "react";
// import { Link } from "react-router-dom";
// import '../styles/Landing.css';


// class Landing extends React.Component {
//     render() {
//         return (
//             <div className="landing-container">
//                 <div className="landing-content">
//                     <h1 className="landing-title">Selamat Datang Di Admin Luxe Yogya</h1>
//                     <p className="landing-description">
//                         Temukan berbagai area wisata menarik di Yogyakarta dan rencanakan perjalanan Anda sekarang!
//                     </p>
//                     <Link to="/turisareahotel" className="landing-btn">Mulai Jelajah</Link>
//                 </div>
//                 <div className="landing-image">
//                     <img
//                         src="https://i.ibb.co.com/vLzPw3y/logo-luxe.png"
//                         alt="logo" 
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Landing;



import React from "react";
import { Link } from "react-router-dom";
// import '../styles/Landing.css';
// import '../styles/styles.css'


class AdminLanding extends React.Component {
    render() {
        return (
            <div className="landing-container">
                <div className="landing-content">
                    <h1 className="landing-title">Selamat Datang di Admin Luxe Yogya</h1>
                    <p className="landing-description">
                        Kelola area wisata dan hotel di Yogyakarta dari sini!
                    </p>
                    <Link to="/turisareahotel" className="landing-btn">Kelola Area Wisata</Link>
                </div>
                <div className="landing-image">
                    <img
                        src="https://i.ibb.co.com/vLzPw3y/logo-luxe.png"
                        alt="logo" 
                    />
                </div>
            </div>
        );
    }
}

export default AdminLanding;

// src/components/AdminLanding.js
// import React from "react";
// import { Link } from "react-router-dom";
// import '../styles/Landing.css';

// class AdminLanding extends React.Component {
//     render() {
//         return (
//             <div className="landing-container">
//                 <div className="landing-content">
//                     <h1 className="landing-title">Selamat Datang di Admin Luxe Yogya</h1>
//                     <p className="landing-description">
//                         Kelola area wisata dan hotel di Yogyakarta dari sini!
//                     </p>
//                     <Link to="/login" className="landing-btn">Login</Link>
//                     <Link to="/register" className="landing-btn">Registrasi</Link>
//                 </div>
//                 <div className="landing-image">
//                     <img
//                         src="https://i.ibb.co/vLzPw3y/logo-luxe.png"
//                         alt="logo" 
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

// export default AdminLanding;