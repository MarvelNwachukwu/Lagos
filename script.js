const firstbox = document.querySelector('#firstObserver');
const box = document.querySelector('#observer');
const targetElement =document.querySelector('#LagosText');
const animated = document.querySelector('#loadingBubble');

const firstObserver = new IntersectionObserver((event) => {
  event.forEach(event =>{
    if(event.isIntersecting === false){
      targetElement.classList.replace('dockToCenter', 'dockToTop')
    }else{
      targetElement.classList.replace('dockToTop', 'dockToCenter')
    }
  })
})

const newObserver =  new IntersectionObserver((event) => {
  
  event.forEach(i => {
    if(i.isIntersecting === false){
      targetElement.classList.replace('dockToCenter', 'dockToTop')
    }else{
      targetElement.classList.replace('dockToTop', 'dockToCenter')
    }
  })
})


firstObserver.observe(firstbox)
newObserver.observe(box)


animated.addEventListener('animationend', (e) => {
  document.querySelector('.loadingAnimation').style.display = 'none';
  window.scrollTo(0,1000);
  console.log(e.clientY)
})




window.addEventListener('mouseup', (event) =>{
  console.log(event.clientX +' '+ event.clientY)
})