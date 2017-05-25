'use strict';

var app = angular.module('expedientesApp', []);

app.controller('TodosLosVillanosCtrl', function ($scope) {
	this.villanos = [{"id":1,"nombre": "CarmenSanDiego","senhia":["pelo rojo","ojos bordo"],"hobbie":["juega al golf","mira porno"]},
		{"id":2,"nombre": "Igor Cratov","senhia":["pelo rojo","ojos bordo"],"hobbie":["ve anime"," se va de putas"]}, 
		{"id":3,"nombre": "Fernando Torres","senhia":["pelo rojo","ojos bordo"],"hobbie":["pelo rojo","ojos bordo"]}, 
	                 {"id":4,"nombre": "Alexander Patrov","senhia":["pelo rojo","ojos bordo"],"hobbie":["fuma opio","se injecta heroina"]}];
	
	console.log("Inicializando");
	var self = this;

	this.seleccionarVillano = function(villano) {
		console.log("Seleccionando " + villano);
		this.villanoSeleccionado = villano;		
	};
	this.agregarsenhia = function() {
		console.log("Seleccionando " + this.senhiaAAgregar );
		this.villanoSeleccionado.senhia.push(this.senhiaAAgregar);
	};
	this.agregarhobbie = function() {
		console.log("Seleccionando " + this.hobbieAagregar );
		this.villanoSeleccionado.hobbie.push(this.hobbieAagregar);
	};
	
	this.deleteSenhia =function(senhia){
		
		console.log("Seleccionando para borrar" + senhia );
		this.villanoSeleccionado.senhia =this.villanoSeleccionado.senhia.filter(
			function(it) {
				return it!=senhia;
			})	
	}
	this.nuevo = function(){
		this.villanoSeleccionado = {};
	}
		

	
	this.aceptar = function(){
		if(this.villanoSeleccionado.id ==  null){
			console.log("Seleccionando es nuevo" );
		}else{console.log("Seleccionando ya existe" ); }
	}
	
	/*this.senhia = function(){
		this.senhiaAAgregar;
	}*/
	this.villanoSeleccionado = null;
	this.senhiaAAgregar = '';
	this.hobbieAagregar = '';
});