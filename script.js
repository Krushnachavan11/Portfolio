console.log("Running");
let btn = document.getElementById("home");
btn.addEventListener("click", ()=>{
    console.log("I'm Clicked");
    
})
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


 const track = document.getElementById('carouselTrack');
  const cards = document.querySelectorAll('.carousel-card');
  let index = 0;

  function moveSlide(step) {
    const cardWidth = cards[0].offsetWidth;
    const visibleCount = Math.floor(track.offsetWidth / cardWidth);
    const maxIndex = cards.length - visibleCount;

    index += step;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }


  //Edu/Work
function showSection(id, btn) {
  document.querySelectorAll('.timeline-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}