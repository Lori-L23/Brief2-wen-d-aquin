//verifier que les champs ne sont pas vides

// let informationspersonnelles = document.getElementById("IP").value.trim();
// let experiencespersonnelles = document.getElementById("EP").value.trim();
// let formation = document.getElementById("formation").value.trim();
// let centreinteret = document.getElementById("CI").value.trim();
// let references = document.getElementById("references").value.trim();
// let langues = document.getElementById("langues").value.trim();
// let valid = true;

//Vérifier le format des emails 
// if (email != "nomutilisateur@domaine"){
//     document.getElementById("email").innerHTML = "<span style='color: red;'>Format d'email invalide.</span>";
//     valid=false;
// }

//verifier le format des numéros de téléphone
// if (telephone.lenght > 9) {
//     document.getElementById("telephone").innerHTML = "<span style='color: red;'>Numero de telephone invalide, entre moins de 9 caractères.</span>";
//     valid = false;
// }

//Limiter l’âge à une plage cohérente (ex. : 18-65 ans)
// if (age.length < 18 || age.length > 65) {
//     document.getElementById("age").innerHTML = "<span style='color: red;'>votre afes doit etre compris entre 18 et 65 ans</span>";
//     valid = false;
// }

// let dateactuelle = new Date();
// let duree = dateexperience - dateactuelle;
//S’assurer que la date d’expérience est valide

// if (dateexperience > dateactuelle) {

// }
//S’assurer que la date de formation est valide 


const bouton = document.getElementById('monbouton1');
const liste = document.getElementById('listeEP').value;
const fleche = bouton.querySelector('img'); // ou svg

bouton.getElementById('monbouton1').addEventListener('click', () => {
    liste.classList.toggle('hidden');
    //exemple de rotation d'image
    fleche.classList.toggle('rotate-180');
});
document.querySelector("#record-references > div.w-full.flex.relative.flex-col > div > div.w-full.mb-4 > div.-mx-2.flex.flex-col > div")