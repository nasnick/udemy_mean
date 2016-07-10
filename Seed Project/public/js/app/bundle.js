var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app.component", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "  \n        <h1>Hello There World!</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
System.register("node.component", ['angular2/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2;
    var NodeComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            NodeComponent = (function () {
                function NodeComponent() {
                }
                NodeComponent = __decorate([
                    core_2.Component({
                        selector: 'my-node',
                        template: "  \n        <h1>Node jay ess</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NodeComponent);
                return NodeComponent;
            }());
            exports_2("NodeComponent", NodeComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "node.component"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var browser_1, app_component_1, node_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (node_component_1_1) {
                node_component_1 = node_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            browser_1.bootstrap(node_component_1.NodeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJub2RlLmNvbXBvbmVudC50cyIsImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwrQ0FFVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDRkQ7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFSRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUseUNBRVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBR0Ysb0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHlDQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDSkQsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUM7WUFDeEIsbUJBQVMsQ0FBQyw4QkFBYSxDQUFDLENBQUMiLCJmaWxlIjoiLi4vLi4vLi4vU2VlZCBQcm9qZWN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCAgXG4gICAgICAgIDxoMT5IZWxsbyBUaGVyZSBXb3JsZCE8L2gxPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbm9kZScsXG4gICAgdGVtcGxhdGU6IGAgIFxuICAgICAgICA8aDE+Tm9kZSBqYXkgZXNzPC9oMT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE5vZGVDb21wb25lbnQge1xuXG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7Tm9kZUNvbXBvbmVudH0gZnJvbSBcIi4vbm9kZS5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7XG5ib290c3RyYXAoTm9kZUNvbXBvbmVudCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
