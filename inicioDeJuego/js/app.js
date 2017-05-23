'use strict';

var app = angular.module('JuegoApp', []);

app.controller('TodosLospaisesConexionesCtrl', function ($scope) {
	this.paisesConexiones = [{"nombre": "argentina"}, {"nombre": "peru"}, {"nombre": "bolivia"}, 
	                 {"nombre": "brazil"}];
	
	this.paisesfallidos = [{"nombre": "Espanha"}, {"nombre": "Colombia"}];
	this.villanos = [{"nombre": "CarmenSanDiego"}, {"nombre": "Igor Cratov"}, {"nombre": "Fernando Torres"}, 
	                 {"nombre": "Alexander Patrov"}];
	this.nombrePaisDondeEstoy = function() {
		'Egipto'
	};
});