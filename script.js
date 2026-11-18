/* ---------- products ----------
   img = file in images/ ; cut:true = cutout photo with white background (blended into the card) */
const P = [
  {t:"oil", img:"cut-rosemary-oil", cut:1, c:"#2f5a3a", en:"Rosemary Hair Growth Oil", am:"የሮዝመሪ የፀጉር ማሳደጊያ ዘይት", d:"A rosemary-infused oil to nourish the scalp and support healthy-looking hair.", da:"ጭንቅላትን የሚንከባከብ እና ጤናማ የሚመስል ፀጉርን የሚደግፍ የሮዝመሪ ዘይት።", s:"300ml"},
  {t:"oil", img:"cut-onion-oil", cut:1, c:"#b94a35", en:"Onion Anti Hair Fall Oil", am:"የሽንኩርት ፀጉር መርገፍ መከላከያ ዘይት", d:"Onion-based oil made to care for hair prone to falling.", da:"ለሚረግፍ ፀጉር እንክብካቤ የተዘጋጀ የሽንኩርት ዘይት።", s:"300ml"},
  {t:"oil", img:"cloves-oil", c:"#6b4030", en:"Cloves Hair Oil", am:"የቅርንፉድ የፀጉር ዘይት", d:"A warm, aromatic clove oil for everyday scalp and hair care.", da:"ለዕለታዊ የራስ ቆዳ እና የፀጉር እንክብካቤ የሚሆን የቅርንፉድ ዘይት።", s:"300ml"},
  {t:"oil", img:"cut-jojoba-oil", cut:1, c:"#d9822b", en:"Jojoba Hair Moisturizer Oil", am:"የጆጆባ ፀጉር ማለስለሻ ዘይት", d:"Light jojoba oil that moisturizes and softens hair.", da:"ፀጉርን የሚያለሰልስ እና እርጥበት የሚሰጥ ቀላል የጆጆባ ዘይት።", s:"300ml"},
  {t:"oil", img:"cut-tea-tree-oil", cut:1, c:"#3a342d", en:"Tea Tree Anti Dandruff Hair Oil", am:"የሻይ ዛፍ የፎረፎር መከላከያ ዘይት", d:"Tea tree oil made to keep the scalp fresh and care for dandruff.", da:"የራስ ቆዳን የሚያድስ እና ፎረፎርን የሚንከባከብ የሻይ ዛፍ ዘይት።", s:"300ml"},
  {t:"oil", img:"cut-black-seed", cut:1, c:"#3b2a1d", en:"Black Seed Hair Moisturizer Oil", am:"የጥቁር አዝሙድ የፀጉር ማለስለሻ ዘይት", d:"Rich black seed oil that moisturizes and conditions hair.", da:"ፀጉርን የሚያለሰልስ እና የሚንከባከብ የጥቁር አዝሙድ ዘይት።", s:"300ml"},
  {t:"oil", img:"cut-baby-oil", cut:1, c:"#1a9e8f", en:"Baby Hair Oil", am:"የሕፃናት የፀጉር ዘይት", d:"A gentle oil made for little ones’ hair.", da:"ለሕፃናት ፀጉር የተዘጋጀ ለስላሳ ዘይት።", s:"300ml"},
  {t:"shampoo", img:"shampoo-rosemary", c:"#2f4a36", en:"Rosemary Shampoo", am:"የሮዝመሪ ሻምፑ", d:"For strong and healthy hair. For all hair types.", da:"ለጠንካራ እና ጤናማ ፀጉር። ለሁሉም የፀጉር አይነቶች።", s:"750ml"},
  {t:"shampoo", img:"shampoo-aloe", c:"#1d5c45", en:"Aloe Vera Shampoo", am:"የአሎቬራ ሻምፑ", d:"For strong and healthy hair. For all hair types.", da:"ለጠንካራ እና ጤናማ ፀጉር። ለሁሉም የፀጉር አይነቶች።", s:"750ml"},
  {t:"shampoo", img:"shampoo-onion", c:"#6d1a2e", en:"Onion Shampoo", am:"የሽንኩርት ሻምፑ", d:"For strong and healthy hair. For all hair types.", da:"ለጠንካራ እና ጤናማ ፀጉር። ለሁሉም የፀጉር አይነቶች።", s:"750ml"},
  {t:"cond", img:"cut-rosemary-conditioner", cut:1, c:"#2f5a3a", en:"Rosemary Conditioner", am:"የሮዝመሪ ኮንዲሽነር", d:"Creamy rosemary conditioner for soft, manageable hair.", da:"ፀጉርን ለስላሳ እና ለመያዝ ቀላል የሚያደርግ የሮዝመሪ ኮንዲሽነር።", s:"500ml"},
  {t:"cond", img:"cut-aloe-conditioner", cut:1, c:"#1d5c45", en:"Aloe Vera Conditioner", am:"የአሎቬራ ኮንዲሽነር", d:"Aloe vera conditioner that hydrates and softens.", da:"እርጥበት የሚሰጥ እና የሚያለሰልስ የአሎቬራ ኮንዲሽነር።", s:"500ml"},
  {t:"food", img:"hair-food-carrot", c:"#e8741c", en:"Carrot Hair Food", am:"የካሮት ፀጉር ምግብ", d:"For healthy, long and shiny hair.", da:"ለጤናማ፣ ረጅም እና አንጸባራቂ ፀጉር።", s:""},
  {t:"food", img:"hair-food-aloe", c:"#3f9a2a", en:"Aloe Vera Hair Food", am:"የአሎቬራ ፀጉር ምግብ", d:"Moisturizes and nourishes, helps reduce breakage and adds natural shine.", da:"እርጥበት ይሰጣል፣ ይመግባል፣ መሰበርን ይቀንሳል እና ተፈጥሯዊ ብርሃን ይጨምራል።", s:""},
  {t:"food", img:"hair-food-avocado", c:"#6a8f1f", en:"Avocado Hair Food", am:"የአቮካዶ ፀጉር ምግብ", d:"For healthy, long and shiny hair.", da:"ለጤናማ፣ ረጅም እና አንጸባራቂ ፀጉር።", s:""}
];
document.getElementById('grid').innerHTML = P.map(p => `
  <article class="card rv" data-t="${p.t}">
    <div class="pic ${p.cut ? 'cut' : ''}">
      <img src="images/${p.img}.jpg" alt="${p.en}" loading="lazy" onerror="this.parentNode.classList.add('noimg')" />
      <div class="ph" style="background:${p.c}" data-am="${p.am}">${p.en}</div>
    </div>
    <div class="info">
      <h3 data-am="${p.am}">${p.en}</h3>
      <p data-am="${p.da}">${p.d}</p>
      ${p.s ? `<span class="size">${p.s}</span>` : ''}
    </div>
  </article>`).join('');

