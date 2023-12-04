let holland_vedelem = document.getElementById("holland_vedelem")
let francia_vedelem = document.getElementById("francia_vedelem")
let olasz_megnyitas = document.getElementById("olasz_megnyitas")
let vezercsel = document.getElementById("vezercsel")
let reti_megnyitas = document.getElementById("reti_megnyitas")
let spanyol_megnyitas = document.getElementById("spanyol_megnyitas")
let skandinav_vedelem = document.getElementById("skandinav_vedelem")
let skot_megnyitas = document.getElementById("skot_megnyitas")
let sziciliai_vedelem = document.getElementById("sziciliai_vedelem")
let szlav_vedelem = document.getElementById("szlav_vedelem")
let becsi_jatek = document.getElementById("becsi_jatek")
let pirc_vedelem = document.getElementById("pirc_vedelem")

let visszaallit_gomb = document.getElementById("visszaallit_gomb");

function leiras(event) {
    // event.currentTarget.style.display = "none";
    switch (event.currentTarget.param) {
        case "holland_vedelem":
            document.getElementById("kep_magyarazat_holland_vedelem").style.display = "block";
            break;
        case "francia_vedelem":
            document.getElementById("kep_magyarazat_francia_vedelem").style.display = "block";
            break;
        case "olasz_megnyitas":
            document.getElementById("kep_magyarazat_olasz_megnyitas").style.display = "block";
            break;
        case "vezercsel":
            document.getElementById("kep_magyarazat_vezercsel").style.display = "block";
            break;
        case "reti_megnyitas":
            document.getElementById("kep_magyarazat_reti_megnyitas").style.display = "block";
            break;
        case "spanyol_megnyitas":
            document.getElementById("kep_magyarazat_spanyol_megnyitas").style.display = "block";
            break;
        case "skandinav_vedelem":
            document.getElementById("kep_magyarazat_skandinav_vedelem").style.display = "block";
            break;
        case "skot_megnyitas":
            document.getElementById("kep_magyarazat_skot_megnyitas").style.display = "block";
            break;
        case "sziciliai_vedelem":
            document.getElementById("kep_magyarazat_sziciliai_vedelem").style.display = "block";
            break;
        case "szlav_vedelem":
            document.getElementById("kep_magyarazat_szlav_vedelem").style.display = "block";
            break;
        case "becsi_jatek":
            document.getElementById("kep_magyarazat_becsi_jatek").style.display = "block";
            break;
        case "pirc_vedelem":
            document.getElementById("kep_magyarazat_pirc_vedelem").style.display = "block";
            break;
    }
}

function visszaallit() {
    for (i = 0; i <= 11; i++) {
    document.getElementsByClassName("kep_magyarazat")[i].style.display = "none";
    }
}

holland_vedelem.addEventListener("click", leiras)
holland_vedelem.param = "holland_vedelem"
francia_vedelem.addEventListener("click", leiras)
francia_vedelem.param = "francia_vedelem"
olasz_megnyitas.addEventListener("click", leiras)
olasz_megnyitas.param = "olasz_megnyitas"
vezercsel.addEventListener("click", leiras)
vezercsel.param = "vezercsel"
reti_megnyitas.addEventListener("click", leiras)
reti_megnyitas.param = "reti_megnyitas"
spanyol_megnyitas.addEventListener("click", leiras)
spanyol_megnyitas.param = "spanyol_megnyitas"
skandinav_vedelem.addEventListener("click", leiras)
skandinav_vedelem.param = "skandinav_vedelem"
skot_megnyitas.addEventListener("click", leiras)
skot_megnyitas.param = "skot_megnyitas"
sziciliai_vedelem.addEventListener("click", leiras)
sziciliai_vedelem.param = "sziciliai_vedelem"
szlav_vedelem.addEventListener("click", leiras)
szlav_vedelem.param = "szlav_vedelem"
becsi_jatek.addEventListener("click", leiras)
becsi_jatek.param = "becsi_jatek"
pirc_vedelem.addEventListener("click", leiras)
pirc_vedelem.param = "pirc_vedelem"

visszaallit_gomb.addEventListener("click", visszaallit)
