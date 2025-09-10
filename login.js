const form = document.getElementById('loginForm');
const user = document.getElementById('username'); // ambil input username
const pass = document.getElementById('password');
const toggle = document.getElementById('togglePass');
const overlay = document.getElementById('overlay');

// tampilkan / sembunyikan password
toggle.addEventListener('click', ()=>{
  if (pass.type === 'password') { 
    pass.type = 'text'; 
    toggle.innerText='🙈';
  } else { 
    pass.type = 'password'; 
    toggle.innerText='👁️';
  }
});

// validasi sederhana
function validate(){
  const u = user.value.trim();
  const p = pass.value.trim();
  if (!u || !p) return {ok:false, reason:'empty'};
  return {ok:true};
}

form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  const v = validate();
  if (!v.ok){
    // kalau kosong → shake
    [user, pass].forEach(i=>{
      i.classList.remove('shake'); 
      void i.offsetWidth; 
      i.classList.add('shake');
    });
    return;
  }

  // username & password benar
  const validUser = "XI-RPL";   // username yang boleh login
  const validPass = "12345";    // password yang benar

  if (user.value === validUser && pass.value === validPass) {
    const btn = form.querySelector('.btn');
    btn.disabled = true; 
    btn.style.opacity = '0.9';
    const origText = btn.innerHTML;
    btn.innerHTML = 'Memeriksa…';

    setTimeout(()=>{
      btn.innerHTML = origText; 
      btn.disabled=false;
      overlay.classList.add('show');
      setTimeout(()=>{
        overlay.querySelector('.check div:last-child').innerText = 'Dialihkan ke Kelas.';
      },1200);
      setTimeout(() => {
        window.location.href ="halamanutama.html"; 
      }, 2500);
    }, 1200);
  } else {
    // kalau salah → shake
    [user, pass].forEach(i=>{
      i.classList.remove('shake'); 
      void i.offsetWidth; 
      i.classList.add('shake');
    });
  }
});

// hapus shake saat mengetik
[user, pass].forEach(i=> i.addEventListener('input', ()=>{
  if (i.value) i.classList.remove('shake');
}));
