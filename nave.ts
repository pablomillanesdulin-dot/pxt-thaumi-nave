// La extensión «Nave» de Thaumi (Inventores T3, «Los planetas que no se ven»).
// Lo que manda la nave de Eco cada noche: la luz de 42 estrellas (36 noches) y, al girar, un cielo de cien (30 noches).
// Generado desde el modelo de la nave. No lo cambies a mano: lo que cambies aquí no cambia las tiras de papel.

enum Cielo {
    //% block="las 42 de cerca"
    Cerca = 0,
    //% block="las cien"
    Cien = 1
}

enum Pregunta {
    //% block="A ¿más de una vez?"
    A = 0,
    //% block="B ¿a la misma distancia?"
    B = 1,
    //% block="C ¿sube también?"
    C = 2,
    //% block="D ¿baja mucho?"
    D = 3,
    //% block="E ¿las mismas noches que otra?"
    E = 4,
    //% block="F ¿igual de hondas?"
    F = 5
}

//% color="#6a3fc1" icon="\uf135" block="Nave" weight=95
namespace nave {
    // 42 estrellas × 36 noches: el carácter de la noche n de la estrella e es luz + 32.
    const LUZ_CERCA = "IHHHHJIJIJIIHHIJIHIJHJHHJJIJIJJHHJIIGF@FEGGEEE@GEGGFFF@FGFFFEE@FGEEFFG@FWVRQRVWVRQRVWVRQRVWVRQRVWVRQRVWVRQRV=======><><<>><><<<>>=<>==<<>>=<=><>MLNMLMLNNLLNNLNLGMMMNNNMMMLMMLMNLMNLXYZYXXXZYYYZYXZZYZXZYXZZXZYYXXXZYXYZB@B@B;BBA@@AA@@A;AA@BABA@AB;B@BBA@A@MLMQRQMLMQRQMLMQRQMLMQRQMLMQRQMLMQRQDECE>CEDDDDCCDEDEE>CDC>DCECECEDECCEDRRRRSRQQSQSSSSSRQQRRRSQSQQQRQSRQSRSQ::<;:<;:;<:;;:;<<;;:<::5<;<<;;:<;;:<LMLLKMMKMLKKLLMKKKLMLKLKKMLMMMMMKLLKFGFHGFGFGHHFHHHFFGFGGHGFHFGGHHGGHFFHYZYUTUYZYUTUYZYUTUYZYUTUYZYUTUYZYUTU??>?>@>9?@@@9>?@>?@>?>>@??9@@>?@>?>@QQPPQPMQOOOOQQPPMOOQPPQOOPMQOPOQOPQP;:9::;999;:99;;:9::::;:9;;;99;:99;;:KKJIJJIIJIDJJKKKKIKJJJJIKJKIIIJKJKIIBCBBDC=CDBCBDDD=BDDCCBCB=CCBDDCCD=BCYZYYY[[Z[Y[Y[YZZ[[ZYZZYZZ[Y[Z[YZ[YZ[@<;<@A@<;<@A@<;<@A@<;<@A@<;<@A@<;<@AMNONOONNONMMNMMMONOMMNMOONMONOOMONMNTUUVTUVTUVUUUVVTVTUTUTVVTOVUTUVUUTTVAABBCBABCCBCBCCBCCAAACBABCAAABCCAABBKLHKJLKLJLJHJJKKLKLKHJLKKJJLKHLKJJKLE?DFDFDF?FDDEFD?DEEEEE?DEFFEF?DFEDFESSSSTTRTRTTSTRRSTTSSRRSRTRRSRTTRSSTR<<9<=;=;=;;9;==<<<;<9=;<<;<==9=;=<;<HIGIEIHGHHIGEIGHHIGIEGIHHHHGEGGIIHHGXWUYYXWYWXYUXWXYYXXYUWWXYXXWWUWXYWYX??:?AA?A??AA@@:@A@@A@?@?@@:AA?@?A?A@TSONOSTSONOSTSONOSTSONOSTSONOSTSONOSCC@CDDCCDDB@DDCBBBCC@BDCCDBBB@DBCDCBKKKFLKMMMMMKLFMLKMLLKLLFLKMMLKLLKFLM8;;;:<8<;<:;8<;::;8:;<::8;<<<:8<;:;;QSOSQRRRSQRORSRQQQSQORRRSSRSQORSSRQQGFEGFFFFEEGEG@EGFFGEFEEGFGFEFGGEEGFFWPWUVVUUUWWWUWPWUVVVUWVVUVUPVWVWWUVUJHFIJIIIIHIFJJJHHJHIFHHIJIHIJFJIJHIH=>>???=>>==>?===?>?>?=??>=?>=>=?>>=?NGNMNJLMNGLNMJMLLGLNMJMLLGMNMJMNLGMMFHHDHGFGHGDHHFGFGDGFFHGFDHFGGGGDGHGF"
    const NORMAL_CERCA = "IFT=MYAODR;LGW?P:JCZ>NUBKES<HX@QCL;RFVI>MG"
    // I = lado izquierdo de la nave; D = derecho.
    const LADO_CERCA = "DDIIDDIDIIDDIIDDDIDIDDIIIDDIDIIDIDIIDDIIDD"
    // P = la hoja dice planeta; N = la hoja dice que no; S = la hoja no tiene respuesta.
    const HOJA_CERCA = "NPNNNNPNNNNNNNNNNNPNNNNNNPNNNNPNNPNNNPNNSS"
    // T = a tiro del combustible de Eco.
    const TIRO_CERCA = "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLTT"
    // 100 estrellas × 30 noches: el carácter de la noche n de la estrella e es luz + 32.
    const LUZ_CIEN = "[[YY[YYZYZZYZ[ZZ[[Y[Y[YZY[ZZZ[HIJHHIIHIHJJIIJJHHIJHJHJJIHJII;=;=;<;=<;;;<=<;<;<===<<==<<;=ZZY[[YZ[YY[YZYZ[[ZY[Z[ZYZZ[YY[GEFEEGGFGEFEFEFFFFEGEGFGGEGGFEEFEA@AEFEA@AEFEA@AEFEA@AEFEA@AEEEGGGFGFFEEFGGEEGFEEGFFGFGFEFJKIKKKIIIIJJKKKKIIJKJIKIJJJJIJFEFFFGFFEEGGGEGEFGFFGGEEEEEGFGJKLKJKJLJJJJLJJLLKKKKLLKLKLJKL@AAAA@@?@@A?A@?@??AA?@??@@A??AA@<;<@A@<;<@A@<;<@A@<;<@A@<;<@QMLMQRQMLMQRQMLMQRQMLMQRQMLMQRYZYY[ZZ[[YY[[ZYY[YZZZZ[[Y[YZZ[QPQRQPRPRRQQQPPRPPQPRRQQQPPRRRWXXYXWYWXWWYXYYXWWYXYXWWXYXYYWVUQPQUVUQPQUVUQPQUVUQPQUVUQPQUNNLMNNLLLLLLNLNMMMMMNMLLMNNMMNSTTSUUSTUUUUSSSTUSTTTTTSTSSUUU@A?AA?@@A@@?@???A@AA@?@@AA???AGIIHIIIGIGIGIHIHGIGHHGHGHHHHGGXYYXYXYWXXXWYYYYXWYYWXWXWXWWWWY[Z[Y[YZZZ[[ZZ[YYY[YZYZ[YZ[Y[ZCCCDCD=CBBDB=BDDCCBCBD=DDBBCDBFGFBABFGFBABFGFBABFGFBABFGFBABWXXWVVVVVWXXXVWVVXWWVXWWXVXWXWCBDCDB=BDDBDC=BBDCBCBCDCBD=CDCHFFGHHGFFGHGFFHGHFGGFGHGHGFHFHPONOONPNNNPNNOPPNPOOOPOOPNPPON::;;9:99:9;;;:9;:999:;9;:;;:9:UVVUTTVTTUVUTVUVTVTUUVTUVUTUTVUUVVUWVVWWWUVPUWVVVWVWUUUWUVWVBAACABBBACCABBCCCBBBCAACACBACADDCCEEEECCDDCDCECDEEEEDCDCCEDDMMLKLLKKLKLLLMKLMKMKMKLMLKMKMMBBCCBBCDDDBDBDBCBCCCCDCDDBCBDDRPPRKRRQQQRRRKPPPPQPPPKRQQQRQQSSTRMTTSMTRRRRSSTTMTSRTRSSRSTRVVUUUVWUUVWVVWVUUUVWUWWVWUVWWWSONOSTSONOSTSONOSTSONOSTSONOSTBDDBDCBCBBBBBCCCDDDDDDDCCBCCCBCABBBABBAABCCBCCCABCCBAAACACBATSTUTUSTSTUNUTTUSTTTSSUSUUTSUSHIHDCDHIHDCDHIHDCDHIHDCDHIHDCDBBBA@A@AA@@ABBAAB@AA@AB@BB@B@@TRSTRMTTRSSRSSRTSTTSRSSTRTRRSS?=>>=>?>>?>???>>=?====>?==8>>?WWUUVWUWWVVWVWUUUUVWVVVWUVWVUUUUWVVVVUWVWWWVUPUVWVUWVVWUVUUW>>??@?>@@@>@>>>@>?@?@???>>??@@JLJJLJKJKJKJLJLLLKLLLKKLKJKKJKNNNMNNLMNMMMMMNLMLNLNLLLLLMNLMLLMKLLMKKKMKMLLKLLKMLMMKLMKKMMHFGHGHFGGHGHHHGHFFFFHFFGGFFGGH@?A@?A@@AAA?@AAA@A??@??A@?@?@?GGGHGFGHFHHGFGFGAHGHFGHFHFFGHF>>??>@>??>???@@@@@@>>?@?@?>>>@QMLMQRQMLMQRQMLMQRQMLMQRQMLMQR[Z\\\\[Z[\\[UZ\\[Z[ZZ\\ZZ[\\\\[[Z\\[\\[EFGGGEGFGFEEGFFGFEEFGEEFEFGFEGYXTSTXYXTSTXYXTSTXYXTSTXYXTSTXSRRRQSQSQQSSRRQRRQQSSQSRQRRQSSGGFHGFFFHFHGHFHGFGHFHGGHHFFGGHRSRNMNRSRNMNRSRNMNRSRNMNRSRNMNSTTUUSUSUTTSSSUUTTTNUUSTTTSSTUIEDEIJIEDEIJIEDEIJIEDEIJIEDEIJA@@@@AABBBBBAAB@@BAA@B@BAABA@@QRPQPPRRRRQPPPRQQQPQRPRPPRRQQQNOPONPPONONNPOPOPNONPNPNPONOOP]]]\\]]\\[[[\\\\[[]\\][]\\[\\\\\\\\[][[]><=<>=<<==<=>>>><><><<==><==>=NOOMOMONNNMNMOMNOOMMONNNONMOMMGFFGGGHGFHHGHFGHFFHGHHHGFFFGHFEFFDEDDDEFFFEDFEDDDFEDEFEDFFEE?@@@@A?@A@?A?@A?:AA@???A@?A@A@[[[YZY[YYZZ[[[Y[ZYZYYZZZ[Y[ZZYEFFEDDFEFEDEFFDDDEEDFEEEFFFDDDDECCEDEDECEECDECEDDCDCCDEDDECC^]YXY]^]YXY]^]YXY]^]YXY]^]YXY]UUTUUUUOTVUTVVTVVVTUTVVTTVUTUUUSNSTUSSSNTTTUUUNUUSSTTNTTUSTTUUSUUSSTTTTUUSUSSTUTSTSSSTUTUT>?>:9:>?>:9:>?>:9:>?>:9:>?>:9:RSSRTSTRTTSSSTRSRRRRTTTRSRTSSTEFEA@AEFEA@AEFEA@AEFEA@AEFEA@AIKJIKJKJJIIDIJKKKKIJJKKIJIJIJJKIIJKKKIIIJJJJKJJIKJKIIKIKKJIJDCDECCCDEDCEDECDEDDEDEECCCEECDIJJJKJKKJJJKIJIKKIKIIKKIIJJIIKWWXWWWXXYXYWWYWXXXWYYXYWXYXYYYZZZXXYXZYXXZZYYZXYZXYYZZXYYYXX:9:9:9::9:::8:899889888999:888[\\\\[ZZZZ\\\\[Z[\\ZZ[[\\Z[[\\ZZ\\[\\\\[PQRPQRPQRQKRRQRPPPRQQPPQQPQRRQ=>>??>=>>?=>=??>?==>??=>=>==??GFBABFGFBABFGFBABFGFBABFGFBABF98989:889::99:898:::9::989888:98889:99:9:89988:9:::98::8:889899898:9::9:89:9898:8:88:98:9:GGGGGFFGEFEEEFFFEEEFFEGGGEFFGE"
    const NORMAL_CIEN = "ZI<ZFCFJFK@>OZQXSMT@HXZCDWCGO:UVBDLCQSVQCBTFAS>VV?KMLG@G?O[FVRGPTGAQO\\=NGE@ZED[UTT<SCJJDJXY9[Q>D999F"
    // I = lado izquierdo de la nave; D = derecho.
    const LADO_CIEN = "DDIDIDIDIIIIIIDDIDIIDIDIIDIDIDDIIDDIIIIDDIDIIIIDIIIDIIDDIDDDDIDDDIIIIDIDIDDIIDIIDDIDDDDDDIIDDDIIDDDD"
    // P = la hoja dice planeta; N = la hoja dice que no; S = la hoja no tiene respuesta.
    const HOJA_CIEN = "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNPNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNPNNNNNNNNNNNNNNNNNNN"
    // T = a tiro del combustible de Eco.
    const TIRO_CIEN = "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"

