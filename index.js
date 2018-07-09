function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, argument){
  return fn.apply(thisValue, [argument]);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
