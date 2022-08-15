const contFather = document.getElementById("Father")

let datosDelJson = [{"id":186,"Productos":"TUBO PVC 3\/4","seccion":"TUBERIA","Precios":10000},{"id":279,"Productos":"TUBO CORAZA 1\"","seccion":"TUBERIA","Precios":10200},{"id":284,"Productos":"TUBO CORAZA 1\" 1\/2","seccion":"TUBERIA","Precios":17600},{"id":148,"Productos":"TUBO CORAZA 1\/2","seccion":"TUBERIA","Precios":6400},{"id":149,"Productos":"TUBO CORAZA 3\/4","seccion":"TUBERIA","Precios":8500},{"id":182,"Productos":"TUBO EMT 1\"","seccion":"TUBERIA","Precios":68750},{"id":274,"Productos":"TUBO EMT 1\" 1\/2","seccion":"TUBERIA","Precios":94800},{"id":179,"Productos":"TUBO EMT 1\/2","seccion":"TUBERIA","Precios":22700},{"id":180,"Productos":"TUBO EMT 3\/4","seccion":"TUBERIA","Precios":31900},{"id":242,"Productos":"TUBO IMC 1\"","seccion":"TUBERIA","Precios":60800},{"id":247,"Productos":"TUBO IMC 1\" 1\/2","seccion":"TUBERIA","Precios":132800},{"id":184,"Productos":"TUBO IMC 1\/2","seccion":"TUBERIA","Precios":43950},{"id":138,"Productos":"TUBO IMC 3\/4","seccion":"TUBERIA","Precios":60200},{"id":187,"Productos":"TUBO PVC 1\"","seccion":"TUBERIA","Precios":12600},{"id":188,"Productos":"TUBO PVC 1\" 1\/2","seccion":"TUBERIA","Precios":24400},{"id":185,"Productos":"TUBO PVC 1\/2","seccion":"TUBERIA","Precios":7300},{"id":190,"Productos":"TUBO PVC 2\"","seccion":"TUBERIA","Precios":27800},{"id":189,"Productos":"TUBO PVC 3\"","seccion":"TUBERIA","Precios":61200},{"id":286,"Productos":"TUBO PVC 4\"","seccion":"TUBERIA","Precios":107800},{"id":280,"Productos":"TUBO SCH40 1\"","seccion":"TUBERIA","Precios":25850},{"id":196,"Productos":"TUBO SCH40 1\/2","seccion":"TUBERIA","Precios":15800},{"id":183,"Productos":"TUBO SCH40 3\/4","seccion":"TUBERIA","Precios":19200}]

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


