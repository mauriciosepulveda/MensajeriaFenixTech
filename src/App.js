import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/*<!-- Navbar Brand-->*/}
            <Link to="/index" className="navbar-brand ps-3">Mensajeria Fenix Tech</Link>
            {/*<!-- Sidebar Toggle-->*/}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            {/*<!-- Navbar Search-->*/}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            {/*<!-- Navbar-->*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <Link to="/Profile" className="dropdown-item">Editar Perfil</Link>
                        <li><hr className="dropdown-divider" /></li>
                        <Link to="/Login" className="dropdown-item">Cerrar sesión</Link>
                    </ul>
                </li>
            </ul>
        </nav>
    <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Cliente</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Envios
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link to="/Delivery1" className="nav-link">Solicitud</Link>
                                    <Link to="/Tracking" className="nav-link">Seguimiento</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Identificado como:</div>
                        Usuario1
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <div className="card mb-4">
                            <div className="card-header">
                                <img src="Imagen\Imagen.jpg" width="300px" height="300px"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Realizar envio</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <Link to="/Delivery1" className="small text-white stretched-link">Comenzar</Link>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">Seguimiento de paquetes</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <Link to="/Tracking" className="small text-white stretched-link">Ver detalles</Link>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">MinTIC 2022 - Grupo 2253 - Equipo 13</div>
                            <div>
                                <a href="#">Politicas de Privacidad</a>
                                &middot;
                                <a href="#">Terminos &amp; Condiciones</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
      </div>
  </div>

  );
}

export default App;
