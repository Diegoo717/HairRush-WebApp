import NavBar from "../components/nav-bar";
import MainContainer from "../components/main-container/mainContainer";
import SpecialPackagesSection from "../components/specialPackagesSection-section/SpecialPckagesSection"

function Home() {
    return (
        <>
            <NavBar />
            <MainContainer />
            <SpecialPackagesSection />
        </>
    );
}

export default Home;