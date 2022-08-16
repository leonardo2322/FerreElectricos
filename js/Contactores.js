const contFather = document.getElementById("Father")

let datosDelJson = [{"id":378,"Productos":"CONTACTOR 220V CHIN","seccion":"CONTACTORES","Precios":179900,"image":"../img/images/contactores/CONTACTOR 220V CHIN.png"},{"id":330,"Productos":"CONTACTOR 25 A CHINT 110V Y 220V","seccion":"CONTACTORES","Precios":57800,"image":"../img/images/contactores/CONTACTOR 25 A CHINT 110V Y 220V.png"},{"id":407,"Productos":"CONTACTOR 32-50 A 220V CHINT","seccion":"CONTACTORES","Precios":75800,"image":"../img/images/contactores/CONTACTOR 32-50 A 220V CHINT.png"},{"id":377,"Productos":"CONTACTOR 80-110V CHIN","seccion":"CONTACTORES","Precios":179100,"image":"../img/images/contactores/CONTACTOR 80-110V CHIN.png"},{"id":425,"Productos":"CONTACTOR STECK 32-50 A 220V","seccion":"CONTACTORES","Precios":128900,"image":"../img/images/contactores/CONTACTOR STECK 32-50 A 220V.png"}]

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


