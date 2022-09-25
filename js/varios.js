const contFather = document.getElementById("Father")

let datosDelJson = [{"id":937,"Productos":"ANGULO DE 11\/2X1\/8 X MT","seccion":"VARIOS ","Precios":105300,"image":"../img/varios/v937.jpg"},{"id":944,"Productos":"ARANDELA","seccion":"VARIOS ","Precios":400,"image":"../img/varios/v944.jpg"},{"id":869,"Productos":"BASE PARA REFLECTOR SOLAR","seccion":"VARIOS ","Precios":65000,"image":"../img/varios/v869.jpg"},{"id":891,"Productos":"BASE VENTILADOR","seccion":"VARIOS ","Precios":19800,"image":"../img/varios/v891.jpg"},{"id":876,"Productos":"BICARBONATO","seccion":"VARIOS ","Precios":6200,"image":"../img/varios/v876.jpg"},{"id":839,"Productos":"BOQUILLA Y CONTRATUERCA IMC 1\" 1\/2","seccion":"VARIOS ","Precios":5800,"image":"../img/varios/v839.jpg"},{"id":963,"Productos":"BUJE 2 X 3\/4","seccion":"VARIOS ","Precios":5300,"image":"../img/varios/v963.jpg"},{"id":966,"Productos":"CEMENTO","seccion":"VARIOS ","Precios":1800,"image":"../img/varios/v966.png"},{"id":953,"Productos":"CINTA ENMASCARAR","seccion":"VARIOS ","Precios":8400,"image":"../img/varios/v953.jpg"},{"id":911,"Productos":"CLAVIJA MACHO P\/TRABADA","seccion":"VARIOS ","Precios":6800,"image":"../img/varios/v911.jpg"},{"id":948,"Productos":"MANO DE OBRA","seccion":"VARIOS ","Precios":220000,"image":"../img/varios/v948.jpg"},{"id":875,"Productos":"PEGA","seccion":"VARIOS ","Precios":14800,"image":"../img/varios/v875.jpg"},{"id":840,"Productos":"PEGALOCA INFINITA","seccion":"VARIOS ","Precios":750,"image":"../img/varios/v875.jpg"},{"id":850,"Productos":"PERFIL","seccion":"VARIOS ","Precios":14800,"image":"../img/varios/v850.jpg"},{"id":950,"Productos":"PINTURA NARANJA","seccion":"VARIOS ","Precios":19800,"image":"../img/varios/v950.jpg"},{"id":851,"Productos":"PLATINA","seccion":"VARIOS ","Precios":12800,"image":"../img/varios/v851.jpg"},{"id":952,"Productos":"RALLY EPOXICA","seccion":"VARIOS ","Precios":8600,"image":"../img/varios/v952.jpg"},{"id":946,"Productos":"ROSCA","seccion":"VARIOS ","Precios":400,"image":"../img/varios/v946.jpg"},{"id":880,"Productos":"SILICOLA","seccion":"VARIOS ","Precios":4500,"image":"../img/varios/v880.jpg"},{"id":836,"Productos":"TRASPORTE","seccion":"VARIOS ","Precios":22000,"image":"../img/varios/v836.jpg"},{"id":962,"Productos":"UNION DE PRESION 2\"","seccion":"VARIOS ","Precios":4100,"image":"../img/varios/v962.jpg"},{"id":826,"Productos":"VARILLA ROSCA INFINITA","seccion":"VARIOS ","Precios":4600,"image":"../img/varios/v946.jpg"},{"id":932,"Productos":"VASELINA","seccion":"VARIOS ","Precios":16200,"image":"../img/varios/v932.jpg"},{"id":828,"Productos":"ARANDELA PLANA","seccion":"VARIOS ","Precios":2400,"image":"../img/varios/v944.jpg"},{"id":827,"Productos":"ROSCA TUERCA","seccion":"VARIOS ","Precios":1800,"image":"../img/varios/v827.jpg"},{"id":853,"Productos":"SILICONA","seccion":"VARIOS ","Precios":7000,"image":"../img/varios/v880.jpg"},{"id":329,"Productos":"MARCADORES ANILLO SCHNEIDER","seccion":"VARIOS ","Precios":3500,"image":"../img/varios/v329.jpg"},{"id":727,"Productos":"CARBONES PULIDORA MEDIANA","seccion":"VARIOS ","Precios":8000,"image":"../img/varios/v727.jpg"},{"id":229,"Productos":"PINTURA NARANJA X TARRO","seccion":"VARIOS ","Precios":35000,"image":"../img/varios/v950.jpg"},{"id":228,"Productos":"PINTURA NARANJA X UNIDAD","seccion":"VARIOS ","Precios":1500,"image":"../img/varios/v950.jpg"},{"id":805,"Productos":"TORNILLO ENSAMBLE 3\"","seccion":"VARIOS ","Precios":240,"image":"../img/varios/v805.jpg"},{"id":202,"Productos":"UNION PARABOLICA","seccion":"VARIOS ","Precios":600,"image":"../img/varios/v202.jpg"},{"id":230,"Productos":"WASH PRIMER X UNIDAD","seccion":"VARIOS ","Precios":3000,"image":"../img/varios/v230.jpg"}]


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
                    class="shoe" alt="imagen no insertada">
                </div>
            </div>
        `


        contendedorCards.innerHTML = div
        contFather.append(contendedorCards)


}
})


