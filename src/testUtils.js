function spyOnStubMethod(o, methodName){
    if(o[methodName] === undefined)
        o[methodName] = function(){};
    return spyOn(o, methodName);
}