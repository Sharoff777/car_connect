// ===== DATA =====
const vehicles = [
  {id:1, title:'Land Rover Range P400 LWB Autobiography 2025', make:'Land Rover', type:'SUV', price:145000000, year:2025, mileage:180, fuel:'Petrol', transmission:'Automatic', color:'Santorini Black', seats:5, engine:'3.0L P400', featured:true, badge:'New Arrival',
   img:'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80','https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80','https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80']},
  {id:2, title:'Mercedes-Benz C200 AMG Premium+ 2019', make:'Mercedes-Benz', type:'Sedan', price:24500000, year:2019, mileage:74500, fuel:'Petrol', transmission:'Automatic', color:'Obsidian Black', seats:5, engine:'2.0L Turbo', featured:true, badge:'Featured',
   img:'https://images.unsplash.com/photo-1618843479619-f3d0d81e4d10?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1618843479619-f3d0d81e4d10?w=800&q=80','https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80','https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=800&q=80','https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80']},
  {id:3, title:'BMW X5 xDrive40i M Sport 2021', make:'BMW', type:'SUV', price:52000000, year:2021, mileage:32000, fuel:'Petrol', transmission:'Automatic', color:'Alpine White', seats:5, engine:'3.0L B58', featured:false, badge:'Hot Deal',
   img:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80','https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80','https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80','https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80']},
  {id:4, title:'Audi Q7 Quattro 2L 2017', make:'Audi', type:'SUV', price:18500000, year:2017, mileage:71300, fuel:'Petrol', transmission:'Automatic', color:'Glacier White', seats:7, engine:'2.0L TFSI', featured:false, badge:null,
   img:'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80','https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80','https://images.unsplash.com/photo-1503736334956-4c8f8e4733e5?w=800&q=80']},
  {id:5, title:'Toyota Hilux Invincible 2022', make:'Toyota', type:'Pickup', price:28000000, year:2022, mileage:45000, fuel:'Diesel', transmission:'Automatic', color:'Titanium Silver', seats:5, engine:'2.8L Diesel', featured:true, badge:'Popular',
   img:'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80','https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80','https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&q=80','https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80']},
  {id:6, title:'Hyundai Santa Fe 2025', make:'Hyundai', type:'SUV', price:38500000, year:2025, mileage:3750, fuel:'Petrol', transmission:'Automatic', color:'Onyx Black', seats:7, engine:'2.5L Turbo', featured:false, badge:'New',
   img:'https://images.unsplash.com/photo-1571127236794-81c899f9f816?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1571127236794-81c899f9f816?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80','https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80']},
  {id:7, title:'Honda Civic EX 2019', make:'Honda', type:'Sedan', price:11500000, year:2019, mileage:18000, fuel:'Petrol', transmission:'Automatic', color:'Lunar Silver', seats:5, engine:'1.5L Turbo', featured:false, badge:null,
   img:'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80','https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80','https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80','https://images.unsplash.com/photo-1503736334956-4c8f8e4733e5?w=800&q=80']},
  {id:8, title:'Audi Q3 S Line 2018', make:'Audi', type:'SUV', price:16000000, year:2018, mileage:127400, fuel:'Petrol', transmission:'Automatic', color:'Navarra Blue', seats:5, engine:'1.4L TFSI', featured:false, badge:null,
   img:'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80','https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80','https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80']},
  {id:9, title:'Land Rover Range Vogue SDV8 2014', make:'Land Rover', type:'SUV', price:32000000, year:2014, mileage:79000, fuel:'Diesel', transmission:'Automatic', color:'Corris Grey', seats:5, engine:'4.4L V8 Diesel', featured:false, badge:null,
   img:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
   imgs:['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80','https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80','https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80']},
];

let currentInventory = [...vehicles];
let currentDetailId = null;

function formatPrice(p){
  if(p>=1000000) return 'LKR '+( p/1000000).toFixed(1)+'M';
  return 'LKR '+p.toLocaleString();
}

