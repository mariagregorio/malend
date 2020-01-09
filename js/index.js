const loadMenu = (section) => {
    console.log(`Section ${section}`);

    const menuHtml = `
      <ul class="nav flex-column">
        <a class="navbar-brand" href="index.html">Malén Denis</a>
        <div class="menu-icon mobile" onclick="toggleMenu()"><i class="fas fa-bars"></i></div>
        <div class="nav-items-cont">
          <li class="nav-item"><a class="nav-link" href="bio.html" id="liBio">Bio</a></li>
          <li class="nav-item">
            <p class="nav-link sub-sec" id="liPublicaciones">Publicaciones</p>
            <a class="sub-link" href="libros.html">Libros</a>
            <a class="sub-link" href="compilaciones.html">Compilaciones</a>
            <a class="sub-link" href="publicaciones-online.html">Online</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="carrera-periodista.html" id="liCarrera">Carrera como periodista</a></li>
          <li class="nav-item"><a class="nav-link" href="prensa.html" id="liPrensa">Prensa</a></li>
          <li class="nav-item"><a class="nav-link" href="radio.html" id="liRadio">Radio</a></li>
          <li class="nav-item"><a class="nav-link" href="contacto.html" id="liContacto">Contacto</a></li>
        </div>
      </ul>
    `;

    const menuWrapper = document.getElementById('menuWrapper');
    menuWrapper.innerHTML = menuHtml;

    switch (section) {
        case 'index':
            break;
        case 'bio':
            document.getElementById('liBio').classList.add('active');
            break;
        case 'publicaciones':
            document.getElementById('liPublicaciones').classList.add('active');
            break;
        case 'carrera-periodista':
            document.getElementById('liCarrera').classList.add('active');
            break;
        case "prensa":
            document.getElementById('liPrensa').classList.add('active');
            break;
        case "radio":
            document.getElementById('liRadio').classList.add('active');
            break;
        case "contacto":
            document.getElementById('liContacto').classList.add('active');
            break;
        default:
            break;
    }
};

const toggleMenu = () => {
    const menu = document.querySelector('.nav-items-cont');
    if(menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
};
