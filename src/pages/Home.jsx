import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/home/main/main-container/MainContainer";
import SpecialPackagesSection from "../components/home/sections/specialPackagesSection-section/SpecialPckagesSection"
import PopularStylesSection from "../components/home/sections/popularStyles-section/PopularStylesSection"  
import OurTeamSection from "../components/home/sections/ourTeam-section/OurTeamSection";  
import BookAppointmentSection from "../components/home/sections/bookAppoinment-section/BookAppoinmentSection";
import Footer from "../components/navigation/footer/Footer";

function Home() {
    return (
        <>
            <NavBar />
            <MainContainer />
            <SpecialPackagesSection />
            <PopularStylesSection/>
            <OurTeamSection />
            <BookAppointmentSection />
            <Footer />
        </>
    );
}

export default Home;