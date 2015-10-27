describe('homeController', function () {
    'use strict';
    var homeController, scope, getDataMock;
    beforeEach(module('app'));
    beforeEach(module(function($provide){
        $provide.service('getUser', function() {
            getDataMock = sinon.stub({
                userName : "",
                userSearchvalue: function(url) {},
                data: [],
            });
            return getDataMock;
        });
    }));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        homeController = $controller('homeController', {
            $scope: scope
        });        
    }));
    it('should exist homecontroller', function() {
        expect(homeController).to.exist;
    });
    it('assigns getdatamock.items to scope.items', function () {
        expect(homeController.items).to.equal(getDataMock.items);
    });
    it('getdatamock.saveUser should have the value of actual User', function () {
        scope.saveUser("abhilash");
        expect(getDataMock.userName).to.equal("abhilash");
    });
});