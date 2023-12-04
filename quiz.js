let a = 0;
let b = 0;
let c = 0;
let d = 0;

let quiz_section = document.getElementsByClassName("quiz")[0];

function quiz_szamolas() {
    for (let i = 1; i <= 7; i++) {
        if (document.getElementById(`quiz${i}_valasz1`).checked) {
            a++;
        }
        else if (document.getElementById(`quiz${i}_valasz2`).checked) {
            b++;
        }
        else if (document.getElementById(`quiz${i}_valasz3`).checked) {
            c++;
        }
        else if (document.getElementById(`quiz${i}_valasz4`).checked) {
            d++;
        }
    }

    let max = Math.max(a, b, c, d);
    if (a == max) {
        quiz_section.innerHTML = `
        <header class="quiz_header">
            <h4>
                Támadó és dinamikus stílusú vagy,
                ezért hozzád Bobby Fischer passzol a legjobban!
            </h4>
        </header>
        <article class="quiz_description">
            <p>
                Bobby Fischer (1943–2008) az egyik leghíresebb és legkiválóbb sakkozó volt a 20. században. Amerikai származású, és élete során rengeteg sakkversenyt nyert meg. Legnagyobb sikerét 1972-ben érte el, amikor a hidegháború időszakában, Reykjavíkban, Izlandon, megnyerte a világbajnoki címet Borisz Spassky orosz sakkozó ellen.
            </p>
            <p>
                Fischer nem csak a sakkozásban volt kivételes, hanem különleges személyiségével is kitűnt. Gyermekkori zsenialitása révén fiatalon vált nemzetközi figyelem középpontjává. Stílusa támadó és dinamikus volt, és az a híres mondása, hogy "Szeretem a sakkot. Szeretem a sakkot, mint szeretem magam" jól tükrözi elkötelezettségét és szenvedélyét a játék iránt.
            </p>
            <p>
                Sajnálatos módon, Fischer később visszavonult a sakkból és elszigetelődött. Élete későbbi szakaszában számos kontroverszitás és jogi probléma övezte. Bobby Fischer neve azonban örökre fennmarad a sakktörténelemben, és hozzájárult a sportág népszerűsítéséhez azáltal, hogy az Egyesült Államokban ismertté tette a sakkot és megteremtette az amerikai sakk hírnevét a világ színpadán.
            </p>
        </article>
        <article class="quiz_image"><img src="kepek/galeria_kepek/fischer.jpg" alt="Bobby Fischer" title="Bobby Fischer"></article>
        <style>
            .quiz {
                flex-direction: row;
            }
        </style>
        `
    }
    else if (b == max) {
        quiz_section.innerHTML = `
        <header class="quiz_header">
            <h4>
                Kiegyensúlyozott és stratégiai játékstílusra hajlamos vagy,
                ezért hozzád Anatoly Karpov passzol a legjobban!
            </h4>
        </header>
        <article class="quiz_description">
            <p>
                Anatoly Karpov (született 1951) orosz származású sakkozó, aki a 20. század egyik legeredményesebb és leghosszabb ideig uralkodó világbajnoka volt. Karpov a szovjet iskola egyik kiemelkedő alakja volt, és pályafutása során kiváló eredményeket ért el.
            </p>
            <p>
                1975-ben Karpov Garry Kasparov elleni világbajnoki döntőt megelőzően, a válogató tornán nyert és így a szovjet sakkozók között kijelölték, hogy legyen Bobby Fischer utódja, aki kihívóként nyerte meg a világbajnoki címet. Azonban Fischer visszavonult, és Karpov lett a világbajnok 1975-ben.
            </p>
            <p>
                Karpovnak hosszú és domináns uralkodása volt a sakkozásban. 1985-ig ellenfele nem volt, aki meg tudta volna dönteni a világbajnoki címét. Azonban a világbajnoki címért folytatott híres összecsapásai Garry Kasparovval váltak híressé. Az 1984-85-ös és a 1985-86-os meccsük hírhedttek maradtak a különféle botrányok és visszavonulások miatt.
            </p>
            <p>
                Karpovot nemcsak világbajnoki címéért ismerik el, hanem azért is, hogy a sakktörténelem egyik legkiválóbb pozíciós és stratégiai játékosaként. Az elmúlt évtizedekben Karpov továbbra is aktív szereplője maradt a sakknak és a nemzetközi sakkéletnek, és a sportág egyik ikonjává vált.
            </p>
        </article>
        <article class="quiz_image"><img src="kepek/galeria_kepek/karpov.jpg" alt="Anatoly Yevgenyevich Karpov" title="Anatoly Yevgenyevich Karpov"></article>
        <style>
            .quiz {
                flex-direction: row;
            }
        </style>
        `
    }
    else if (c == max) {
        quiz_section.innerHTML = `
        <header class="quiz_header">
            <h4>
                Rugalmas és változatos játékstílusra vagy hajlamos,
                ezért hozzád Viswanathan Anand passzol a legjobban!
            </h4>
        </header>
        <article class="quiz_description">
            <p>
                Viswanathan "Vishy" Anand (született 1969) indiai sakkozó, aki a 20. és a 21. század egyik legkiválóbb és leghosszabb ideig uralkodó világbajnoka. Anand a sakk világában számos sikert ért el, és az indiai sakkozás ikonja lett.
            </p>
            <p>
                Anand a cselekvésben és az éles taktikai elemekben gazdag stílusáról ismert. 1985-ben vált nemzetközileg ismert sakkozóvá, majd 2000-ben megszerezte a FIDE (Nemzetközi Sakkszövetség) világbajnoki címet. Az első indiai sakkozóként elért sikerei révén Anand nagyban hozzájárult a sakkozás népszerűsítéséhez Indiában.
            </p>
            <p>
                2007-ben Anand nyerte el a hagyományos világbajnoki címet, majd 2008-ban megvédte azt. 2010-ben és 2012-ben ismét sikeresen megvédte címét. Az ősi indiai várostól, Chennai-től való szoros kapcsolatáért ismert, ahol számos nagy sakkversenyt rendezett és támogatott.
            </p>
            <p>
                Anand a sakk történetének egyik legelismertebb és legnépszerűbb játékosa lett, és példaképe sok fiatal indiai sakkozónak. A karrierje során többek között az ősi játék varázsát és a modern sakkelméletet is sikeresen ötvözte.
            </p>
        </article>
        <article class="quiz_image"><img src="kepek/galeria_kepek/vishy.jpeg" alt="Viswanathan 'Vishy' Anand" title="Viswanathan 'Vishy' Anand"></article>
        <style>
            .quiz {
                flex-direction: row;
            }
        </style>
        `
    }
    else if (d == max) {
        quiz_section.innerHTML = `
        <header class="quiz_header">
            <h4>
                Biztonságot preferáló és védekező játékstílusra vagy inkább hajlamos,
                ezért hozzád Tigran Petrosian passzol a legjobban!
            </h4>
        </header>
        <article class="quiz_description">
            <p>
                Tigran Petrosian (1929–1984) örmény származású sakkozó, aki a 20. század közepén volt az egyik legeredményesebb és legkiválóbb világbajnoka. Petrosian játéka kivételesen védekező és pozíciós volt, és a sakkban a biztonságos és kiegyensúlyozott játék ikonjává vált.
            </p>
            <p>
                Petrosian a sakkozásban elsősorban az éles taktikai elemekre épülő ellenfeleivel szembeni rendkívüli védekező képességeiről volt híres. 1963-ban nyerte el a világbajnoki címet, miután legyőzte Mihail Botvinniket, és ő lett a hatodik világbajnok a sakk történetében. A címét 1969-ig tartotta, amikor elveszítette Spassky ellen, de utána is továbbra is a világ élvonalában maradt.
            </p>
            <p>
                Petrosian halála után a sakkozás emlékére alapították a "Tigran Petrosian Sakkmúzeumot" Jerevánban, Örményországban. Az öröksége azokra a játékosokra is kiterjed, akik a védekezés művészetét részesítik előnyben a sakkozásban, és a neve összefonódik a taktikai mélységek és a stratégiai megközelítések ötvözésével.
            </p>
        </article>
        <article class="quiz_image"><img src="kepek/galeria_kepek/petrosian.jpg" alt="Tigran Vartanovich Petrosian" title="Tigran Vartanovich Petrosian"></article>
        <style>
            .quiz {
                flex-direction: row;
            }
        </style>
        `
    }
}

document.getElementById("quiz_bekuldes").addEventListener("click", quiz_szamolas);
