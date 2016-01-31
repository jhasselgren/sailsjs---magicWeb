angular.module('app.template', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('leankit/connect/leankit.connect.edit.tpl.html',
    "<div class=\"section\">\n" +
    "    <div class=\"container text-center\">\n" +
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h1>Connect to LeanKit</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit,\n" +
    "                        <br>sed eiusmod tempor incidunt ut labore et dolore magna aliqua.\n" +
    "                        <br>Ut enim ad minim veniam, quis nostrud</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row margin-bottom-sm\"\">\n" +
    "                <form>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input ng-model=\"vm.data.newLeanKitConnection.leankitUser\" type=\"email\" class=\"form-control\" placeholder=\"LeanKit User\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input ng-model=\"vm.data.newLeanKitConnection.leankitPassword\" type=\"password\" class=\"form-control\" placeholder=\"LeanKit Password\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <form>\n" +
    "            </div>\n" +
    "            <div class=\"row margin-bottom-sm\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <a ng-click=\"vm.saveLeanKitConnection()\" class=\"btn btn-primary\">Save LeanKit Information</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('leankit/connect/leankit.connect.tpl.html',
    "<div class=\"section leankit\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\" ng-if=\"!vm.gui.leankit.ok\">\n" +
    "                <jhas-leankit-connect-edit success-callback=\"vm.data.leankitConnectUpdated\"></jhas-leankit-connect-edit>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12\" ng-if=\"vm.gui.leankit.ok\">\n" +
    "                <div class=\"text-center\">\n" +
    "                    <h1>User is connected to LeanKit</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('main/main.tpl.html',
    "<div ui-view=\"trelloConnect\"></div>\n" +
    "<div ui-view=\"leanKitConnect\"></div>\n" +
    "<div class=\"section\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <h1 class=\"text-center\">Gallery</h1>\n" +
    "                <p class=\"text-center lead\">A subtitle.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <a><img src=\"http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png\" class=\"img-responsive\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('trello/connect/trello.connect.edit.tpl.html',
    "<div class=\"section\">\n" +
    "    <div class=\"container text-center\">\n" +
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h1>Connect to Trello</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit,\n" +
    "                        <br>sed eiusmod tempor incidunt ut labore et dolore magna aliqua.\n" +
    "                        <br>Ut enim ad minim veniam, quis nostrud</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <a href=\"https://trello.com/1/connect?key=7a95a75d6dcd61c79d1e3b660d9c8333&name=MagicWeb&response_type=token&scope=read,write\" target=\"_blank\" class=\"btn btn-primary\">Ask permission from Trello</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <form>\n" +
    "                        <div class=\"row margin-bottom-sm\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input ng-model=\"vm.data.newTrelloConnection.username\" type=\"text\" class=\"form-control\" placeholder=\"Current User\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input ng-model=\"vm.data.newTrelloConnection.token\" type=\"text\" class=\"form-control\" placeholder=\"Trello Token\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <a ng-click=\"vm.saveTrelloConnection()\" class=\"btn btn-primary\">Save token</a>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('trello/connect/trello.connect.tpl.html',
    "<div class=\"section trello\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\" ng-if=\"!vm.gui.trello.ok\">\n" +
    "                <jhas-trello-connect-edit success-callback=\"vm.data.trelloConnectUpdated\"></jhas-trello-connect-edit>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12\" ng-if=\"vm.gui.trello.ok\">\n" +
    "\n" +
    "                <div class=\"text-center\">\n" +
    "                    <img src=\"https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/eeffef371f07cfe5396093f998424c6c/home-taco.png\">\n" +
    "\n" +
    "                    <h1>User is connected to Trello</h1>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
