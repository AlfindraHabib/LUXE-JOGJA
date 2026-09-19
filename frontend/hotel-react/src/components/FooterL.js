import React from "react";

const FooterL = () => {
    return (
        <FooterContainer>
            <FooterRow>
                <FooterColumn title="About Us">
                    <FooterText>Menyediakan berbagai pilihan Hotel berkualitas di Yogyakarta dengan informasi yang lengkap dan akurat.</FooterText>
                </FooterColumn>
                <FooterColumn title="Quick Links">
                    <FooterLinks>
                        <FooterLink href="/beranda">Beranda</FooterLink>
                        <FooterLink href="/hotelsearch">Hotel & Home</FooterLink>
                    </FooterLinks>
                </FooterColumn>
                <FooterColumn title="Contact">
                    <FooterText>Email: luxejogja@gmail.com</FooterText>
                </FooterColumn>
            </FooterRow>
        </FooterContainer>
    );
};

const FooterContainer = ({ children }) => (
    <footer className="bg-dark text-white py-4">
        <div className="container">
            {children}
        </div>
    </footer>
);

const FooterRow = ({ children }) => (
    <div className="row">
        {children}
    </div>
);

const FooterColumn = ({ title, children }) => (
    <div className="col-md-4">
        <h5>{title}</h5>
        {children}
    </div>
);

const FooterText = ({ children }) => (
    <p>{children}</p>
);

const FooterLinks = ({ children }) => (
    <ul className="list-unstyled">
        {children}
    </ul>
);

const FooterLink = ({ href, children }) => (
    <li>
        <a href={href} className="text-white text-decoration-none">{children}</a>
    </li>
);

export default FooterL;