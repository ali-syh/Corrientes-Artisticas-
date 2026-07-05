document.addEventListener("DOMContentLoaded", () => {
    const btnManifiesto = document.getElementById("btn-manifiesto");
    if (btnManifiesto) {
        btnManifiesto.addEventListener("click", () => {
            alert("¡Bienvenid@ a este recorrido cronológico del Barroco hasta la psique surrealista!");
        });
    }

    const formArt = document.getElementById("form-art-registro");
    const msgExito = document.getElementById("mensaje-exito");

    if (formArt) {
        formArt.addEventListener("submit", function(e) {
            const txtNombre = document.getElementById("nombre").value.trim();
            const txtCorreo = document.getElementById("correo").value.trim();
            const txtComentario = document.getElementById("comentario").value.trim();

            if (txtNombre === "" || txtCorreo === "" || txtComentario === "") {
                e.preventDefault(); 
                alert("Por favor, rellene correctamente todos los campos obligatorios del registro.");
                return;
            }

            if (msgExito) {
                msgExito.style.display = "block";
            }
        });
    }
});

;const fotosBarroco = [
    "https://i.pinimg.com/1200x/b5/dc/5c/b5dc5c5a1d3096b690f7cc1186bfa815.jpg",
    "https://i.pinimg.com/736x/9e/ec/fe/9eecfeb5c948b2d6897af290ce9b08f3.jpg",
    "https://i.pinimg.com/736x/cd/a2/f9/cda2f927802668c9b5f4dba1daca795b.jpg"
];

const fotosRococo = [
    "https://i.pinimg.com/1200x/e4/a2/cd/e4a2cd33583eeb79e4dc6f95536b89b9.jpg",
    "https://i.pinimg.com/736x/f0/31/2b/f0312bcaca067a1300d00659728383fb.jpg",
    "https://i.pinimg.com/736x/32/05/55/3205550793be78ec1157905d3faaf6c3.jpg"
];

const fotosRomanticismo = [
    "https://i.pinimg.com/1200x/4c/e5/85/4ce5859011b8328ec4c0485fbc1da9de.jpg",
    "https://i.pinimg.com/736x/8b/bd/1f/8bbd1f99e1b613d3899f6d99953987bc.jpg",
    "https://i.pinimg.com/736x/5a/a8/e3/5aa8e3c587df79b49b2db60b4f36c8ba.jpg"
];

const fotosRealismo = [
    "https://i.pinimg.com/736x/3b/3d/fd/3b3dfdb5520debcf581c6bf99dd21896.jpg",
    "https://i.pinimg.com/736x/0b/dc/6a/0bdc6a149a961f3c6b3f87c257468abe.jpg",
    "https://i.pinimg.com/736x/fd/8b/98/fd8b9805feee163a0cff27826d9ee66d.jpg"
];

const fotosImpresionismo = [
    "https://i.pinimg.com/1200x/5f/81/39/5f813909500ab8392ff7e733989c54cd.jpg",
    "https://i.pinimg.com/736x/e8/d0/09/e8d00983cbd207739980341c816c4457.jpg",
    "https://i.pinimg.com/736x/a4/b5/8d/a4b58db09d9832b8ed2b78d0648ce248.jpg"
];

const fotosSurrealismo = [
    "https://i.pinimg.com/736x/82/c8/41/82c8411e0a23d6da330d2805d2ed4874.jpg",
    "https://i.pinimg.com/736x/6b/f2/ee/6bf2eefa780ca38b0db01348f57182f7.jpg",
    "https://fabulistmagazine.com/wp-content/uploads/ASTRAL_INDULGENCE_-_Arthur_Kwon_Lee-1024x848.jpeg"
];

let idxBarroco = 0, idxRococo = 0, idxRomanticismo = 0, idxRealismo = 0, idxImpresionismo = 0, idxSurrealismo = 0;

function actualizarIndicador(idImg, actual, total) {
    const img = document.getElementById(idImg);
    if (!img) return;
    
    let contenedor = img.parentElement;
    let indicador = contenedor.querySelector(".num-indicador");
    
    if (!indicador) {
        indicador = document.createElement("div");
        indicador.className = "num-indicador";
        contenedor.insertBefore(indicador, img);
    }
    indicador.innerText = actual + " / " + total;
}

function cambiarBarroco(dir) {
    idxBarroco += dir;
    if (idxBarroco >= fotosBarroco.length) idxBarroco = 0;
    if (idxBarroco < 0) idxBarroco = fotosBarroco.length - 1;
    document.getElementById("img-barroco").src = fotosBarroco[idxBarroco];
    actualizarIndicador("img-barroco", idxBarroco + 1, fotosBarroco.length);
}

function cambiarRococo(dir) {
    idxRococo += dir;
    if (idxRococo >= fotosRococo.length) idxRococo = 0;
    if (idxRococo < 0) idxRococo = fotosRococo.length - 1;
    document.getElementById("img-rococo").src = fotosRococo[idxRococo];
    actualizarIndicador("img-rococo", idxRococo + 1, fotosRococo.length);
}

function cambiarRomanticismo(dir) {
    idxRomanticismo += dir;
    if (idxRomanticismo >= fotosRomanticismo.length) idxRomanticismo = 0;
    if (idxRomanticismo < 0) idxRomanticismo = fotosRomanticismo.length - 1;
    document.getElementById("img-romanticismo").src = fotosRomanticismo[idxRomanticismo];
    actualizarIndicador("img-romanticismo", idxRomanticismo + 1, fotosRomanticismo.length);
}

function cambiarRealismo(dir) {
    idxRealismo += dir;
    if (idxRealismo >= fotosRealismo.length) idxRealismo = 0;
    if (idxRealismo < 0) idxRealismo = fotosRealismo.length - 1;
    document.getElementById("img-realismo").src = fotosRealismo[idxRealismo];
    actualizarIndicador("img-realismo", idxRealismo + 1, fotosRealismo.length);
}

function cambiarImpresionismo(dir) {
    idxImpresionismo += dir;
    if (idxImpresionismo >= fotosImpresionismo.length) idxImpresionismo = 0;
    if (idxImpresionismo < 0) idxImpresionismo = fotosImpresionismo.length - 1;
    document.getElementById("img-impresionismo").src = fotosImpresionismo[idxImpresionismo];
    actualizarIndicador("img-impresionismo", idxImpresionismo + 1, fotosImpresionismo.length);
}

function cambiarSurrealismo(dir) {
    idxSurrealismo += dir;
    if (idxSurrealismo >= fotosSurrealismo.length) idxSurrealismo = 0;
    if (idxSurrealismo < 0) idxSurrealismo = fotosSurrealismo.length - 1;
    document.getElementById("img-surrealismo").src = fotosSurrealismo[idxSurrealismo];
    actualizarIndicador("img-surrealismo", idxSurrealismo + 1, fotosSurrealismo.length);
}

window.onload = function() {
    actualizarIndicador("img-barroco", 1, fotosBarroco.length);
    actualizarIndicador("img-rococo", 1, fotosRococo.length);
    actualizarIndicador("img-romanticismo", 1, fotosRomanticismo.length);
    actualizarIndicador("img-realismo", 1, fotosRealismo.length);
    actualizarIndicador("img-impresionismo", 1, fotosImpresionismo.length);
    actualizarIndicador("img-surrealismo", 1, fotosSurrealismo.length);
};

