const button = document.querySelector('#navigation ul i.btn');
const nav = document.getElementById('navigation');

	button.addEventListener('click', function(){
		nav.classList.toggle('active');
	});

const navBtn = document.querySelectorAll('#navigation ul .nav-btn');
const pages = document.querySelectorAll('#page .pages')
const iconp = document.querySelectorAll('#navigation  ul .nav-btn .iconp')
const pageLoad = document.getElementById('page-load');

	nav.addEventListener('click', function(e){
		if(e.target.className == 'iconp'){

				for(let i = 0; i < navBtn.length; i++){

					if(navBtn[i].classList.contains('location')){
						navBtn[i].classList.remove('location');	
						pages[i].classList.add('none');
					} //if

				}//for

				e.target.parentNode.classList.add('location');

				for(let j = 0; j < iconp.length; j++){

					if(e.target === iconp[j]){
						pageLoad.classList.add('none-load');

							setTimeout(function(){
								pageLoad.classList.remove('none-load');
								pages[j].classList.remove('none');
							}, 1000);

						pages[j].classList.add('none');
					}//if

				}//for

			
		}//if
		
	});//function