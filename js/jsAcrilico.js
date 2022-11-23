const contFather = document.getElementById("Father")

let datosDelJson = [{"id":220,"Productos":"ACRILICO GRANDE ","seccion":"ACRILICO","Precios":35000,"image":"../img/images/acrilico/a220.jpg"},
{"id":430,"Productos":"ACRILICO MEDIANO","seccion":"ACRILICO","Precios":10000,"image":"../img/images/acrilico/a220.jpg"},{"id":219,"Productos":"ACRILICO PEQUE\u00d1O","seccion":"ACRILICO","Precios":8000,"image":"../img/images/acrilico/a220.jpg"},{"id":857,"Productos":"PINTURA BROCA TINER","seccion":"ACRILICO","Precios":30800,"image":"../img/images/acrilico/PINTURA BROCA TINER.png"},{"id":855,"Productos":"TAPA LAMINADA","seccion":"ACRILICO","Precios":198000,"image":"../img/images/acrilico/TAPA LAMINADA.png"}]


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


