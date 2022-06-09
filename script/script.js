var checkbox = []

function add() {

    var input = document.querySelector("#text_list")
    var text = input.value

    console.log(text)

    if(text == "") {
        alert("Coloque um nome no elemento")
    }else{
        var lista = document.getElementById('lista')
        elemento = '<input type="checkbox" name="lista" id="lista"> <label id="lista" for="lista">'+text+'</label><br>'
        checkbox.push(elemento)

        lista.innerHTML = checkbox
    }

}

function remove() {
    var main = document.getElementById('main')

    var remove = document.getElementById("lista")
    remove.parentNode.removeChild(remove)

    var div = '<div class="lista" id="lista"></div>'
    main.innerHTML = div

    checkbox = []

    console.log(checkbox)
}