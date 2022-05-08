const btn = document.querySelector('.open')
const nB = document.querySelector('.nav-box')
const close = document.querySelector('.close')
const body = document.querySelector('body')


btn.addEventListener('click', ()=>{

	nB.className += ' richard'
	body.className+= ' overflow-hidden'

})

close.addEventListener('click', ()=>{
		nB.classList.remove('richard')
		body.classList.remove('overflow-hidden')
})	






