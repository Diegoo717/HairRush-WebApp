import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/contactInformation/main/mainContainer";
import Footer from "../components/navigation/footer/Footer";

function ContactInformation() {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('SEO aplicado:', document.title);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Contacto - HairRush | Ubicación, teléfono y horarios de atención</title>
                <meta name="description" content="Encuentra nuestra ubicación, horarios de atención, número de teléfono y dirección de HairRush barbería. ¡Contáctanos para más información sobre nuestros servicios!" />
                <meta name="keywords" content="HairRush contacto, ubicación barbería, teléfono barbería, dirección HairRush, horarios barbería, contactar barbero, información barbería, mapa ubicación" />
                <meta name="author" content="HairRush" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hairrush.diecode.lat/contact-information" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contacto - HairRush | Ubicación y información de contacto" />
                <meta property="og:description" content="Encuentra nuestra ubicación, horarios de atención y toda la información de contacto de HairRush barbería." />
                <meta property="og:image" content="./src/assets/logo.png" />
                <meta property="og:url" content="https://hairrush.diecode.lat/contact" />
                <meta property="og:site_name" content="HairRush" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contacto - HairRush | Ubicación y información" />
                <meta name="twitter:description" content="Encuentra nuestra ubicación, horarios y contacto de HairRush barbería." />
                <meta name="twitter:image" content="./src/assets/logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "HairRush",
                        "description": "Barbería profesional con servicios de corte, afeitado y grooming masculino",
                        "url": "https://hairrush.diecode.lat",
                        "serviceType": "Barbería",
                        "priceRange": "$$",
                        "telephone": "+52-XXX-XXX-XXXX", 
                        "email": "contacto@hairrush.com", 
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Tu dirección aquí", 
                            "addressLocality": "Tu ciudad",
                            "addressRegion": "Tu estado/región",
                            "postalCode": "Tu código postal",
                            "addressCountry": "MX"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "XX.XXXXX", 
                            "longitude": "-XX.XXXXX" 
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "19:00"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Saturday",
                                "opens": "09:00",
                                "closes": "17:00"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Sunday",
                                "opens": "10:00",
                                "closes": "15:00"
                            }
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Servicios de Barbería",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Corte de Cabello",
                                        "description": "Cortes modernos y clásicos profesionales"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Afeitado Clásico",
                                        "description": "Afeitado profesional con navaja"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Arreglo de Barba",
                                        "description": "Diseño y mantenimiento profesional de barba"
                                    }
                                }
                            ]
                        },
                        "sameAs": [
                            "https://www.facebook.com/hairrush", 
                            "https://www.instagram.com/hairrush",
                            "https://www.tiktok.com/@hairrush"
                        ]
                    })}
                </script>
            </Helmet>

            <NavBar />
            <MainContainer />
            <Footer />
        </>
    );
}

export default ContactInformation;