window.onload = function () {
    var el = document.getElementById('nav-bar');
    el.innerHTML = getHtml();
    var path = window.location.pathname;

    for (var x = 0; x < path.length; x++) {
        if (path.substring(path.length-x, path.length).includes("/")) {
            path = path.substring(path.length-x+1, path.length);
            break;
        }
    }

    switch (path) {
        case 'site2.html':
            document.getElementById('home').setAttribute('class', 'active');
        break;
        case 'sobrenos.html':
            document.getElementById('sobre').setAttribute('class', 'active');
        break;
        case 'receberdoacoes.html':
            document.getElementById('participe').setAttribute('class', 'active');
        break;
        case 'relatorios.html':
            document.getElementById('relatorios').setAttribute('class', 'active');
        break;
        case 'porquedoar.html':
            document.getElementById('doacoes').setAttribute('class', 'active');
        break;
        case 'doeagora.html':
            document.getElementById('doacoes').setAttribute('class', 'active');
        break;
    }
}

function getHtml() {
    return "<nav>" +
        "<div class='logo'>" +
        "<img class='tamanho' src='juntos_pela_educação__1_-removebg-preview.png' alt='JPE'> <h6>Juntos pela Educação</h6>" +
        "</div>" +
        "<div class='menu-btn'>" +
        "<i class='fa fa-bars fa-2x' onclick='menuShow()'></i>" +
        "</div>" +
        "<ul>" +
        "<li><a id='home' href='site2.html'>Home</a></li>" +
        "<li><a id='sobre' href='sobrenos.html'>Sobre</a></li>" +
        "<li><a id='participe' href='receberdoacoes.html'>Participe</a></li>" +
        "<li><a id='relatorios' href='relatorios.html'>Relatórios</a></li>" +
        "<li><a id='doacoes' onmouseover='dropDown(true)'>Doações ⯆</a></li>" +
        "</ul>" +
        "</nav>" +
        "<div class='dropdown-container'>" +
            "<div class='dropdown-menu' onmouseleave='dropDown(false)'>" +
                "<ul>" +
                    "<li><a href='porquedoar.html'>Porque doar?</a></li>" +
                    "<li><a href='doeagora.html'>Doe agora</a></li>" +
                "</ul>" +
            "</div>" +
        "</div>";
}

function dropDown(condition) {
    var dropDownElement = document.getElementsByClassName('dropdown-container')[0];

    if (condition) {
        dropDownElement.style.display = 'block';
    } else {
        dropDownElement.style.display = 'none';
    }
}