function newUser(){
	var novoUsuario = document.getElementById('conteudo-principal');
	novoUsuario.innerHTML = 
	`
	<div class="row">
        <div class="col-1 col-sm-2 col-xl-2"></div>
          <div class="col-10 col-sm-8 col-xl-8">
            <br>
            <form action="redirect/redirect-register.php" method="POST" id="formulario" name="formulario">
              <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome completo" required>
              <label for="cpf">CPF</label> 
                <input type="text" class="form-control" id="cpf" name="cpf" placeholder="CPF" required>
              <label for="data-nascimento">Data de nascimento</label>
                <input type="date" class="form-control" id="data-nascimento" name="data-nascimento" required>
              <label for="sexo">Sexo</label>
              <br>
                <input type="radio" id="sexo" name="sexo" value="masculino"> Masculino
                <input type="radio" id="sexo" name="sexo" value="feminino"> Feminino
                <input type="radio" id="sexo" name="sexo" value="nao-informar"> Não informar
              <br>
              <label for="faixa-etaria">Faixa etária</label>
                <select class="form-control" id="faixa-etaria" name="faixa-etaria">
                  <option>----</option>
                  <option value="menores-15-anos">Menores de 15 anos</option>
                  <option value="entre-16-e-64-anos">Entre 16 e 64 anos</option>
                  <option value="a-partir-de-65-anos">A partir de 65 anos</option>
                </select>
              <label for="celular">Celular</label>
                <input type="text" class="form-control" id="celular" name="celular" placeholder="Celular">
              <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
              <label for="senha">Senha</label>
                <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required>
              <br>
              <button type="submit" class="btn btn-secondary btn-lg btn-block" id="enviar">Cadastrar</button>
            </form>
          </div>
        <div class="col-1 col-sm-2 col-xl-2"></div>
    </div>
	`;
}
