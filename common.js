document.getElementById('hdr').innerHTML=`<header><div class="wrap"><a class="brand" href="index.html">Amit Barman</a><nav>
<a href="index.html" data-p="index">About</a><a href="blog.html" data-p="blog">Blog</a></nav></div></header>`;
document.getElementById('ftr').innerHTML=`<footer><div class="wrap">© ${new Date().getFullYear()} Amit Barman · <a href="https://github.com/imamit-b">GitHub</a> · <a href="https://www.linkedin.com/in/amitjucse/">LinkedIn</a></div></footer>`;
const p=document.body.dataset.page;document.querySelectorAll('nav a').forEach(a=>{if(a.dataset.p===p)a.classList.add('on')});
