function tela2(){
    var primeiro_jogador = document.getElementById("nome_do_jogador_1").value;
    var segundo_jogador = document.getElementById("nome_do_jogador_2").value;
    localStorage.setItem("nome_1", primeiro_jogador);
    localStorage.setItem("nome_2", segundo_jogador);
    window.location = "game_page.html";
}