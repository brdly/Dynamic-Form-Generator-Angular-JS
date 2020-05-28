(function() {

    'use strict';

    function FormInputController() {
        let vm = this;

        // vm.rules.forEach(function(rule) {
        //     console.log(rule);
        // })
    }

    angular
        .module('formApp')
        .component('formInput', {
            templateUrl: './app/components/formInput/formInput.html',
            controller: FormInputController,
            bindings: {
                field: '=',
                rules: '='
            }
        })

})();