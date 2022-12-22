var cad = `        <h1>Las recetas della mamma</h1>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Inicio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button"
                        data-bs-toggle="dropdown">Recetas</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="recetas.html">Recetas saladas</a></li>
                        <li><a class="dropdown-item" href="recetas-dulces.html">Recetas dulces</a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a href="acercade.html" class="nav-link">Nosotres</a>
                </li>
                <li class="nav-item">
                    <a href="contacto.html" class="nav-link">Contacto</a>
                </li>
                <li class="nav-item">
                    <a href="registro.html" class="nav-link">Registro</a>
                </li>
                <li class="nav-item">
                    <a href="sucursales.html" class="nav-link">Sucursales</a>
                </li>

            </ul>
        </div>
    </div>
</nav>`

document.getElementById("idheader").innerHTML=cad;

cad=`<nav>
<a class="redes" href="https://twitter.com/?lang=es" target="_blank"><i
        class="fa-brands fa-twitter"></i></a>
<a class="redes" href="https://www.instagram.com/" target="_blank"><i
        class="fa-brands fa-instagram"></i></a>
<a class="redes" href="https://es-la.facebook.com/" target="_blank"><i
        class="fa-brands fa-facebook"></i></a>
<a class="redes" href="https://www.whatsapp.com/?lang=es" target="_blank"><i
        class="fa-brands fa-whatsapp"></i></a>
</nav>
<p>Practica de HTML. Gracias por pasar!</p>`

document.getElementById("idfooter").innerHTML=cad;
