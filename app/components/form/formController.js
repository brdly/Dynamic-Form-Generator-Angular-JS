(function() {

    'use strict';

    angular
        .module('formApp', [])
        .controller('formController', formController);

    function formController($http) {
        let vm = this;

        $http.get("./../../../assets/json/form.json").then(function(response) {
            vm.form = response.data;
        });
    }

})();