var btn=document.querySelector(".btn");

	btn.addEventListener('click', function(e){	
		//console.log(e);
	    let targetElement=e.target;     	//html element obj
		//console.log(targetElement);
		let parentDiv=targetElement.parentNode.getElementsByTagName('p')[0];	//div html element obj
		//console.log(parentDiv);
		parentDiv.classList.toggle('text');
});