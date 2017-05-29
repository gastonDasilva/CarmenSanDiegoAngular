'use strict';

var app = angular.module('JuegoApp', []);

app.controller('TodosLospaisesConexionesYVillanosCtrl', function ($scope) {
	this.paisesConexiones = [{"nombre": "Argentina"}, {"nombre": "Peru"}, {"nombre": "Bolivia"}, 
	                 {"nombre": "Brazil"}];
	
	this.paisesfallidos = [{"nombre": "Espanha"}, {"nombre": "Colombia"}];
	this.villanos = [{"id":1,"nombre": "CarmenSanDiego"}, {"id":2,"nombre": "Igor Cratov"}, {"id":3,"nombre": "Fernando Torres"}, 
	                 {"id":4,"nombre": "Alexander Patrov"}];
	$scope.paisDondeEstoy = {"nombre": "Egipto"};
	$scope.paisAViajar = null;
	$scope.villanoAArrestar = null;
	var self = this;
	this.eligirPaisAViajar = function(pais){
		console.log("Seleccionando pais para viajar " + pais.nombre );
		self.paisAViajar= pais;	
	}
	this.selectedVillanoAArrestar = null;
	
	
	this.viajar = function(){
		console.log("Listo para viajar " + this.paisAViajar.nombre );
		this.paisDondeEstoy = this.paisAViajar;
	}
	
	this.generearOrdenDeArresto = function(){
		console.log("Listo para viajar " + self.selectedVillanoAArrestar.nombre );
		self.villanoAArrestar = self.selectedVillanoAArrestar;
	}
});