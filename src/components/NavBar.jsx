import "../styles/NavBar.css";
import "../styles/responsive/NavBar.css"

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div className="title-image-container">
          <img id="logo" src="src\assets\Logo.png" alt="" />
          <h1 className="h1-div-navBar">HairRush</h1>
        </div>
        <div className="div2-navBar">
          <div className="div-div2-navBar">
            <span class="material-symbols-outlined">content_cut</span>
            <h3>Servicios</h3>
          </div>
          <div className="div-div2-navBar">
            <span class="material-symbols-outlined">calendar_clock</span>
            <h3>Calendario de citas</h3>
          </div>
          <div className="div-div2-navBar">
            <span class="material-symbols-outlined">3p</span>
            <h3>Información de contacto</h3>
          </div>
          <div className="div-div2-navBar">
            <span class="material-symbols-outlined">favorite</span>
            <h3>¿Porqué HairRush?</h3>
          </div>
        </div>
      </nav>
    </>
  );
}
