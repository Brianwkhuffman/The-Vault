'use strict';
module.exports = function() {
    let theVault = {};

    var getValue = function(key){
        if (theVault.hasOwnProperty(key) === false){
            return null;
        }else{
            return theVault[key];
        }
    }
    
    var setValue = function(key, value){
            theVault[key] = value;
    }
    
    return{
        setValue: setValue,
        getValue: getValue
    }

};