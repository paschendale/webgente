// Definindo camadas overlay

/*
maxZoom: 25,
format: 'image/png',
transparent: true,
tiled: true

*/

/*
	Ordem de preenchimento da classe overlay:
   new overlay (
     	nome, 
		layers, 
		grupo,
		prop_query alpha,
		prop_query numeric,
		prop_alternative,
		restricted, 
		maxZoom, 
		format, 
		transparent,
		tiled )
*/

var overlayHost = 'https://geoserver.genteufv.com.br/geoserver/ows?';


var vetorOverlay =  [

	parametros_mub_panoramas = new overlay(
		'Imagens 360°',
		'bomdespacho:MUB_Panoramas',
		'Imagens 360°',
		[],
		[],
		[]
		)
	,
	
	parametros_tra_vias_deslocamento = new overlay(
		'Rodovias Municipais',
		'bomdespacho:TRA_Via_Deslocamento',
<<<<<<< HEAD
		'Malha Viária'
=======
		'Malha Viária',
		['nome', 'jurisdicao','trecho','situacao','inicio','fim', 'administracao', 'revestimento', 'operacional', 'situacao', 'canteiroDivisorio','trafego', 'tipoPavimentacao', 'tipoVia'],
		['codigo_rbd',],
		['Nome', 'Jurisdição', 'Nome Trecho', 'Situação', 'Início', 'Fim', 'Revestimento', 'Operacional', 'Situação da Via', 'Tem Canteiro Divisório?', 'Tráfego', 'Tipo de Pavimentação', 'Tipo da Via','Código da Via']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
		)
	,

	parametros_tra_caminho_carrocavel = new overlay(
		'Rodovias Privadas',
		'bomdespacho:TRA_Caminho_Carrocavel',
<<<<<<< HEAD
		'Malha Viária'
=======
		'Malha Viária',
		['nome'],
		['id'],
		['Nome','ID']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
		)

	,
	parametros_cbge_edificacoes = new overlay(
		'Edificacoes',
		'bomdespacho:CBGE_Edificacoes',
		'Cadastro Urbano',
		['distrito','setor','quadra','lote','unidade'],
		['Distrito','Setor','Quadra','Lote','Unidade']
		)
	,
	
	parametros_cbge_lotes = new overlay(
		'Lotes',
		'bomdespacho:CBGE_Lotes_Cadastral',
		'Cadastro Urbano',
		[],
		['distrito','setor','quadra','lote'],
		['Distrito','Setor','Quadra','Lote']
		)
	,
	parametros_cbge_quadras = new overlay(
		'Quadras',
		'bomdespacho:CBGE_Quadras',
		'Cadastro Urbano',
		[],
		['distrito','setor','quadra'],
		['Distrito','Setor','Quadra']
		)
	,
	/* eixo de vias mudou para a base cadastral. além disso, 
	o grupo mudou para "malha viária" e o nome para "Arruamento"*/
	parametros_tra_trecho_arruamento = new overlay(
		'Arruamentos',
		'bomdespacho:CBGE_Trecho_Arruamento',
		'Malha Viária',
<<<<<<< HEAD
		['tipo', 'nome_logradouro'],
		['Tipo', 'Nome']
=======
		['tipo', 'nome_logradouro', 'secao_d', 'secao_e'],
		[ 'codigo'],
		['Tipo', 'Nome', 'Seção Direita', 'Seção Esquerda','Código de Logradouro']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
		)
	,
	parametros_tra_trecho_rodoviario =new overlay(
	    'Trecho Rodoviario'
	    'bomdespacho:TRA_Trecho_Rodoviario',
<<<<<<< HEAD
	    'Malha Viária'
=======
		'Malha Viária',
		['nome', 'sigla', 'jurisdicao', 'administracao', 'concessionaria', 'revestimento', 'operacional', 'situacaoFisica', 'canteiroDivisorio', 'trafego', 'tipoPavimentacao', 'tipoVia', 'trechoEmPerimetroUrbano', 'acostamento'],
		['codTrechoRod'],
		['Nome', 'Sigla', 'Jurisdicao', 'Administração', 'Concessionária', 'Revestimento', 'É operacional?', 'Situação Física', 'Canteiro Divisório?', 'Tráfego', 'Tipo de Pavimentação', 'Tipo da Via', 'Trecho em Perímetro Urbano?', 'Acostamento?', 'Código do Trecho']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
 
		)
	 ,

	parametros_hid_massa_dagua = new overlay(
		'Corpos D`Água',
		'bomdespacho:HID_Massa_Dagua',
<<<<<<< HEAD
		'Meio Ambiente'
=======
		'Meio Ambiente',
		['nome', 'regime', 'tipoMassaDagua', 'salgada', 'dominialidade', 'artificial', 'possuiTrechoDrenagem'],
		[],
		['Nome', 'Regime', 'Tipo de Massa Dágua', 'Aguá doce ou salgada?', 'Dominialidade', 'É artificial?', 'Possui Trecho de Drenagem?']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),

	parametros_hid_trecho_drenagem =new overlay(
		'Hidrografia',
		'bomdespacho:HID_Trecho_Drenagem',
<<<<<<< HEAD
		'Meio Ambiente'
=======
		'Meio Ambiente',
		['id', 'nome','tipoTrechoDrenagem', 'regime', 'navegavel', 'encoberto'],
		['larguraMedia'],
		['ID', 'Nome', 'Tipo', 'Regime', 'É Navegável?', 'Encoberto?', 'Largura Média']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),

		/*Brenda*/
	parametros_limite_expansao_urbana = new overlay(
		'Área de Expansão Urbana',
		'bomdespacho:limite_expansao_urbana',
		'Limites'
	),

	parametros_lml_municipio = new overlay(
		'Limite Municipal (IBGE)',
		'bomdespacho:LML_Municipio',
<<<<<<< HEAD
		'Limites'
=======
		'Limites',
		['anoDeReferencia'],
		['geocodigo'],
		[ 'Ano de Referência','Geocódigo']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),

	parametros_tra_ponte = new overlay(
		'Pontes (IBGE)',
		'bomdespacho:TRA_Ponte',
<<<<<<< HEAD
		'Malha Viária'
=======
		'Malha Viária',
		['descricao', 'tipoponte'],
		[],
		['Descrição', 'Tipo de Ponte']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),

	parametros_lml_cidade = new overlay(
		'Perímetro Urbano',
		'bomdespacho:LML_Cidade',
<<<<<<< HEAD
		'Limites'
=======
		'Limites',
		[],
		['geocodigo'],
		['Geocódigo']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),

	parametro_lml_distrito = new overlay(
		'Limites Distritais (IBGE)',
		'bomdespacho:LML_Distrito',
<<<<<<< HEAD
		'Limites'
=======
		'Limites',
		['nome'],
		['geocodigo'],
		['Nome', 'Geocódigo']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),

	parametro_lml_localidade = new overlay(
		'Localidades Rurais',
		'bomdespacho:LML_Localidade',
<<<<<<< HEAD
		'Malha Viária'
=======
		'Malha Viária',
		['nome'],
		['geocodigo'],
		['Nome', 'Geocódigo']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),

	parametro_tra_quilometragem = new overlay(
		'Pontos de Quilometragem',
		'bomdespacho:TRA_Quilometragem',
<<<<<<< HEAD
		'Malha Viária'
	),

	/*Brenda*/
	parametros_limite_expansao_urbana = new overlay(
		'Área de Expansão Urbana',
		'bomdespacho:limite_expansao_urbana',
		'Limites'
	),

	parametros_lml_municipio = new overlay(
		'Limite Municipal (IBGE)',
		'bomdespacho:LML_Municipio',
		'Limites'
	),

	parametros_tra_ponte = new overlay(
		'Pontes (IBGE)',
		'bomdespacho:TRA_Ponte',
		'Malha Viária'
	),

	parametros_lml_cidade = new overlay(
		'Perímetro Urbano',
		'bomdespacho:LML_Cidade',
		'Limites'
	),

	parametro_lml_distrito = new overlay(
		'Limites Distritais (IBGE)',
		'bomdespacho:LML_Distrito',
		'Limites'
	),

	parametro_lml_localidade = new overlay(
		'Localidades Rurais',
		'bomdespacho:LML_Localidade',
		'Malha Viária'
	),

	parametro_tra_quilometragem = new overlay(
		'Pontos de Quilometragem',
		'bomdespacho:TRA_Quilometragem',
		'Malha Viária'
=======
		'Malha Viária',
		[],
		['id', 'codigo', 'km', 'coord_e', 'coord_n'],
		['ID', 'Código', 'N° Quilometragem', 'Coordenada UTM E', 'Coordenada UTM N']
>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),
	
	parametro_cbge_edificacoes_bci = new overlay(
		'Edificações',
		'bomdespacho:CBGE_Edificacoes_BCI',
<<<<<<< HEAD
		'Cadastro Urbano'
=======
		'Cadastro Urbano',
		['inscricao', 'complemento', 'proprietario', 'ocupacao', 'utilizacao','sit_quadra', 'testada', 'tipo', 'alinhamento', 'situacao_edif', 'situacao_unid', 'estrutura', 'cobertura', 'parede', 'forro', 'revestimento'],
		['id', 'area_unidade_calculada', 'area_unidade_bci', 'cod_logradouro', 'cod_secao', 'numero_porta', 'del_frontal' , 'area_unidade', 'total_unidade', 'area_construida_total'],
		['Inscrição', 'Complemento', 'Proprietário', 'Ocupação', 'Utilização', 'Situação da Quadra',  'Distância da Testada', 'Tipo', 'Alinhamento', 'Situação da Edificação', 'Tipo da Estrutura', 'Tipo da Cobertura', 'Tipo de Parede', 'Tipo de Forro', 'Revestimento','ID', 'Área da Unidade Calculada', 'Área da Unidade no BCI', 'Código de Logradouro', 'Código da Seção', 'Número da Porta', 'Delimitação Frontal','Área da Unidade', 'Unidades Totais', 'Área Construída Total']

>>>>>>> 76e803deb078290201977ddebfc6a3854abf2fc6
	),
];
