var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Myclass.prototype.showName = function (uname, email) {
        console.log("welcome to ts ".concat(uname, " ").concat(email));
    };
    return Myclass;
}());
var userdata = ['admin', 'manager'];
console.log.apply(console, userdata);
var classDemo = new Myclass();
classDemo.showName('admin', 'saurabh@test.com');
