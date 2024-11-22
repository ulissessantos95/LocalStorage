const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login(){
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); 
    //jsonparse converte BD, local para (localStorage.getItem(pegar o BD))Browsier "internet", 
    if (bancoDeDados == null){
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usauario of bancoDeDados){
            //para cada dados de bancos de dados
            if (usauario.login == login && usauario.senha == senha){
                //se login desse usuario para cada usuario é igual o login esta escrito no input 
                // se a senha for igual e o login for igual
                mensagem = "Parabéns, você logou";
                localStorage.setItem("logado", JSON.stringify(usauario));
                //localstorage analise usuario, stringify converter e puxa usuario na linha do for (let****--*****);
                //********sistema para outra pagina */
                window.location.href = "home.html";
                break;
            }
        }
    }
    alert(mensagem)
}
function cadastra(){
    if (campoNovaSenha.value = campoRepSenha.value){
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        
    } else {  alert("As senhas são diferentes!");
    }
}
function deslogar(){
    localStorage.setItem("logado", JSON.stringify(null));
    window.location.href = "index.html";
}
function carrega(){
    let usuarioLogado = JSON.parse(localStorage.getItem("logado"));
    let nome = usuarioLogado.login;
    document.getElementById("nome").innerHTML = nome;
}