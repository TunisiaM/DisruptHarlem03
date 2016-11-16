(function(window, undefined) {
  var dictionary = {
    "3c7dbac1-fd3d-4475-80c7-ac20c3602250": "tech",
    "e3ec948f-a61b-4344-9ce4-987c7d7f5d0e": "about us",
    "10814778-1fa9-4b8b-95e1-a89fdae1ff81": "sponser",
    "1cbbb2dc-dd9f-403e-9060-8b2f60c18ced": "contact us",
    "eb26b476-66b3-43b8-b1a9-28c0a9b38d18": "news leter",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);