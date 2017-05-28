'use strict';

var app = angular.module('expedientesApp', []);

app.controller('TodosLosVillanosCtrl', function ($scope) {
	this.villanos = [{"id":1,"nombre": "CarmenSanDiego", "sexo":"Femenino",
					"senhias":["pelo rojo","ojos bordo"],"hobbies":["juega al golf","mira porno"]},
	                 {"id":2,"nombre": "Igor Cratov", "sexo":"Masculino",
					"senhias":["pelo rojo","ojos bordo"],"hobbies":["ve anime"," se va de putas"]}, 
	                 {"id":3,"nombre": "Fernando Torres", "sexo":"Masculino",
					"senhias":["pelo rojo","ojos bordo"],"hobbies":["pelo rojo","ojos bordo"]}, 
	                 {"id":4,"nombre": "Alexander Patrov", "sexo":"Masculino",
					"senhias":["pelo rojo","ojos bordo"],"hobbies":["fuma opio","se injecta heroina"]}];
	
	console.log("Inicializando");
	var self = this;

	this.seleccionarVillano = function(villano) {
		console.log("Seleccionando " + villano);
		this.villanoSeleccionado = villano;		
	};
	this.agregarsenhia = function() {
		console.log("Seleccionando " + this.senhiaAAgregar );
		this.villanoSeleccionado.senhias.push(this.senhiaAAgregar);
	};
	this.agregarhobbie = function() {
		console.log("Seleccionando " + this.hobbieAagregar );
		this.villanoSeleccionado.hobbies.push(this.hobbieAagregar);
	};
	
	this.deleteSenhia =function(senhia){
		console.log("Seleccionando para borrar" + senhia );
		this.villanoSeleccionado.senhias =this.villanoSeleccionado.senhias.filter(
			function(it) {
				return it!=senhia;
			})	
	}
	
	this.deleteHobbie =function(hobbie){
		console.log("Seleccionando para borrar" + hobbie );
		this.villanoSeleccionado.hobbies =this.villanoSeleccionado.hobbies.filter(
			function(it) {
				return it!=hobbie;
			})	
	}
	
	this.deleteVillano =function(villano){
		console.log("Seleccionando para borrar" + villano.nombre );
		this.villanos =this.villanos.filter(
			function(it) {
				return it.id!=villano.id;
			})	
	}
	this.nuevo = function(){
		this.villanoSeleccionado = {"id":this.villanos.length + 1,"nombre":"","senhias":[],"hobbies":[]};
	}
		

	
	this.aceptar = function(){
		var villanoFind = this.villanos.find(
				function(it) {
					return it.id == self.villanoSeleccionado.id;
					});
		if(villanoFind==  null){
			console.log("Seleccionando es nuevo" );
			this.villanos.push(this.villanoSeleccionado);
		}else{console.log("Seleccionando ya existe" ); }
	}
	
	/*this.senhia = function(){
		this.senhiaAAgregar;
	}*/
	this.villanoSeleccionado = null;
	this.senhiaAAgregar = '';
	this.hobbieAagregar = '';
});