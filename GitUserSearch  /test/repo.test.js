'use strict';
describe('repoController', function () {
    var repoController, mockResource, httpBackend, scope, result;
    beforeEach(module('app'));
    beforeEach(function () {
        angular.mock.inject(function ($injector) {
            httpBackend = $injector.get('$httpBackend');
            mockResource = $injector.get('getUser');
        });
    });

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        repoController = $controller('repoController', {
            $scope: scope
        });
    }));

    it('should exist repocontroller', function () {
        expect(repoController).to.exist;
    });

    it('should make a request to get the specific user', function () {
        httpBackend.when('GET', 'https://api.github.com/users/abhilashsajeev').respond(
            function () {
                result = {
                    login: 'abhilashsajeev'
                };
                return result;
            }
        );
        
        scope.name = 'abhilashsajeev';
        scope.userRepoInfo();
        httpBackend.flush();
        expect(result.login).to.equal('abhilashsajeev');
    });
});