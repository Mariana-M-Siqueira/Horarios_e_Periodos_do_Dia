let hora_doc = document.getElementsByClassName('conteudo__hora')[0];
let dia_doc = document.getElementsByClassName('conteudo__dia')[0];
let imgIcone = document.getElementsByClassName('picture-img')[0];

let relogio = setInterval(function tempo() {
    
    let hoje = new Date;

    // DATA:
    dia_doc.innerHTML = hoje.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',});
    
    // HORA:
    let h = hora_doc.innerHTML = hoje.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});

    // MADRUGADA:
    if(h >= '00:00' && h <= '06:00'){
        imgIcone.src = 'img/img-madrugada.png';
        document.body.style.backgroundColor = 'var(--fundo-azul-madrugada)';
        hora_doc.style.color = 'var(--fonte-azul-noite-madrugada)';
        document.getElementsByClassName('cabecalho__titulo')[0].style.color = 'var(--fonte-cor-secundaria)';
        document.getElementsByClassName('rodape__texto')[0].style.color = 'var(--fonte-cor-secundaria)';
    }
    // MANHÃ:
    else if(h >= '06:01' && h <= '12:00'){
        imgIcone.src = 'img/img-dia.png';
        document.body.style.backgroundColor = 'var(--fundo-amarelo-dia)';
        hora_doc.style.color = 'var(--fonte-laranja-dia)';
    }
    // TARDE:
    else if(h >= '12:01' && h <= '18:00'){
        imgIcone.src = 'img/img-tarde.png';
        document.body.style.backgroundColor = 'var(--fundo-marrom-tarde)';
        hora_doc.style.color = 'var(--fonte-marrom-tarde)';
    }
    // NOITE:
    else if(h >= '18:00' && h <= '24:00'){
        imgIcone.src = 'img/img-noite.png';
        document.body.style.backgroundColor = 'var(--fundo-azul-noite)';
        hora_doc.style.color = 'var(--fonte-azul-noite-madrugada)';
        document.getElementsByClassName('cabecalho__titulo')[0].style.color = 'var(--fonte-cor-secundaria)';
        document.getElementsByClassName('rodape__texto')[0].style.color = 'var(--fonte-cor-secundaria)';
    }
})