function createVehicleCard(v, showDetail=true){
  return `<div class="vehicle-card fade-up" onclick="${showDetail?'openDetail('+v.id+')':''}" style="cursor:${showDetail?'pointer':'default'}">
    <div class="vehicle-img">
      <img src="${v.img}" alt="${v.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80'">
      
    </div>
    <div class="vehicle-info">
      <h3>${v.title}</h3>
      <div class="vehicle-price">${formatPrice(v.price)}</div>
      <div class="vehicle-meta">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${v.year}</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>${(v.mileage/1000).toFixed(0)}k km</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 002 2H5a2 2 0 002-2v-4"/></svg>${v.fuel}</span>
      </div>
    </div>
    <div class="vehicle-actions">
      <button onclick="event.stopPropagation();openDetail(${v.id})" class="btn btn-dark">View Details</button>
      <a href="https://wa.me/+94777150066?text=Hi%20CarConnect%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(v.title)}" target="_blank" onclick="event.stopPropagation()" class="btn btn-primary" style="background:#25D366">
        <svg viewBox="0 0 24 24" fill="currentColor" style="width:13px;height:13px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
    </div>
  </div>`;
}

function renderFeatured(){
  const el = document.getElementById('featured-grid');
  if(!el) return;
  const featured = vehicles.filter(v=>v.featured).slice(0,3);
  el.innerHTML = featured.map(v=>createVehicleCard(v)).join('');
  observeFadeUps();
}

function renderInventory(list){
  const el = document.getElementById('inventory-grid');
  if(!el) return;
  document.getElementById('results-count').textContent = list.length;
  if(list.length === 0){
    el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:80px 20px"><p style="font-size:18px;color:var(--gray-400);margin-bottom:16px">No vehicles found matching your criteria</p><button onclick="clearFilters()" class="btn btn-primary">Clear Filters</button></div>';
    return;
  }
  el.innerHTML = list.map(v=>createVehicleCard(v)).join('');
  observeFadeUps();
}

function filterInventory(){
  const make = document.getElementById('filter-make').value;
  const type = document.getElementById('filter-type').value;
  const price = document.getElementById('filter-price').value;
  const year = document.getElementById('filter-year').value;
  const search = document.getElementById('filter-search').value.toLowerCase();
  currentInventory = vehicles.filter(v=>{
    if(make && v.make !== make) return false;
    if(type && v.type !== type) return false;
    if(price && v.price > parseInt(price)) return false;
    if(year && v.year < parseInt(year)) return false;
    if(search && !v.title.toLowerCase().includes(search) && !v.make.toLowerCase().includes(search)) return false;
    return true;
  });
  renderInventory(currentInventory);
}

function sortInventory(by){
  const sorted = [...currentInventory];
  if(by==='price-low') sorted.sort((a,b)=>a.price-b.price);
  else if(by==='price-high') sorted.sort((a,b)=>b.price-a.price);
  else if(by==='mileage') sorted.sort((a,b)=>a.mileage-b.mileage);
  else sorted.sort((a,b)=>b.year-a.year);
  renderInventory(sorted);
}

function clearFilters(){
  document.getElementById('filter-make').value='';
  document.getElementById('filter-type').value='';
  document.getElementById('filter-price').value='';
  document.getElementById('filter-year').value='';
  document.getElementById('filter-search').value='';
  currentInventory=[...vehicles];
  renderInventory(currentInventory);
}

function openDetail(id){
  const v = vehicles.find(x=>x.id===id);
  if(!v) return;
  currentDetailId = id;
  document.getElementById('d-price').textContent = formatPrice(v.price);
  document.getElementById('d-title').textContent = v.title;
  document.getElementById('d-subtitle').textContent = v.year + ' · ' + v.fuel + ' · ' + v.transmission;
  document.getElementById('main-img').src = v.imgs[0];
  document.getElementById('gallery-thumbs').innerHTML = v.imgs.map((img,i)=>`<div class="gallery-thumb ${i===0?'active':''}" onclick="changeMainImg('${img}',this)"><img src="${img}" alt="" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80'"></div>`).join('');
  document.getElementById('wa-inquiry').href = `https://wa.me/+94777150066?text=Hi%20CarConnect%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(v.title)}%20priced%20at%20${encodeURIComponent(formatPrice(v.price))}`;
  const specs = [
    {l:'Make',v:v.make},{l:'Year',v:v.year},{l:'Mileage',v:(v.mileage/1000).toFixed(0)+'k km'},
    {l:'Engine',v:v.engine},{l:'Fuel Type',v:v.fuel},{l:'Transmission',v:v.transmission},
    {l:'Body Type',v:v.type},{l:'Colour',v:v.color},{l:'Seats',v:v.seats}
  ];
  document.getElementById('specs-grid').innerHTML = specs.map(s=>`<div class="spec-item"><div class="spec-label">${s.l}</div><div class="spec-value">${s.v}</div></div>`).join('');
  const similar = vehicles.filter(x=>x.id!==id && (x.make===v.make || x.type===v.type)).slice(0,3);
  document.getElementById('similar-grid').innerHTML = similar.map(s=>createVehicleCard(s)).join('');
  showPage('detail');
}

