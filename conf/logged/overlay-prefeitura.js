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

var overlayHost = 'http://localhost:8080/geoserver/ows';


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
		['nome', 'jurisdicao','trecho','situacao','inicio','fim', 'administracao', 'revestimento', 'operacional', 'situacaoFisica', 'canteiroDivisorio','trafego', 'tipoPavimentacao', 'tipoVia', 'concessionaria'],
		['codigo_rbd', 'nrPistas', 'nrFaixas'],
		['Nome', 'Jurisdição', 'Nome Trecho', 'Situação', 'Início', 'Fim', 'Administração', 'Revestimento', 'Operacional', 'Situação da Via', 'Tem Canteiro Divisório?', 'Tráfego', 'Tipo de Pavimentação', 'Tipo da Via','Concessionária', 'Código da Via', 'Número de Pistas', 'Número de Faixas']
		)
	,

	parametros_tra_caminho_carrocavel = new overlay(
		'Rodovias Privadas',
		'bomdespacho:TRA_Caminho_Carrocavel',
		'Malha Viária',
		['nome'],
		['id'],
		['Nome','Identificação']
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
	    'Rodovias Federais e Estaduais',
	    'bomdespacho:TRA_Trecho_Rodoviario',
		'Malha Viária',
		['nome', 'sigla', 'jurisdicao', 'administracao', 'concessionaria', 'revestimento', 'operacional', 'situacaoFisica', 'canteiroDivisorio', 'trafego', 'tipoPavimentacao', 'tipoVia', 'trechoEmPerimetroUrbano', 'acostamento'],
		['codTrechoRod', 'limiteVelocidade', 'nrPistas', 'nrFaixas'],
		['Nome', 'Sigla', 'Jurisdicao', 'Administração', 'Concessionária', 'Revestimento', 'É operacional?', 'Situação Física', 'Canteiro Divisório?', 'Tráfego', 'Tipo de Pavimentação', 'Tipo da Via', 'Trecho em Perímetro Urbano?', 'Acostamento?', 'Código do Trecho', 'Limite de Velocidade', 'Número de Pistas', 'Número de Faixas']
 
		)
	 ,

	parametros_hid_massa_dagua = new overlay(
		'Corpos D`Água',
		'bomdespacho:HID_Massa_Dagua',
		'Meio Ambiente',
		['nome', 'regime', 'tipoMassaDagua', 'salgada', 'dominialidade', 'artificial', 'possuiTrechoDrenagem'],
		['id'],
		['Nome', 'Regime', 'Tipo de Massa Dágua', 'Aguá doce ou salgada?', 'Dominialidade', 'É artificial?', 'Possui Trecho de Drenagem?', 'Identificação']
	),

	parametros_hid_trecho_drenagem =new overlay(
		'Hidrografia',
		'bomdespacho:HID_Trecho_Drenagem',
		'Meio Ambiente',
		['nome','tipoTrechoDrenagem', 'regime', 'navegavel', 'encoberto'],
		['id','larguraMedia'],
		['Nome', 'Tipo', 'Regime', 'É Navegável?', 'Encoberto?', 'Largura Média', 'Identificação']
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
		['ANODEREFER', 'LEICRIACAO', 'GEOCODIGO'],
		['AREA'],
		['Ano de Referência', 'Lei de Criação', 'Geocódigo', 'Área']
	),

	parametros_tra_ponte = new overlay(
		'Pontes (IBGE)',
		'bomdespacho:TRA_Ponte',
		'Malha Viária',
		['descricao', 'tipoponte'],
		['vaolivreho', 'vaovertica', 'cargasupor'],
		['Descrição', 'Tipo de Ponte', 'Vão Horizontal', 'Vão Vertical', 'Carga Suportada']
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
		['nome', 'geocodigo'],
		['anoDeReferencia'],
		['Nome', 'Geocódigo', "Ano de Referência"]
	),

	parametro_lml_localidade = new overlay(
		'Localidades Rurais',
		'bomdespacho:LML_Localidade',
		'Malha Viária',
		['nome', 'geocodigo'],
		['id'],
		['Nome', 'Geocódigo', 'Identificação']
	),

	parametro_tra_quilometragem = new overlay(
		'Pontos de Quilometragem',
		'bomdespacho:TRA_Quilometragem',
		'Malha Viária',
		['codigo'],
		['id', 'km', 'coord_e', 'coord_n'],
		['Código', 'Identificação', 'N° Quilometragem', 'Coordenada UTM E', 'Coordenada UTM N']
	),
	
	parametro_cbge_edificacoes_bci = new overlay(
		'Edificações',
		'bomdespacho:CBGE_Edificacoes_BCI',
		'Cadastro Urbano',
		['inscricao', 'numero_porta', 'complemento', 'proprietario', 'ocupacao', 'utilizacao', 'del_frontal', 'sit_quadra', 'testada', 'tipo', 'alinhamento', 'situacao_edif', 'situacao_unid', 'estrutura', 'cobertura', 'parede', 'forro', 'revestimento'],
		['id', 'area_unidade_calculada', 'area_unidade_bci', 'cod_logradouro', 'cod_secao' , 'area_unidade', 'total_unidade', 'area_construida_total'],
		['Inscrição', 'Número da porta', 'Complemento', 'Proprietário', 'Ocupação', 'Utilização', 'Delimitação frontal?', 'Situação da Quadra',  'Distância da Testada', 'Tipo', 'Alinhamento', 'Situação da Edificação', 'Situação da Unidade', 'Tipo da Estrutura', 'Tipo da Cobertura', 'Tipo de Parede', 'Tipo de Forro', 'Revestimento','Identificação', 'Área da Unidade Calculada', 'Área da Unidade no BCI', 'Código de Logradouro', 'Código da Seção','Área da Unidade', 'Unidades Totais no Lote', 'Área Construída Total']

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
