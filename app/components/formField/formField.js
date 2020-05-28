(function() {

    'use strict';

    function FormFieldController() {
        var vm = this;

        vm.ruleFilter = function() {
            return vm.rules.filter(function(el) {
                return el.on === vm.field.name;
            });
        }
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