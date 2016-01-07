"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var func = function func() {

    var USERNAME = "jwright";

    var returnedName = "Smith";
    var realName = "Phil";

    var Person = function () {
        function Person() {
            _classCallCheck(this, Person);
        }

        _createClass(Person, [{
            key: "getName",
            value: function getName() {
                return returnedName;
            }
        }, {
            key: "setName",
            value: function setName(newName) {
                returnedName = newName;
            }
        }]);

        return Person;
    }();

    var otherPerson = new Person();
    otherPerson.setName("Jacob");
    console.log("Real Name is:", realName);
    console.log("Username is:", USERNAME);
    console.log("Other persons name is:", otherPerson.getName());
};
func();

//# sourceMappingURL=main-compiled.js.map