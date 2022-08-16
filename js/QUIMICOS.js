const contFather = document.getElementById("Father")

let datosDelJson = [{"id":556,"Productos":"SELLADOR ADESIVO DE SILICONA LOCTITE","seccion":"QUIMICOS","Precios":35000,"image":"../img/images/quimicos/SELLADOR ADESIVO DE SILICONA LOCTITE.png"},{"id":555,"Productos":"LUBRICANTE 5-56 CRC","seccion":"QUIMICOS","Precios":25000,"image":"../img/images/quimicos/LUBRICANTE5.png"},{"id":310,"Productos":"SOLDADURA EXOTERMICA","seccion":"QUIMICOS","Precios":36000,"image":"../img/images/quimicos/SOLDADURAEXOTERMICA.png"}]

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
                    <img class="img-conTornillos" src="${iterator.image}"
                    class="shoe" alt="Chunky">
                </div>
            </div>
        `
        console.log(iterator)


        contendedorCards.innerHTML = div
        contFather.append(contendedorCards)


}
})


