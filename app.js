var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["READ_ONLY"] = 1] = "READ_ONLY";
})(ROLE || (ROLE = {}));
var object = {
    name: 'Naruto',
    kills: 4,
    role: ROLE.ADMIN
};
console.log(object.role);
