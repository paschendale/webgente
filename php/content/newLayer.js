function newLayer(){
	var novoUsuario = document.getElementById('conteudo-principal');
	novoUsuario.innerHTML = 
	`
	<div class="row">
        <div class="col-1 col-sm-2 col-xl-2"></div>
          <div class="col-10 col-sm-8 col-xl-8">
            <br>
            <form action="" method="POST" id="formulario" name="formulario">
              <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome da camada" required>
              <label for="url">Endereço da camada no Geoserver</label>
                <input type="text" class="form-control" id="urlGeoserver" name="urlGeoserver" placeholder="Endereço Geoserver" required>
              <label for="grupo">Grupo</label>
                <input type="text" class="form-control" id="grupo" name="grupo" placeholder="grupo" required>
               <br>
               <label for="propAlpha">Prop_query_alpha</label>
               <br>
               <label for="propNumeric">Prop_query_numeric</label>
               <br>
               <label for="propAlternative">Prop_query_alternative</label>
               <br>
               <label for="restricted">Restricted</label>
               <br>
               <label for="maxZoom">Zoom Maximo</label>
               <select class="form-control" id="maxZoom" name="maxZoom">
                  <option>Selecione aqui</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                </select>
               <label for="format">Formato</label>
               <br>
               <label for="transparent">Transparência</label>
               	<input class="form-control" type="number" min="0.0" max="1.0" step="0.1" id="transparent" name="transparent" placeholder="Digite um número entre 0.0 e 1.0" required>
               <label for="tiled">Tiled</label>
               
              <br>
              <button type="submit" class="btn btn-secondary btn-lg btn-block" id="enviar">Cadastrar</button>
            </form>
          </div>
        <div class="col-1 col-sm-2 col-xl-2"></div>
    </div>
	`;
}