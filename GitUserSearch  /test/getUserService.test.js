'use strict';
describe('getUserService', function () {
    var mockResource, httpBackend, result;
    beforeEach(module('app'));
    beforeEach(function () {
        angular.mock.inject(function ($injector) {
            httpBackend = $injector.get('$httpBackend');
            mockResource = $injector.get('getUser');
        });
    });
    
    it('should not exist userName', inject(function(getUser) {
        expect(getUser.userName).to.equal("");
    }));
    it('should not exist userName', function () {
        expect(mockResource.userName).to.equal("");
    });
    it('should make a request to get the user api', function () {
        httpBackend.when('GET', 'https://api.github.com/search/users?q=abhilash').respond(
            function () {
                result = {
                    name: 'abhilash'
                };
                return result;
            }
        );
        mockResource.userSearchvalue('abhilash');
        httpBackend.flush();
        expect(result.name).to.equal('abhilash');
    });
});