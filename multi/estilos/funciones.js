window.onload = function(){
	document.querySelector('.boton').addEventListener('click',function(){
		document.querySelector('.contenedor').classList.toggle('invisible');
		this.classList.toggle('icon-right-open');
	});
}