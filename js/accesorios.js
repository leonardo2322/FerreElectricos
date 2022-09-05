const contFather = document.getElementById("Father")

let datosDelJson = [{"id":290,"Productos":"CAJA HERMETICA PVC 18X14X8","seccion":"ACCESORIOS ELECTRICO","Precios":26100},{"id":158,"Productos":"CAJA PVC 2X4","seccion":"ACCESORIOS ELECTRICO","Precios":650},{"id":157,"Productos":"CAJA PVC 4X4","seccion":"ACCESORIOS ELECTRICO","Precios":950},{"id":755,"Productos":"CAJA RIEL","seccion":"ACCESORIOS ELECTRICO","Precios":5200},{"id":771,"Productos":"CAJA TROQUELADA TAPA SUICHE 4X4","seccion":"ACCESORIOS ELECTRICO","Precios":9700},{"id":150,"Productos":"CAMISA VIENTO","seccion":"ACCESORIOS ELECTRICO","Precios":69800},{"id":151,"Productos":"CANALETA RANURADA","seccion":"ACCESORIOS ELECTRICO","Precios":58000},{"id":301,"Productos":"CONDULETA L 1\"","seccion":"ACCESORIOS ELECTRICO","Precios":16800},{"id":237,"Productos":"CONDULETA LB 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":8800},{"id":239,"Productos":"CONDULETA LB 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":12800},{"id":302,"Productos":"CONDULETA T 1\"","seccion":"ACCESORIOS ELECTRICO","Precios":17800},{"id":236,"Productos":"CONDULETA T 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":11200},{"id":238,"Productos":"CONDULETA T 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":12900},{"id":192,"Productos":"CONECTOR 10-10","seccion":"ACCESORIOS ELECTRICO","Precios":6200},{"id":195,"Productos":"CONECTOR 20-20","seccion":"ACCESORIOS ELECTRICO","Precios":9700},{"id":283,"Productos":"CONECTOR CORAZA 1\" 1\/2 CURVO","seccion":"ACCESORIOS ELECTRICO","Precios":21150},{"id":282,"Productos":"CONECTOR CORAZA 1\" 1\/2 RECTO","seccion":"ACCESORIOS ELECTRICO","Precios":35100},{"id":278,"Productos":"CONECTOR CURVO CORAZA 1\"","seccion":"ACCESORIOS ELECTRICO","Precios":19850},{"id":203,"Productos":"CONECTOR EN C #2","seccion":"ACCESORIOS ELECTRICO","Precios":11400},{"id":294,"Productos":"CONECTOR EN C 1\/0","seccion":"ACCESORIOS ELECTRICO","Precios":17800},{"id":277,"Productos":"CONECTOR RECTO CORAZA 1\"","seccion":"ACCESORIOS ELECTRICO","Precios":8100},{"id":672,"Productos":"CONECTOR TRASVERSAL ","seccion":"ACCESORIOS ELECTRICO","Precios":42000},{"id":275,"Productos":"CURVA EMT 1\" 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":8900},{"id":692,"Productos":"CURVA IMC 1\/2 LARGA","seccion":"ACCESORIOS ELECTRICO","Precios":5500},{"id":679,"Productos":"CURVA PVC 1\/2 LARGA","seccion":"ACCESORIOS ELECTRICO","Precios":1350},{"id":292,"Productos":"CURVA PVC 3\"","seccion":"ACCESORIOS ELECTRICO","Precios":16700},{"id":197,"Productos":"CURVA PVC 3\/4 CORTA","seccion":"ACCESORIOS ELECTRICO","Precios":950},{"id":637,"Productos":"CURVA SCH40  3\/4 LARGA","seccion":"ACCESORIOS ELECTRICO","Precios":2000},{"id":682,"Productos":"CURVA SCH40 1\" LARGA","seccion":"ACCESORIOS ELECTRICO","Precios":2700},{"id":321,"Productos":"FUSIBLE VIDRIO X UNIDAD 15 A","seccion":"ACCESORIOS ELECTRICO","Precios":1200},{"id":320,"Productos":"FUSIBLE VIDRIO X UNIDAD 2 A","seccion":"ACCESORIOS ELECTRICO","Precios":1200},{"id":322,"Productos":"FUSIBLE VIDRIO X UNIDAD 5 A","seccion":"ACCESORIOS ELECTRICO","Precios":1200},{"id":140,"Productos":"TERMINAL EMT 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":1600},{"id":751,"Productos":"TERMINAL HEMBRA AZUL","seccion":"ACCESORIOS ELECTRICO","Precios":600},{"id":781,"Productos":"TERMINAL MACHO AZUL","seccion":"ACCESORIOS ELECTRICO","Precios":600},{"id":753,"Productos":"TERMINAL OJO 1\/4 ROJO","seccion":"ACCESORIOS ELECTRICO","Precios":1000},{"id":754,"Productos":"TERMINAL OJO 12-10 AMARILLA","seccion":"ACCESORIOS ELECTRICO","Precios":1200},{"id":752,"Productos":"TERMINAL OJO 25-4 AZUL","seccion":"ACCESORIOS ELECTRICO","Precios":950},{"id":729,"Productos":"TERMINAL OJO BIMETALICA 2\/0","seccion":"ACCESORIOS ELECTRICO","Precios":15800},{"id":201,"Productos":"TERMINAL PARABOLICA ROSCA","seccion":"ACCESORIOS ELECTRICO","Precios":1000},{"id":759,"Productos":"TERMINAL PIN HUECO #14 AZUL","seccion":"ACCESORIOS ELECTRICO","Precios":500},{"id":761,"Productos":"TERMINAL PIN HUECO #16 ROJA","seccion":"ACCESORIOS ELECTRICO","Precios":600},{"id":758,"Productos":"TERMINAL PIN HUECO #18 AMARILLA","seccion":"ACCESORIOS ELECTRICO","Precios":600},{"id":757,"Productos":"TERMINAL PIN HUECO 12-10 AMARILLA","seccion":"ACCESORIOS ELECTRICO","Precios":800},{"id":760,"Productos":"TERMINAL PINHUECO #10 NEGRA","seccion":"ACCESORIOS ELECTRICO","Precios":700},{"id":440,"Productos":"TERMINAL PONCHAR #2","seccion":"ACCESORIOS ELECTRICO","Precios":3000},{"id":434,"Productos":"TERMINAL PONCHAR #4","seccion":"ACCESORIOS ELECTRICO","Precios":2100},{"id":300,"Productos":"TERMINAL PONCHAR #6","seccion":"ACCESORIOS ELECTRICO","Precios":2100},{"id":433,"Productos":"TERMINAL PONCHAR #8","seccion":"ACCESORIOS ELECTRICO","Precios":1300},{"id":431,"Productos":"TERMINAL PONCHAR 1\/0","seccion":"ACCESORIOS ELECTRICO","Precios":6300},{"id":443,"Productos":"TERMINAL PONCHAR 2\/0","seccion":"ACCESORIOS ELECTRICO","Precios":9000},{"id":435,"Productos":"TERMINAL PONCHAR 4\/0","seccion":"ACCESORIOS ELECTRICO","Precios":11200},{"id":178,"Productos":"TERMINAL PVC PLANA 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":400},{"id":170,"Productos":"TERMINAL PVC PLANA 3\"","seccion":"ACCESORIOS ELECTRICO","Precios":6200},{"id":645,"Productos":"TERMINAL PVC PLANA 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":500},{"id":288,"Productos":"TERMINAL PVC PLANA 4\"","seccion":"ACCESORIOS ELECTRICO","Precios":7200},{"id":198,"Productos":"TERMINAL RESORTE AMARILLA","seccion":"ACCESORIOS ELECTRICO","Precios":550},{"id":199,"Productos":"TERMINAL RESORTE ROJA","seccion":"ACCESORIOS ELECTRICO","Precios":550},{"id":200,"Productos":"TERMINAL RESORTE ROJA   AMARILLA","seccion":"ACCESORIOS ELECTRICO","Precios":1250},{"id":194,"Productos":"TERMINAL TV PONCHAR","seccion":"ACCESORIOS ELECTRICO","Precios":1100},{"id":749,"Productos":"TERMINAL U #12-10 AMARILLA","seccion":"ACCESORIOS ELECTRICO","Precios":750},{"id":750,"Productos":"TERMINAL U #16-14 AZUL","seccion":"ACCESORIOS ELECTRICO","Precios":750},{"id":316,"Productos":"BORNERA RIEL ONKA","seccion":"ACCESORIOS ELECTRICO","Precios":2800},{"id":809,"Productos":"FLEXICONDI 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":3900},{"id":681,"Productos":"TERMINAL SCH40 3\/4 ROSCA","seccion":"ACCESORIOS ELECTRICO","Precios":1400},{"id":686,"Productos":"UNION EMT 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":2650},{"id":643,"Productos":"UNION EMT 1\"","seccion":"ACCESORIOS ELECTRICO","Precios":3850},{"id":661,"Productos":"UNION IMC 4\"","seccion":"ACCESORIOS ELECTRICO","Precios":31300},{"id":635,"Productos":"UNION PVC 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":850},{"id":401,"Productos":"UNION RUBULAR #10","seccion":"ACCESORIOS ELECTRICO","Precios":5500},{"id":404,"Productos":"UNION TUBULAR # 4","seccion":"ACCESORIOS ELECTRICO","Precios":1600},{"id":403,"Productos":"UNION TUBULAR 2\/0","seccion":"ACCESORIOS ELECTRICO","Precios":7050},{"id":405,"Productos":"UNION TUBULAR 4\/0","seccion":"ACCESORIOS ELECTRICO","Precios":11250},{"id":331,"Productos":"BORNERA RIEL MEDIANA JXB 10MM","seccion":"ACCESORIOS ELECTRICO","Precios":3000},{"id":332,"Productos":"BORNERA RIEL GRANDE KLEMSAN","seccion":"ACCESORIOS ELECTRICO","Precios":4200},{"id":373,"Productos":"CONECTOR CORAZA 1\" CURVO","seccion":"ACCESORIOS ELECTRICO","Precios":19850},{"id":372,"Productos":"CONECTOR CORAZA 1\" RECTO","seccion":"ACCESORIOS ELECTRICO","Precios":9200},{"id":375,"Productos":"CONECTOR CORAZA 1\/2 CURVO","seccion":"ACCESORIOS ELECTRICO","Precios":6100},{"id":376,"Productos":"CONECTOR CORAZA 1\/2 RECTO","seccion":"ACCESORIOS ELECTRICO","Precios":4900},{"id":374,"Productos":"CONECTOR CORAZA 3\/4 RECTO","seccion":"ACCESORIOS ELECTRICO","Precios":7550},{"id":394,"Productos":"TERMINAL OJO BIMETALICA #2 CILES","seccion":"ACCESORIOS ELECTRICO","Precios":10100},{"id":395,"Productos":"TERMINAL OJO BIMETALICA #4 CILES","seccion":"ACCESORIOS ELECTRICO","Precios":8500},{"id":397,"Productos":"TERMINAL OJO BIMETALICA 1\/0 CILES","seccion":"ACCESORIOS ELECTRICO","Precios":13700},{"id":396,"Productos":"TERMINAL OJO BIMETALICA 4\/0 CILES","seccion":"ACCESORIOS ELECTRICO","Precios":19800},{"id":660,"Productos":"ABRAZADERA DOBLE ALA 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":400},{"id":658,"Productos":"ABRAZADERA DOBLE ALA 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":500},{"id":659,"Productos":"ABRAZADERA DOBLE ALA 3\/8","seccion":"ACCESORIOS ELECTRICO","Precios":350},{"id":461,"Productos":"ABRAZADERA OMOLOGADA 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":4200},{"id":464,"Productos":"BOQUILLA Y CONTRATUERCA IMC 3\/4","seccion":"ACCESORIOS ELECTRICO","Precios":2600},{"id":512,"Productos":"CAJA CANALETA ECONOMICA","seccion":"ACCESORIOS ELECTRICO","Precios":4900},{"id":648,"Productos":"CAJA SCH40 4X4 ","seccion":"ACCESORIOS ELECTRICO","Precios":1350},{"id":463,"Productos":"CONECTOR EN C 2\/0","seccion":"ACCESORIOS ELECTRICO","Precios":17600},{"id":460,"Productos":"CONECTOR EN C 4\/6","seccion":"ACCESORIOS ELECTRICO","Precios":9400},{"id":622,"Productos":"CURVA SCH40 1\/2 CORTA","seccion":"ACCESORIOS ELECTRICO","Precios":1100},{"id":455,"Productos":"TAPA LEVINTON NARANJA","seccion":"ACCESORIOS ELECTRICO","Precios":700},{"id":620,"Productos":"TAPA PVC OCTAGONAL ","seccion":"ACCESORIOS ELECTRICO","Precios":500},{"id":479,"Productos":"TAPONES CONICOS NEGROS","seccion":"ACCESORIOS ELECTRICO","Precios":10000},{"id":454,"Productos":"TERMINAL OJO #16-14","seccion":"ACCESORIOS ELECTRICO","Precios":1000},{"id":453,"Productos":"TERMINAL OJO #22-16","seccion":"ACCESORIOS ELECTRICO","Precios":1000},{"id":451,"Productos":"TERMINAL OJO #5-32 AMARILLA","seccion":"ACCESORIOS ELECTRICO","Precios":500},{"id":450,"Productos":"TERMINAL OJO #8","seccion":"ACCESORIOS ELECTRICO","Precios":1350},{"id":452,"Productos":"TERMINAL OJO 1\/4 #12-10","seccion":"ACCESORIOS ELECTRICO","Precios":1100},{"id":627,"Productos":"TERMINAL PVC 1\" 1\/2 ROSCA","seccion":"ACCESORIOS ELECTRICO","Precios":2600},{"id":651,"Productos":"TERMINAL SCH40 1\" ROSCA","seccion":"ACCESORIOS ELECTRICO","Precios":2300},{"id":655,"Productos":"UNION EMT 1\" 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":4950},{"id":629,"Productos":"UNION EMT 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":1300},{"id":656,"Productos":"UNION IMC 1\/2","seccion":"ACCESORIOS ELECTRICO","Precios":2100},{"id":457,"Productos":"CONECTOR EN C 4\/0 INTELLI","seccion":"ACCESORIOS ELECTRICO","Precios":22750},{"id":458,"Productos":"TERMINAL OJO 250 KCM","seccion":"ACCESORIOS ELECTRICO","Precios":15000},{"id":611,"Productos":"CAJA RAWEL 4X4 MAXWELL","seccion":"ACCESORIOS ELECTRICO","Precios":22800},{"id":513,"Productos":"DPS PARARRAYO 10-12 KVA MONOFA CELSA","seccion":"ACCESORIOS ELECTRICO","Precios":165620},{"id":542,"Productos":"FUSIBLE T15 A FLYNN","seccion":"ACCESORIOS ELECTRICO","Precios":12800},{"id":545,"Productos":"FUSIBLE H10 A LINKS","seccion":"ACCESORIOS ELECTRICO","Precios":9800},{"id":548,"Productos":"FUSIBLE K15 A LINKS","seccion":"ACCESORIOS ELECTRICO","Precios":8800},{"id":549,"Productos":"FUSIBLE K3 A LINKS","seccion":"ACCESORIOS ELECTRICO","Precios":9800},{"id":547,"Productos":"FUSIBLE K5 A LINKS","seccion":"ACCESORIOS ELECTRICO","Precios":9800},{"id":543,"Productos":"FUSIBLE T10 A LINKS","seccion":"ACCESORIOS ELECTRICO","Precios":9800},{"id":546,"Productos":"FUSIBLE K15 A LUHFSER","seccion":"ACCESORIOS ELECTRICO","Precios":9800},{"id":544,"Productos":"FUSIBLE T8A LUHFSER","seccion":"ACCESORIOS ELECTRICO","Precios":9800},{"id":810,"Productos":"CAJA SCH40 2X4","seccion":"ACCESORIOS ELECTRICO","Precios":850},{"id":813,"Productos":"CONECTOR CORAZA 3\/4 CURVO","seccion":"ACCESORIOS ELECTRICO","Precios":8550}]

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
                    <img class="img-conTornillos" src="../img/cables-bamba-2-removebg-preview.png"
                    class="shoe" alt="Chunky">
                </div>
            </div>
        `
        console.log(iterator)


        contendedorCards.innerHTML = div
        contFather.append(contendedorCards)


}
})

