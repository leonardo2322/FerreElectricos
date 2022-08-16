const contFather = document.getElementById("Father")

let datosDelJson = [{"id":937,"Productos":"ANGULO DE 11\/2X1\/8 X MT","seccion":"VARIOS ","Precios":105300},{"id":944,"Productos":"ARANDELA","seccion":"VARIOS ","Precios":400},{"id":869,"Productos":"BASE PARA REFLECTOR SOLAR","seccion":"VARIOS ","Precios":65000},{"id":891,"Productos":"BASE VENTILADOR","seccion":"VARIOS ","Precios":19800},{"id":876,"Productos":"BICARBONATO","seccion":"VARIOS ","Precios":6200},{"id":839,"Productos":"BOQUILLA Y CONTRATUERCA IMC 1\" 1\/2","seccion":"VARIOS ","Precios":5800},{"id":963,"Productos":"BUJE 2 X 3\/4","seccion":"VARIOS ","Precios":5300},{"id":966,"Productos":"CEMENTO","seccion":"VARIOS ","Precios":1800},{"id":953,"Productos":"CINTA ENMASCARAR","seccion":"VARIOS ","Precios":8400},{"id":911,"Productos":"CLAVIJA MACHO P\/TRABADA","seccion":"VARIOS ","Precios":6800},{"id":948,"Productos":"MANO DE OBRA","seccion":"VARIOS ","Precios":220000},{"id":875,"Productos":"PEGA","seccion":"VARIOS ","Precios":14800},{"id":951,"Productos":"PEGA","seccion":"VARIOS ","Precios":900},{"id":840,"Productos":"PEGALOCA INFINITA","seccion":"VARIOS ","Precios":750},{"id":850,"Productos":"PERFIL","seccion":"VARIOS ","Precios":14800},{"id":950,"Productos":"PINTURA NARANJA","seccion":"VARIOS ","Precios":19800},{"id":851,"Productos":"PLATINA","seccion":"VARIOS ","Precios":12800},{"id":952,"Productos":"RALLY EPOXICA","seccion":"VARIOS ","Precios":8600},{"id":946,"Productos":"ROSCA","seccion":"VARIOS ","Precios":400},{"id":880,"Productos":"SILICOLA","seccion":"VARIOS ","Precios":4500},{"id":836,"Productos":"TRASPORTE","seccion":"VARIOS ","Precios":22000},{"id":962,"Productos":"UNION DE PRESION 2\"","seccion":"VARIOS ","Precios":4100},{"id":826,"Productos":"VARILLA ROSCA INFINITA","seccion":"VARIOS ","Precios":4600},{"id":932,"Productos":"VASELINA","seccion":"VARIOS ","Precios":16200},{"id":828,"Productos":"ARANDELA PLANA","seccion":"VARIOS ","Precios":2400},{"id":879,"Productos":"CEMENTO","seccion":"VARIOS ","Precios":4500},{"id":827,"Productos":"ROSCA TUERCA","seccion":"VARIOS ","Precios":1800},{"id":853,"Productos":"SILICONA","seccion":"VARIOS ","Precios":7000},{"id":329,"Productos":"MARCADORES ANILLO SCHNEIDER","seccion":"VARIOS ","Precios":3500},{"id":727,"Productos":"CARBONES PULIDORA MEDIANA","seccion":"VARIOS ","Precios":8000},{"id":229,"Productos":"PINTURA NARANJA X TARRO","seccion":"VARIOS ","Precios":35000},{"id":228,"Productos":"PINTURA NARANJA X UNIDAD","seccion":"VARIOS ","Precios":1500},{"id":805,"Productos":"TORNILLO ENSAMBLE 3\"","seccion":"VARIOS ","Precios":240},{"id":202,"Productos":"UNION PARABOLICA","seccion":"VARIOS ","Precios":600},{"id":230,"Productos":"WASH PRIMER X UNIDAD","seccion":"VARIOS ","Precios":3000}]


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
                    <img class="img-conTornillos" src="../img/CE_TLAP1-removebg-preview.png"
                    class="shoe" alt="Chunky">
                </div>
            </div>
        `
        console.log(iterator)


        contendedorCards.innerHTML = div
        contFather.append(contendedorCards)


}
})


