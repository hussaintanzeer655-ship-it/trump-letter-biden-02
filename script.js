document.addEventListener('DOMContentLoaded',()=>{
  const t=document.getElementById('letter2');
  const vis=document.getElementById('live');
  const stylize=document.getElementById('stylize');
  function toTitleCase(s){return s.replace(/\b\w/g,c=>c.toUpperCase())}
  function render(v){vis.innerHTML='<h3>'+toTitleCase((v||'').trim())+'</h3><p>'+escape(v)+'</p>'}
  function escape(s){return (s||'').replace(/[&<>'"]|\n/g,(c)=>{'&':'&amp;','<':'&lt;','>':'&gt;','\''':'&#39;','\"':'&quot;','\n':'<br>'}[c]||c)}
  t.addEventListener('input',()=>render(t.value));
  stylize.addEventListener('click',()=>{t.value=t.value.toUpperCase();t.dispatchEvent(new Event('input'))});
});