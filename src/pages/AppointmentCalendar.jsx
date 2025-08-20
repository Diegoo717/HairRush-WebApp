import NavBar from "../components/navigation/nav-bar";
import MainContainer from "../components/appoinmentCalendar/main/MainContainer";
import Footer from "../components/navigation/footer/Footer"

function AppointmentCalendar() {
    return(
        <>
        <NavBar page="appointment-calendar"/>
        <MainContainer />
        <Footer />
        </>
    )
}

export default AppointmentCalendar;