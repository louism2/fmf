//= require angular-mocks


function getTemplate(path_from_templates_dir){
  var t = inject(function($templateCache){
    var template = $templateCache.get(path_from_templates_dir)

    if(template){
      return template;
    }

    var req = new XMLHttpRequest();
    req.onload = function() {
        template = this.responseText;
    };
    // Note that the relative path may be different from your unit test HTML file.
    // Using `false` as the third parameter to open() makes the operation synchronous.
    // Gentle reminder that boolean parameters are not the best API choice.
    req.open("get", "../../../assets/templates/"+path_from_templates_dir, false);
    req.send();
    $templateCache.put(path_from_templates_dir, template);
    return $templateCache.get(path_from_templates_dir)
  });

  return t;
}