    const NOCHES_CERCA = 36
    const NOCHES_CIEN = 30
    // Las tiras y las preguntas miran de la noche 1 a la 30.
    const NOCHES_TIRA = 30
    const MARGEN = 2
    const HONDA = 5

    let cielo = Cielo.Cerca
    // Las estrellas añadidas (la estrella hecha en casa, las trampas de la auditoría): a qué cielo van, su luz normal y sus luces.
    let extraCielo: number[] = []
    let extraNormal: number[] = []
    let extraLuces: number[][] = []
    // La pregunta E con margen 2, ya calculada (−1 = sin calcular). Se borra al añadir una estrella.
    let cacheE: number[] = []

    function base(): number {
        return cielo == Cielo.Cien ? 100 : 42
    }

    function extra(estrella: number): number {
        // La posición en las listas de añadidas de la estrella «estrella» del cielo de ahora; −1 si no es añadida.
        let k = base()
        for (let i = 0; i < extraCielo.length; i++) {
            if (extraCielo[i] == cielo) {
                k++
                if (k == estrella) return i
            }
        }
        return -1
    }

    function existe(estrella: number): boolean {
        return estrella >= 1 && estrella <= estrellas()
    }

    function lucesDe(estrella: number): number {
        // Cuántas noches tiene la estrella (las de la nave, 36 o 30; las añadidas, las que se le dieron).
        if (!existe(estrella)) return 0
        if (estrella <= base()) return cielo == Cielo.Cien ? NOCHES_CIEN : NOCHES_CERCA
        return extraLuces[extra(estrella)].length
    }

