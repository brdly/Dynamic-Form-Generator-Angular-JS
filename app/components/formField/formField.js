(function() {

    'use strict';

    function FormFieldController($scope) {
        var vm = this;

        $scope.rulesFiltered=[];

        $scope.$watch('rules',function(){
            $scope.fulesFiltered = vm.rules.filter(function(el) {
                return el.on === vm.field.name;
            });
        })
    }

    angular
        .module('formApp')
        .component('formField', {
            templateUrl: './app/components/formField/formField.html',
            controller: FormFieldController,
            bindings: {
                field: '=',
                rules: '='
            }
        })

})(); 