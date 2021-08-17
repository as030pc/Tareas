function convertir() {
    const valor = parseFloat(document.getElementById('valor_').value);
    const cambioDe = document.getElementById('c1').value;
    const cambioA = document.getElementById('c2').value;
    const moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
    console.log(cambioDe, cambioA);
    const valores = [{
            valor: 3941,
            texto: 'Dolar'
        },
        {
            valor: 197,
            texto: 'Peso Mexicano'
        },
        {
            valor: 1,
            texto: 'Peso Colombiano'
        } ,
        {
            valor: 4626,
            texto: 'Euro'
        },
        {
            valor: 5466,
            texto: 'Libra Esterlina'
        }
    ]
    if (!valor || cambioA==='0' || cambioDe==='0') {
        const alert_element = document.createElement('span');
        alert_element.innerHTML = 'Validaciondes de fromulario';
        const aviso = document.getElementById('alert');
        aviso.appendChild(alert_element)
    } else if (isNaN(valor)) {
        const valor_ingresado_noCorresponde = document.createElement('span');
        valor_ingresado_noCorresponde.innerHTML = 'el valor ingresado no es un numero'
        const aviso1 = document.getElementById('alert');
        aviso1.appendChild(valor_ingresado_noCorresponde);

    } else {
        
        let valorDe= 0, valorA=0;
        valores.forEach(element => {
            if(element.texto===moneda[cambioDe]){
                valorDe=element.valor
            }
            if(element.texto===moneda[cambioA]){
                valorA=element.valor
            }
           
        });
        const valor_moneda =valor*valorDe;
        const resultado= valor_moneda/valorA;
        console.log(resultado);
        const valor1 = document.createElement('span');
        const aviso = document.getElementById('alert');
        valor1.innerHTML = `${resultado}`
        
        aviso.appendChild(valor1);
    }

   // console.log(cambioDe, cambioA);

}
document.getElementById('button1').addEventListener('click', convertir)