    function caracter(datos: string, i: number): string {
        return datos.charAt(i)
    }

    function margenDe(margen: number): number {
        return margen ? margen : MARGEN
    }

    // Las bajadas: noches seguidas que quedan «margen» o más por debajo de la luz normal cuentan una.
    // Se guardan en estas tres listas (la noche en que empieza, en la que acaba y lo más que baja).
    let bDesde: number[] = []
    let bHasta: number[] = []
    let bHondura: number[] = []

    function calcularBajadas(estrella: number, margen: number) {
        bDesde = []
        bHasta = []
        bHondura = []
        if (!existe(estrella)) return
        const n = normal(estrella)
        const ultima = Math.min(NOCHES_TIRA, lucesDe(estrella))
        let dentro = false
        for (let noche = 1; noche <= ultima; noche++) {
            const v = luz(estrella, noche)
            if (v <= n - margen) {
                if (!dentro) {
                    bDesde.push(noche)
                    bHasta.push(noche)
                    bHondura.push(0)
                    dentro = true
                }
                const k = bDesde.length - 1
                bHasta[k] = noche
                if (n - v > bHondura[k]) bHondura[k] = n - v
            } else {
                dentro = false
            }
        }
    }

    function anoDeLasBajadas(): number {
        // Con las bajadas ya calculadas: la distancia entre ellas si es siempre la misma (y hay dos o más); si no, 0.
        if (bDesde.length < 2) return 0
        const d = bDesde[1] - bDesde[0]
        for (let k = 2; k < bDesde.length; k++) if (bDesde[k] - bDesde[k - 1] != d) return 0
        return d
    }

