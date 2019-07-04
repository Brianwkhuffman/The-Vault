'use strict';
module.exports = function() {
    let theVault = {};

    var setValue = function(key, value){
        if (!key){
            return null;
        }else{
            theVault[key] = value;
        }
    }

    var getValue = function(key){
        if (theVault.hasOwnProperty(key) === false){
            return null;
        }else{
            return theVault[key];
        }
    }
    return{
        setValue: setValue,
        getValue: getValue
    }

};