document.getElementById('tabs').addEventListener('click', e => {
  const b = e.target.closest('.tab'); if(!b) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t === b));
  document.querySelectorAll('.card').forEach(c => c.classList.toggle('hidden', b.dataset.f !== 'all' && c.dataset.t !== b.dataset.f));
});

/* ---------- language toggle ---------- */
const tr = [...document.querySelectorAll('[data-am]')].filter(el => el.dataset.am !== '');
const trEmpty = [...document.querySelectorAll('[data-am=""]')];
tr.forEach(el => el.dataset.en = el.innerHTML);
trEmpty.forEach(el => el.dataset.en = el.innerHTML);
function setLang(l){
  tr.forEach(el => el.innerHTML = l === 'am' ? el.dataset.am : el.dataset.en);
  trEmpty.forEach(el => el.innerHTML = l === 'am' ? '' : el.dataset.en);   // English-only fragments vanish in Amharic
  document.documentElement.lang = l;
  document.getElementById('b-en').classList.toggle('on', l === 'en');
  document.getElementById('b-am').classList.toggle('on', l === 'am');
  try{ localStorage.setItem('wh-lang', l) }catch(e){}
}
document.getElementById('b-en').onclick = () => setLang('en');
document.getElementById('b-am').onclick = () => setLang('am');
try{ if(localStorage.getItem('wh-lang') === 'am') setLang('am') }catch(e){}

/* ---------- hero mouse parallax ---------- */
const hero = document.getElementById('hero');
if(matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
    hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
  });
  hero.addEventListener('pointerleave', () => { hero.style.setProperty('--mx', 0); hero.style.setProperty('--my', 0); });
}

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target) } }), {threshold:.12});
document.querySelectorAll('.rv').forEach(el => io.observe(el));
