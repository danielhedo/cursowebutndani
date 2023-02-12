


function cambioColor(valor)
{
    const body = document.getElementById('principal')

    if(valor ==="a" || valor ==="d")
    {    
    body.style = 'background: red;'
    }
    else if (valor ==="b" || valor ==="e")
    {
        body.style = 'background: yellow;'
    }
    else
    {
        body.style = 'background: rebeccapurple;'  
    }
}
