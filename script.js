const hendClick = (offset)=>{
  const activeSlide = document.guerySelector("[date active]")
  const slides = [...document.gueryselectorAll("slide")]
  const currentindex = [...slides].indexOf(activeSlide)
  let newIndex = currentindex+offset

  if (newIndex < 0) newIndex = slides.lenght-1
  if (newIndex >= slides.lenght) newIndex = 0
  slides[newindex].dataset.active = true
  delete activeSlide.dataset.active
}
const onNext = () => hendClick(1)
const onPrev = () => hendClick(-1)