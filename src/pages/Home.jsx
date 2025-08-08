import { Helmet } from 'react-helmet-async';
import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/home/main/main-container/MainContainer";
import SpecialPackagesSection from "../components/home/sections/specialPackagesSection-section/SpecialPckagesSection";
import PopularStylesSection from "../components/home/sections/popularStyles-section/PopularStylesSection";
import OurTeamSection from "../components/home/sections/ourTeam-section/OurTeamSection";
import BookAppointmentSection from "../components/home/sections/bookAppoinment-section/BookAppoinmentSection";
import Footer from "../components/navigation/footer/Footer";

function Home() {
    return (
        <>
            <Helmet>
                <title>HairRush - Agenda tu cita con nosotros al instante | Reservas rápidas</title>
                <meta name="description" content="La forma más rápida de agendar tu cita en barbería. Cortes profesionales, servicios de grooming y atención personalizada. ¡Reserva en segundos!" />
                <meta name="keywords" content="HairRush, barbería, agendar cita barbería, reservar corte cabello, barber shop online, citas rápidas barbería, grooming masculino, cortes modernos" />
                <meta name="author" content="HairRush" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hairrush.diecode.lat" />
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content="HairRush - Agenda tu cita en barbería al instante" />
                <meta property="og:description" content="La forma más rápida de agendar tu cita en barbería. Cortes profesionales y atención personalizada." />
                <meta property="og:image" content="./src/assets/logo.png" />
                <meta property="og:url" content="https://hairrush.com" />
                <meta property="og:site_name" content="HairRush" />
                <meta property="og:locale" content="es_ES" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="HairRush - Agenda tu cita en barbería al instante" />
                <meta name="twitter:description" content="La forma más rápida de agendar tu cita en barbería." />
                <meta name="twitter:image" content="./src/assets/logo.png" />
                
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "HairRush",
                        "description": "Aplicación de agendamiento de citas para barberías",
                        "url": "https://hairrush.com",
                        "serviceType": "Barbería",
                        "priceRange": "$$",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Servicios de Barbería",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Corte de Cabello",
                                        "description": "Cortes modernos y clásicos"
                                    }
                                },
                                {
                                    "@type": "Offer", 
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Afeitado",
                                        "description": "Afeitado clásico profesional"
                                    }
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <NavBar />
            <MainContainer />
            <SpecialPackagesSection />
            <PopularStylesSection />
            <OurTeamSection />
            <BookAppointmentSection />
            <Footer />
        </>
    );
}

export default Home;