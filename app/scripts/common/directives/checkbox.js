/**
 * Created by rohitghatol on 1/12/15.
 */


angular.module('common')
    .directive('checkbox',[function () {
        return {
            restrict: 'E',

            scope: {
                check: '='
            },
            template: '<span class="col-md-1 glyphicon" ng-class="check?\'glyphicon-ok\': \'glyphicon-unchecked\'" ng-click="toggle()"></span>',
            link: function postLink(scope, element) {
                scope.toggle=function(){
                    scope.check=!scope.check;
                }
            }

        }
    }]);

