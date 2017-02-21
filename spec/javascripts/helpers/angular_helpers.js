//= require angular-mocks

function loadTemplate(path_from_templates_dir){
  inject(function($templateCache){
    var template = $templateCache.get(path_from_templates_dir)

    if(template){
      return template;
    }

    var req = new XMLHttpRequest();
    req.onload = function() {
        template = this.responseText;
        $templateCache.put(path_from_templates_dir, template);
    };

    req.open("get", "../../../assets/templates/"+path_from_templates_dir);
    req.send();
  });
}