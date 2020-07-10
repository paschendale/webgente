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
		'Malha Viária',
		['nome', 'jurisdicao','trecho','situacao','inicio','fim', 'administracao', 'revestimento', 'operacional', 'situacao', 'canteiroDivisorio','trafego', 'tipoPavimentacao', 'tipoVia'],
		['codigo_rbd',],
		['Nome', 'Jurisdição', 'Nome Trecho', 'Situação', 'Início', 'Fim', 'Revestimento', 'Operacional', 'Situação da Via', 'Tem Canteiro Divisório?', 'Tráfego', 'Tipo de Pavimentação', 'Tipo da Via','Código da Via']
		)
	,

	parametros_tra_caminho_carrocavel = new overlay(
		'Rodovias Privadas',
		'bomdespacho:TRA_Caminho_Carrocavel',
		'Malha Viária',
		['nome'],
		['id'],
		['Nome','ID']
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
		['Unificada com quadra:', 'Distrito','Setor','Quadra']
		)
	,

	parametros_tra_trecho_arruamento = new overlay(
		'Arruamentos',
		'bomdespacho:CBGE_Trecho_Arruamento',
		'Malha Viária',
		['tipo', 'nome_logradouro', 'secao_d', 'secao_e'],
		[ 'codigo'],
		['Tipo', 'Nome', 'Seção Direita', 'Seção Esquerda','Código de Logradouro']
		)
	,
	parametros_tra_trecho_rodoviario =new overlay(
	    'Trecho Rodoviario'
	    'bomdespacho:TRA_Trecho_Rodoviario',
		'Malha Viária',
		['nome', 'sigla', 'jurisdicao', 'administracao', 'concessionaria', 'revestimento', 'operacional', 'situacaoFisica', 'canteiroDivisorio', 'trafego', 'tipoPavimentacao', 'tipoVia', 'trechoEmPerimetroUrbano', 'acostamento'],
		['codTrechoRod'],
		['Nome', 'Sigla', 'Jurisdicao', 'Administração', 'Concessionária', 'Revestimento', 'É operacional?', 'Situação Física', 'Canteiro Divisório?', 'Tráfego', 'Tipo de Pavimentação', 'Tipo da Via', 'Trecho em Perímetro Urbano?', 'Acostamento?', 'Código do Trecho']
 
		)
	 ,

	parametros_hid_massa_dagua = new overlay(
		'Corpos D`Água',
		'bomdespacho:HID_Massa_Dagua',
		'Meio Ambiente',
		['nome', 'regime', 'tipoMassaDagua', 'salgada', 'dominialidade', 'artificial', 'possuiTrechoDrenagem'],
		[],
		['Nome', 'Regime', 'Tipo de Massa Dágua', 'Aguá doce ou salgada?', 'Dominialidade', 'É artificial?', 'Possui Trecho de Drenagem?']
	),

	parametros_hid_trecho_drenagem =new overlay(
		'Hidrografia',
		'bomdespacho:HID_Trecho_Drenagem',
		'Meio Ambiente',
		['id', 'nome','tipoTrechoDrenagem', 'regime', 'navegavel', 'encoberto'],
		['larguraMedia'],
		['ID', 'Nome', 'Tipo', 'Regime', 'É Navegável?', 'Encoberto?', 'Largura Média']
	),

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
		['anoDeReferencia'],
		['geocodigo'],
		[ 'Ano de Referência','Geocódigo']
	),

	parametros_tra_ponte = new overlay(
		'Pontes (IBGE)',
		'bomdespacho:TRA_Ponte',
		'Malha Viária',
		['descricao', 'tipoponte'],
		[],
		['Descrição', 'Tipo de Ponte']
	),

	parametros_lml_cidade = new overlay(
		'Perímetro Urbano',
		'bomdespacho:MUB_Municipio',
		'Limites',
		[],
		['geocodigo'],
		['Geocódigo']
	),

	parametro_lml_distrito = new overlay(
		'Limites Distritais (IBGE)',
		'bomdespacho:LML_Distrito',
		'Limites',
		['nome'],
		['geocodigo'],
		['Nome', 'Geocódigo']
	),

	parametro_lml_localidade = new overlay(
		'Localidades Rurais',
		'bomdespacho:LML_Localidade',
		'Malha Viária',
		['nome'],
		['geocodigo'],
		['Nome', 'Geocódigo']
	),

	parametro_tra_quilometragem = new overlay(
		'Pontos de Quilometragem',
		'bomdespacho:TRA_Quilometragem',
		'Malha Viária',
		[],
		['id', 'codigo', 'km', 'coord_e', 'coord_n'],
		['ID', 'Código', 'N° Quilometragem', 'Coordenada UTM E', 'Coordenada UTM N']
	),
	
	parametro_cbge_edificacoes_bci = new overlay(
		'Edificações',
		'bomdespacho:CBGE_Edificacoes_BCI',
		'Cadastro Urbano',
		['inscricao', 'complemento', 'proprietario', 'ocupacao', 'utilizacao','sit_quadra', 'testada', 'tipo', 'alinhamento', 'situacao_edif', 'situacao_unid', 'estrutura', 'cobertura', 'parede', 'forro', 'revestimento'],
		['id', 'area_unidade_calculada', 'area_unidade_bci', 'cod_logradouro', 'cod_secao', 'numero_porta', 'del_frontal' , 'area_unidade', 'total_unidade', 'area_construida_total'],
		['Inscrição', 'Complemento', 'Proprietário', 'Ocupação', 'Utilização', 'Situação da Quadra',  'Distância da Testada', 'Tipo', 'Alinhamento', 'Situação da Edificação', 'Tipo da Estrutura', 'Tipo da Cobertura', 'Tipo de Parede', 'Tipo de Forro', 'Revestimento','ID', 'Área da Unidade Calculada', 'Área da Unidade no BCI', 'Código de Logradouro', 'Código da Seção', 'Número da Porta', 'Delimitação Frontal','Área da Unidade', 'Unidades Totais', 'Área Construída Total']

	),
];
