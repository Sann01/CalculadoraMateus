let resultados = document.getElementById('resultados');

let buttons = Array.from(document.getElementsByClassName('botao')) ;

buttons.map(button =>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerHTML)
        {
            case 'C':
                resultados.innerHTML ='';
                break;

            case 'DEL':
                if(resultados.innerHTML)
                {
                    resultados.innerHTML = resultados.innerHTML.slice(0,-1);
                }
                break;
        
            case '=':

            if(resultados)
            {
                resultados.innerHTML = eval(resultados.innerHTML);
            }
            else
            {
                resultados.innerHTML = 'Falha!';
            }
            break;

            default:
                resultados.innerHTML += e.target.innerHTML;
        }
    })
})