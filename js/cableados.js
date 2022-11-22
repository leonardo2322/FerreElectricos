const contFather = document.getElementById("Father")

let datosDelJson = [{"id":3,"Productos":"CABLE INTERNET 3 M","seccion":"CABLEADOS","Precios":8000,"image":"../img/cableados/c3.jpg"},{"id":131,"Productos":"ALAMBRE #12 X 100 METRO BLANCO","seccion":"CABLEADOS","Precios":190000,"image":"../img/cableados/c131.jpg"},{"id":130,"Productos":"ALAMBRE #12 X METRO BLANCO","seccion":"CABLEADOS","Precios":2000,"image":"../img/cableados/c131.jpg"},{"id":112,"Productos":"CABLE #10 X 100 METRO BLANCO","seccion":"CABLEADOS","Precios":380000,"image":"../img/cableados/c131.jpg"},{"id":724,"Productos":"CABLE #10 X 100 METRO NEGRO","seccion":"CABLEADOS","Precios":380000,"image":"../img/cableados/c724.jpg"},{"id":722,"Productos":"CABLE #10 X 100 METRO ROJO","seccion":"CABLEADOS","Precios":380000,"image":"../img/cableados/c784.jpg"},{"id":720,"Productos":"CABLE #10 X 100 METRO VERDE","seccion":"CABLEADOS","Precios":380000,"image":"../img/cableados/c783.jpg"},{"id":111,"Productos":"CABLE #10 X METRO BLANCO","seccion":"CABLEADOS","Precios":3950,"image":"../img/cableados/c131.jpg"},{"id":723,"Productos":"CABLE #10 X METRO NEGRO","seccion":"CABLEADOS","Precios":3950,"image":"../img/cableados/c724.jpg"},{"id":721,"Productos":"CABLE #10 X METRO ROJO","seccion":"CABLEADOS","Precios":3950,"image":"../img/cableados/c784.jpg"},{"id":719,"Productos":"CABLE #10 X METRO VERDE","seccion":"CABLEADOS","Precios":3950,"image":"../img/cableados/c783.jpg"},{"id":7,"Productos":"CABLE #12 X 100 METRO BLANCO","seccion":"CABLEADOS","Precios":264000,"image":"../img/cableados/c131.jpg"},{"id":715,"Productos":"CABLE #12 X 100 METRO NEGRO","seccion":"CABLEADOS","Precios":264000,"image":"../img/cableados/c724.jpg"},{"id":717,"Productos":"CABLE #12 X 100 METRO ROJO","seccion":"CABLEADOS","Precios":264000,"image":"../img/cableados/c784.jpg"},{"id":713,"Productos":"CABLE #12 X 100 METRO VERDE","seccion":"CABLEADOS","Precios":264000,"image":"../img/cableados/c783.jpg"},{"id":718,"Productos":"CABLE #12 X METRO AZUL","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c452.jpg"},{"id":6,"Productos":"CABLE #12 X METRO BLANCO","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c131.jpg"},{"id":714,"Productos":"CABLE #12 X METRO NEGRO","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c724.jpg"},{"id":716,"Productos":"CABLE #12 X METRO ROJO","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c784.jpg"},{"id":712,"Productos":"CABLE #12 X METRO VERDE","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c783.jpg"},{"id":707,"Productos":"CABLE #14 X 100 METRO NEGRO","seccion":"CABLEADOS","Precios":214800,"image":"../img/cableados/c724.jpg"},{"id":114,"Productos":"CABLE #14 X 100 METRO ROJO","seccion":"CABLEADOS","Precios":214800,"image":"../img/cableados/c784.jpg"},{"id":711,"Productos":"CABLE #14 X 100 METRO VERDE","seccion":"CABLEADOS","Precios":214800,"image":"../img/cableados/c783.jpg"},{"id":706,"Productos":"CABLE #14 X METRO NEGRO","seccion":"CABLEADOS","Precios":2250,"image":"../img/cableados/c724.jpg"},{"id":113,"Productos":"CABLE #14 X METRO ROJO","seccion":"CABLEADOS","Precios":2250,"image":"../img/cableados/c784.jpg"},{"id":710,"Productos":"CABLE #14 X METRO VERDE","seccion":"CABLEADOS","Precios":2250,"image":"../img/cableados/c783.jpg"},{"id":122,"Productos":"CABLE DUPLEX # 18 *100","seccion":"CABLEADOS","Precios":161000,"image":"../img/cableados/c122.jpg"},{"id":116,"Productos":"CABLE DUPLEX #12 X 100 METRO CENTELSA","seccion":"CABLEADOS","Precios":490800,"image":"../img/cableados/c116.jpg"},{"id":115,"Productos":"CABLE DUPLEX #12 X METRO CENTELSA","seccion":"CABLEADOS","Precios":5200,"image":"../img/cableados/c116.jpg"},{"id":118,"Productos":"CABLE DUPLEX #14 *100 CENTELSA","seccion":"CABLEADOS","Precios":340000,"image":"../img/cableados/c116.jpg"},{"id":117,"Productos":"CABLE DUPLEX #14 X METRO CENTELSA","seccion":"CABLEADOS","Precios":3500,"image":"../img/cableados/c116.jpg"},{"id":125,"Productos":"CABLE NEOPREN X METRO","seccion":"CABLEADOS","Precios":1800,"image":"../img/cableados/c125.jpg"},{"id":127,"Productos":"CABLE SUPER GX X METRO","seccion":"CABLEADOS","Precios":3300,"image":"../img/cableados/c127.jpg"},{"id":812,"Productos":"CABLE VEHICULAR #18 ROJO X METRO","seccion":"CABLEADOS","Precios":1300,"image":"../img/cableados/c812.jpg"},{"id":766,"Productos":"CABLE VEHILAR #16 BLANCO X METRO","seccion":"CABLEADOS","Precios":1600,"image":"../img/cableados/c131.jpg"},{"id":120,"Productos":"DUPLEX # 16 *100 METRO CENTELSA","seccion":"CABLEADOS","Precios":205800,"image":"../img/cableados/c116.jpg"},{"id":121,"Productos":"DUPLEX # 18 X METRO CENTELSA","seccion":"CABLEADOS","Precios":1750,"image":"../img/cableados/c116.jpg"},{"id":119,"Productos":"DUPLEX #16 X METRO CENTELSA","seccion":"CABLEADOS","Precios":2200,"image":"../img/cableados/c116.jpg"},{"id":811,"Productos":"CABLE #12 AMARILLO X METRO","seccion":"CABLEADOS","Precios":2900,"image":"../img/cableados/c811.jpg"},{"id":887,"Productos":"CABLE #14 X METRO AMARILLO","seccion":"CABLEADOS","Precios":2250,"image":"../img/cableados/c811.jpg"},{"id":888,"Productos":"CABLE #14 X100 METRO AMARILLO","seccion":"CABLEADOS","Precios":0,"image":"../img/cableados/c811.jpg"},{"id":986,"Productos":"CABLE #2 SERIE 8000","seccion":"CABLEADOS","Precios":5800,"image":"../img/cableados/c986.jpg"},{"id":967,"Productos":"CABLE #6 8000","seccion":"CABLEADOS","Precios":3800,"image":"../img/cableados/c986.jpg"},{"id":905,"Productos":"CABLE 1\/0 DESNUDO","seccion":"CABLEADOS","Precios":43900,"image":"../img/cableados/c905.jpg"},{"id":823,"Productos":"CABLE UTP","seccion":"CABLEADOS","Precios":950,"image":"../img/cableados/c823.jpg"},{"id":909,"Productos":"CABLE VEHICULAR #16 X METRO NEGRO","seccion":"CABLEADOS","Precios":1600,"image":"../img/cableados/c724.jpg"},{"id":832,"Productos":"ENCAUCHETADO 2X4 4","seccion":"CABLEADOS","Precios":66600,"image":"../img/cableados/c832.jpg"},{"id":882,"Productos":"EXTENSION 15 METRO NARANJA GLOBY","seccion":"CABLEADOS","Precios":26500,"image":"../img/cableados/c882.jpg"},{"id":874,"Productos":"ALAMBRE #8 ROJO","seccion":"CABLEADOS","Precios":5350,"image":"../img/cableados/c784.jpg"},{"id":866,"Productos":"CABLE #2","seccion":"CABLEADOS","Precios":23650,"image":"../img/cableados/c265.jpg"},{"id":864,"Productos":"CABLE VEHICULAR #18 BLANCO X METRO","seccion":"CABLEADOS","Precios":1300,"image":"../img/cableados/c131.jpg"},{"id":741,"Productos":"CABLE #12 ECONOMICO AZUL X METRO","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c452.jpg"},{"id":740,"Productos":"CABLE #12 ECONOMICO BLANCO X METRO","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c131.jpg"},{"id":765,"Productos":"CABLE #14 ECONOMICO X 100 METRO ROJO","seccion":"CABLEADOS","Precios":160000,"image":"../img/cableados/c784.jpg"},{"id":128,"Productos":"CABLE #4 X METRO","seccion":"CABLEADOS","Precios":16200,"image":"../img/cableados/c265.jpg"},{"id":129,"Productos":"CABLE #8 X METRO NEGRO","seccion":"CABLEADOS","Precios":6050,"image":"../img/cableados/c724.jpg"},{"id":703,"Productos":"CABLE #8 X METRO ROJO","seccion":"CABLEADOS","Precios":6050,"image":"../img/cableados/c784.jpg"},{"id":123,"Productos":"CABLE VEHICULAR #16 ROJO X METRO","seccion":"CABLEADOS","Precios":1600,"image":"../img/cableados/c784.jpg"},{"id":124,"Productos":"CABLE VEHICULAR #18 NEGRO X METRO","seccion":"CABLEADOS","Precios":1300,"image":"../img/cableados/c724.jpg"},{"id":126,"Productos":"CABLE COAXIAL X METRO PERFECT","seccion":"CABLEADOS","Precios":700,"image":"../img/cableados/c126.jpg"},{"id":785,"Productos":"ALAMBRE #12 X 100 METRO NEGRO","seccion":"CABLEADOS","Precios":190000,"image":"../img/cableados/c724.jpg"},{"id":787,"Productos":"ALAMBRE #12 X 100 METRO ROJO","seccion":"CABLEADOS","Precios":190000,"image":"../img/cableados/c784.jpg"},{"id":786,"Productos":"ALAMBRE #12 X 100 METRO VERDE","seccion":"CABLEADOS","Precios":190000,"image":"../img/cableados/c783.jpg"},{"id":782,"Productos":"ALAMBRE #12 X METRO NEGRO","seccion":"CABLEADOS","Precios":2000,"image":"../img/cableados/c724.jpg"},{"id":784,"Productos":"ALAMBRE #12 X METRO ROJO","seccion":"CABLEADOS","Precios":2000,"image":"../img/cableados/c784.jpg"},{"id":783,"Productos":"ALAMBRE #12 X METRO VERDE","seccion":"CABLEADOS","Precios":2000,"image":"../img/cableados/c783.jpg"},{"id":253,"Productos":"ANTIFRAUDE 1X8 8 110V X METRO","seccion":"CABLEADOS","Precios":15800,"image":"../img/cableados/c253.jpg"},{"id":266,"Productos":"ANTIFRAUDE 2X8 8 220V X METRO","seccion":"CABLEADOS","Precios":23800,"image":"../img/cableados/c253.jpg"},{"id":804,"Productos":"CABLE #4 DESNUDO","seccion":"CABLEADOS","Precios":16200,"image":"../img/cableados/c905.jpg"},{"id":265,"Productos":"CABLE #6 X METRO","seccion":"CABLEADOS","Precios":10200,"image":"../img/cableados/c265.jpg"},{"id":268,"Productos":"CABLE ACSR #4","seccion":"CABLEADOS","Precios":2050,"image":"../img/cableados/c268.jpeg"},{"id":799,"Productos":"DUPLEX #12 ECONOMICO","seccion":"CABLEADOS","Precios":1600,"image":"../img/cableados/c122.jpg"},{"id":800,"Productos":"DUPLEX #14 ECONOMICO","seccion":"CABLEADOS","Precios":1500,"image":"../img/cableados/c122.jpg"},{"id":779,"Productos":"DUPLEX CRISTAL #12 X METRO","seccion":"CABLEADOS","Precios":4650,"image":"../img/cableados/c243.jpg"},{"id":243,"Productos":"DUPLEX CRISTAL #14 X METRO","seccion":"CABLEADOS","Precios":3100,"image":"../img/cableados/c243.jpg"},{"id":270,"Productos":"ENCAUCHETADO 2X10 X METRO","seccion":"CABLEADOS","Precios":9400,"image":"../img/cableados/c260.jpeg"},{"id":267,"Productos":"ENCAUCHETADO 2X14 X METRO","seccion":"CABLEADOS","Precios":5050,"image":"../img/cableados/c260.jpeg"},{"id":259,"Productos":"ENCAUCHETADO 2X16 X METRO","seccion":"CABLEADOS","Precios":3400,"image":"../img/cableados/c260.jpeg"},{"id":260,"Productos":"ENCAUCHETADO 2X18 X METRO","seccion":"CABLEADOS","Precios":2800,"image":"../img/cableados/c260.jpeg"},{"id":264,"Productos":"ENCAUCHETADO 3X10 X METRO","seccion":"CABLEADOS","Precios":14300,"image":"../img/cableados/c257.jpg"},{"id":801,"Productos":"ENCAUCHETADO 3X12 ECONOMICO","seccion":"CABLEADOS","Precios":4800,"image":"../img/cableados/c257.jpg"},{"id":255,"Productos":"ENCAUCHETADO 3X12 X METRO","seccion":"CABLEADOS","Precios":9100,"image":"../img/cableados/c257.jpg"},{"id":802,"Productos":"ENCAUCHETADO 3X14 ECONOMICO","seccion":"CABLEADOS","Precios":3700,"image":"../img/cableados/c832.jpg"},{"id":776,"Productos":"ENCAUCHETADO 3X14 X METRO","seccion":"CABLEADOS","Precios":7100,"image":"../img/cableados/c257.jpg"},{"id":803,"Productos":"ENCAUCHETADO 3X16 ECONOMICO","seccion":"CABLEADOS","Precios":3200,"image":"../img/cableados/c257.jpg"},{"id":258,"Productos":"ENCAUCHETADO 3X16 X METRO","seccion":"CABLEADOS","Precios":4600,"image":"../img/cableados/c257.jpg"},{"id":257,"Productos":"ENCAUCHETADO 3X8 X METRO","seccion":"CABLEADOS","Precios":24300,"image":"../img/cableados/c257.jpg"},{"id":269,"Productos":"ENCAUCHETADO 4X10 X METRO","seccion":"CABLEADOS","Precios":19200,"image":"../img/cableados/c832.jpg"},{"id":254,"Productos":"ENCAUCHETADO 4X12 X METRO","seccion":"CABLEADOS","Precios":13200,"image":"../img/cableados/c832.jpg"},{"id":261,"Productos":"ENCAUCHETADO 4X16 X METRO","seccion":"CABLEADOS","Precios":5600,"image":"../img/cableados/c832.jpg"},{"id":256,"Productos":"ENCAUCHETADO 4X18 X METRO","seccion":"CABLEADOS","Precios":4900,"image":"../img/cableados/c832.jpg"},{"id":263,"Productos":"ENCAUCHETADO 4X8 X METRO","seccion":"CABLEADOS","Precios":31800,"image":"../img/cableados/c832.jpg"},{"id":775,"Productos":"TRENSA #2","seccion":"CABLEADOS","Precios":10250,"image":"../img/cableados/c775.jpg"},{"id":262,"Productos":"TRENSA #4","seccion":"CABLEADOS","Precios":7800,"image":"../img/cableados/c262.jpg"},{"id":702,"Productos":"CABLE #8 X METRO BLANCO","seccion":"CABLEADOS","Precios":6050,"image":"../img/cableados/c131.jpg"},{"id":704,"Productos":"CABLE #8 X METRO VERDE","seccion":"CABLEADOS","Precios":6050,"image":"../img/cableados/c783.jpg"},{"id":709,"Productos":"CABLE #14 X 100 METRO BLANCO","seccion":"CABLEADOS","Precios":214800,"image":"../img/cableados/c131.jpg"},{"id":708,"Productos":"CABLE #14 X METRO BLANCO","seccion":"CABLEADOS","Precios":2250,"image":"../img/cableados/c131.jpg"}]


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
        console.log(iterator)


        contendedorCards.innerHTML = div
        contFather.append(contendedorCards)


}
})


