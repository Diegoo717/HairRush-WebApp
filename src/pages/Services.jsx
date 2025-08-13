import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/services/mainContainer/MainContainer";
import Footer from "../components/navigation/footer/Footer";

function Services() {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('ready SEO:', document.title);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Servicios - HairRush | Cortes de cabello, afeitado y arreglo de barba</title>
                <meta name="description" content="Descubre todos los servicios profesionales de HairRush: cortes de cabello modernos y clásicos, afeitado tradicional con navaja, arreglo de barba y grooming masculino. Calidad y estilo garantizados." />
                <meta name="keywords" content="servicios barbería, cortes de cabello hombre, afeitado clásico navaja, arreglo barba profesional, grooming masculino, barbero profesional, cortes modernos, HairRush servicios, barbería premium" />
                <meta name="author" content="HairRush" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hairrush.diecode.lat/services" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Servicios - HairRush | Cortes, afeitado y grooming profesional" />
                <meta property="og:description" content="Servicios profesionales de barbería: cortes de cabello, afeitado clásico, arreglo de barba y grooming masculino de la más alta calidad." />
                <meta property="og:image" content="./src/assets/logo.png" />
                <meta property="og:url" content="https://hairrush.diecode.lat/services" />
                <meta property="og:site_name" content="HairRush" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Servicios - HairRush | Barbería profesional" />
                <meta name="twitter:description" content="Servicios de barbería profesional: cortes, afeitado y grooming masculino." />
                <meta name="twitter:image" content="./src/assets/logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Servicios - HairRush",
                        "description": "Página de servicios profesionales de barbería HairRush",
                        "url": "https://hairrush.diecode.lat/services",
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
                                "name": "Catálogo de Servicios HairRush",
                                "description": "Servicios profesionales de barbería y grooming masculino",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "name": "Corte de Cabello Clásico",
                                        "description": "Cortes tradicionales y atemporales realizados por barberos expertos",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Corte de Cabello Clásico",
                                            "serviceType": "Corte de cabello",
                                            "provider": {
                                                "@type": "LocalBusiness",
                                                "name": "HairRush"
                                            }
                                        },
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "priceCurrency": "MXN",
                                            "price": "150"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "Corte de Cabello Moderno",
                                        "description": "Cortes contemporáneos y tendencias actuales adaptadas a tu estilo",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Corte de Cabello Moderno",
                                            "serviceType": "Corte de cabello",
                                            "provider": {
                                                "@type": "LocalBusiness",
                                                "name": "HairRush"
                                            }
                                        },
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "priceCurrency": "MXN",
                                            "price": "180"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "Afeitado Clásico",
                                        "description": "Afeitado tradicional con navaja, toallas calientes y productos premium",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Afeitado Clásico",
                                            "serviceType": "Afeitado",
                                            "provider": {
                                                "@type": "LocalBusiness",
                                                "name": "HairRush"
                                            }
                                        },
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "priceCurrency": "MXN",
                                            "price": "120"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "Arreglo de Barba",
                                        "description": "Diseño, recorte y mantenimiento profesional de barba",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Arreglo de Barba",
                                            "serviceType": "Grooming",
                                            "provider": {
                                                "@type": "LocalBusiness",
                                                "name": "HairRush"
                                            }
                                        },
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "priceCurrency": "MXN",
                                            "price": "100"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "Paquete Completo",
                                        "description": "Corte de cabello + arreglo de barba + afeitado de cuello",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Paquete Completo",
                                            "serviceType": "Grooming completo",
                                            "provider": {
                                                "@type": "LocalBusiness",
                                                "name": "HairRush"
                                            }
                                        },
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "priceCurrency": "MXN",
                                            "price": "250"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "Tratamiento Capilar",
                                        "description": "Tratamiento hidratante y fortalecedor para el cabello",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Tratamiento Capilar",
                                            "serviceType": "Cuidado capilar",
                                            "provider": {
                                                "@type": "LocalBusiness",
                                                "name": "HairRush"
                                            }
                                        },
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "priceCurrency": "MXN",
                                            "price": "80"
                                        }
                                    }
                                ]
                            }
                        },
                        "mainEntity": {
                            "@type": "ItemList",
                            "name": "Servicios de Barbería HairRush",
                            "description": "Lista completa de servicios profesionales disponibles",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "item": {
                                        "@type": "Service",
                                        "name": "Cortes de Cabello",
                                        "description": "Cortes clásicos y modernos personalizados"
                                    }
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "item": {
                                        "@type": "Service",
                                        "name": "Afeitado Profesional",
                                        "description": "Afeitado tradicional con navaja y productos premium"
                                    }
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "item": {
                                        "@type": "Service",
                                        "name": "Grooming y Barba",
                                        "description": "Arreglo profesional y diseño de barba"
                                    }
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <NavBar />
            <MainContainer />
            <Footer />
        </>
    );
}

export default Services;