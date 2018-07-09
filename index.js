function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return justInvoke.call(fn, thisValue, arg);
}

function setThisWithApply(fn, thisValue, arg){
  return justInvoke.apply(fn, [thisValue, arg]);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  
}