    function firma(estrella: number, margen: number): number[] {
        calcularBajadas(estrella, margen)
        const f: number[] = []
        for (let k = 0; k < bDesde.length; k++) {
            f.push(bDesde[k])
            f.push(bHasta[k])
        }
        return f
    }

    function mismas(a: number[], b: number[]): boolean {
        if (a.length != b.length) return false
        for (let i = 0; i < a.length; i++) if (a[i] != b[i]) return false
        return true
    }

    function calcularCompartida(estrella: number, margen: number): boolean {
        const mia = firma(estrella, margen)
        if (mia.length < 4) return false
        const izquierda = ladoIzquierdo(estrella)
        const total = estrellas()
        for (let otra = 1; otra <= total; otra++) {
            if (otra == estrella || ladoIzquierdo(otra) != izquierda) continue
            if (mismas(firma(otra, margen), mia)) return true
        }
        return false
    }

    /**
     * Elige qué cielo mira la placa: las 42 estrellas de cerca o el cielo de cien.
     * Cambia lo que devuelven todos los demás bloques.
     */
    //% block="mirar $cielo"
    //% weight=100
    export function mirar(cielo: Cielo): void {
        nave_cielo(cielo)
    }

    function nave_cielo(c: Cielo) {
        cielo = c
        cacheE = []
    }

