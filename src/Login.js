import './App.css';
import {Link} from "react-router-dom";
import { Fragment } from 'react';

function Login() {
  return (
    <Fragment>
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">

                                    <div class="card-body">
                                        <div class="container">
                                            <img src="Imagen/images.png" class="image2"/>
                                        </div>
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Usuario</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                                <label for="inputPassword">Contraseña</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <Link to="/" className="btn btn-primary">Ingresar</Link>
                                                {/*<!--<a class="btn btn-primary" href="index.html">Ingresar</a>-->*/}
                                            </div>
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label class="form-check-label" for="inputRememberPassword">Recordar contraseña</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-">
                                                <Link to="/Password" class="small">¿Olvido la contraseña?</Link>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">

                                        <div class="small"><a>¿No tienes una cuenta? </a><Link to="/Register">Registrate</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2022</div>
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="%PUBLIC_URL%/js/scripts.js"></script>

    </Fragment>
  );
}

export default Login;
