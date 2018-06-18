function Cadastro() {


    var valido = 0;


    var nome = $('#nome').val() != "" ? $('#nome').removeClass("erro") && $('#nome').val() : valido = 1 && $('#nome').addClass("erro");
    var email = $('#email').val() != "" ? $('#email').removeClass("erro") && $('#email').val() : valido = 1 && $('#email').addClass("erro");
    var idade = $('#idade').val() != "" ? $('#idade').removeClass("erro") && $('#idade').val() : valido = 1 && $('#idade').addClass("erro");
    var cpf = $('#cpf').val() != "" ?  $('#cpf').removeClass("erro")&& $('#cpf').val() : valido = 1 && $('#cpf').addClass("erro");
    var login = $('#login').val() != "" ? $('#login').removeClass("erro") && $('#login').val()  : valido = 1 && $('#login').addClass("erro");
    var senha = $('#senha').val() != "" ? $('#senha').removeClass("erro") && $('#senha').val() : valido = 1 && $('#senha').addClass("erro");


    var dados = `{
        "nome": "`+nome+`",
        "email": "`+email+`",
        "idade": "`+idade+`",
        "cpf":     "`+cpf+`",
        "login": "`+login+`",
        "senha": "`+senha+`"
    }`;
    if(valido == 0){

        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/login/cadastrar',
            data: dados,
            success(resp) {
                if(resp != null){
                    alert("Cadastro efetuado com sucesso!");
                    window.location = "../Forms/FormLogin.html"
                }
            },
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
            }
        });


    }else{
        alert("Todos os campos são obrigátorios");
    }


}

function entrar(){
    var login = $('#login').val();
    var senha = $('#senha').val();



    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/login/logar?login='+ login + '&senha=' + senha,
        success(resp) {
        if(resp.id){
            alert("Logado com Sucesso!");
            sessionStorage.nome = resp.nome;
            sessionStorage.email = resp.email;
            sessionStorage.idade = resp.idade;
            sessionStorage.cpf = resp.cpf;
            sessionStorage.logado = true;
            window.location = "../Forum/forum.html"




        }
        else{
            alert("Login ou Senha incorretos!")
        }
        },
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        }
    });



}

function CadastroResposta() {
    var resposta = $('#resposta').val();

    var  dados = `{
        "resposta": "`+resposta+`"
    }`;
    $.ajax({
            type: "POST",
            url: 'http://localhost:8080/resposta/salvar',
            data: dados,
            success(resp) {
                if(resp != null){
                    alert("Resposta Salva Com Sucesso");
                }
            },
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
            }
        });

}


