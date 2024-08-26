'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:EditableLabel
 * @description
 * # EditableLabel
 */
angular.module('common')
    .directive('editableLabel',['$timeout',function ($timeout) {
        return {
            restrict: 'E',

            scope: {
                value: '='
            },
            templateUrl: 'scripts/common/views/editablelabel.html',
            link: function postLink(scope, element) {

                var textBox=element.find('input')[0];
                scope.editmode=false;

                scope.enterEditMode=function(){
                    scope.oldValue=scope.value;
                    scope.editmode=true;
                    $timeout(function(){
                        textBox.focus();
                    });
                };
                scope.commit=function(){
                    scope.editmode=false;
                };
                scope.cancel=function(){
                    scope.editmode=false;
                    scope.value=scope.oldValue;
                };


                scope.keyup=function(){
                    if(event.keyCode===13 ){
                        scope.commit();
                    }
                    if(event.keyCode===27){
                        scope.cancel();
                    }

                };
            }
        };
    }]);
