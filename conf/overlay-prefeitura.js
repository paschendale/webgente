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
		'Malha Viária'
		)
	,

	parametros_tra_caminho_carrocavel = new overlay(
		'Rodovias Privadas',
		'bomdespacho:TRA_Caminho_Carrocavel',
		'Malha Viária'
		)

	,
	parametros_cbge_edificacoes = new overlay(
		'Edificacoes',
		'bomdespacho:CBGE_Edificacoes',
		'Cadastro Urbano',
		['distrito','setor','quadra','lote','unidade']
		)
	,
	
	parametros_cbge_lotes = new overlay(
		'Lotes',
		'bomdespacho:CBGE_Lotes',
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
	o grupo mudou para "malha viária" e o nome para "Arruamento"*/
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
	    'Malha Viária'
 
		)
	 ,

	parametros_hid_massa_dagua = new overlay(
		'Corpos D`Água',
		'bomdespacho:HID_Massa_Dagua',
		'Meio Ambiente'
	),

	parametros_hid_trecho_drenagem =new overlay(
		'Hidrografia',
		'bomdespacho:HID_Trecho_Drenagem',
		'Meio Ambiente'
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
	),
	
	parametro_cbge_edificacoes_bci = new overlay(
		'Edificações',
		'bomdespacho:CBGE_Edificacoes_BCI',
		'Cadastro Urbano'
	),
];
