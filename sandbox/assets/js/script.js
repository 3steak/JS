
window.addEventListener("load", () => {
    const firstnameInput = document.getElementById("firstnameInput");
    document.getElementById("plus").addEventListener("click", (e) => {
        // les crochets pour selectionner un element par ses attributs
        if (document.querySelectorAll('[name="firstname"]').length < 10) {
            const formBis = firstnameInput.cloneNode(true);
            formBis.removeAttribute("id");
            const t = formBis.querySelectorAll(["label > input"]);
            for (let i = 0; i < t.length; i++) {
                t[i].value = ""
            }

            const targetEvent = e.target.cloneNode();
            targetEvent.value = " - ";
            targetEvent.padding = "0px";
            targetEvent.title = "Supprimer ce champ";
            // comprendre ligne 19
            formBis.appendChild(targetEvent);

            targetEvent.addEventListener("click", (e) => {
                document.getElementById("formTest").removeChild(e.target.parentElement);
                e.preventDefault()
            }, false);
            // a comprendre ligne 25
            document.getElementById("formTest").insertBefore(formBis, document.getElementById("bou"));
        }
    }, false);
}, false);