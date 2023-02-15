var nome_do_jogador_1 = localStorage.getItem("nome_1");
var nome_do_jogador_2 = localStorage.getItem("nome_2");
var pontos1 = 0;
var pontos2 = 0;
document.getElementById("player1_name").innerHTML=nome_do_jogador_1+":";
document.getElementById("player2_name").innerHTML=nome_do_jogador_2+":";
document.getElementById("player1_score").innerHTML=pontos1;
document.getElementById("player2_score").innerHTML=pontos2;
document.getElementById("pergunta").innerHTML="turno da pergunta: "+nome_do_jogador_1;
document.getElementById("resposta").innerHTML="turno da resposta: "+nome_do_jogador_2;
var resposta;
function enviar(){
    numero1=document.getElementById("primeiro_numero").value;
    numero2=document.getElementById("segundo_numero").value;
    resposta=parseInt(numero1)*parseInt(numero2);
    console.log("a resposta certa é:"+resposta);

    var pergunta="<h4>"+parseInt(numero1)+" X "+parseInt(numero2)+"</h4>";
    var caixa_de_resp="<br>resposta: <input type='number'id='caixa_de_entrada'>";
    var btn="<br><br><button onclick='checar()'class='btn btn-primary'>enviar</button>";
    var caixa=pergunta+caixa_de_resp+btn;
    document.getElementById("output").innerHTML=caixa;
    document.getElementById("primeiro_numero").value="";
    document.getElementById("segundo_numero").value="";
}
var turno_pergunta="jogador1";
var turno_resposta="jogador2";
function checar(){
    var resposta_usuario = document.getElementById("caixa_de_entrada").value;
    if(resposta==resposta_usuario){
        if(turno_resposta=="jogador1"){
            pontos1+=1;
            document.getElementById("player1_score").innerHTML=pontos1;
        }
        else{
            pontos2+=1;
            document.getElementById("player2_score").innerHTML=pontos2;
        }
    }
    if(turno_pergunta=="jogador1"){
        turno_pergunta="jogador2";
        document.getElementById("pergunta").innerHTML="turno da pergunta: "+nome_do_jogador_2;
    }
    else{
        turno_pergunta="jogador1";
        document.getElementById("pergunta").innerHTML="turno da pergunta: "+nome_do_jogador_1;
    }
    if(turno_resposta=="jogador1"){
        turno_resposta="jogador2";
        document.getElementById("resposta").innerHTML="turno da resposta: "+nome_do_jogador_2;
    }
    else{
        turno_resposta="jogador1";
        document.getElementById("resposta").innerHTML="turno da resposta: "+nome_do_jogador_1;
    }
}