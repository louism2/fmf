describe('room_component', function(){

  var $compile,
      $rootScope,
      temp;

  beforeEach(function(){

    //console.log(temp)
  })

  //beforeEach(angular.module('fmfApp'))



  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    loadTemplate('room/room.template.html');
  }));

  it('Replaces the element with the appropriate content', function($templateCache) {
    var t = $templateCache.get('room/room.template.html')
    var el = $compile(t)($rootScope);
    $rootScope.$digest();
    console.log(el.html());
  });

});