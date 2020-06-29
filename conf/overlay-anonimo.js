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
		prop_alternative,
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
		['nome', 'codigo_rbd'],
		['Nome','Código'],
		['jurisdicao', 'situacao', 'shape_leng', 'trecho', 'inicio', 'fim', 'revestimento', 'administracao', 'operacional', 'tipoVia', 'tipoPavimentacao', 'trafego']
		)
	,

	parametros_tra_caminho_carrocavel = new overlay(
		'Rodovias Privadas',
		'bomdespacho:TRA_Caminho_Carrocavel',
		'Malha Viária',
		['nome'],
		['Nome']
		)

	,
	
	parametros_cbge_lotes = new overlay(
		'Lotes',
		'bomdespacho:CBGE_Lotes_Cadastral',
		'Cadastro Urbano',
		['distrito','setor','quadra','lote'],
		['Distrito','Setor','Quadra','Lote']
		)
	,
	parametros_cbge_quadras = new overlay(
		'Quadras',
		'bomdespacho:CBGE_Quadras',
		'Cadastro Urbano',
		['distrito','setor','quadra'],
		['Distrito','Setor','Quadra','Lote']
		)
	,
	/* eixo de vias mudou para a base cadastral. além disso, 
	o grupo mudou para "malha viária" e o nome para "Arruamento*/
	parametros_tra_trecho_arruamento = new overlay(
		 'Arruamentos',
		 'bomdespacho:CBGE_Trecho_Arruamento',
		 'Malha Viária',
		 ['tipo', 'nome_logradouro', 'codigo'],
		 ['Tipo', 'Nome', 'Código']
		)
	,
	parametros_tra_trecho_rodoviario =new overlay(
	    'Rodovias Federais e Estaduais',
	    'bomdespacho:TRA_Trecho_Rodoviario',
	    'Malha Viária',
		['nome', 'codTrechoRod'],
		['Nome', 'Código do Trecho Rodoviario'],
		['jurisdicao', 'administracao', 'concessionaria', 'revestimento', 'operacional', 'situacaoFisica', 'canteiroDivisorio', 'trafego', 'tipoPavimentacao', 'tipoVia', 'trechoEmPerimetroUrbano', 'acostamento' ]
		)
	 ,

	parametros_hid_massa_dagua = new overlay(
		'Corpos D`Água',
		'bomdespacho:HID_Massa_Dagua',
		'Meio Ambiente',
		['nome', 'tipoMassaDagua'],
		['Nome', 'Tipo de Massa Dagua'],
		['regime']
	),

	parametros_hid_trecho_drenagem =new overlay(
		'Hidrografia',
		'bomdespacho:HID_Trecho_Drenagem',
		'Meio Ambiente',
		['nome', 'navegavel', 'tipoTrechoDrenagem'],
		['Nome', 'Navegavel', "Tipo"],
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
		['nome'],
		['Nome']
	),

	parametro_lml_localidade = new overlay(
		'Localidades Rurais',
		'bomdespacho:LML_Localidade',
		'Malha Viária',
		['nome'],
		['Nome']
	),

	parametro_tra_quilometragem = new overlay(
		'Pontos de Quilometragem',
		'bomdespacho:TRA_Quilometragem',
		'Malha Viária',
		['km', 'codigo'],
		['Quilometragem', 'Código']
	),

	parametro_cbge_edificacoes_bci = new overlay(
		'Edificações',
		'bomdespacho:CBGE_Edificacoes_BCI',
		'Cadastro Urbano',
		['inscricao', 'numero_porta'],
		['Inscrição', 'Número'],
		['area_unidade_calculada', 'area_unidade_bci', 'proprietario', 'cod_logradouro', 'cod_secao', 'ocupacao', 'utilizacao', 'del_frontal', 'area_construida_total', 'testada', 'tipo', 'alinhamento', 'situacao_edif', 'situacao_unid', 'estrutura', 'cobertura', 'parede', 'forro', 'revestimento']


	),

];