function changeMainImg(src, el){
  document.getElementById('main-img').src = src;
  document.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

// PAGE NAVIGATION
function showPage(page){
  document.querySelectorAll('.page-section').forEach(s=>s.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const navEl = document.getElementById('nav-'+page);
  if(navEl) navEl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(page==='inventory'){
    renderInventory(currentInventory);
  }
  if(page==='home'){
    renderFeatured();
    initCounters();
  }
}

function scrollToContact(){
  document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
}

// NAVBAR SCROLL
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('navbar');
  if(window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// MOBILE NAV
function toggleMobileNav(){
  document.getElementById('mobile-nav').classList.toggle('open');
}

// FORM
function previewImages(e){
  const files = e.target.files;
  const preview = document.getElementById('img-preview');
  preview.innerHTML = '';
  Array.from(files).slice(0,10).forEach(file=>{
    const reader = new FileReader();
    reader.onload = ev=>{
      const img = document.createElement('img');
      img.src = ev.target.result;
      img.className = 'preview-img';
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

function submitSellForm(){
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const make = document.getElementById('f-make').value;
  const model = document.getElementById('f-model').value.trim();
  const year = document.getElementById('f-year').value;
  const mileage = document.getElementById('f-mileage').value;
  if(!name){alert('Please enter your full name');return}
  if(!phone){alert('Please enter your phone number');return}
  if(!make){alert('Please select vehicle make');return}
  if(!model){alert('Please enter vehicle model');return}
  if(!year){alert('Please enter year of manufacture');return}
  if(!mileage){alert('Please enter mileage');return}
  const msg = `Hi CarConnect! I want to sell my vehicle.\n\nName: ${name}\nPhone: ${phone}\nVehicle: ${year} ${make} ${model}\nMileage: ${parseInt(mileage).toLocaleString()} km\n\nPlease contact me!`;
  // Send to WhatsApp
  window.open(`https://wa.me/+94777150066?text=${encodeURIComponent(msg)}`,'_blank');
  document.getElementById('sell-form').style.display='none';
  document.getElementById('success-msg').style.display='block';
}

function submitInquiry(){
    const pop = document.getElementById('submit-name').value.trim();
    const lip = document.getElementById('submit-phone').value.trim();
    if (!pop) { alert('Please enter your full name'); return; }
    if (!lip) { alert('Please enter your phone number'); return; }
    const lmao = `Hi CarConnect! I want to inquire about a vehicle.\n\nName: ${pop}\nPhone: ${lip}\n\nPlease contact me!`;
    window.open(`https://wa.me/+94777150066?text=${encodeURIComponent(lmao)}`,'_blank');
    alert('Thank you! Our team will contact you shortly. For instant response, use the WhatsApp button above.');
}

// FADE UP OBSERVER
function observeFadeUps(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
}

// COUNT UP
function initCounters(){
  const counters = document.querySelectorAll('.count-up');
  counters.forEach(c=>{
    const target = parseInt(c.dataset.count);
    const duration = 2000;
    const start = performance.now();
    const update = (now)=>{
      const progress = Math.min((now-start)/duration,1);
      const ease = 1-Math.pow(1-progress,3);
      c.textContent = Math.round(ease*target).toLocaleString();
      if(progress<1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  });
}

// Hero stat count
function initHeroStats(){
  document.querySelectorAll('.hero-stat .num[data-count]').forEach(el=>{
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = target/60;
    const timer = setInterval(()=>{
      current = Math.min(current+step, target);
      el.textContent = Math.round(current);
      if(current>=target) clearInterval(timer);
    },30);
  });
}

// INIT
document.addEventListener('DOMContentLoaded',()=>{
  renderFeatured();
  renderInventory(vehicles);
  observeFadeUps();
  initHeroStats();
  setTimeout(initCounters, 800);
  // Re-observe on scroll
  window.addEventListener('scroll', observeFadeUps, {passive:true});
});