    /** Cuántas estrellas tiene el cielo que se mira: 42 o 100, más las añadidas. */
    //% block="número de estrellas"
    //% weight=99
    export function estrellas(): number {
        let k = base()
        for (let i = 0; i < extraCielo.length; i++) if (extraCielo[i] == cielo) k++
        return k
    }

    /** La luz de una estrella una noche. Las noches van de la 1 a la 30 (las 42 de cerca, hasta la 36). Si no existe, 0. */
    //% block="luz de la estrella $estrella la noche $noche"
    //% estrella.defl=1 noche.defl=1
    //% weight=98
    export function luz(estrella: number, noche: number): number {
        if (!existe(estrella) || noche < 1 || noche > lucesDe(estrella)) return 0
        if (estrella > base()) return extraLuces[extra(estrella)][noche - 1]
        if (cielo == Cielo.Cien) return LUZ_CIEN.charCodeAt((estrella - 1) * NOCHES_CIEN + noche - 1) - 32
        return LUZ_CERCA.charCodeAt((estrella - 1) * NOCHES_CERCA + noche - 1) - 32
    }

    /** La luz de las noches tranquilas de una estrella (la raya gris de las tiras). */
    //% block="luz normal de la estrella $estrella"
    //% estrella.defl=1
    //% weight=97
    export function normal(estrella: number): number {
        if (!existe(estrella)) return 0
        if (estrella > base()) return extraNormal[extra(estrella)]
        if (cielo == Cielo.Cien) return NORMAL_CIEN.charCodeAt(estrella - 1) - 32
        return NORMAL_CERCA.charCodeAt(estrella - 1) - 32
    }

