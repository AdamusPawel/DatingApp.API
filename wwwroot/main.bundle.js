webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You need to be logged in to access this area');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, alertify_service_1.AlertifyService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        core_1.Injectable()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());
exports.PreventUnsavedChanges = PreventUnsavedChanges;


/***/ }),

/***/ "../../../../../src/app/_models/Pagination.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());
exports.PaginatedResult = PaginatedResult;


/***/ }),

/***/ "../../../../../src/app/_resolvers/lists.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.likesParam = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Observable_1.Observable.of(null);
        });
    };
    ListsResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router, alertify_service_1.AlertifyService])
    ], ListsResolver);
    return ListsResolver;
}());
exports.ListsResolver = ListsResolver;


/***/ }),

/***/ "../../../../../src/app/_resolvers/member-detail.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(+route.params['id']).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Observable_1.Observable.of(null);
        });
    };
    MemberDetailResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, alertify_service_1.AlertifyService])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());
exports.MemberDetailResolver = MemberDetailResolver;


/***/ }),

/***/ "../../../../../src/app/_resolvers/member-edit.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Observable_1.Observable.of(null);
        });
    };
    MemberEditResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            alertify_service_1.AlertifyService,
            auth_service_1.AuthService])
    ], MemberEditResolver);
    return MemberEditResolver;
}());
exports.MemberEditResolver = MemberEditResolver;


/***/ }),

/***/ "../../../../../src/app/_resolvers/member-list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 5;
        this.pageNumber = 1;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Observable_1.Observable.of(null);
        });
    };
    MemberListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, alertify_service_1.AlertifyService])
    ], MemberListResolver);
    return MemberListResolver;
}());
exports.MemberListResolver = MemberListResolver;


/***/ }),

/***/ "../../../../../src/app/_resolvers/message.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var MessagesResolver = /** @class */ (function () {
    function MessagesResolver(userService, authService, router, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.messageContainer = 'Unread';
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Observable_1.Observable.of(null);
        });
    };
    MessagesResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService,
            auth_service_1.AuthService,
            router_1.Router,
            alertify_service_1.AlertifyService])
    ], MessagesResolver);
    return MessagesResolver;
}());
exports.MessagesResolver = MessagesResolver;


/***/ }),

/***/ "../../../../../src/app/_services/alertify.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());
exports.AlertifyService = AlertifyService;


