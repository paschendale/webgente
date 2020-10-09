/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */

L.drawVersion = '0.2.4-dev';

L.drawLocal = {
	draw: {
		toolbar: {
			actions: {
				title: 'Cancelar desenho',
				text: 'Cancelar'
			},
			undo: {
				title: 'Deletar último ponto do desenho',
				text: 'Deletar último ponto'
			},
			buttons: {
				polyline: 'Desenhar uma linha',
				polygon: 'Desenhar um polígono',
				rectangle: 'Desenhar um retângulo',
				circle: 'Desenhar um círculo',
				marker: 'Desenhar um marcador'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Click and drag to draw circle.'
				}
			},
			marker: {
				tooltip: {
					start: 'Click map to place marker.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Click to start drawing shape.',
					cont: 'Click to continue drawing shape.',
					end: 'Click first point to close this shape.'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> shape edges cannot cross!',
				tooltip: {
					start: 'Click to start drawing line.',
					cont: 'Click to continue drawing line.',
					end: 'Click last point to finish line.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Click and drag to draw rectangle.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Arraste o mouse e solte para terminar o desenho.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Salvar mudanças',
					text: 'Salvar'
				},
				cancel: {
					title: 'Cancel editing, discards all changes.',
					text: 'Cancelar'
				}
			},
			buttons: {
				edit: 'Editar camadas',
				editDisabled: 'Não há camadas para editar',
				remove: 'Apagando camadas',
				removeDisabled: 'Não há camadas para deletar'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Drag handles, or marker to edit feature.',
					subtext: 'Click cancel to undo changes.'
				}
			},
			remove: {
				tooltip: {
					text: 'Clique na geometria para remover'
				}
			}
		}
	}
};
