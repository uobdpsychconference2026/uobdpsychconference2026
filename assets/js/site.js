
const menuBtn=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
if(menuBtn&&mainNav){menuBtn.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false');});}
for(const btn of document.querySelectorAll('[data-tab-target]')){btn.addEventListener('click',()=>{const target=btn.dataset.tabTarget;document.querySelectorAll('[data-tab-target]').forEach(b=>b.classList.toggle('active',b===btn));document.querySelectorAll('.tab-panel').forEach(p=>p.hidden=p.id!==target);});}
if(location.hash){if(location.hash==='#oral-programme'){const btn=document.querySelector('[data-tab-target="oral-programme-panel"]');if(btn)btn.click();}const el=document.querySelector(location.hash);if(el&&el.tagName==='DETAILS'){el.open=true;setTimeout(()=>el.scrollIntoView({block:'start'}),100);}}
