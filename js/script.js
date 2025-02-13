let btn = document.getElementById('btn');
btn.addEventListener('click',myFunction);
  const bgcolor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function myFunction(){
    document.body.style.backgroundColor = bgcolor();
}