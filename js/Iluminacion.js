const contFather = document.getElementById("Father")

let datosDelJson =[{"id":342,"Productos":"ADAPTADOR CINTA LED X PAQUETE 12V MERC","seccion":"ILUMINACION ","Precios":15200,"image":"../img/iluminacion/I342.jpg"},{"id":733,"Productos":"BOMBILLO 15W MERCURY ","seccion":"ILUMINACION ","Precios":10800,"image":"../img/iluminacion/I773.jpg"},{"id":520,"Productos":"BOMBILLO 20W MERCURY LUZ BLANCA","seccion":"ILUMINACION ","Precios":11800,"image":"../img/iluminacion/I773.jpg"},{"id":519,"Productos":"BOMBILLO 30W MERCURY LUZ BLANCA","seccion":"ILUMINACION ","Precios":16800,"image":"../img/iluminacion/I773.jpg"},{"id":523,"Productos":"BOMBILLO 6W MERCURY BLANCA RETILAR","seccion":"ILUMINACION ","Precios":9200,"image":"../img/iluminacion/I773.jpg"},{"id":674,"Productos":"BOMBILLO 6W MERCURY LUZ BLANCA","seccion":"ILUMINACION ","Precios":9000,"image":"../img/iluminacion/I773.jpg"},{"id":531,"Productos":"BOMBILLO 9W MERCURY SENSOR","seccion":"ILUMINACION ","Precios":15900,"image":"../img/iluminacion/I773.jpg"},{"id":534,"Productos":"BOMBILLO A60 CALIDO TRASPARENTE MERCURY","seccion":"ILUMINACION ","Precios":9200,"image":"../img/iluminacion/I534.jpg"},{"id":517,"Productos":"BOMBILLO C45 CALIDO TRASPARENTE MERCURY","seccion":"ILUMINACION ","Precios":7100,"image":"../img/iluminacion/I534.jpg"},{"id":516,"Productos":"BOMBILLO G80 CALIDO TRASPARENTE MERCURY","seccion":"ILUMINACION ","Precios":10400,"image":"../img/iluminacion/I534.jpg"},{"id":514,"Productos":"BOMBILLO G95 CALIDO TRASPARENTE MERCURY","seccion":"ILUMINACION ","Precios":12100,"image":"../img/iluminacion/I534.jpg"},{"id":780,"Productos":"BOMBILLO GU10 BLANCO MERCUCRY","seccion":"ILUMINACION ","Precios":5700,"image":"../img/iluminacion/I773.jpg"},{"id":104,"Productos":"BOMBILLO GU10 CALIDO MERCURY","seccion":"ILUMINACION ","Precios":5800,"image":"../img/iluminacion/I104.jpg"},{"id":522,"Productos":"BOMBILLO ST64 LUZ CALIDO TRASPARENTE ME","seccion":"ILUMINACION ","Precios":7900,"image":"../img/iluminacion/I522.jpg"},{"id":108,"Productos":"BOMBILO 6W RETILAR","seccion":"ILUMINACION ","Precios":9200,"image":"../img/iluminacion/I773.jpg"},{"id":893,"Productos":"CANALETA 3\/4 MERCURY","seccion":"ILUMINACION ","Precios":6200,"image":"../img/iluminacion/I152.jpg"},{"id":34,"Productos":"CINTA LED CALIDA 12V 5METRO","seccion":"ILUMINACION ","Precios":18900,"image":"../img/iluminacion/I34.jpg"},{"id":49,"Productos":"INTER DOBLE MERCURY","seccion":"ILUMINACION ","Precios":6500,"image":"../img/iluminacion/I49.jpg"},{"id":2,"Productos":"INTER SENCILLO MERCURY","seccion":"ILUMINACION ","Precios":5500,"image":"../img/iluminacion/I2.jpg"},{"id":59,"Productos":"INTER TRIPLE BLANCO V9-009","seccion":"ILUMINACION ","Precios":11800,"image":"../img/iluminacion/I41.jpg"},{"id":48,"Productos":"INTER TRIPLE MERCURY","seccion":"ILUMINACION ","Precios":8900,"image":"../img/iluminacion/I41.jpg"},{"id":58,"Productos":"INTER TRIPLE NEGRO V17-009","seccion":"ILUMINACION ","Precios":10500,"image":"../img/iluminacion/I37.jpg"},{"id":560,"Productos":"LAMPARA ANTIPOLVO 2X10W MERCURY","seccion":"ILUMINACION ","Precios":13200,"image":"../img/iluminacion/I560.jpg"},{"id":561,"Productos":"LAMPARA ANTIPOLVO 2X18W MERCURY","seccion":"ILUMINACION ","Precios":19100,"image":"../img/iluminacion/I560.jpg"},{"id":558,"Productos":"LAMPARA EMERGENCIA 5.4W MERCURY","seccion":"ILUMINACION ","Precios":59800,"image":"../img/iluminacion/I558.jpg"},{"id":559,"Productos":"LAMPARA LED T5 MERCURY","seccion":"ILUMINACION ","Precios":10800,"image":"../img/iluminacion/I559.jpg"},{"id":557,"Productos":"LAMPARA TORTUGA 15W MERCURY","seccion":"ILUMINACION ","Precios":20200,"image":"../img/iluminacion/I557.jpg"},{"id":588,"Productos":"PANEL 12W INC CUADRADO ","seccion":"ILUMINACION ","Precios":12800,"image":"../img/iluminacion/I588.jpg"},{"id":581,"Productos":"PANEL 12W INC REDONDO CALIDO MERCURY","seccion":"ILUMINACION ","Precios":10500,"image":"../img/iluminacion/I581.jpeg"},{"id":587,"Productos":"PANEL 12W SP CUADRADO MERCURY","seccion":"ILUMINACION ","Precios":14300,"image":"../img/iluminacion/I587.jpeg"},{"id":580,"Productos":"PANEL 18W INC CUADRADO MERCURY","seccion":"ILUMINACION ","Precios":16200,"image":"../img/iluminacion/I588.jpg"},{"id":583,"Productos":"PANEL 18W INC REDONDO MERCURY","seccion":"ILUMINACION ","Precios":12900,"image":"../img/iluminacion/I581.jpg"},{"id":582,"Productos":"PANEL 18W SP CUADRADO MERCURY","seccion":"ILUMINACION ","Precios":18200,"image":"../img/iluminacion/I587.jpeg"},{"id":585,"Productos":"PANEL 18W SP REDONDO MERCURY","seccion":"ILUMINACION ","Precios":16300,"image":"../img/iluminacion/I581.jpg"},{"id":578,"Productos":"PANEL 24W INC CUADRADO MERCURY","seccion":"ILUMINACION ","Precios":22800,"image":"../img/iluminacion/I588.jpg"},{"id":579,"Productos":"PANEL 24W SP CUADRADO MERCURY","seccion":"ILUMINACION ","Precios":29900,"image":"../img/iluminacion/I587.jpeg"},{"id":591,"Productos":"PANEL 9W INC REDODNO CALIDO","seccion":"ILUMINACION ","Precios":10400,"image":"../img/iluminacion/I581.jpg"},{"id":592,"Productos":"PANEL 9W INC REDONDO","seccion":"ILUMINACION ","Precios":8800,"image":"../img/iluminacion/I581.jpg"},{"id":191,"Productos":"PLAFON PLASTICO MERCURY","seccion":"ILUMINACION ","Precios":2800,"image":"../img/iluminacion/I191.jpg"},{"id":551,"Productos":"REFLECTOR 100W BLANCO MERCURY","seccion":"ILUMINACION ","Precios":66800,"image":"../img/iluminacion/I551.jpg"},{"id":489,"Productos":"REFLECTOR 100W CON PANEL SOLAR MERCURY","seccion":"ILUMINACION ","Precios":222000,"image":"../img/iluminacion/I478.jpg"},{"id":577,"Productos":"REFLECTOR 10W CALIDO MERCURY","seccion":"ILUMINACION ","Precios":15800,"image":"../img/iluminacion/I551.jpg"},{"id":478,"Productos":"REFLECTOR 200W CON PANEL SOLAR MERCURY","seccion":"ILUMINACION ","Precios":314000,"image":"../img/iluminacion/I478.jpg"},{"id":568,"Productos":"REFLECTOR 20W BLANCO MERCURY","seccion":"ILUMINACION ","Precios":20800,"image":"../img/iluminacion/I551.jpg"},{"id":576,"Productos":"REFLECTOR 20W CALIDO MERCURY","seccion":"ILUMINACION ","Precios":22600,"image":"../img/iluminacion/I551.jpg"},{"id":569,"Productos":"REFLECTOR 30W BLANCO MERCURY","seccion":"ILUMINACION ","Precios":33800,"image":"../img/iluminacion/I551.jpg"},{"id":567,"Productos":"REFLECTOR 30W CALIDO MERCURY","seccion":"ILUMINACION ","Precios":34300,"image":"../img/iluminacion/I551.jpg"},{"id":550,"Productos":"REFLECTOR 50W BLANCO MERCURY","seccion":"ILUMINACION ","Precios":38800,"image":"../img/iluminacion/I551.jpg"},{"id":524,"Productos":"SENSOR  PARED TIPO SUICHE MERCURY","seccion":"ILUMINACION ","Precios":20000,"image":"../img/iluminacion/I524.jpg"},{"id":737,"Productos":"SENSOR PLAFON MERCURY","seccion":"ILUMINACION ","Precios":22800,"image":"../img/iluminacion/I737.jpg"},{"id":67,"Productos":"TAPA ROJA V2-02RO","seccion":"ILUMINACION ","Precios":3100,"image":"../img/iluminacion/I67.jpg"},{"id":56,"Productos":"TOMA   INTER GRIS V3-018","seccion":"ILUMINACION ","Precios":7600,"image":"../img/iluminacion/I37.jpg"},{"id":52,"Productos":"TOMA   INTER MERCURY","seccion":"ILUMINACION ","Precios":6700,"image":"../img/iluminacion/I37.jpg"},{"id":51,"Productos":"TOMA COAXIAL MERCURY","seccion":"ILUMINACION ","Precios":4800,"image":"../img/iluminacion/I51.jpg"},{"id":50,"Productos":"TOMA DOBLE MERCURY","seccion":"ILUMINACION ","Precios":6500,"image":"../img/iluminacion/I50.jpg"},{"id":98,"Productos":"TOMA DOBLE SP MERCURY","seccion":"ILUMINACION ","Precios":2900,"image":"../img/iluminacion/I50.jpg"},{"id":675,"Productos":"TOMA FCGI MERCURY","seccion":"ILUMINACION ","Precios":28600,"image":"../img/iluminacion/I675.jpg"},{"id":54,"Productos":"TOMA TELEFONO BLANCO V9-030","seccion":"ILUMINACION ","Precios":4700,"image":"../img/iluminacion/I37.jpg"},{"id":53,"Productos":"TOMA TV BLANCO V9-017","seccion":"ILUMINACION ","Precios":5200,"image":"../img/iluminacion/I37.jpg"},{"id":246,"Productos":"BENJAMIN ROSCA  BLANCO","seccion":"ILUMINACION ","Precios":3600,"image":"../img/iluminacion/I246.jpg"},{"id":589,"Productos":"PANEL 24W SP REDONDO","seccion":"ILUMINACION ","Precios":29800,"image":"../img/iluminacion/I589.jpeg"},{"id":363,"Productos":"T ELECTRICA OSBLACK","seccion":"ILUMINACION ","Precios":1700,"image":"../img/iluminacion/I363.jpg"},{"id":500,"Productos":"EXTENSION 10 METRO NARANJA GLOBY","seccion":"ILUMINACION ","Precios":22300,"image":"../img/iluminacion/I500.jpg"},{"id":926,"Productos":"BOMBILLO 3W MERCURY","seccion":"ILUMINACION ","Precios":4900,"image":"../img/iluminacion/I773.jpg"},{"id":925,"Productos":"BOMBILLO 6W CALIDO","seccion":"ILUMINACION ","Precios":4200,"image":"../img/iluminacion/I104.jpg"},{"id":574,"Productos":"PANEL 12W SP REDONDO","seccion":"ILUMINACION ","Precios":13100,"image":"../img/iluminacion/I589.jpeg"},{"id":28,"Productos":"BOMBILLO GU10 RGB","seccion":"ILUMINACION ","Precios":26700,"image":"../img/iluminacion/I28.jpg"},{"id":536,"Productos":"BOMBILLO 3W CALIDO MILETO","seccion":"ILUMINACION ","Precios":3850,"image":"../img/iluminacion/I773.jpg"},{"id":529,"Productos":"BOMBILLO 9W LUZ BLANCA MILETO","seccion":"ILUMINACION ","Precios":5400,"image":"../img/iluminacion/I773.jpg"},{"id":528,"Productos":"BOMBILLO SM 9W LUZ BLANCA MILETO","seccion":"ILUMINACION ","Precios":16250,"image":"../img/iluminacion/I773.jpg"},{"id":73,"Productos":"DIMERIZABLE BLANCO V9-029","seccion":"ILUMINACION ","Precios":28300,"image":"../img/iluminacion/I73.jpg"},{"id":74,"Productos":"DIMERIZABLE NEGRO V17-029","seccion":"ILUMINACION ","Precios":28500,"image":"../img/iluminacion/I74.jpg"},{"id":57,"Productos":"INTER DOBLE BLANCO V9-007","seccion":"ILUMINACION ","Precios":7700,"image":"../img/iluminacion/I37.jpg"},{"id":85,"Productos":"INTER DOBLE GRIS V3-007","seccion":"ILUMINACION ","Precios":7700,"image":"../img/iluminacion/I37.jpg"},{"id":683,"Productos":"INTER DOBLE NEGRO V17-007","seccion":"ILUMINACION ","Precios":8200,"image":"../img/iluminacion/I37.jpg"},{"id":77,"Productos":"INTER SENCILLO BLANCO V9-003","seccion":"ILUMINACION ","Precios":4800,"image":"../img/iluminacion/I37.jpg"},{"id":82,"Productos":"INTER SENCILLO GRIS V3-003","seccion":"ILUMINACION ","Precios":5800,"image":"../img/iluminacion/I37.jpg"},{"id":88,"Productos":"INTER SENCILLO NEGRO V17-003","seccion":"ILUMINACION ","Precios":4800,"image":"../img/iluminacion/I37.jpg"},{"id":86,"Productos":"INTER TRIPLE GRIS V3-009","seccion":"ILUMINACION ","Precios":11300,"image":"../img/iluminacion/I37.jpg"}]

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
                    class="shoe" alt="Imagen no disponible">
                </div>
            </div>
        `


        contendedorCards.innerHTML = div
        contFather.append(contendedorCards)


}
})


