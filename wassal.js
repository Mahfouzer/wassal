function debounce(fn, time) {
  let timeout;
  return function() {
    const functionCall = function(){
    	fn.apply(this, arguments)
    }
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

function wassal(targetElement,addedClass){
	let windowHeight =  window.innerHeight;
	let there = targetElement;
	let tarPosition=0;
	while( targetElement && !isNaN( targetElement.offsetTop ) ) {
        tarPosition += targetElement.offsetTop - targetElement.scrollTop;
        targetElement = targetElement.offsetParent;
    }
    	let gotThere = debounce(function(){
		let currentScrollPositionTop = window.scrollY;
		let currentScrollPositionBottom = windowHeight + currentScrollPositionTop;
		if(tarPosition < currentScrollPositionBottom){
			there.classList.add(addedClass);
			window.removeEventListener("scroll",gotThere)
		}},250);

	window.addEventListener('scroll', gotThere);

}
