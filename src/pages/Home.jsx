import NavBar from "../components/nav-bar";
import MainContainer from "../components/main-container/mainContainer";
import SpecialPackagesSection from "../components/specialPackagesSection-section/SpecialPckagesSection"
import PopularStylesSection from "../components/popularStyles-section/PopularStylesSection"    

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