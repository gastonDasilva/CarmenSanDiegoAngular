'use strict';

var app = angular.module('mapamundiApp', []);

app.controller('TodosLospaisesCtrl', function ($scope) {
	this.paises = [{"nombre": "Argentina"}, {"nombre": "Peru"}, {"nombre": "Brasil"}, {"nombre": "Chile"}];
});