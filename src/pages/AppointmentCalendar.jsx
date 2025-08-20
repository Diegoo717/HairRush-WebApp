import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/appoinmentCalendar/main/MainContainer";
import Footer from "../components/navigation/footer/Footer";

function AppointmentCalendar() {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('ready SEO:', document.title);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Calendario de Citas - HairRush | Consulta fechas y horarios disponibles</title>
                <meta name="description" content="Agenda tu cita en HairRush de forma rápida y sencilla. Selecciona fecha, hora y barbero de tu preferencia. Sistema de reservas online 24/7 para tu comodidad." />
                <meta name="keywords" content="calendario citas barbería, agendar cita online, reservar barbero, calendario HairRush, citas barbería online, booking barbería, agenda cita cabello, reservas barbero profesional" />
                <meta name="author" content="HairRush" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hairrush.diecode.lat/appointment-calendar" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Calendario de Citas - HairRush | Reserva tu cita de barbería" />
                <meta property="og:description" content="Sistema de reservas online para agendar tu cita en HairRush. Elige tu fecha, hora y barbero favorito de forma rápida y segura." />
                <meta property="og:image" content="./src/assets/logo.png" />
                <meta property="og:url" content="https://hairrush.diecode.lat/appointment-calendar" />
                <meta property="og:site_name" content="HairRush" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Calendario de Citas - HairRush" />
                <meta name="twitter:description" content="Agenda tu cita de barbería online de forma rápida y sencilla." />
                <meta name="twitter:image" content="./src/assets/logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Calendario de Citas - HairRush",
                        "description": "Sistema de reservas online para agendar citas en barbería HairRush",
                        "url": "https://hairrush.diecode.lat/appointment-calendar",
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
                            "description": "Barbería profesional con sistema de reservas online",
                            "url": "https://hairrush.diecode.lat",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Servicios Disponibles para Reserva",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Corte de Cabello",
                                            "description": "Cortes profesionales con cita previa"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Afeitado Clásico",
                                            "description": "Afeitado profesional con reserva online"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Arreglo de Barba",
                                            "description": "Grooming profesional con cita programada"
                                        }
                                    }
                                ]
                            }
                        },
                        "mainEntity": {
                            "@type": "WebApplication",
                            "name": "Sistema de Reservas HairRush",
                            "description": "Aplicación web para agendar citas de barbería online",
                            "applicationCategory": "BookingApplication",
                            "operatingSystem": "Web Browser",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "MXN",
                                "description": "Uso gratuito del sistema de reservas"
                            },
                            "featureList": [
                                "Selección de fecha y hora",
                                "Elección de barbero",
                                "Selección de servicio",
                                "Confirmación instantánea",
                                "Recordatorios automáticos"
                            ]
                        },
                        "potentialAction": {
                            "@type": "ReserveAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://hairrush.diecode.lat/appointment-calendar",
                                "actionPlatform": [
                                    "http://schema.org/DesktopWebPlatform",
                                    "http://schema.org/MobileWebPlatform"
                                ]
                            },
                            "result": {
                                "@type": "Reservation",
                                "name": "Cita de Barbería"
                            }
                        }
                    })}
                </script>
            </Helmet>

            <NavBar page="appointment-calendar"/>
            <MainContainer />
            <Footer />
        </>
    );
}

export default AppointmentCalendar;