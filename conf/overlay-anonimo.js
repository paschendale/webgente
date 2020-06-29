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
		prop_query,
		restricted, 
		maxZoom, 
		format, 
		transparent,
		tiled )
*/

var overlayHost = 'https://geoserver.genteufv.com.br/geoserver/ows?';


var vetorOverlay =  [
	parametros_tra_vias_deslocamento = new overlay(
		'Rodovias Municipais',
		'bomdespacho:TRA_Via_Deslocamento',
		'Malha Viária',
		['nome'],
		['codigo_rbd', 'situacao', 'shape_leng', 'inicio', 'fim', 'revestimento']
		)
	,

	parametros_tra_caminho_carrocavel = new overlay(
		'Rodovias Privadas',
		'bomdespacho:TRA_Caminho_Carrocavel',
		'Malha Viária',
		['nome']
		)

	,
	
	parametros_cbge_lotes = new overlay(
		'Lotes',
		'bomdespacho:CBGE_Lotes_Cadastral',
		'Cadastro Urbano',
		['distrito','setor','quadra','lote']
		)
	,
	parametros_cbge_quadras = new overlay(
		'Quadras',
		'bomdespacho:CBGE_Quadras',
		'Cadastro Urbano',
		['distrito','setor','quadra']
		)
	,
	/* eixo de vias mudou para a base cadastral. além disso, 
	o grupo mudou para "malha viária" e o nome para "Arruamento*/
	parametros_tra_trecho_arruamento = new overlay(
		 'Arruamentos',
		 'bomdespacho:CBGE_Trecho_Arruamento',
		 'Malha Viária',
		 ['tipo', 'nome_logradouro']
		)
	,
	parametros_tra_trecho_rodoviario =new overlay(
	    'Trecho Rodoviario',
	    'bomdespacho:TRA_Trecho_Rodoviario',
	    'Malha Viária',
		['nome'],
		['tipoPavimentacao', 'trechoEmPerimetroUrbano', 'jurisdicao', 'administracao']
		)
	 ,

	parametros_hid_massa_dagua = new overlay(
		'Corpos D`Água',
		'bomdespacho:HID_Massa_Dagua',
		'Meio Ambiente',
		['nome'],
		['tipoMassaDagua', 'regime']
	),

	parametros_hid_trecho_drenagem =new overlay(
		'Hidrografia',
		'bomdespacho:HID_Trecho_Drenagem',
		'Meio Ambiente',
		['nome'],
		['regime']
		)
	,

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
		'Limites',
		['nome']
	),

	parametro_lml_localidade = new overlay(
		'Localidades Rurais',
		'bomdespacho:LML_Localidade',
		'Malha Viária',
		['nome']
	),

	parametro_tra_quilometragem = new overlay(
		'Pontos de Quilometragem',
		'bomdespacho:TRA_Quilometragem',
		'Malha Viária',
		['km', 'codigo']
	),

	parametro_cbge_edificacoes_bci = new overlay(
		'Edificações',
		'bomdespacho:CBGE_Edificacoes_BCI',
		'Cadastro Urbano',
		['inscricao', 'numero_porta'],
		['area_unidade_calculada', 'area_unidade_bci', 'proprietario', 'utilizacao', 'area_construida_total', 'tipo', 'alinhamento', 'situacao_edif', 'situacao_unid', 'estrutura', 'cobertura', 'parede']


	),

];
