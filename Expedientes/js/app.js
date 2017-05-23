'use strict';

var app = angular.module('expedientesApp', []);

app.controller('TodosLosVillanosCtrl', function ($scope) {
	this.villanos = [{"nombre": "CarmenSanDiego"}, {"nombre": "Igor Cratov"}, {"nombre": "Fernando Torres"}, 
	                 {"nombre": "Alexander Patrov"}];
});