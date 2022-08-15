const contFather = document.getElementById("Father")

let datosDelJson = [{"id":208,"Productos":"CINTA NEGRA ECONOMICA MERCURY","seccion":"HERRAMIENTA","Precios":3900},{"id":745,"Productos":"PUNSADOR DE MARCHA VERDE NO","seccion":"HERRAMIENTA","Precios":9900},{"id":12,"Productos":"AMARRE PLASTICO 10 CM","seccion":"HERRAMIENTA","Precios":65},{"id":13,"Productos":"AMARRE PLASTICO 10CM *100","seccion":"HERRAMIENTA","Precios":5200},{"id":10,"Productos":"AMARRE PLASTICO 20 CM ","seccion":"HERRAMIENTA","Precios":99},{"id":11,"Productos":"AMARRE PLASTICO 20CM *100","seccion":"HERRAMIENTA","Precios":9800},{"id":4,"Productos":"AMARRE PLASTICO 30 CM ","seccion":"HERRAMIENTA","Precios":175},{"id":8,"Productos":"AMARRE PLASTICO 30CM *100","seccion":"HERRAMIENTA","Precios":17000},{"id":5,"Productos":"AMARRE PLASTICO 35 CM ","seccion":"HERRAMIENTA","Precios":220},{"id":9,"Productos":"AMARRE PLASTICO 35CM *100","seccion":"HERRAMIENTA","Precios":22000},{"id":420,"Productos":"CONTACTO AUXILIAR O BLOQUE DE CONTACTO ","seccion":"HERRAMIENTA","Precios":30800},{"id":133,"Productos":"PERCHA PEQUE\u00d1A","seccion":"HERRAMIENTA","Precios":9100},{"id":135,"Productos":"YOYO GRANDE ","seccion":"HERRAMIENTA","Precios":5900},{"id":25,"Productos":"GRAPA COAXIAL PVC","seccion":"HERRAMIENTA","Precios":1700},{"id":24,"Productos":"GRAPA DUPLEX PVC","seccion":"HERRAMIENTA","Precios":1700},{"id":14,"Productos":"SEGUETA MINI","seccion":"HERRAMIENTA","Precios":9000},{"id":508,"Productos":"FLEXOMETRO 5 METRO GLOBY","seccion":"HERRAMIENTA","Precios":8200},{"id":16,"Productos":"PUNTA TALADRO","seccion":"HERRAMIENTA","Precios":1700},{"id":21,"Productos":"BROCA LAMINA 1\/4\"","seccion":"HERRAMIENTA","Precios":8600},{"id":18,"Productos":"BROCA LAMINA 1\/8\"","seccion":"HERRAMIENTA","Precios":4800},{"id":20,"Productos":"BROCA LAMINA 3\/16\"","seccion":"HERRAMIENTA","Precios":7000},{"id":22,"Productos":"BROCA LAMINA 5\/16\"","seccion":"HERRAMIENTA","Precios":10200},{"id":19,"Productos":"BROCA LAMINA 5\/32\"","seccion":"HERRAMIENTA","Precios":5700},{"id":17,"Productos":"BROCA LAMINA 5\/64\"","seccion":"HERRAMIENTA","Precios":4000},{"id":919,"Productos":"BROCA MURO 1\/8 BARRACUDA LARGA","seccion":"HERRAMIENTA","Precios":5200},{"id":949,"Productos":"BROCHA","seccion":"HERRAMIENTA","Precios":8500},{"id":899,"Productos":"CHAZO EXPANSION 1\/4","seccion":"HERRAMIENTA","Precios":1600},{"id":928,"Productos":"CHAZO METALICO 1\/2 X 17\/8","seccion":"HERRAMIENTA","Precios":1900},{"id":900,"Productos":"CHAZO METALICO 3\/8","seccion":"HERRAMIENTA","Precios":1600},{"id":930,"Productos":"CHAZO METALICO 3\/8 X 3\"","seccion":"HERRAMIENTA","Precios":1500},{"id":929,"Productos":"CHAZO METALICO 5\/16 X 1\/2","seccion":"HERRAMIENTA","Precios":1000},{"id":886,"Productos":"CORTAFRIO GLOBY","seccion":"HERRAMIENTA","Precios":14200},{"id":884,"Productos":"COTAFRIO","seccion":"HERRAMIENTA","Precios":13800},{"id":898,"Productos":"DESTORNILLADOR ESTRELLA TOTAL","seccion":"HERRAMIENTA","Precios":6800},{"id":897,"Productos":"DESTORNILLADOR PALA TOTAL","seccion":"HERRAMIENTA","Precios":6800},{"id":867,"Productos":"DISCO CORTE DEWALT ACERO 1\"","seccion":"HERRAMIENTA","Precios":4100},{"id":26,"Productos":"DISCO CORTE OSBLACK ACERO 1\"","seccion":"HERRAMIENTA","Precios":3100},{"id":938,"Productos":"DISCO DE CORTE METAL DE 14\" P\/TRONZAD","seccion":"HERRAMIENTA","Precios":32600},{"id":935,"Productos":"DISCO DE CORTE METAL DE 4\"","seccion":"HERRAMIENTA","Precios":5800},{"id":933,"Productos":"DISCO MADERA 4\" 1\/2","seccion":"HERRAMIENTA","Precios":14800},{"id":833,"Productos":"GUANTE PITBULL","seccion":"HERRAMIENTA","Precios":8000},{"id":868,"Productos":"PUNTA TALADRO","seccion":"HERRAMIENTA","Precios":1800},{"id":939,"Productos":"SOLDADURA ELECTRICA 60-11 X KILO","seccion":"HERRAMIENTA","Precios":32800},{"id":987,"Productos":"TORNILLO","seccion":"HERRAMIENTA","Precios":150},{"id":870,"Productos":"TORNILLO 1\/4","seccion":"HERRAMIENTA","Precios":1650},{"id":943,"Productos":"TORNILLO 5\/6","seccion":"HERRAMIENTA","Precios":1200},{"id":824,"Productos":"TORNILLO PARA CHANEL","seccion":"HERRAMIENTA","Precios":1050},{"id":968,"Productos":"TORNILLOTROPICALIZA 3\/8","seccion":"HERRAMIENTA","Precios":6300},{"id":27,"Productos":"DISCO CORTE ACERO 1 1\/16\"","seccion":"HERRAMIENTA","Precios":8100},{"id":132,"Productos":"PERCHA GRANDE ","seccion":"HERRAMIENTA","Precios":12700},{"id":918,"Productos":"BROCA LAMINA 1\/8 BARRACUDA CORTA","seccion":"HERRAMIENTA","Precios":4800},{"id":931,"Productos":"CHAZO METALICO 3\/8 X 17\/8","seccion":"HERRAMIENTA","Precios":1300},{"id":885,"Productos":"COTAFRIO GLOBY","seccion":"HERRAMIENTA","Precios":13600},{"id":29,"Productos":"DISCO CORTE METAL 9\"","seccion":"HERRAMIENTA","Precios":38000},{"id":936,"Productos":"DISCO DE PULIR DE 4\"","seccion":"HERRAMIENTA","Precios":8700},{"id":35,"Productos":"DESTORNILLADOR UYUSTOOLS","seccion":"HERRAMIENTA","Precios":6000},{"id":30,"Productos":"DISCO CORTE METAL 4 1\/2\"","seccion":"HERRAMIENTA","Precios":6800},{"id":33,"Productos":"FLEXOMETRO 8M 26\"","seccion":"HERRAMIENTA","Precios":25300},{"id":134,"Productos":"YOYO PEQUE\u00d1O","seccion":"HERRAMIENTA","Precios":4400},{"id":492,"Productos":"ABRAZADERA CHANEL 1\" O RIEL MECANO","seccion":"HERRAMIENTA","Precios":3650},{"id":491,"Productos":"ABRAZADERA CHANEL 3\/4 O RIEL MECANO","seccion":"HERRAMIENTA","Precios":2850},{"id":442,"Productos":"ABRAZADERA DOBLE ALA ANTIFRAUDE 220V","seccion":"HERRAMIENTA","Precios":1300},{"id":176,"Productos":"BENTONITA X 25 KILOS","seccion":"HERRAMIENTA","Precios":60400},{"id":175,"Productos":"BLOQUE RETENIDA","seccion":"HERRAMIENTA","Precios":12300},{"id":276,"Productos":"BOQUILLA Y CONTRATUERCA IMC 1\"","seccion":"HERRAMIENTA","Precios":3950},{"id":139,"Productos":"BOQUILLA Y CONTRATUERCA IMC 1\/2","seccion":"HERRAMIENTA","Precios":2100},{"id":285,"Productos":"BOQUILLA Y CONTRATUERCA IMC 4\"","seccion":"HERRAMIENTA","Precios":20700},{"id":298,"Productos":"CAPACETE 1\"","seccion":"HERRAMIENTA","Precios":9100},{"id":769,"Productos":"CAPACETE 2\"","seccion":"HERRAMIENTA","Precios":22850},{"id":299,"Productos":"CAPACETE 3\/4","seccion":"HERRAMIENTA","Precios":6200},{"id":144,"Productos":"CHAZO PVC LISO","seccion":"HERRAMIENTA","Precios":200},{"id":487,"Productos":"CHAZOS METALICO CAFE","seccion":"HERRAMIENTA","Precios":1000},{"id":488,"Productos":"CHAZOS METALICO PLATEADO","seccion":"HERRAMIENTA","Precios":1000},{"id":327,"Productos":"CHEQUEADOR VOLTAJE NARANJA","seccion":"HERRAMIENTA","Precios":5800},{"id":210,"Productos":"CINTA AMARILLA","seccion":"HERRAMIENTA","Precios":3900},{"id":204,"Productos":"CINTA AUTOFONDENTE ECONOMICA","seccion":"HERRAMIENTA","Precios":28800},{"id":205,"Productos":"CINTA AUTOFONDENTE ORIGINAL","seccion":"HERRAMIENTA","Precios":43000},{"id":212,"Productos":"CINTA AZUL OSCURO","seccion":"HERRAMIENTA","Precios":3900},{"id":145,"Productos":"CINTA BANDY 5\/8 X METRO","seccion":"HERRAMIENTA","Precios":3700},{"id":241,"Productos":"CINTA BLANCA","seccion":"HERRAMIENTA","Precios":4300},{"id":209,"Productos":"CINTA CAFE","seccion":"HERRAMIENTA","Precios":5900},{"id":289,"Productos":"CINTA MORADA","seccion":"HERRAMIENTA","Precios":6500},{"id":207,"Productos":"CINTA NEGRA ECONOMICA","seccion":"HERRAMIENTA","Precios":3900},{"id":223,"Productos":"CINTA PELIGRO ROJA","seccion":"HERRAMIENTA","Precios":82000},{"id":213,"Productos":"CINTA ROJA ","seccion":"HERRAMIENTA","Precios":3900},{"id":211,"Productos":"CINTA VERDE","seccion":"HERRAMIENTA","Precios":3900},{"id":688,"Productos":"COLLARIN GRANDE 230 ML","seccion":"HERRAMIENTA","Precios":29800},{"id":687,"Productos":"COLLARIN PEQUE\u00d1O 6-1\/4 160 ML","seccion":"HERRAMIENTA","Precios":25900},{"id":504,"Productos":"DESTORNILLADOR PALA Y ESTRELA","seccion":"HERRAMIENTA","Precios":3600},{"id":774,"Productos":"DUCHA SIN TUBO AGUA CALIENTE 110V","seccion":"HERRAMIENTA","Precios":69000},{"id":234,"Productos":"ESPARRAGO 12 CM","seccion":"HERRAMIENTA","Precios":9100},{"id":638,"Productos":"ESPARRAGO 8 PULGADAS ","seccion":"HERRAMIENTA","Precios":8450},{"id":146,"Productos":"EVILLA BANDY 5\/8","seccion":"HERRAMIENTA","Precios":1350},{"id":756,"Productos":"GRAPA PVC CINTA LED X METRO","seccion":"HERRAMIENTA","Precios":600},{"id":806,"Productos":"GRAPA TIPO PISTOLA","seccion":"HERRAMIENTA","Precios":37800},{"id":293,"Productos":"GRAPA VARILLA COPER WEL","seccion":"HERRAMIENTA","Precios":7600},{"id":767,"Productos":"GUARDA CABO 5\/8","seccion":"HERRAMIENTA","Precios":4800},{"id":147,"Productos":"MANGUERA TIPO GAS","seccion":"HERRAMIENTA","Precios":3950},{"id":436,"Productos":"PARADA EMERGENCIA ROJA","seccion":"HERRAMIENTA","Precios":23900},{"id":271,"Productos":"PEZCA METALICA 15 METRO","seccion":"HERRAMIENTA","Precios":30200},{"id":272,"Productos":"PEZCA METALICA 30 METRO","seccion":"HERRAMIENTA","Precios":54600},{"id":746,"Productos":"PILOTO FALLA ROJO PXB2-BVM4","seccion":"HERRAMIENTA","Precios":9900},{"id":747,"Productos":"PILOTO MARCHA VERDE 17523","seccion":"HERRAMIENTA","Precios":9900},{"id":206,"Productos":"PLATINA CAJA CONTADOR ENERGIA","seccion":"HERRAMIENTA","Precios":3600},{"id":227,"Productos":"PRENSA ESTOPA 1\"","seccion":"HERRAMIENTA","Precios":4300},{"id":226,"Productos":"PRENSA ESTOPA 1\/2","seccion":"HERRAMIENTA","Precios":1800},{"id":295,"Productos":"PUNTA FRANKLIN","seccion":"HERRAMIENTA","Precios":145200},{"id":483,"Productos":"SPLITER 2 SALIDAS","seccion":"HERRAMIENTA","Precios":3500},{"id":485,"Productos":"SPLITER 4 SALIDAS","seccion":"HERRAMIENTA","Precios":3900},{"id":248,"Productos":"SUICHE FLOTANTE TANQUE AGUA","seccion":"HERRAMIENTA","Precios":39700},{"id":181,"Productos":"TAPA FLOSH","seccion":"HERRAMIENTA","Precios":600},{"id":281,"Productos":"TAPA PVC LISA 4X4","seccion":"HERRAMIENTA","Precios":700},{"id":694,"Productos":"TAPA TROQUELADA SUICHE 4X4","seccion":"HERRAMIENTA","Precios":4100},{"id":693,"Productos":"TAPA TROQUELADA TOMA 4X4","seccion":"HERRAMIENTA","Precios":4100},{"id":171,"Productos":"TORNILLO AUTOPERFORANTE 1\/2","seccion":"HERRAMIENTA","Precios":100},{"id":614,"Productos":"TORNILLO ENSAMBLE 1\"","seccion":"HERRAMIENTA","Precios":96},{"id":653,"Productos":"UNION IMC 1\"","seccion":"HERRAMIENTA","Precios":5200},{"id":814,"Productos":"UNION IMC 1\" 1\/2","seccion":"HERRAMIENTA","Precios":6800},{"id":662,"Productos":"UNION IMC 3\"","seccion":"HERRAMIENTA","Precios":18900},{"id":287,"Productos":"UNION IMC 3\/4","seccion":"HERRAMIENTA","Precios":3450},{"id":630,"Productos":"UNION PVC 1\"","seccion":"HERRAMIENTA","Precios":1000},{"id":177,"Productos":"UNION PVC 1\/2","seccion":"HERRAMIENTA","Precios":500},{"id":735,"Productos":"UNION TUBULAR #10 BROWN","seccion":"HERRAMIENTA","Precios":6100},{"id":402,"Productos":"UNION TUBULAR #2","seccion":"HERRAMIENTA","Precios":3100},{"id":399,"Productos":"UNION TUBULAR #8","seccion":"HERRAMIENTA","Precios":1800},{"id":400,"Productos":"UNION TUBULAR 1\/0","seccion":"HERRAMIENTA","Precios":6100},{"id":685,"Productos":"VARILLA ANCLAJE 1\/2","seccion":"HERRAMIENTA","Precios":29800},{"id":233,"Productos":"VARILLA ANCLAJE 5\/8","seccion":"HERRAMIENTA","Precios":32300},{"id":232,"Productos":"VARILLA COPER WELL","seccion":"HERRAMIENTA","Precios":46800},{"id":252,"Productos":"VENTILADOR LOCO","seccion":"HERRAMIENTA","Precios":196000},{"id":808,"Productos":"WASH PRIMER MEDIO TARRO","seccion":"HERRAMIENTA","Precios":33000},{"id":142,"Productos":"CAJA TROQUELA TAPA SUICHE 4X4","seccion":"HERRAMIENTA","Precios":9700},{"id":141,"Productos":"CAJA TROQUELADA TAPA LISA 4X4","seccion":"HERRAMIENTA","Precios":9700},{"id":143,"Productos":"CAJA TROQUELADA TAPA TOMA 4X4","seccion":"HERRAMIENTA","Precios":9700},{"id":250,"Productos":"CAJA CAMARA DEXON","seccion":"HERRAMIENTA","Precios":9900},{"id":152,"Productos":"CANALETA 1\/2 DEXON","seccion":"HERRAMIENTA","Precios":5800},{"id":153,"Productos":"CANALETA 3\/4 DEXON","seccion":"HERRAMIENTA","Precios":10600},{"id":155,"Productos":"CAJA RAWEL 1\/2 2X4","seccion":"HERRAMIENTA","Precios":18400},{"id":156,"Productos":"CAJA RAWEL 3\/4 2X4","seccion":"HERRAMIENTA","Precios":18400},{"id":174,"Productos":"TAPA LISA RAWEL 2X4","seccion":"HERRAMIENTA","Precios":3900},{"id":240,"Productos":"VENTILADOR KDK ORIGINAL","seccion":"HERRAMIENTA","Precios":384000},{"id":480,"Productos":"GABINETE 4 PUESTOS METBOX","seccion":"HERRAMIENTA","Precios":869000},{"id":249,"Productos":"TERMINAL EMT 3\/4","seccion":"HERRAMIENTA","Precios":2600},{"id":305,"Productos":"BORNERA PEQ X 1 REGLETA PLASTICA VOLTIO","seccion":"HERRAMIENTA","Precios":6200},{"id":486,"Productos":"CAJA BREA RIEL VOLTIO","seccion":"HERRAMIENTA","Precios":5200},{"id":306,"Productos":"BORNERA GRANDE X 1 REGLETA PLASTICA SPK","seccion":"HERRAMIENTA","Precios":7200},{"id":307,"Productos":"DESTORNILLADOR PALA GLOBY","seccion":"HERRAMIENTA","Precios":5000},{"id":308,"Productos":"DESTORNILLADOR ESTRELLA RANGER","seccion":"HERRAMIENTA","Precios":3200},{"id":309,"Productos":"DESTORNILLADOR PALA RANGER","seccion":"HERRAMIENTA","Precios":3200},{"id":311,"Productos":"VULTIMETRO DIGITAL UT200A","seccion":"HERRAMIENTA","Precios":135000},{"id":312,"Productos":"STAR STOP SIN LED THKC","seccion":"HERRAMIENTA","Precios":14900},{"id":325,"Productos":"BLOQUE ROJO NC CE","seccion":"HERRAMIENTA","Precios":4800},{"id":326,"Productos":"BLOQUE VERDE NO CE","seccion":"HERRAMIENTA","Precios":4800},{"id":319,"Productos":"INDICADOR DE VOLTIMETRO CE","seccion":"HERRAMIENTA","Precios":18000},{"id":315,"Productos":"PULSADOR ROJO NC CE","seccion":"HERRAMIENTA","Precios":6900},{"id":313,"Productos":"PULSADOR VERDE NO","seccion":"HERRAMIENTA","Precios":6900},{"id":314,"Productos":"MULETILLA 2 POCICIONES NO IMP","seccion":"HERRAMIENTA","Precios":9100},{"id":815,"Productos":"PARADA EMERGENCIA ROJA SIN BLOQUE","seccion":"HERRAMIENTA","Precios":19800},{"id":317,"Productos":"INDICADOR AMPERIMETRO MAXTECH","seccion":"HERRAMIENTA","Precios":21800},{"id":490,"Productos":"ABRAZADERA CHANEL 1\"1\/2 O RIEL MECANO ","seccion":"HERRAMIENTA","Precios":2450},{"id":493,"Productos":"ABRAZADERA CHANEL 1\/2 O RIEL OMEGA","seccion":"HERRAMIENTA","Precios":3950},{"id":494,"Productos":"ABRAZADERA CHANEL 2\" O RIEL MECANO","seccion":"HERRAMIENTA","Precios":4850},{"id":666,"Productos":"ABRAZADERA DOBLE ALA 1 1\"\/2","seccion":"HERRAMIENTA","Precios":1400},{"id":668,"Productos":"ABRAZADERA DOBLE ALA 1\"","seccion":"HERRAMIENTA","Precios":1300},{"id":667,"Productos":"ABRAZADERA DOBLE ALA 1\"\/4","seccion":"HERRAMIENTA","Precios":1900},{"id":665,"Productos":"ABRAZADERA DOBLE ALA 2\"","seccion":"HERRAMIENTA","Precios":2100},{"id":441,"Productos":"ABRAZADERA DOBLE ALA ANTIFRAUDE 110V","seccion":"HERRAMIENTA","Precios":900},{"id":339,"Productos":"CAPACETE 1\" 1\/2","seccion":"HERRAMIENTA","Precios":13250},{"id":328,"Productos":"CHEQUEADOR VOLTAJE AMARILLO","seccion":"HERRAMIENTA","Precios":5800},{"id":646,"Productos":"CURVA EMT 1\" ","seccion":"HERRAMIENTA","Precios":4400},{"id":649,"Productos":"CURVA EMT 1\/2 ","seccion":"HERRAMIENTA","Precios":2500},{"id":631,"Productos":"CURVA EMT 3\/4 CORTA","seccion":"HERRAMIENTA","Precios":2900},{"id":632,"Productos":"CURVA EMT 3\/4 LARGA","seccion":"HERRAMIENTA","Precios":2950},{"id":657,"Productos":"CURVA IMC 3\/4","seccion":"HERRAMIENTA","Precios":4200},{"id":639,"Productos":"CURVA PVC 1 1\"\/2","seccion":"HERRAMIENTA","Precios":3300},{"id":636,"Productos":"CURVA PVC 1\/2 CORTA","seccion":"HERRAMIENTA","Precios":650},{"id":619,"Productos":"CURVA PVC CORTA 1\"","seccion":"HERRAMIENTA","Precios":1400},{"id":650,"Productos":"CURVA PVC CORTA 2\"","seccion":"HERRAMIENTA","Precios":5300},{"id":618,"Productos":"CURVA PVC LARGA 1\"","seccion":"HERRAMIENTA","Precios":1800},{"id":625,"Productos":"CURVA SCH40 3\/4 CORTA","seccion":"HERRAMIENTA","Precios":1850},{"id":640,"Productos":"ESPARRAGO 14 PULGADAS ","seccion":"HERRAMIENTA","Precios":12800},{"id":410,"Productos":"ESTACION MANDO PEQUE\u00d1A BS23OB","seccion":"HERRAMIENTA","Precios":31800},{"id":323,"Productos":"FUSIBLE VIDRIO X UNIDAD 1 A","seccion":"HERRAMIENTA","Precios":1200},{"id":324,"Productos":"FUSIBLE VIDRIO X UNIDAD 4 A","seccion":"HERRAMIENTA","Precios":1200},{"id":338,"Productos":"GUANTES AMARILLO X PAR","seccion":"HERRAMIENTA","Precios":8000},{"id":335,"Productos":"GUANTES NEGRO X PAR SIZE 9\"","seccion":"HERRAMIENTA","Precios":5000},{"id":340,"Productos":"GUARDA CABO 1\/2","seccion":"HERRAMIENTA","Precios":3900},{"id":445,"Productos":"PEGA PVC 1\/16","seccion":"HERRAMIENTA","Precios":19000},{"id":444,"Productos":"PEGA PVC 1\/8","seccion":"HERRAMIENTA","Precios":38600},{"id":359,"Productos":"PLATINA 1\/2","seccion":"HERRAMIENTA","Precios":4050},{"id":365,"Productos":"PLATINA 3\/4","seccion":"HERRAMIENTA","Precios":4300},{"id":364,"Productos":"PLATINA 5\/8","seccion":"HERRAMIENTA","Precios":7800},{"id":438,"Productos":"PULSADOR DE MARCHA VERDE","seccion":"HERRAMIENTA","Precios":9900},{"id":437,"Productos":"PULSADOR DE PARO ROJO","seccion":"HERRAMIENTA","Precios":9900},{"id":337,"Productos":"TAPA LISA 4X4 RAWEL","seccion":"HERRAMIENTA","Precios":5800},{"id":623,"Productos":"TERMINAL EMT 1\"","seccion":"HERRAMIENTA","Precios":3200},{"id":642,"Productos":"TERMINAL EMT 1\" 1\/2","seccion":"HERRAMIENTA","Precios":5400},{"id":647,"Productos":"TERMINAL EMT 1\" 1\/4","seccion":"HERRAMIENTA","Precios":5200},{"id":641,"Productos":"TERMINAL PVC  1\/2 ROSCA","seccion":"HERRAMIENTA","Precios":400},{"id":633,"Productos":"TERMINAL PVC  2\" PLANA","seccion":"HERRAMIENTA","Precios":3200},{"id":634,"Productos":"TERMINAL PVC 1\" 1\/4 PLANA","seccion":"HERRAMIENTA","Precios":950},{"id":626,"Productos":"TERMINAL PVC 1\" PLANA","seccion":"HERRAMIENTA","Precios":1100},{"id":624,"Productos":"TERMINAL PVC 1\" ROSCA ","seccion":"HERRAMIENTA","Precios":750},{"id":621,"Productos":"TERMINAL PVC 3\/4 ROSCA","seccion":"HERRAMIENTA","Precios":550},{"id":652,"Productos":"TERMINAL SCH40 1\/2 ROSCA ","seccion":"HERRAMIENTA","Precios":1150},{"id":616,"Productos":"TORNILLO ENSAMBLE  2\"","seccion":"HERRAMIENTA","Precios":179},{"id":615,"Productos":"TORNILLO ENSAMBLE 1\" 1\/2","seccion":"HERRAMIENTA","Precios":123},{"id":617,"Productos":"TORNILLO ENSAMBLE 2\" 1\/2","seccion":"HERRAMIENTA","Precios":180},{"id":613,"Productos":"TORNILLO ENSAMBLE 3\/4","seccion":"HERRAMIENTA","Precios":91},{"id":334,"Productos":"RELEVO NARANJA 8 PINES CON BASE 230V","seccion":"HERRAMIENTA","Precios":40800},{"id":871,"Productos":"CINTA ENMASCARAR","seccion":"HERRAMIENTA","Precios":6150},{"id":336,"Productos":"GUANTES BLANCO GRIS ANSELL X PAR","seccion":"HERRAMIENTA","Precios":11000},{"id":788,"Productos":"ABRAZADERA PVC 1\/2 UNA ALA","seccion":"HERRAMIENTA","Precios":350},{"id":789,"Productos":"ABRAZADERA PVC 3\/8 UNA ALA","seccion":"HERRAMIENTA","Precios":250},{"id":426,"Productos":"BREA ATORNILLABLE 3X50 A LS","seccion":"HERRAMIENTA","Precios":150000},{"id":361,"Productos":"BROCA MURO 1\/4 BARRACUDA","seccion":"HERRAMIENTA","Precios":5900},{"id":360,"Productos":"BROCA MURO 1\/8 BARRACUDA CORTA","seccion":"HERRAMIENTA","Precios":4800},{"id":15,"Productos":"HOJA DE SEGUETA BARRACUDA","seccion":"HERRAMIENTA","Precios":4100},{"id":366,"Productos":"BROCA PARED 1\/8 RINO","seccion":"HERRAMIENTA","Precios":3900},{"id":368,"Productos":"BROCA PARED 3\/16\" RINO","seccion":"HERRAMIENTA","Precios":4950},{"id":371,"Productos":"BROCA PARED 3\/8\" RINO","seccion":"HERRAMIENTA","Precios":7200},{"id":370,"Productos":"BROCA PARED 5\/16\" RINO","seccion":"HERRAMIENTA","Precios":6950},{"id":367,"Productos":"BROCA PARED 5\/32\" RINO","seccion":"HERRAMIENTA","Precios":4300},{"id":369,"Productos":"BROCA PARED 7\/32\" RINO","seccion":"HERRAMIENTA","Precios":5950},{"id":398,"Productos":"UNION TUBULAR #6 RETIE","seccion":"HERRAMIENTA","Precios":1900},{"id":411,"Productos":"TRASFERENCIA 3 POSICIONES 12 A 601799","seccion":"HERRAMIENTA","Precios":80000},{"id":414,"Productos":"TRASFERENCIA 3 POSICIONES MERZ","seccion":"HERRAMIENTA","Precios":120000},{"id":417,"Productos":"CARBONES PULIDORA GRANDE","seccion":"HERRAMIENTA","Precios":8000},{"id":416,"Productos":"CARBONES PULIDORA PEQUE\u00d1A","seccion":"HERRAMIENTA","Precios":8000},{"id":419,"Productos":"CARBONES TALADRO GRANDE","seccion":"HERRAMIENTA","Precios":8000},{"id":418,"Productos":"CARBONES TALADRO PEQUE\u00d1O","seccion":"HERRAMIENTA","Precios":8000},{"id":421,"Productos":"RELOJ PEARL","seccion":"HERRAMIENTA","Precios":70000},{"id":423,"Productos":"RELOJ ASTRO","seccion":"HERRAMIENTA","Precios":65000},{"id":447,"Productos":"CINTA SCOTCH ECONOMICA","seccion":"HERRAMIENTA","Precios":12450},{"id":446,"Productos":"CINTA SCOTCH ORIGINAL","seccion":"HERRAMIENTA","Precios":23800},{"id":448,"Productos":"CINTA TEMFLEX 3M","seccion":"HERRAMIENTA","Precios":30800},{"id":509,"Productos":"GUANTES DE PUNTO","seccion":"HERRAMIENTA","Precios":3000},{"id":612,"Productos":"TORNILLO ENSAMBLE 1\/2 ","seccion":"HERRAMIENTA","Precios":81},{"id":482,"Productos":"GARRA BIFACICA MAXWELL","seccion":"HERRAMIENTA","Precios":10900},{"id":506,"Productos":"DISCO CORTA METAL 7\" OSBLACK","seccion":"HERRAMIENTA","Precios":7800},{"id":505,"Productos":"SOQUET PASTA BLANCA OSBLACK","seccion":"HERRAMIENTA","Precios":1900},{"id":503,"Productos":"ALICATE CRECENT","seccion":"HERRAMIENTA","Precios":12800},{"id":507,"Productos":"DISCO CORTA METAL TREX","seccion":"HERRAMIENTA","Precios":24800},{"id":510,"Productos":"CINTA DOBLE FAZ ETERNA","seccion":"HERRAMIENTA","Precios":3500},{"id":541,"Productos":"GAFA TRASPARENTE 3M  NUVO","seccion":"HERRAMIENTA","Precios":17800},{"id":821,"Productos":"GAFA NEGRA","seccion":"HERRAMIENTA","Precios":5000},{"id":564,"Productos":"PORTAFUSIBLE O CA\u00d1UELA 15KVA CELSA","seccion":"HERRAMIENTA","Precios":150000},{"id":610,"Productos":"RODAMIENTO  22216","seccion":"HERRAMIENTA","Precios":240000},{"id":609,"Productos":"RODAMIENTO 3308","seccion":"HERRAMIENTA","Precios":91800},{"id":606,"Productos":"RODAMIENTO 6204","seccion":"HERRAMIENTA","Precios":19800},{"id":605,"Productos":"RODAMIENTO 6205","seccion":"HERRAMIENTA","Precios":23000},{"id":602,"Productos":"RODAMIENTO 6207","seccion":"HERRAMIENTA","Precios":97300},{"id":608,"Productos":"RODAMIENTO 6210","seccion":"HERRAMIENTA","Precios":108600},{"id":603,"Productos":"RODAMIENTO 6306","seccion":"HERRAMIENTA","Precios":80400},{"id":604,"Productos":"RODAMIENTO 6306","seccion":"HERRAMIENTA","Precios":80400},{"id":607,"Productos":"RODAMIENTO 6309","seccion":"HERRAMIENTA","Precios":118300}]


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


