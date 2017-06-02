(function modal(){
    var boxes = Array.from(document.getElementsByClassName("box-services"));
    var modal = document.getElementById("box-services-modal");
    var textModal, texto,estrella, bodyModal, close, img, parrafo, textoP, cerrar, textCerrar;
    boxes.forEach(function(box){
            box.addEventListener("click", function(){
            modal.innerHTML = "";

            textModal = document.createElement("h1");
            textModal.classList.add("center");
            textModal.setAttribute("id", "titulo_modal");
            texto = document.createTextNode("PROJECT TITLE");
            textModal.appendChild(texto);
            modal.appendChild(textModal);

            estrella = document.createElement("div");
            estrella.classList.add("linea-estrella-negra");
            estrella.setAttribute("id", "estrella_modal");
            textModal.appendChild(estrella);

            bodyModal = document.createElement("div");
            bodyModal.classList.add("modal-body");
            bodyModal.innerHTML = box.innerHTML;            
            modal.appendChild(bodyModal);
            modal.classList.remove("oculto");
            close = document.createElement("div");
            close.classList.add("close");
            img = document.createElement("img");
            img.setAttribute("src", "http://icon-icons.com/icons2/37/PNG/512/x_3464.png");
            close.appendChild(img);
            modal.appendChild(close);

            parrafo = document.createElement("p");
            textoP = document.createTextNode("Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!  Client: Start Bootstrap  ");
            parrafo.appendChild(textoP);
            bodyModal.appendChild(parrafo);

            cerrar = document.createElement("button");
            cerrar.setAttribute("type", "button");
            textCerrar = document.createTextNode("x close");
            cerrar.appendChild(textCerrar);
            parrafo.appendChild(cerrar);
            cerrar.addEventListener("click",function(){
                modal.classList.add("oculto");
            });

            close.addEventListener("click",function(){
                modal.classList.add("oculto");
            });
        });     
    });
})();

