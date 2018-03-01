function wassal(targetElement,addedClass){
	let windowHeight =  window.innerHeight;
	let there = targetElement;
	let tarPosition=0;
	while( targetElement && !isNaN( targetElement.offsetTop ) ) {
        tarPosition += targetElement.offsetTop - targetElement.scrollTop;
        targetElement = targetElement.offsetParent;
    }
	window.addEventListener('scroll', function Gotthere(e) {	
		let currentScrollPositionTop = window.scrollY;
		let currentScrollPositionBottom = windowHeight + currentScrollPositionTop;
		if(tarPosition < currentScrollPositionBottom){
			there.classList.add(addedClass);
			window.removeEventListener("scroll", Gotthere)
		}
	})
}

