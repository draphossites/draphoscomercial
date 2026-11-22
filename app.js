const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('[data-image]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();document.querySelector('#dialog-title').textContent=link.dataset.title;const img=document.querySelector('#dialog-image');img.src=link.dataset.image;img.alt='Apresentação do projeto '+link.dataset.title;dialog.showModal()}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close()}});
document.querySelectorAll('.whatsapp').forEach(link=>{const message=link.dataset.plan?`Olá, Junior! Tenho interesse no plano ${link.dataset.plan} da Draphos. Podemos conversar?`:'Olá, Junior! Quero conhecer o Plano de Sucesso Digital da Draphos para minha loja.';link.href='https://wa.me/5551999862335?text='+encodeURIComponent(message);link.target='_blank';link.rel='noopener noreferrer'});

const track=document.querySelector('#projects-track');
const previous=document.querySelector('#projects-prev');
const next=document.querySelector('#projects-next');
function syncCarousel(){previous.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft>=track.scrollWidth-track.clientWidth-3;}
function moveProjects(direction){const card=track.querySelector('.real-work');const gap=parseFloat(getComputedStyle(track).columnGap)||0;track.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
previous.addEventListener('click',()=>moveProjects(-1));next.addEventListener('click',()=>moveProjects(1));track.addEventListener('scroll',syncCarousel,{passive:true});window.addEventListener('resize',syncCarousel);syncCarousel();
const plansTrack=document.querySelector('#plans-track');
const plansPrevious=document.querySelector('#plans-prev');
const plansNext=document.querySelector('#plans-next');
function syncPlans(){plansPrevious.disabled=plansTrack.scrollLeft<=2;plansNext.disabled=plansTrack.scrollLeft>=plansTrack.scrollWidth-plansTrack.clientWidth-3;}
function movePlans(direction){const card=plansTrack.querySelector('.plan');const gap=parseFloat(getComputedStyle(plansTrack).columnGap)||0;plansTrack.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
plansPrevious.addEventListener('click',()=>movePlans(-1));plansNext.addEventListener('click',()=>movePlans(1));plansTrack.addEventListener('scroll',syncPlans,{passive:true});window.addEventListener('resize',syncPlans);syncPlans();


const faqTrack=document.querySelector('#faq-track');
const faqPrevious=document.querySelector('#faq-prev');
const faqNext=document.querySelector('#faq-next');
const faqProgress=document.querySelector('#faq-progress');
function syncFaq(){const card=faqTrack.querySelector('.faq-card');const gap=parseFloat(getComputedStyle(faqTrack).columnGap)||0;const step=card.getBoundingClientRect().width+gap;const count=faqTrack.children.length;const first=Math.min(count,Math.max(1,Math.round(faqTrack.scrollLeft/step)+1));const visible=Math.max(1,Math.floor((faqTrack.clientWidth+gap)/step));const last=Math.min(count,first+visible-1);faqPrevious.disabled=faqTrack.scrollLeft<=2;faqNext.disabled=faqTrack.scrollLeft>=faqTrack.scrollWidth-faqTrack.clientWidth-3;faqProgress.textContent=first===last?`Pergunta ${first} de ${count}`:`Perguntas ${first} a ${last} de ${count}`;}
function moveFaq(direction){const card=faqTrack.querySelector('.faq-card');const gap=parseFloat(getComputedStyle(faqTrack).columnGap)||0;faqTrack.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
faqPrevious.addEventListener('click',()=>moveFaq(-1));faqNext.addEventListener('click',()=>moveFaq(1));faqTrack.addEventListener('scroll',syncFaq,{passive:true});window.addEventListener('resize',syncFaq);syncFaq();
