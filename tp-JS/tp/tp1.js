 // Récupération des éléments HTML nécessaires
 const addButton = document.getElementById("add-new");
 const container = document.getElementById("container");
 
 // Fonction pour créer un nouveau composant
 function creerDiv() {
   // Création des éléments HTML nécessaires
   const div = document.createElement("div");
   div.classList.add("col-md-3", "col-lg-3","col-sm-3", "col-xs-3",);
   const header = document.createElement("section");
   header.className=("bg-success");
   
   const editIcon = document.createElement("i");
   const trashIcon = document.createElement("i");
   const textarea = document.createElement("textarea");
   
   // Ajout des classes CSS aux icônes
   editIcon.classList.add("bi", "bi-pencil-square", "text-light", "px-2");
   trashIcon.classList.add("bi", "bi-trash", "text-light");
   textarea.classList.add("w-100", )
   
   // Ajout des événements aux icônes
   trashIcon.addEventListener("click", () => div.remove());
   editIcon.addEventListener("click", () => {
     textarea.disabled = !textarea.disabled;
   });
   
   // if (textarea.textContent.length===0){
   //    console.log(header.classList[0]);
      
   //   }
   //   else{
   //    console.log("dara amoufi");
   //    // header.classList.remove('bg-success')
   //    header.classList.add("bg-opacity-10");
   //    console.log(header.classList);
      
   //   }
  textarea.addEventListener('input', function(e) {
   header.classList.remove("bg-success");
   header.style.backgroundColor=("red")
   header.classList.add("bg-red", "bg-opacity-10");
   console.log(header.classList[1]);
   });
   textarea.addEventListener('mouseout', function(e) {
      header.classList.add("bg-success");
     
     
      });
      
   header.classList.add("bg-success")
   
   // Ajout des éléments au div principal
   header.appendChild(editIcon);
   header.appendChild(trashIcon);
   div.appendChild(header);
   div.appendChild(textarea);
   
   // Ajout du div au container
   container.appendChild(div);
 }
 
 // Ajout de l'événement au bouton "Add New"
 addButton.addEventListener("click", creerDiv);
