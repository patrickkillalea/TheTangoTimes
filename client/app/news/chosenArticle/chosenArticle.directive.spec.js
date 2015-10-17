'use strict';

describe('Directive: chosenArticle', function () {

  // load the directive's module
  beforeEach(module('theTangoTimesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chosen-article></chosen-article>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chosenArticle directive');
  }));
});