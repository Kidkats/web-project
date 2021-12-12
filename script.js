const resbutton = document.querySelector('#container .button');

	resbutton.addEventListener('click', function() {
		nav.classList.toggle('on');
		resbutton.classList.toggle('button-on');

		setTimeout(function(){
			resbutton.classList.remove('button-off');
		},900);

		resbutton.classList.add('button-off');
	});

const button = document.querySelector('#navigation ul i.btn');
const nav = document.getElementById('navigation');
const navBtn = document.querySelectorAll('#navigation ul .nav-btn');
const pages = document.querySelectorAll('#page .pages')
const iconp = document.querySelectorAll('#navigation  ul .nav-btn .iconp')
const pageLoad = document.getElementById('page-load');

	nav.addEventListener('click', function(e){

		if(e.target == button){
			nav.classList.toggle('active');
		}

		else if(e.target.className == 'iconp'){

				for(let i = 0; i < navBtn.length; i++){

					if(navBtn[i].classList.contains('location')){
						navBtn[i].classList.remove('location');	
						pages[i].classList.add('none');
					} //if

					else if(e.target === iconp[i]){
						pageLoad.classList.add('none-load');

							setTimeout(function(){
								pageLoad.classList.remove('none-load');
								pages[i].classList.remove('none');
							}, 1000);

							pages[i].classList.add('none');
					}//else if

				}//for

				e.target.parentNode.classList.add('location');
		}//if
		
	});//function