/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var environment_prod_1 = __webpack_require__("../../../../../src/environments/environment.prod.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = environment_prod_1.environment.apiUrl;
        this.photoUrl = new BehaviorSubject_1.BehaviorSubject('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'auth/login', model, { headers: new http_1.HttpHeaders()
                .set('Content-Type', 'application/json') })
            .map(function (user) {
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.tokenString);
                _this.currentUser = user.user;
                _this.userToken = user.tokenString;
                if (_this.currentUser.photoUrl !== null) {
                    _this.changeMemberPhoto(_this.currentUser.photoUrl);
                }
                else {
                    _this.changeMemberPhoto('../../assets/user.png');
                }
            }
        });
    };
    AuthService.prototype.register = function (user) {
        return this.http
            .post(this.baseUrl + "auth/register", user, {
            headers: new http_1.HttpHeaders().set('Content-Type', 'application/json')
        });
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, angular_jwt_1.JwtHelperService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/_services/error.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return Observable_1.Observable.throw(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Observable_1.Observable.throw(modelStateErrors || serverError || 'Server error');
            }
        });
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
exports.ErrorInterceptorProvider = {
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var Pagination_1 = __webpack_require__("../../../../../src/app/_models/Pagination.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParam) {
        var paginatedResult = new Pagination_1.PaginatedResult();
        var params = new http_1.HttpParams();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page)
                .append('pageSize', itemsPerPage);
        }
        if (likesParam === 'Likers') {
            params = params.append('Likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('Likees', 'true');
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge)
                .append('maxAge', userParams.maxAge)
                .append('gender', userParams.gender)
                .append('orderBy', userParams.orderBy);
        }
        return this.authHttp
            .get(this.baseUrl + "users", { observe: 'response', params: params })
            .map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp.get(this.baseUrl + "users/" + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.authHttp.put(this.baseUrl + "users/" + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, id) {
        return this.authHttp.post(this.baseUrl + "users/" + userId + "/photos/" + id + "/setmain", {});
    };
    UserService.prototype.deletePhoto = function (userId, id) {
        return this.authHttp.delete(this.baseUrl + "users/" + userId + "/photos/" + id);
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        return this.authHttp.post(this.baseUrl + "users/" + id + "/like/" + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginatedResult = new Pagination_1.PaginatedResult();
        var params = new http_1.HttpParams();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page)
                .append('pageSize', itemsPerPage);
        }
        return this.authHttp.get(this.baseUrl + "users/" + id + "/messages", { observe: 'response', params: params })
            .map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getMessageThread = function (id, recipientId) {
        return this.authHttp.get(this.baseUrl + "users/" + id + "/messages/thread/" + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.authHttp.post(this.baseUrl + "users/" + id + "/messages", message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.authHttp.post(this.baseUrl + "users/" + userId + "/messages/" + id, {});
    };
    UserService.prototype.markAsRead = function (userId, id) {
        return this.authHttp.post(this.baseUrl + "users/" + userId + "/messages/" + id + "/read", {}).subscribe();
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet><router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, jwtHelperService) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            if (this.authService.currentUser.photoUrl !== null) {
                this.authService.changeMemberPhoto(user.photoUrl);
            }
            else {
                this.authService.changeMemberPhoto('../assets/user.png');
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, angular_jwt_1.JwtHelperService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var ngx_gallery_1 = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
var time_ago_pipe_1 = __webpack_require__("../../../../time-ago-pipe/esm5/time-ago-pipe.js");
var auth_guard_1 = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
var prevent_unsaved_changes_guard_1 = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts");
var lists_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
var member_detail_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
var member_edit_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
var member_list_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
var message_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var lists_component_1 = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
var member_card_component_1 = __webpack_require__("../../../../../src/app/members/member-card/member-card.component.ts");
var member_detail_component_1 = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
var member_edit_component_1 = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
var member_list_component_1 = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
var member_messages_component_1 = __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.ts");
var photo_editor_component_1 = __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.ts");
var messages_component_1 = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
var nav_component_1 = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var routes_1 = __webpack_require__("../../../../../src/app/routes.ts");
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var error_interceptor_1 = __webpack_require__("../../../../../src/app/_services/error.interceptor.ts");
function getAccessToken() {
    return localStorage.getItem('token');
}
exports.getAccessToken = getAccessToken;
exports.jwtConfig = {
    tokenGetter: getAccessToken,
    whiteListedDomains: ['localhost:5000']
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
                member_list_component_1.MemberListComponent,
                lists_component_1.ListsComponent,
                messages_component_1.MessagesComponent,
                member_card_component_1.MemberCardComponent,
                member_detail_component_1.MemberDetailComponent,
                member_edit_component_1.MemberEditComponent,
                photo_editor_component_1.PhotoEditorComponent,
                time_ago_pipe_1.TimeAgoPipe,
                member_messages_component_1.MemberMessagesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                ngx_bootstrap_1.TabsModule.forRoot(),
                ngx_gallery_1.NgxGalleryModule,
                ng2_file_upload_1.FileUploadModule,
                forms_1.ReactiveFormsModule,
                ngx_bootstrap_1.BsDatepickerModule.forRoot(),
                ngx_bootstrap_1.PaginationModule.forRoot(),
                ngx_bootstrap_1.ButtonsModule.forRoot(),
                http_2.HttpClientModule,
                angular_jwt_1.JwtModule.forRoot({
                    config: exports.jwtConfig
                })
            ],
            providers: [
                auth_service_1.AuthService,
                alertify_service_1.AlertifyService,
                auth_guard_1.AuthGuard,
                user_service_1.UserService,
                member_detail_resolver_1.MemberDetailResolver,
                member_list_resolver_1.MemberListResolver,
                member_edit_resolver_1.MemberEditResolver,
                prevent_unsaved_changes_guard_1.PreventUnsavedChanges,
                lists_resolver_1.ListsResolver,
                message_resolver_1.MessagesResolver,
                error_interceptor_1.ErrorInterceptorProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!registerMode\" class=\"text-center\">\r\n  <h1>Find your match</h1>\r\n  <p class=\"lead\">Come on in to find your matches... All you need to do is sign up!</p>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn btn-primary btn-lg\" (click)=\"registerToggle()\">Register</button>\r\n    <button class=\"btn btn-info btn-lg\">Learn more</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"registerMode\" class=\"container\">\r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n    <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/lists/lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\">Members who like me</button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">Members who I like</button>\r\n    </div>\r\n  </div>\r\n\r\n  <h2>{{likesParam === 'Likers' ? 'Members Who Like Me' : 'Members Who I\\'ve like'}} : {{pagination?.totalItems}}</h2>\r\n\r\n  <div class=\"row equal\">\r\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n      <app-member-card [user]=\"user\"></app-member-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"text-center\">\r\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n      (pageChanged)=\"pageChanged($event)\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\"></pagination>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var ListsComponent = /** @class */ (function () {
    function ListsComponent(userService, alertify, route, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.authService = authService;
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
        this.likesParam = 'Likers';
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ListsComponent = __decorate([
        core_1.Component({
            selector: 'app-lists',
            template: __webpack_require__("../../../../../src/app/lists/lists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            alertify_service_1.AlertifyService,
            router_1.ActivatedRoute,
            auth_service_1.AuthService])
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;


/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 5px;\r\n}\r\n\r\n.panel-body img {\r\n    width: 100%;\r\n}\r\n\r\nh5 {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    color: #3a3c41;\r\n    margin-top: 5px;\r\n}\r\n\r\nh5 small {\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    font-style: italic;\r\n}\r\n\r\nimg {\r\n    -webkit-transform: scale(1, 1);\r\n            transform: scale(1, 1);\r\n    -webkit-transition-duration: 500ms;\r\n            transition-duration: 500ms;\r\n    -webkit-transition-timing-function: ease-out;\r\n            transition-timing-function: ease-out;\r\n}\r\n\r\n.panel:hover img {\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n    -webkit-transition-duration: 500ms;\r\n            transition-duration: 500ms;\r\n    -webkit-transition-timing-function: ease-out;\r\n            transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.panel-image {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.panel:hover .member-icons {\r\n    bottom: 0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate {\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .btn {\r\n        padding: 2px 4px;\r\n        font-size: 80%;\r\n        line-height: 1;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <div class=\"panel-image\">\n      <img src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n      <ul class=\"list-inline member-icons animate text-center\">\n        <li><button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\"><i class=\"fa fa-user\"></i></button></li>\n        <li><button class=\"btn btn-primary\" (click)=\"sendLike(user.id)\"><i class=\"fa fa-heart\"></i></button></li>\n        <li><button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\" [queryParams]=\"{tab: 3}\" routerLinkActive=\"router-link-active\" ><i class=\"fa fa-envelope\"></i></button></li>\n      </ul>\n    </div>\n    <div class=\"text-center\">\n      <h5><i class=\"fa fa-user\"></i> {{user.knownAs}}, {{user.age}}</h5>\n    </div>\n    <div class=\"text-center\">\n      <h5><small>{{user.city}}</small></h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(function (data) {
            _this.alertify.success("You have liked: " + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = __decorate([
        core_1.Component({
            selector: 'app-member-card',
            template: __webpack_require__("../../../../../src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService, alertify_service_1.AlertifyService])
    ], MemberCardComponent);
    return MemberCardComponent;
}());
exports.MemberCardComponent = MemberCardComponent;


/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.panel-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.panel-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-justified > .btn-group .btn {\r\n    width: 95%;\r\n}\r\n\r\n.gallery-wrapper {\r\n    background-color: #ededed;\r\n    border-radius: 7px; \r\n    padding: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h1>{{user.knownAs}}'s Profile</h1>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"panel panel-default\">\r\n        <img src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\" class=\"profile-image thumbnail\">\r\n        <div class=\"panel-body\">\r\n          <div>\r\n            <strong>Location:</strong>\r\n            <p>{{user.city}}, {{user.country}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Age:</strong>\r\n            <p>{{user.age}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Last Active:</strong>\r\n            <p>{{user.lastActive | timeAgo}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Member Since:</strong>\r\n            <p>{{user.created | date: 'mediumDate'}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"btn-group-justified\">\r\n            <div class=\"btn-group\">\r\n              <button class=\"btn btn-primary\">Like</button>\r\n            </div>\r\n            <div class=\"btn-group\">\r\n              <button class=\"btn btn-success\" (click)=\"selectTab(3)\">Message</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n        <tabset class=\"member-tabset\" #memberTabs>\r\n          <tab heading=\"About {{user.knownAs}}\">\r\n            <h4>Description</h4>\r\n            <p>{{user.introduction}}</p>\r\n            <h4>Looking For</h4>\r\n            <p>{{user.lookingFor}}</p>\r\n          </tab>\r\n          <tab heading=\"Interests\">\r\n            <h4>Interests</h4>\r\n            <p>{{user.interests}}</p>\r\n          </tab>\r\n          <tab heading=\"Photos\">\r\n              <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>              \r\n          </tab>\r\n          <tab heading=\"Messages\">\r\n            <app-member-messages [userId]=\"user.id\"></app-member-messages>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ngx_gallery_1 = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.route.queryParams.subscribe(function (params) {
            var selectedTab = params['tab'];
            _this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery_1.NgxGalleryAnimation.Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        this.user.photos.forEach(function (photo) {
            imageUrls.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
            });
        });
        return imageUrls;
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    __decorate([
        core_1.ViewChild('memberTabs'),
        __metadata("design:type", ngx_bootstrap_1.TabsetComponent)
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    MemberDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-member-detail',
            template: __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            alertify_service_1.AlertifyService,
            router_1.ActivatedRoute])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());
exports.MemberDetailComponent = MemberDetailComponent;


/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.panel-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.panel-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-justified > .btn-group .btn {\r\n    width: 95%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h1>Your profile</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"alert alert-info\" [hidden]=\"!editForm.dirty\">\n        <p>\n          <strong>Information:</strong> You have made changes. Any unsaved changes will be lost!</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n\n        <img class=\"profile-image thumbnail\" src=\"{{photoUrl}}\" alt=\"{{user.knownAs}}\">\n        <div class=\"panel-body\">\n\n          <div>\n            <strong>Location:</strong>\n            <p>{{user.city}}, {{user.country}}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{user.age}}</p>\n          </div>\n          <div>\n            <strong>Last active:</strong>\n            <p>{{user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member since:</strong>\n            <p>{{user.created | date: 'longDate'}}</p>\n          </div>\n        </div>\n\n        <div class=\"panel-footer\">\n          <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save changes</button>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"Edit profile\">\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\n              <h4>Description:</h4>\n              <textarea name=\"introduction\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.introduction\"></textarea>\n              <hr>\n              <h4>Looking for:</h4>\n              <textarea name=\"lookingFor\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.lookingFor\"></textarea>\n              <hr>\n              <h4>Interests:</h4>\n              <textarea name=\"interests\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.interests\"></textarea>\n\n              <h4>Location:</h4>\n              <div class=\"form-inline\">\n                <label for=\"city\">City: </label>\n                <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"user.city\">\n                <label for=\"city\">Country: </label>\n                <input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"user.country\">\n              </div>\n            </form>\n          </tab>\n          <tab heading=\"Edit photos\">\n            <app-photo-editor [photos]=\"user.photos\" (getMemberPhotoChange)=\"updateMainPhoto($event)\"></app-photo-editor>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(route, alertify, userService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.alertify.success('Profile updated successfully');
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    __decorate([
        core_1.ViewChild('editForm'),
        __metadata("design:type", forms_1.NgForm)
    ], MemberEditComponent.prototype, "editForm", void 0);
    MemberEditComponent = __decorate([
        core_1.Component({
            selector: 'app-member-edit',
            template: __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            alertify_service_1.AlertifyService,
            user_service_1.UserService,
            auth_service_1.AuthService])
    ], MemberEditComponent);
    return MemberEditComponent;
}());
exports.MemberEditComponent = MemberEditComponent;


/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".equal {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -ms-flex-line-pack: end;\r\n        align-content: flex-end;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"text-center\">\r\n    <h2>Your matches - {{pagination.totalItems}} found</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"minAge\">Age From</label>\r\n        <input type=\"number\" class=\"form-control\" style=\"width: 70px\" name=\"minAge\" id=\"minAge\" [(ngModel)]=\"userParams.minAge\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"maxAge\">Age To</label>\r\n        <input type=\"number\" class=\"form-control\" style=\"width: 70px\" name=\"maxAge\" id=\"maxAge\" [(ngModel)]=\"userParams.maxAge\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gender\">Show: </label>\r\n        <select name=\"gender\" id=\"gender\" style=\"width: 130px\" class=\"form-control\" [(ngModel)]=\"userParams.gender\">\r\n          <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\r\n            {{gender.display}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left: 10px\">Apply Filter</button>\r\n      <button type=\"button\" class=\"btn btn-info\" style=\"margin-left: 10px\" (click)=\"resetFilters()\">Reset Filter</button>\r\n      <div class=\"pull-right\">\r\n        <label style=\"margin-right: 10px\">Order By: </label>\r\n        <div class=\"btn-group\">\r\n          <button name=\"orderBy\" [(ngModel)]=\"userParams.orderBy\" btnRadio=\"lastActive\" class=\"btn btn-primary\">Last Active</button>\r\n          <button name=\"orderBy\" [(ngModel)]=\"userParams.orderBy\" btnRadio=\"created\" class=\"btn btn-primary\">Newest Members</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"row equal\">\r\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n      <app-member-card [user]=\"user\"></app-member-card>\r\n    </div>\r\n  </div>\r\n</div> \r\n\r\n<div class=\"text-center\">\r\n  <pagination \r\n    [boundaryLinks]=\"true\" \r\n    [totalItems]=\"pagination.totalItems\" \r\n    [itemsPerPage]=\"pagination.itemsPerPage\"\r\n    [(ngModel)]=\"pagination.currentPage\" \r\n    (pageChanged)=\"pageChanged($event)\"\r\n    class=\"pagination-sm\"\r\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(route, userService, alertify) {
        this.route = route;
        this.userService = userService;
        this.alertify = alertify;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService
            .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error('cannot load users.');
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MemberListComponent = __decorate([
        core_1.Component({
            selector: 'app-member-list',
            template: __webpack_require__("../../../../../src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, user_service_1.UserService, alertify_service_1.AlertifyService])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;


/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-primary {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #b3a9a9;\r\n}\r\n\r\n.img-circle {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.panel-body {\r\n    overflow-y: scroll;\r\n    height: 400px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-body\">\n    <div *ngIf=\"messages?.length == 0\">\n      <p>No messages yet... say hi by using the message box below</p>\n    </div>\n\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <!-- To Them -->\n        <div *ngIf=\"message.senderId == userId\">\n          <span class=\"chat-img pull-left\">\n            <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"img-circle\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\n              <small class=\"text-muted pull-right\">\n                <span class=\"fa fa-clock-o\"> {{message.messageSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n\n        <!-- To Me -->\n        <div *ngIf=\"message.senderId != userId\">\n          <span class=\"chat-img pull-right\">\n            <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"img-circle\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <small class=\"text-muted\">\n                <span class=\"fa fa-clock-o\"> {{message.messageSent | timeAgo}}</span>\n                <span *ngIf=\"!message.isRead\" class=\"text-muted text-danger\">(Unread)</span>\n                <span *ngIf=\"message.isRead\" class=\"text-muted text-success\">(Read {{message.dateRead | timeAgo}})</span>\n              </small>\n              <strong class=\"primary-font pull-right\">{{message.senderKnownAs}}</strong>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"panel-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"send a private message\" required name=\"content\" [(ngModel)]=\"newMessage.content\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary btn-sm\" [disabled]=\"!messageForm.valid\">Send</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, authService, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodedToken.nameid;
        this.userService
            .getMessageThread(currentUserId, this.userId)
            .do(function (messages) {
            messages.forEach(function (message) {
                if (!message.isRead && message.recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, message.id);
                }
            });
        })
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.userId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe(function (message) {
            _this.messages.unshift(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MemberMessagesComponent.prototype, "userId", void 0);
    MemberMessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-member-messages',
            template: __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            auth_service_1.AuthService,
            alertify_service_1.AlertifyService])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());
exports.MemberMessagesComponent = MemberMessagesComponent;


/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.thumbnail {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.my-drop-zone { border: dotted 3px lightgray; }\r\n\r\n.nv-file-over { border: dotted 3px red; }\r\n\r\n/* Default class applied to drop zones on over */\r\n\r\n.another-file-over-class { border: dotted 3px green; }\r\n\r\n.input[type=file] {\r\n    color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img  class=\"thumbnail\" src=\"{{photo.url}}\" alt=\"\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-xs\"\n       (click)=\"setMainPhoto(photo)\"\n       [ngClass]=\"photo.isMain ? 'btn-success active' : 'btn-default'\"\n       [disabled]=\"photo.isMain\">Main</button>\n      <button type=\"button\" class=\"btn btn-xs btn-danger\"\n      (click)=\"deletePhoto(photo.id)\"\n      [disabled]=\"photo.isMain\">\n      <i class=\"fa fa-trash-o \"></i></button>\n    </div>\n  </div>\n</div>  \n\n<div class=\"row\">\n \n  <div class=\"col-md-4\">\n\n      <h3>Add photos</h3>\n\n      <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n      class=\"well my-drop-zone\">\n      Drop Photos here\n    </div>\n\n      Multiple\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n      Single\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-8\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n      <h3>Upload queue</h3>\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n      <table class=\"table\">\n          <thead>\n          <tr>\n              <th width=\"50%\">Name</th>\n              <th>Size</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let item of uploader.queue\">\n              <td><strong>{{ item?.file?.name }}</strong></td>\n              <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n\n          </tr>\n          </tbody>\n      </table>\n\n      <div>\n          <div>\n              Queue progress:\n              <div class=\"progress\">\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n              </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-success btn-s\"\n                  (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n              <span class=\"glyphicon glyphicon-upload\"></span> Upload\n          </button>\n          <button type=\"button\" class=\"btn btn-warning btn-s\"\n                  (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n              <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n          </button>\n          <button type=\"button\" class=\"btn btn-danger btn-s\"\n                  (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n              <span class=\"glyphicon glyphicon-trash\"></span> Remove\n          </button>\n      </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.getMemberPhotoChange = new core_1.EventEmitter();
        this.hasBaseDropZoneOver = false;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: this.baseUrl +
                'users/' +
                this.authService.decodedToken.nameid +
                '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemberPhoto(photo.url);
                    _this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService
            .setMainPhoto(this.authService.decodedToken.nameid, photo.id)
            .subscribe(function () {
            _this.currentMain = _.find(_this.photos, { isMain: true });
            _this.currentMain.isMain = false;
            photo.isMain = true;
            _this.authService.changeMemberPhoto(photo.url);
            _this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this photo?', function () {
            _this.userService
                .deletePhoto(_this.authService.decodedToken.nameid, id)
                .subscribe(function () {
                _.remove(_this.photos, { id: id });
                _this.alertify.success('Photo has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete photo');
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberPhotoChange", void 0);
    PhotoEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-editor',
            template: __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            user_service_1.UserService,
            alertify_service_1.AlertifyService])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());
exports.PhotoEditorComponent = PhotoEditorComponent;


/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    margin-top: 15px;\r\n}\r\n\r\n.img-circle {\r\n    max-height: 50px;\r\n}\r\n\r\n.table > tbody > tr > td {\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope\"></i> Unread\r\n      </button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope-open\"></i> Inbox\r\n      </button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-paper-plane\"></i> Outbox\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages?.length == 0\">\r\n    <h3>No messages</h3>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages?.length > 0\">\r\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\r\n      <tr>\r\n        <th style=\"width: 40%\">Message</th>\r\n        <th style=\"width: 20%\">From / To</th>\r\n        <th style=\"width: 20%\">Sent / Received</th>\r\n        <th style=\"width: 20%\">&nbsp;</th>\r\n      </tr>\r\n\r\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', \r\n                  messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab: 3}\">\r\n        <td>{{message.content}}</td>\r\n        <td>\r\n          <div *ngIf=\"messageContainer != 'Outbox'\">\r\n            <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"img-circle\">\r\n            <strong>{{message.senderKnownAs}}</strong>\r\n          </div>\r\n          <div *ngIf=\"messageContainer == 'Outbox'\">\r\n            <img src=\"{{message.recipientPhotoUrl}}\" alt=\"{{message.recipientKnownAs}}\" class=\"img-circle\">\r\n            <strong>{{message.recipientKnownAs}}</strong>\r\n          </div>\r\n        </td>\r\n        <td>{{message.messageSent | timeAgo}}</td>\r\n        <td>\r\n          <button class=\"btn btn-danger\" (click)=\"deleteMessage(message.id); $event.stopPropagation();\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <div class=\"text-center\">\r\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n        (pageChanged)=\"pageChanged($event)\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\"></pagination>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(authService, alertify, route, userService) {
        this.authService = authService;
        this.alertify = alertify;
        this.route = route;
        this.userService = userService;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data['messages'].result;
            _this.pagination = data['messages'].pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService
            .getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe(function (res) {
            _this.messages = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete the message?', function () {
            _this.userService.deleteMessage(id, _this.authService.decodedToken.nameid).subscribe(function () {
                _.remove(_this.messages, { id: id });
                _this.alertify.success('Message has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete the message');
            });
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            alertify_service_1.AlertifyService,
            router_1.ActivatedRoute,
            user_service_1.UserService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu li, .dropdown-toggle {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    margin-top: 3px;\r\n    margin-right: 3px;\r\n    max-height: 44px;\r\n    border: 1px solid lightpink;\r\n    display: inline;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\" >Dating App</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul *ngIf=\"loggedIn()\" class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/members']\">Matches</a></li>\r\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/lists']\">Lists</a></li>\r\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/messages']\">Messages</a></li>\r\n      </ul>\r\n\r\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"navbar-form navbar-right\" (ngSubmit)=\"login()\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" #username=\"ngModel\" placeholder=\"Username\" class=\"form-control\" required name=\"username\" [(ngModel)]=\"model.username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" #password=\"ngModel\" placeholder=\"Password\" class=\"form-control\"  required name=\"password\" [(ngModel)]=\"model.password\">\r\n        </div>\r\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\r\n      </form>\r\n\r\n      <ul *ngIf=\"loggedIn()\" class=\"nav navbar-nav navbar-right\">\r\n        <li><img src=\"{{photoUrl}}\" alt=\"{{authService.currentUser?.knownAs}}\"></li>  \r\n        <li class=\"dropdown\" dropdown>\r\n          <a (click)=\"false\" class=\"dropdown-toggle\" dropdownToggle>Welcome {{authService.decodedToken?.unique_name | titlecase}} <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\" *dropdownMenu>\r\n            <li><a [routerLink]=\"['/member/edit']\"><i class=\"fa fa-user\"></i> Edit Profile</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n\r\n    </div><!--/.navbar-collapse -->\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.alertify.success('Logged in successfully');
        }, function (error) {
            _this.alertify.error('Failed to log in');
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.alertify.message('Logged out');
        this.router.navigate(['/home']);
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, alertify_service_1.AlertifyService, router_1.Router])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n    padding: 15px 25px 0px 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div style=\"margin-top: -20px;\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n\r\n      <h2 class=\"text-center text-primary\">Sign Up</h2>\r\n\r\n      <hr>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\r\n        <label class=\"radio-inline\">\r\n          <input type=\"radio\" value=\"male\" formControlName=\"gender\">Male\r\n        </label>\r\n        <label class=\"radio-inline\">\r\n          <input type=\"radio\" value=\"female\" formControlName=\"gender\">Female\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').errors && registerForm.get('username').touched}\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">\r\n          Username is required\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')}\">\r\n        <input class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\">\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">Known as is required</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')}\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Date of Birth\" bsDatepicker [bsConfig]=\"bsConfig\" formControlName=\"dateOfBirth\">\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">Date of birth is required</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('city').touched && registerForm.get('city').hasError('required')}\">\r\n        <input class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">City is required</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('country').touched && registerForm.get('country').hasError('required')}\">\r\n        <input class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">Country is required</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('password').errors && registerForm.get('password').touched}\">\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\r\n          Password is required\r\n        </span>\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">\r\n          Password must be at least 4 characters\r\n        </span>\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">\r\n          Password cannot exceed 8 characters\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('confirmPassword').errors \r\n    && registerForm.get('confirmPassword').touched || registerForm.get('confirmPassword').touched \r\n    && registerForm.hasError('mismatch')}\">\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">\r\n          Confirm password is required\r\n        </span>\r\n        <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').touched \r\n        && registerForm.hasError('mismatch')\">\r\n          Confirm password must match password\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group text-center\">\r\n        <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var alertify_service_1 = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify, fb, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new core_1.EventEmitter();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-red'
        };
        this.createRegisterForm();
        // this.registerForm = new FormGroup({
        //   username: new FormControl('', Validators.required),
        //   password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
        //   confirmPassword: new FormControl('', Validators.required)
        // }, this.passwordMatchValidator);
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', forms_1.Validators.required],
            knownAs: ['', forms_1.Validators.required],
            dateOfBirth: [null, forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            country: ['', forms_1.Validators.required],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(8)]],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            alertify_service_1.AlertifyService,
            forms_1.FormBuilder,
            router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var member_list_component_1 = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
var messages_component_1 = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
var lists_component_1 = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
var member_detail_component_1 = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
var member_detail_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
var member_list_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
var member_edit_component_1 = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
var member_edit_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
var prevent_unsaved_changes_guard_1 = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts");
var lists_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
var message_resolver_1 = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");
exports.appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'members', component: member_list_component_1.MemberListComponent, resolve: { users: member_list_resolver_1.MemberListResolver } },
            { path: 'members/:id', component: member_detail_component_1.MemberDetailComponent, resolve: { user: member_detail_resolver_1.MemberDetailResolver } },
            { path: 'member/edit', component: member_edit_component_1.MemberEditComponent,
                resolve: { user: member_edit_resolver_1.MemberEditResolver },
                canDeactivate: [prevent_unsaved_changes_guard_1.PreventUnsavedChanges]
            },
            { path: 'messages', component: messages_component_1.MessagesComponent, resolve: { messages: message_resolver_1.MessagesResolver } },
            { path: 'lists', component: lists_component_1.ListsComponent, resolve: { users: lists_resolver_1.ListsResolver } }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];


/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    apiUrl: 'api/'
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map