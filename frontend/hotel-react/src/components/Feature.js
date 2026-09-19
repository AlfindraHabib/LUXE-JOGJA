import React from "react";
// import { useNavigate } from 'react-router-dom';

const Feature = () => {
    return (
        <FeatureContainer>
            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                <SectionOne>
                    <SectionOneContent>
                        <SectionTitle>Apa itu LUXE JOGJA?</SectionTitle>
                        <SectionDescription>
                            Menyediakan berbagai pilihan Hotel berkualitas di Yogyakarta dengan informasi yang lengkap dan akurat.
                        </SectionDescription>
                    </SectionOneContent>
                    <SectionImage src="img/logo1.png" alt="Luxe Jogja" />
                </SectionOne>
            </div>

            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="800">
                <SectionTwo>
                    <SectionTwoImage src="img/malioboro.jpg" alt="Jalan Malioboro" />
                    <SectionTwoContent>
                        <SectionTwoTitle>Wisata terdekat Anda?</SectionTwoTitle>
                        <SectionTwoDescription>
                            Kini, Anda tidak perlu khawatir akan jarak atau waktu tempuh karena semuanya dirancang untuk memberikan pengalaman menginap yang praktis dan memuaskan.
                        </SectionTwoDescription>
                        {/* Tidak ada tombol klik */}
                    </SectionTwoContent>
                </SectionTwo>
            </div>
        </FeatureContainer>
    );
};

const FeatureContainer = ({ children }) => (
    <div>{children}</div>
);

const SectionOne = ({ children }) => (
    <div className="container mt-5 p-4" style={{ backgroundColor: '#e3f2fd', borderRadius: '15px' }}>
        <div className="row align-items-center">
            {children}
        </div>
    </div>
);

const SectionOneContent = ({ children }) => (
    <div className="col-12 col-md-6 text-center text-md-start">
        {children}
    </div>
);

const SectionTitle = ({ children }) => (
    <h2 className="fw-bold">{children}</h2>
);

const SectionDescription = ({ children }) => (
    <p className="text-muted">{children}</p>
);

const SectionImage = ({ src, alt }) => (
    <div className="col-12 col-md-6 text-center">
        <img src={src} alt={alt} className="img-fluid" style={{ maxWidth: '150px', borderRadius: '10px' }} />
    </div>
);

const SectionTwo = ({ children }) => (
    <div className="container mt-5">
        <div className="row align-items-center">
            {children}
        </div>
    </div>
);

const SectionTwoImage = ({ src, alt }) => (
    <div className="col-12 col-md-4 text-center mb-3 mb-md-4">
        <img src={src} alt={alt} className="img-fluid rounded" />
    </div>
);

const SectionTwoContent = ({ children }) => (
    <div className="col-12 col-md-7 text-center text-md-start">
        {children}
    </div>
);

const SectionTwoTitle = ({ children }) => (
    <h3 className="fw-bold">{children}</h3>
);

const SectionTwoDescription = ({ children }) => (
    <p className="text-muted">{children}</p>
);

export default Feature;