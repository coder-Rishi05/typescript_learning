// we predefined the properties and setup their values
// isme 
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = " abandoned status code 500";
    StatusCode["NOTFOUND"] = " not found status code 404";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.ABANDONED, StatusCode.NOTFOUND);
// userRoles.SUPER_ADMIN