    /** Verdadero si la hoja de respuestas de la nave dice que la estrella tiene planeta. */
    //% block="la hoja dice planeta en la estrella $estrella"
    //% estrella.defl=1
    //% weight=90
    export function hojaDicePlaneta(estrella: number): boolean {
        if (!existe(estrella) || estrella > base()) return false
        return caracter(cielo == Cielo.Cien ? HOJA_CIEN : HOJA_CERCA, estrella - 1) == "P"
    }

    /** Falso en la 41, la 42 y las añadidas: nadie las ha mirado todavía. */
    //% block="la hoja tiene respuesta para la estrella $estrella"
    //% estrella.defl=1
    //% weight=89
    export function hojaTieneRespuesta(estrella: number): boolean {
        if (!existe(estrella) || estrella > base()) return false
        return caracter(cielo == Cielo.Cien ? HOJA_CIEN : HOJA_CERCA, estrella - 1) != "S"
    }

    /** Verdadero si la estrella está en el lado izquierdo de la nave. Las añadidas, en el derecho. */
    //% block="la estrella $estrella está en el lado izquierdo"
    //% estrella.defl=1
    //% weight=88
    export function ladoIzquierdo(estrella: number): boolean {
        if (!existe(estrella) || estrella > base()) return false
        return caracter(cielo == Cielo.Cien ? LADO_CIEN : LADO_CERCA, estrella - 1) == "I"
    }

    /** Verdadero solo en la 41 y la 42: las que están a tiro del combustible de Eco. */
    //% block="la estrella $estrella está a tiro"
    //% estrella.defl=41
    //% weight=87
    export function aTiro(estrella: number): boolean {
        if (cielo != Cielo.Cerca || !existe(estrella) || estrella > base()) return false
        return caracter(TIRO_CERCA, estrella - 1) == "T"
    }

    /** Cuántas veces baja la estrella «margen» o más (noches 1 a 30). Las noches seguidas por debajo cuentan una. */
    //% block="bajadas de la estrella $estrella con margen $margen"
    //% estrella.defl=1 margen.defl=2
    //% weight=80
    export function bajadas(estrella: number, margen?: number): number {
        calcularBajadas(estrella, margenDe(margen))
        return bDesde.length
    }

    /** La noche en que empieza la bajada número «cual» (la primera es la 1). Si no hay, 0. */
    //% block="noche de la bajada $cual de la estrella $estrella||con margen $margen"
    //% cual.defl=1 estrella.defl=1 margen.defl=2
    //% weight=79
    export function nocheDeBajada(estrella: number, cual: number, margen?: number): number {
        calcularBajadas(estrella, margenDe(margen))
        if (cual < 1 || cual > bDesde.length) return 0
        return bDesde[cual - 1]
    }

    /** Lo más que baja la bajada número «cual» (la primera es la 1). Si no hay, 0. */
    //% block="hondura de la bajada $cual de la estrella $estrella||con margen $margen"
    //% cual.defl=1 estrella.defl=1 margen.defl=2
    //% weight=78
    export function hondura(estrella: number, cual: number, margen?: number): number {
        calcularBajadas(estrella, margenDe(margen))
        if (cual < 1 || cual > bHondura.length) return 0
        return bHondura[cual - 1]
    }

    /** Cada cuántas noches baja: la distancia entre bajadas si es siempre la misma; si no, 0. */
    //% block="año de la estrella $estrella||con margen $margen"
    //% estrella.defl=1 margen.defl=2
    //% weight=77
    export function ano(estrella: number, margen?: number): number {
        calcularBajadas(estrella, margenDe(margen))
        return anoDeLasBajadas()
    }

