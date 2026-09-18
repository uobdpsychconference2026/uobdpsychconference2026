
const input=document.getElementById('abstract-search');
const cards=[...document.querySelectorAll('.abstract-card')];
const groups=[...document.querySelectorAll('.abstract-group')];
const buttons=[...document.querySelectorAll('.filter-btn')];
const count=document.getElementById('result-count');
const empty=document.getElementById('no-results');
let active='All';
function apply(){const q=(input?.value||'').trim().toLowerCase();let visible=0;for(const card of cards){const cat=card.dataset.category;const text=card.dataset.search;const okCat=active==='All'||cat===active;const okQ=!q||text.includes(q);card.hidden=!(okCat&&okQ);if(!card.hidden)visible++;}for(const subgroup of document.querySelectorAll('.abstract-subgroup')){const any=[...subgroup.querySelectorAll('.abstract-card')].some(c=>!c.hidden);subgroup.hidden=!any;}for(const group of groups){const any=[...group.querySelectorAll('.abstract-card')].some(c=>!c.hidden);group.hidden=!any;}if(count)count.textContent=`${visible} abstract${visible===1?'':'s'} shown`;if(empty)empty.style.display=visible?'none':'block';}
buttons.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;buttons.forEach(x=>x.classList.toggle('active',x===b));apply();}));
input?.addEventListener('input',apply);apply();
