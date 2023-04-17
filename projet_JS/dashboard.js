const liste_enseigant=document.getElementById("all_eng");
// Listes de valeurs à ajouter dans le select
const enseignantsList = ['Aly', 'Mbaye','Baila', 'Ndoye', 'Djiby', 'Seckouba', 'Djiby','djiby'];
const sallesList = ['101','102','103','104','201','Incub'];
const classesList = ['L2 GLRS', 'L2 GLS B', 'L2 ESTE','L1 A', 'IAGEB','L2CDSD'];
const modulesList = ['Python', 'LC', 'PHP', 'Algo','JAVA','Javascript'];
// const enseignant=['Aly', 'Mbaye','Baila', 'Ndoye', 'Djiby', 'Seckouba', 'Djiby'];
const affichage_enseignant = document.getElementById('aly');
function creerObjet() {
  let jours = {
    "Lundi": [],
    "Mardi": [],
    "Mercredi": [],
    "Jeudi": [],
    "Vendredi": [],
    "Samedi": []
  };

  for (let jour in jours) {
    jours[jour].push({
      "module":'',
      "Enseignant":'',
      "salle":'',
      "heure_Debut":0,
      "heure_Fin":0,
      "durée":0
    });
  }

  return jours;
}
const jours=creerObjet();


var ul = document.getElementById("liste-jours-semaine");
// const keys = Object.keys(jours); 
// const valeur = Object.values(jours);
for (const jour in jours){
  // // recuperation du jour et son contenu
  // const keys = Object.keys(jour); 
  // const valeur = Object.values(jour);
  for (let index = 0; index < Object.values(jours[jour]).length; index++) {
    console.log("Séance du " +jour + " on a " + Object.values(jours[jour][index]))
    
  }
}
// quand un enseignant est selectionné
const select_enseigant = document.getElementById('all_eng');

function is_selected(liste){
  const actif = select_enseigant.selectedIndex;
  const index_actif = select_enseigant[actif];
  liste[liste.selectedIndex]=liste[0]
  return liste[liste.selectedIndex]

}

// Récupération de l'élément select
const selectElem = document.getElementById('all_eng');
// Récupération de tous les éléments avec la classe badge
const badgesElems = document.querySelectorAll('.badge', '.ajout');
const fromElementAjout=document.querySelectorAll('.ajout')
// Fonction qui remplit le select avec les valeurs d'une liste donnée

function selectionner(list) {
  // Suppression des anciennes options
  selectElem.innerHTML = '';
  // Ajout des nouvelles options
  list.forEach((value) => {
    const optionElem = document.createElement('option');
    optionElem.textContent = value;
    optionElem.value=list.indexOf(value)
    selectElem.appendChild(optionElem);
    if (list===sallesList) {
      optionElem.setAttribute("capacite", 123)
      optionElem.setAttribute("id",value)
    }
    if (list===enseignantsList) {
      optionElem.setAttribute("id", value)
    }
    if (list===sallesList) {
      optionElem.setAttribute("id", value)
    }
    if (list===classesList) {
      optionElem.setAttribute("id", value)
    }
    if (list===modulesList) {
      optionElem.setAttribute("id", value)
    }
  });
}

