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
		pro_query numeric,
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
		'Malha Viária',
		['nome'],
		['codigo_rbd'],
		['Nome', 'Código RBD'],
		['situacaoFisica', 'geometriaAproximada', 'concessionaria', 'canteiroDivisorio', 'nrPistas', 'nrFaixas', 'codigo', 'id_3', 'id', 'jurisdicao', 'situacao', 'shape_leng', 'trecho', 'inicio', 'fim', 'revestimento', 'administracao', 'operacional', 'tipoVia', 'tipoPavimentacao', 'trafego']
		)
	,

	parametros_tra_caminho_carrocavel = new overlay(
		'Rodovias Privadas',
		'bomdespacho:TRA_Caminho_Carrocavel',
		'Malha Viária',
		['nome'],
		[],
		['Nome']
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
		['unificada com'],
		['distrito','setor','quadra'],
		['Unificada com quadra:', 'Distrito','Setor','Quadra'],
		['resp_vetorizacao', 'status_vetorizacao']
		)
	,
	/* eixo de vias mudou para a base cadastral. além disso, 
	o grupo mudou para "malha viária" e o nome para "Arruamento*/
	parametros_tra_trecho_arruamento = new overlay(
		 'Arruamentos',
		 'bomdespacho:CBGE_Trecho_Arruamento',
		 'Malha Viária',
		 ['tipo', 'nome_logradouro'],
		 [ 'codigo'],
		 ['Tipo', 'Nome', 'Código do Logradouro'],
		 ['secao_d','secao_e']
		)
	,
	parametros_tra_trecho_rodoviario =new overlay(
	    'Rodovias Federais e Estaduais',
	    'bomdespacho:TRA_Trecho_Rodoviario',
	    'Malha Viária',
		['nome'],
		['codTrechoRod'],
		['Nome', 'Código do Trecho Federal ou Estadual'],
		['jurisdicao', 'administracao', 'concessionaria', 'revestimento', 'operacional', 'situacaoFisica', 'canteiroDivisorio', 'trafego', 'tipoPavimentacao', 'tipoVia', 'trechoEmPerimetroUrbano', 'acostamento' ]
		)
	 ,

	parametros_hid_massa_dagua = new overlay(
		'Corpos D`Água',
		'bomdespacho:HID_Massa_Dagua',
		'Meio Ambiente',
		['nome', 'tipoMassaDagua', 'regime', 'salgada'],
		['id'],
		[ 'Nome','Tipo de Massa Dágua','Regime', 'Tipo de Água', 'Identificação'],
		['dominialidade', 'artificial', 'possuiTrechoDrenagem']
	),

	parametros_hid_trecho_drenagem =new overlay(
		'Hidrografia',
		'bomdespacho:HID_Trecho_Drenagem',
		'Meio Ambiente',
		['nome', 'navegavel', 'tipoTrechoDrenagem'],
		['id'],
		['Nome', 'É Navegável?', "Tipo", 'Identificação'],
		['regime', 'geometriaAproximada', 'larguraMedia', 'encoberto']
		)
	,

	/*Brenda*/
	parametros_limite_expansao_urbana = new overlay(
		'Área de Expansão Urbana',
		'bomdespacho:MUB_Area_Expansao_Urbana',
		'Limites'
	),

	parametros_lml_municipio = new overlay(
		'Limite Municipal (FJP)',
		'bomdespacho:LML_Municipio_Bom_Despacho',
		'Limites',
		[],
		[],
		[],
		['GEOCODIGO', 'ANODEREFER', 'AREA']
	),

	parametros_tra_ponte = new overlay(
		'Pontes (IBGE)',
		'bomdespacho:TRA_Ponte',
		'Malha Viária',
		['tipoponte'],
		['id_0'],
		['Tipo de Ponte', 'Identificação'],
		['id', 'descricao', 'vaolivreho', 'vaovertica', 'cargasupor', 'geom']
	),

	parametros_lml_cidade = new overlay(
		'Perímetro Urbano',
		'bomdespacho:MUB_Municipio',
		'Limites',
		[],
		[],
		[],
		['geometriaa', 'geocodigo']
	),

	parametro_lml_distrito = new overlay(
		'Limites Distritais (IBGE)',
		'bomdespacho:LML_Distrito',
		'Limites',
		['nome'],
		[],
		['Nome'],
		['id_2', 'id_1', 'id_0', 'geometriaAproximada', 'geocodigo', 'anoDeReferencia']
	),

	parametro_lml_localidade = new overlay(
		'Localidades Rurais',
		'bomdespacho:LML_Localidade',
		'Malha Viária',
		['nome'],
		[],
		['Nome']
	),

	parametro_tra_quilometragem = new overlay(
		'Pontos de Quilometragem',
		'bomdespacho:TRA_Quilometragem',
		'Malha Viária',
		['codigo'],
		['km'],
		['Código', 'N° Quilometragem Municipal']
	),

	parametro_cbge_edificacoes_bci = new overlay(
		'Edificações',
		'bomdespacho:CBGE_Edificacoes_BCI',
		'Cadastro Urbano',
		['inscricao', 'numero_porta'],
		['id'],
		['Inscrição', 'Número da Porta', 'Identificação'],
		['complemento', 'proprietario', 'ocupacao', 'utilizacao', 'del_frontal', 'sit_quadra', 'testada', 'tipo', 'alinhamento', 'situacao_edif', 'situacao_unid', 'estrutura', 'cobertura', 'parede', 'forro', 'revestimento', 'area_unidade_calculada', 'area_unidade_bci', 'cod_logradouro', 'cod_secao' , 'area_unidade', 'total_unidade', 'area_construida_total']
	),

	parametro_PTO_Geod_Topo_Controle_RN = new overlay (
		'Referência de Nível (IBGE)',
		'bomdespacho:PTO_Geod_Topo_Controle_RN',
		'Rede Cadastral (RRC)'
	
	),

	parametro_PTO_Geod_Topo_Controle_GPS = new overlay (
		'Estações SAT GPS (IBGE)',
		'bomdespacho:PTO_Geod_Topo_Controle_GPS',
		'Rede Cadastral (RRC)'
		
	),

	parametro_PTO_Geod_Topo_Controle_VT = new overlay (
		'Vértices de Triangulação Geodésica (IBGE)',
		'bomdespacho:PTO_Geod_Topo_Controle_VT',
		'Rede Cadastral (RRC)'
		
	),

];