    /** La pregunta E: verdadero si baja exactamente las mismas noches que otra estrella de su mismo lado. */
    //% block="la estrella $estrella baja las mismas noches que otra de su lado||con margen $margen"
    //% estrella.defl=1 margen.defl=2
    //% weight=76
    export function compartida(estrella: number, margen?: number): boolean {
        const m = margenDe(margen)
        if (m != MARGEN) return calcularCompartida(estrella, m)
        if (!existe(estrella)) return false
        while (cacheE.length < estrellas()) cacheE.push(-1)
        if (cacheE[estrella - 1] < 0) cacheE[estrella - 1] = calcularCompartida(estrella, m) ? 1 : 0
        return cacheE[estrella - 1] == 1
    }

    /** Lo que contesta la estrella a una pregunta: 1 sí, 0 no (margen 2; «baja mucho» es 5 o más). */
    //% block="respuesta de la estrella $estrella a la pregunta $pregunta"
    //% estrella.defl=1
    //% weight=75
    export function pregunta(estrella: number, pregunta: Pregunta): number {
        if (!existe(estrella)) return 0
        if (pregunta == Pregunta.E) return compartida(estrella) ? 1 : 0
        if (pregunta == Pregunta.C) {
            const n = normal(estrella)
            const ultima = Math.min(NOCHES_TIRA, lucesDe(estrella))
            for (let noche = 1; noche <= ultima; noche++) if (luz(estrella, noche) >= n + MARGEN) return 1
            return 0
        }
        calcularBajadas(estrella, MARGEN)
        if (pregunta == Pregunta.A) return bDesde.length >= 2 ? 1 : 0
        if (pregunta == Pregunta.B) return anoDeLasBajadas() > 0 ? 1 : 0
        if (pregunta == Pregunta.D) {
            for (let k = 0; k < bHondura.length; k++) if (bHondura[k] >= HONDA) return 1
            return 0
        }
        // F: ¿son igual de hondas (las dos hondas o las dos flojas) la primera y la segunda bajada?
        if (bDesde.length < 2) return 0
        return (bHondura[0] >= HONDA) == (bHondura[1] >= HONDA) ? 1 : 0
    }

    /**
     * Añade una estrella al cielo que se mira, con su luz normal y la luz de cada noche (la primera, la noche 1).
     * Devuelve su número: 43, 44… (o 101, 102… en el cielo de cien).
     */
    //% block="añadir estrella con luz normal $normal y luces $luces"
    //% normal.defl=40
    //% weight=60
    export function anadirEstrella(normal: number, luces: number[]): number {
        extraCielo.push(cielo)
        extraNormal.push(normal)
        extraLuces.push(luces.slice(0))
        cacheE = []
        return estrellas()
    }

    function fila(diferencia: number): number {
        // La fila de la pantalla para una noche: arriba lo que sube, en el centro la luz normal, abajo lo que baja.
        if (diferencia >= 2) return 0
        if (diferencia == 1) return 1
        if (diferencia == 0) return 2
        if (diferencia >= -2) return 3
        return 4
    }

    /**
     * Pasa la tira de una estrella por la pantalla, de derecha a izquierda: cada noche, una columna.
     * La luz normal va en la fila del centro; lo que baja, abajo. Si baja mucho (5 o más), se encienden las dos de abajo.
     */
    //% block="pasar la tira de la estrella $estrella por la pantalla"
    //% estrella.defl=1
    //% weight=50
    export function pasarTira(estrella: number): void {
        if (!existe(estrella)) return
        const n = normal(estrella)
        const ultima = Math.min(NOCHES_TIRA, lucesDe(estrella))
        for (let paso = 1; paso <= ultima + 5; paso++) {
            basic.clearScreen()
            for (let x = 0; x < 5; x++) {
                const noche = paso - 4 + x
                if (noche < 1 || noche > ultima) continue
                const d = luz(estrella, noche) - n
                led.plot(x, fila(d))
                if (d <= -HONDA) led.plot(x, 3)
            }
            basic.pause(250)
        }
        basic.clearScreen()
    }
}