// Ajout des écouteurs d'événements aux badges
badgesElems.forEach((badgeElem) => {
  badgeElem.addEventListener('click', (event) => {
    // Récupération de l'ID du badge cliqué
    function creerPlanning(liste,badgeID) {
        // si on selectionne le badge  enseignant  on creer son planning
          prof=liste[liste_enseigant.selectedIndex]
          console.log('Option sélectionnée par défaut :', liste[liste.selectedIndex]);
          select_enseigant.addEventListener('change', function() {
          // aly.innerText= aly.innerText+ ' ' +enseignant[liste_enseigant.selectedIndex]+":"
          aly.innerText=aly.innerText.replace(aly.innerText, "PLaning :"+liste[liste_enseigant.selectedIndex])
             //  les horaires
          var row_horaire=document.createElement("div");
          var offset=document.createElement("div")
          offset.className="col-lg-2 ";
          row_horaire.appendChild(offset);
          row_horaire.className="d-flex row ";
          for (let index = 8; index < 17; index++) {
            var horaire=document.createElement("div");
            horaire.className="col-md-1 col-lg-1 text-center";
            horaire.textContent=index+ "H";
            row_horaire.appendChild(horaire);
          }
          // parcourir les objets
            ul.innerHTML=''
            ul.appendChild(row_horaire)
              for (const jour in jours) {
                console.log(jour+"="+jours[jour])
                var li = document.createElement("div");
                var cour=document.createElement("div");
                li.className = "list-group-item  col-lg-2 text-success bg-light py-3 rounded rounded-3";
                li.style.minHeight="70px";
                li.setAttribute("data-bs-toggle", "modal")
                li.setAttribute("data-bs-target", "#mamodal")
                li.setAttribute("data-bs-toggle", "modal")
                // /liste des cours
                var div =document.createElement("div");
                div.className="row  border border-1 border-light border-start-0 ";
                li.setAttribute("id",jour)
                li.appendChild(document.createTextNode(jour+ ' +'));
                div.appendChild(li);
                prof=liste[liste_enseigant.selectedIndex]
                // console.log(enseignantsList.indexOf(enseignantsList.selectedIndex))
                console.log("liste contient " +Object.values(jours[jour][0]))
                console.log(" element est recherché " +prof)
                // ici on calcule la durer pour les offset-lg-2 
                console.log("dans lundi on a " +Object.values(jours[jour][0].Enseignant))
                for (let index = 0; index < Object.values(jours[jour]).length; index++) {
                    if (Object.values(jours[jour][index]).includes(prof)) {
                        console.log("oui c'est bon pour "+ prof)
                        console.log(liste[liste_enseigant.selectedIndex])
                        var cour=document.createElement("div");
                        cour.style.minHeight="70px";
          
                        cour.className="list-group-item  col-lg-2  bg-secondary rounded rounded-3 bg-danger";
                        // Object.values(jours[jour][index])[2]
                        // +Object.values(jours[jour][index])[1]+
                        // +Object.values(jours[jour][index])[2];
                        switch (liste) {
                          case enseignantsList:
                            cour.innerHTML=`<div class="badge bg-transparent text-wrap text-center" >
                            <span class="text-white d-block fs-4 text-center">`+Object.values(jours[jour][index])[1]+`</span>
                            <span class="text-dark d-block fs-5">`+Object.values(jours[jour][index])[0]+`</span>
                            <span class="text-dark d-block text-reset fs-6">`+Object.values(jours[jour][index])[2]+`</span>
                            </div>`
                            div.appendChild(cour);
                            break;

                          case sallesList:
                            cour.innerHTML=`<div class="badge bg-transparent text-wrap text-center" >
                              <span class="text-white d-block fs-4 text-center">`+Object.values(jours[jour][index])[2]+`</span>
                              <span class="text-dark d-block fs-5">`+Object.values(jours[jour][index])[0]+`</span>
                              <span class="text-dark d-block text-reset fs-6">`+Object.values(jours[jour][index])[1]+`</span>
                              </div>`
                              div.appendChild(cour);
                              break;
                          
                          case modulesList:
                            cour.innerHTML=`<div class="badge bg-transparent text-wrap text-center" >
                              <span class="text-white d-block fs-4 text-center">`+Object.values(jours[jour][index])[0]+`</span>
                              <span class="text-dark d-block fs-5">`+Object.values(jours[jour][index])[2]+`</span>
                              <span class="text-dark d-block text-reset fs-6">`+Object.values(jours[jour][index])[1]+`</span>
                              </div>`
                              div.appendChild(cour);
                              break;

                          case classesList:
                            cour.innerHTML=`<div class="badge bg-transparent text-wrap text-center" >
                              <span class="text-white d-block fs-4 text-center">`+Object.values(jours[jour][index])[2]+`</span>
                              <span class="text-dark d-block fs-5">`+Object.values(jours[jour][index])[3]+`</span>
                              <span class="text-dark d-block text-reset fs-6">`+Object.values(jours[jour][index])[1]+`</span>
                              </div>`
                              div.appendChild(cour);
                              break;
                          default:
                            break;
                        }
                }
              }
              
              div.appendChild(cour);
              ul.appendChild(div)
               
              } 
      });
      
    }
    const badgeId = event.currentTarget.getAttribute('id');
    if (badgeId === 'Enseignants'){
      creerPlanning(enseignantsList, badgeId);
    }
    else if (badgeId === 'salle') {
      creerPlanning(sallesList, badgeId)
    }
    else if(badgeId==="module"){
      creerPlanning(modulesList, badgeId);
    }
    else if(badgeId==="classe"){
      creerPlanning(classesList, badgeId);
    }
    
    else{
      aly.innerText=aly.innerText.replace(aly.innerText, "PLaning :")
    }
    // Mise à jour du select en fonction de l'ID du badge
    switch (badgeId) {
      case 'Enseignants':
        selectionner(enseignantsList);
        break;
      case 'salle':
        selectionner(sallesList);
        break;
      case 'classe':
        selectionner(classesList);
        break;
      case 'module':
        selectionner(modulesList);
        break;
      default:
        break;
    }
  });

  const plusIcon = badgeElem.querySelector('.bx-plus');
  plusIcon.setAttribute("data-bs-toggle", "modal")
  plusIcon.setAttribute("data-bs-target", "#ajoutbagde")
  plusIcon.setAttribute("data-bs-toggle", "modal")
  
  plusIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    
    const plusID = event.currentTarget.getAttribute('id');

    switch (plusID) {
      case "sal":
<<<<<<< HEAD
        console.log("ajout d'une salle")

       
=======
        console.log("ajout de sal")
<<<<<<< HEAD
>>>>>>> 4d9e5a0 (modificationdes problemes au niveau de l'acceuil)
        
=======
        salle=prompt("entrer la salle")
        sallesList.push(salle)

>>>>>>> 327aae4 (Ajout des focntionalités liées a l'ajout)
        break;

      case "clas":
        console.log("ajout de classe")
        classe=prompt("entrer la classe")
        classesList.push(classe)
        
        break;

      case "mod":
        console.log("ajout de module")
        moduleList=prompt("entrer la module")
        modulesList.push(module)
        
        break;

      case "eng":
<<<<<<< HEAD
<<<<<<< HEAD
        console.log("ajout d'un enseigna")
=======
        console.log("ajouter un ensigant")
>>>>>>> 4d9e5a0 (modificationdes problemes au niveau de l'acceuil)
        
=======
        console.log("ajouter un ensigant");
        eng=prompt("entrer enseigant");
        enseignantsList.push(eng)

>>>>>>> 327aae4 (Ajout des focntionalités liées a l'ajout)
        break;
    
      default:
        break;
    }
    console.log('Plus icon clicked');
  });
});

// Récupérer le bouton de mode
var modeBtn = document.getElementById('toggle');
// Vérifier si le mode est défini sur "sombre" dans le stockage local (localStorage)
if (localStorage.getItem('mode') === 'sombre') {
  // Activer le mode sombre
  activerModeSombre();
}

// Ajouter un écouteur d'événement "clic" au bouton de mode
modeBtn.addEventListener('click', function() {
  // Vérifier si le mode est actuellement "clair"
  if (document.body.classList.contains('mode-clair')) {
    // Activer le mode sombre
    activerModeSombre();
  } else {
    // Activer le mode clair
    activerModeClair();
  }
});


// Fonction pour activer le mode sombre
function activerModeSombre() {
  // Ajouter la classe "mode-sombre" au corps de la page
  document.body.classList.add('mode-sombre','bg-dark');
  document.getElementById("sidebarMenu").classList.add('bg-dark')
  document.getElementById("navbar").classList.add('bg-dark',)
  document.getElementById("aly").classList.add('text-light')

  // Supprimer la classe "mode-clair" du corps de la page
  document.body.classList.remove('mode-clair');
  document.getElementById("sidebarMenu").classList.remove('bg-dark-subtle')
  document.getElementById("navbar").classList.remove('bg-light', "text-dark")
  document.getElementById("aly").classList.remove('text-dark')

  // Mettre à jour le texte du bouton de mode
  modeBtn.innerHTML = 'Mode clair';
  // Enregistrer le mode actuel dans le stockage local (localStorage)
  localStorage.setItem('mode', 'sombre');
}
// Fonction pour activer le mode clair
function activerModeClair() {
  // Ajouter la classe "mode-clair" au corps de la page
  document.body.classList.add('mode-clair', 'bg-light');
  document.getElementById("sidebarMenu").classList.add('bg-light')
  document.getElementById("navbar").classList.add('bg-light')
  document.getElementById("aly").classList.add('text-dark')

  // Supprimer la classe "mode-sombre" du corps de la page
  document.body.classList.remove('mode-sombre', 'bg-dark');
  document.getElementById("sidebarMenu").classList.remove('bg-dark')
  document.getElementById("navbar").classList.remove('bg-dark')
  document.getElementById("aly").classList.remove('text-light')

  // Mettre à jour le texte du bouton de mode
  modeBtn.innerHTML = 'Mode sombre';
  // Enregistrer le mode actuel dans le stockage local (localStorage)
  localStorage.setItem('mode', 'clair');
}
enseignantsList.selectedIndex = 0;


const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {
  const searchText = searchInput.value.toLowerCase();
  const filteredList = enseignantsList.filter(function(item) {
    return item.toLowerCase().indexOf(searchText) > -1;
  });
  
  ul.innerHTML = "";
  filteredList.forEach((item) =>{
    
    const opt = document.createElement("div");
    
    opt.textContent = item;
    opt.className="list-group-item  col-lg-12 text-dark"
    opt.setAttribute("id", enseignantsList.indexOf(item))
    
    ul.appendChild(opt);
    item.addEventListener('click',(event)=>{
      console.log("ck")
    });
    

  });
});

// Stocker les valeurs dans des tableaux JavaScript

// Récupérer les éléments de formulaire
const enseignantSelect = document.getElementById("ajout_Enseignant");
const moduleSelect = document.getElementById("ajout_module");
const salleSelect = document.getElementById("ajout_salle");
const classeSelect = document.getElementById("ajout_classe");
const jourselect=document.getElementById("ajout_jour")

// Fonction pour créer des options pour chaque tableau de valeurs
function createOptions(selectElement, optionsArray) {
  optionsArray.forEach(function(option) {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
      // optionElement.value=optionsArray.indexOf(option)
    selectElement.appendChild(optionElement);
  });
}

// Créer les options pour chaque input de type select
createOptions(enseignantSelect, enseignantsList);
createOptions(moduleSelect, modulesList);
createOptions(salleSelect, sallesList);
createOptions(classeSelect, classesList);

// Récupérer les éléments de formulaire

const heureDebutInput = document.getElementById("heured");
const heureFinInput = document.getElementById("heuref");

// Fonction pour stocker les valeurs dans le localStorage
function saveFormValues() {
  const formValues = {
    jour:jourselect.value,
    enseignant: enseignantSelect.value,
    module: moduleSelect.value,
    salle: salleSelect.value,
    classe: classeSelect.value,
    heureDebut: heureDebutInput.value,
    heureFin: heureFinInput.value

  };
  const cours =Object.create(jours[jourselect.value])
  cours.Enseignant=enseignantSelect.value;
  cours.module=moduleSelect.value;
  cours.salle=salleSelect.value;
  cours.heure_Fin=heureDebutInput.value;
  cours.heure_Debut=heureFinInput.value;
  jours[jourselect.value].push(cours)

  // localStorage.setItem("formValues", JSON.stringify(formValues));
  localStorage.setItem("cours", JSON.stringify(cours));
  jours.push(cours)

}

// Ajouter un écouteur d'événements pour le bouton d'enregistrement
const ajouter = document.getElementById("ajouter");
ajouter.addEventListener("click", saveFormValues);

