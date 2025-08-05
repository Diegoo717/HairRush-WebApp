import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/home/main-container/MainContainer";
import SpecialPackagesSection from "../components/home/sections/specialPackagesSection-section/SpecialPckagesSection"
import PopularStylesSection from "../components/home/sections/popularStyles-section/PopularStylesSection"    

function Home() {
    return (
        <>
            <NavBar />
            <MainContainer />
            <SpecialPackagesSection />
            <PopularStylesSection/>
        </>
    );
}

export default Home;