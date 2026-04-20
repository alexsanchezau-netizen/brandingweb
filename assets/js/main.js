// BrandingWeb.iA — Main Scripts
// Alex Sánchez — @alexsanchezia

const cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
(function anim(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim)})();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='48px';ring.style.height='48px';ring.style.opacity='0.6'});
  el.addEventListener('mouseleave',()=>{ring.style.width='32px';ring.style.height='32px';ring.style.opacity='1'});
});
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>40));
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:0.12});
reveals.forEach(el=>obs.observe(el));
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a');
const navObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.remove('active'));const a=document.querySelector('.nav-links a[href="#'+e.target.id+'"]');if(a)a.classList.add('active');}}),{threshold:0.5});
sections.forEach(s=>navObs.observe(s));

// Mobile menu
const menuBtn=document.getElementById('menuBtn');
const mobileMenu=document.getElementById('mobileMenu');
const closeMenu=document.getElementById('closeMenu');
if(menuBtn){menuBtn.addEventListener('click',()=>mobileMenu.classList.add('open'));}
if(closeMenu){closeMenu.addEventListener('click',()=>mobileMenu.classList.remove('open'));}
document.querySelectorAll('.mobile-link').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));