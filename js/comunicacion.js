const contFather = document.getElementById("Father")

let datosDelJson = [{"id":736,"Productos":"SE\u00d1ALIZACIONES RIESGO ELECTRICO","seccion":"COMUNICACION","Precios":15000},{"id":235,"Productos":"SE\u00d1ALIZACIONES SPT","seccion":"COMUNICACION","Precios":15000},{"id":432,"Productos":"RIESGO ELECTRICO PEQUE\u00d1O","seccion":"COMUNICACION","Precios":10000}]

document.addEventListener('DOMContentLoaded',function () {
    for (const iterator of datosDelJson) {
        let contendedorCards = document.createElement('section')

        let div = `<div class="slide-container" data-id="0">
                        <img class="back-card" src="../img/SimulacionPlomoMinimercadolaEsperanza (1).png" alt="">
                    <div class="slide">
                        <div class="content">
                        <span class="spanP">codigo: ${iterator.id}</span>
                        <h3 class="amarilla">${iterator.Productos}</h3>
    
                    </div>
                 <div class="image">
                    <img class="img-conTornillos" src="../img/images/TERMINAL HEMBRA AZUL.png"
                    class="shoe" alt="Chunky">
                </div>
            </div>
        `
        console.log(iterator)


        contendedorCards.innerHTML = div
        contFather.append(contendedorCards)


}
})


