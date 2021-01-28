function layer(){
  axios({
          method: 'post',
          url: 'redirect/redirect-layers.php',
       })
      .then((response) => {
          var novoUsuario = document.getElementById('conteudo-principal');
          novoUsuario.innerHTML = `
          <button onclick="verCamadas()">Ver camada</button>
          <br>
          <br>
          <button>Remover camada</button>
          <br>
          <br>
          `
          +response.data;
      })
      .catch((error) => {
          alert("Problema na requisição AJAX");
      })
}
