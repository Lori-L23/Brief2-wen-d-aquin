
    // js pour la visualisation


    // if (champ.value.trim() === '') {
    //     console.log("Le champ est vide");
    // } else {
    //     console.log("Le champ n'est pas vide");
    // }
    // prenom
    const surname = document.getElementById('focus-id-name-givenName');
    const surnameDynamique = document.getElementById('name1');
    const surnameDynamique2 = document.getElementById('name2');

    surname.addEventListener('input', function() {
        surnameDynamique.textContent = surname.value;
        surnameDynamique2.textContent = surname.value;
        const profilshow = document.getElementById("profilshow");

        profilshow.classList.remove("hidden");
    });

    // nom de famille
    const famille = document.getElementById('focus-id-name-familyName');
    const familleDynamique = document.getElementById('nomfamille');
    const familleDynamique2 = document.getElementById('nomfamille2');
    const profilshow = document.getElementById("profilshow");
    
    famille.addEventListener('input', function() {
        familleDynamique.textContent = famille.value;
        familleDynamique2.textContent = famille.value;

        profilshow.classList.remove("hidden");
    });
    const titre = document.getElementById(':r2a:');
    const titreDynamique = document.getElementById('titre');

    titre.addEventListener('input', function() {
        titreDynamique.textContent = titre.value;
    });
    // Adresse
    const adresse = document.getElementById('focus-id-address-address');
    const adresseDynamique = document.getElementById('adresseShow');
    
    adresse.addEventListener('input', function() {
        adresseDynamique.classList.remove("hidden");
        adresseDynamique.lastElementChild.innerHTML = this.value;
    });
    // Adresse Email
    const adresseemail = document.getElementById(':r2c:');
    const adresseemailDynamique = document.getElementById('adresseemailShow');
    
    adresseemail.addEventListener('input', function() {
        adresseemailDynamique.classList.remove("hidden");
        adresseemailDynamique.lastElementChild.innerHTML = this.value;
    });
    // code postal
    
    // ville
    const ville = document.getElementById('focus-id-address-city');
    const villeDynamique = document.getElementById('villeShow');

    ville.addEventListener('input', function() {
        villeDynamique.classList.remove("hidden");
        villeDynamique.lastElementChild.innerHTML = this.value;

        // villeDynamique.textContent = ville.value;
    });
    // numero de telephone
    const telephone = document.getElementById(':r2e:');
    const telephoneDynamique = document.getElementById('telephoneShow');
    
    telephone.addEventListener('input', function() {
        telephoneDynamique.classList.remove("hidden");
        telephoneDynamique.lastElementChild.innerHTML = this.value;
    });
    // date de naissance
    const datenaissance = document.getElementById(':r2m:');
    const datenaissanceDynamique = document.getElementById('datenaissanceShow');

    datenaissance.addEventListener('input', function() {
        datenaissanceDynamique.classList.remove("hidden");
        datenaissanceDynamique.lastElementChild.innerHTML = this.value;
    });
    // lieu de naissance 
    // const lieunaissance = document.getElementById('truncate h-6 ms-0.5');
    // const lieunaissanceDynamique = document.getElementById('lieunaissanceShow');
    
    // lieunaissance.addEventListener('input', function() {
    //     lieunaissanceDynamique.classList.remove("hidden");
    //     lieunaissanceDynamique.lastElementChild.innerHTML = this.value;
    // });
    //poste
    const poste = document.getElementById(':r46:');
    const posteDynamique = document.getElementById('poste');
    const experience = document.getElementById("experienceShow");

    poste.addEventListener('input', function() {
        posteDynamique.innerHTML = poste.value;
        experience.classList.remove("hidden");
    });

    //employeur
    const employeur = document.getElementById('focus-id-employer-employer');
    const employeurDynamique = document.getElementById('employeur');

    employeur.addEventListener('input', function() {
        employeurDynamique.innerHTML = employeur.value;
    });
    //employeur
    const ville1 = document.getElementById('focus-id-employer-city');
    const ville1Dynamique = document.getElementById('ville2');

    ville1.addEventListener('input', function() {
        ville1Dynamique.innerHTML = ville1.value;
    });

    //mois de debut
    const moisdebut = document.getElementById('focus-id-period-startdate');
    const moisdebutDynamique = document.getElementById('moisdebut');
    moisdebut.addEventListener('change', function() {
        moisdebutDynamique.innerHTML = moisdebut.options[moisdebut.selectedIndex].text;
    });

    //Annee de debut
    const anneedebut = document.getElementById('focus-id-period-startdateAD');
    const anneedebutDynamique = document.getElementById('anneedebutShow');
    anneedebut.addEventListener('change', function() {
        anneedebutDynamique.innerHTML = anneedebut.options[anneedebut.selectedIndex].text;
    });

    //mois de fin
        const moisfin = document.getElementById('focus-id-period-enddate');
        const moisfinDynamique = document.getElementById('moisfin');
        moisdebut.addEventListener('change', function() {
        moisfinDynamique.innerHTML = moisfin.options[moisdebut.selectedIndex].text;
    });

     //Annee de fin
     const anneefin = document.getElementById('focus-id-period-startdateAF');
    const anneefinDynamique = document.getElementById('anneefinShow');
    anneefin.addEventListener('change', function() {
        anneefinDynamique.innerHTML = anneefin.options[anneefin.selectedIndex].text;
    });
    // titre
    // sexe et nationalite

        // verifier le format des numéros de téléphone
        function telephone() {
            if (telephone.lenght > 9) {
                document.getElementById("telephone").innerHTML = "<span style='color: red;'>Numero de telephone invalide, entre moins de 9 caractères.</span>"
            }
        }


        function telecharger() {
            const element = document.getElementById('cv-preview'); // Récupérer l'élément DOM

            if (!element) {
                console.error("L'élément avec l'ID 'cv-preview' n'a pas été trouvé.");
                return;
            }

            const options = {
                margin: 10,
                filename: 'Mon-CvPro.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 4, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf()
                .set(options)
                .from(element)
                .save();
        }

 
