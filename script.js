window.usuarios = [];
var usuario = {};
var formValid = false;
var listaUsuarios = window.localStorage.usuarios ? JSON.parse(window.localStorage.usuarios) : [];

window.addEventListener("load", function () {
    let nome = document.getElementById("nameRegistro");
    let date = document.getElementById("data");
    let password = document.getElementById("senha");
    let cpassword = document.getElementById("confirmasenha");
    let tel = document.getElementById("telefone");
    let ema = document.getElementById("email");
    let salvar = document.getElementById("salvar");
    var formulario = document.querySelector("form.cadastro");

    salvar.disabled = true;

    salvar.addEventListener("click", function () {

        usuario.nome = nome.value;
        usuario.data = date.value;
        usuario.tel = tel.value;
        usuario.email = ema.value;
        usuario.senha = password.value;
        usuario.favDir = [];

        if (validarCampos()) {
            if (usuarioJaExiste()) {
                alert('Este email já está sendo usado');
                return;
            }
            listaUsuarios.push(usuario);
            window.localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
            window.open("/index.html","_self")
        } else {
            alert("Preencha todos os campos");
        }

        // window.localStorage.setItem("nome", JSON.stringify(input1));
        // window.localStorage.setItem("data", JSON.stringify(input2));
        // window.localStorage.setItem("telefone", JSON.stringify(input3));
        // window.localStorage.setItem("email", JSON.stringify(input4));
        // window.localStorage.setItem("senha", JSON.stringify(input5));
    });

    formulario.onchange = (evento) => validarCampos(evento);

    function validarCampos(evento) {
        if (
            nome.value.length > 1 &&
            ema.value.length > 1 &&
            password.value.length > 1
        ) {
            console.log("muou", ema.value);
            formValid = true;
            salvar.disabled = false;
            return true;
        } else {
            console.log("nome", ema.value);
            salvar.disabled = true;
        }
    }

    function usuarioJaExiste() {
        if (listaUsuarios !== null) {
            return Boolean(listaUsuarios.find((usuario)=> usuario.email === ema.value)    )
        }
        return false
    }
});

// function alertLogin() {
//     alert("Cadastro feito com sucesso!");
// }
