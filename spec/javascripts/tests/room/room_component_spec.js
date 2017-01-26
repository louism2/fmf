describe('room_component', function(){

angular.module('room')

  //  beforeEach(function(){
  //    angular.module('room'))
  //  });

  beforeEach(inject(function($templateCache) {
    var directiveTemplate = null;
    var req = new XMLHttpRequest();
    req.onload = function() {
        directiveTemplate = this.responseText;
    };
    // Note that the relative path may be different from your unit test HTML file.
    // Using `false` as the third parameter to open() makes the operation synchronous.
    // Gentle reminder that boolean parameters are not the best API choice.
    req.open("get", "../../../assets/templates/room/room.template.html", false);
    req.send();
    $templateCache.put("test", directiveTemplate);
    console.log($templateCache.get("test"))
  }));

  //beforeEach(angular.module('fmfApp'))

  it('Replaces the element with the appropriate content', function() {
    //$templateRequest("/templates/room/room.template.html").then(function(html){
      //var template = angular.element(html);
      // console.log(template)
          //$compile(template)(scope);
    //});
  });

});