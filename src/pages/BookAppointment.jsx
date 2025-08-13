import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/BookAppointment/main/MainContainer";
import Footer from "../components/navigation/footer/Footer";


export default function BookAppointment() {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('ready SEO:', document.title);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Agendar Cita - HairRush | Reserva tu corte de cabello online</title>
                <meta name="description" content="Agenda tu cita en HairRush de forma rápida y sencilla. Selecciona tu barbero, horario y servicio preferido. ¡Reserva tu corte de cabello ahora!" />
                <meta name="keywords" content="agendar cita barbería, reservar corte cabello online, cita barbero, booking barbería, HairRush reservas, agendar corte pelo, cita online barbería" />
                <meta name="author" content="HairRush" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hairrush.diecode.lat/book-appointment" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Agendar Cita - HairRush | Reserva tu corte online" />
                <meta property="og:description" content="Agenda tu cita en HairRush de forma rápida y sencilla. Selecciona tu barbero, horario y servicio preferido." />
                <meta property="og:image" content="./src/assets/logo.png" />
                <meta property="og:url" content="https://hairrush.diecode.lat/book-appointment" />
                <meta property="og:site_name" content="HairRush" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Agendar Cita - HairRush | Reserva tu corte online" />
                <meta name="twitter:description" content="Agenda tu cita en HairRush de forma rápida y sencilla." />
                <meta name="twitter:image" content="./src/assets/logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Agendar Cita - HairRush",
                        "description": "Página para agendar citas en HairRush barbería",
                        "url": "https://hairrush.diecode.lat/book-appointment",
                        "isPartOf": {
                            "@type": "WebSite",
                            "name": "HairRush",
                            "url": "https://hairrush.diecode.lat"
                        },
                        "about": {
                            "@type": "LocalBusiness",
                            "name": "HairRush",
                            "@id": "https://hairrush.diecode.lat",
                            "serviceType": "Barbería",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Servicios de Barbería Disponibles",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Corte de Cabello",
                                            "description": "Cortes modernos y clásicos personalizados"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Afeitado Profesional",
                                            "description": "Afeitado clásico con navaja"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Arreglo de Barba",
                                            "description": "Diseño y mantenimiento de barba"
                                        }
                                    }
                                ]
                            }
                        },
                        "mainEntity": {
                            "@type": "ReservationService",
                            "name": "Sistema de Reservas HairRush",
                            "description": "Servicio online para agendar citas en barbería",
                            "provider": {
                                "@type": "LocalBusiness",
                                "name": "HairRush"
                            }
                        }
                    })}
                </script>
            </Helmet>

            <NavBar />
            <MainContainer />
            <Footer></Footer>
        </>
    );
}