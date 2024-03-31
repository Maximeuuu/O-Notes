/*                        */
/*   SCROLL SYNCHRONISE   */
/*                        */
const table1 = document.querySelector ( '.liste-etd'  );
const table2 = document.querySelector ( '.liste-note' );

/* Permet de faire défiler les deux tableaux en même temps */
table1.addEventListener ( 'scroll', function ( )
{
	table2.scrollTop = table1.scrollTop;
} );

table2.addEventListener ( 'scroll', function ( )
{
	table1.scrollTop = table2.scrollTop;
} );


/* Fonction qui permet d'adapter la hauteur de l'entête du tableau selon la hauteur maximal entre les deux tableaux */
function adaptationHauteur ( )
{
	const hauteurTableauNom  = document.querySelector ( '.tableau-nom-etd thead'  );
	const hauteurTableauNote = document.querySelector ( '.tableau-note-etd thead' );

	const hauteurMax = Math.max ( hauteurTableauNom.clientHeight, hauteurTableauNote.clientHeight );

	hauteurTableauNom .style.height = hauteurMax + 'px';
	hauteurTableauNote.style.height = hauteurMax + 'px';
}

/* Déclanche la méthode lors du chargement de la page et du resize de la page */
window.addEventListener ( 'resize', adaptationHauteur );
window.addEventListener ( 'load'  , adaptationHauteur );

/*                                          */
/*   FONCTIONNEMENT DE LA POP-UP ETUDIANT   */
/*                                          */
const lstCellulesCliquablesNom = document.querySelectorAll ( '.cellule-cliquable-nom' )
const popupEtudiant            = document.querySelector    ( '.popup-etudiant'        );
const tabEtudiant              = document.querySelector    ( '.conteneur-tableau-etd' );

lstCellulesCliquablesNom.forEach( function( cellule )
{
	cellule.addEventListener( 'click', ouverturePopupEtudiant );
})

function ouverturePopupEtudiant ( )
{
	popupEtudiant.classList.add ( 'ouvert' );
	tabEtudiant  .classList.add ( 'cache'  );
	
}

function fermeturePopupEtudiant ( )
{
	popupEtudiant.classList.remove ( 'ouvert' );
	tabEtudiant  .classList.remove ( 'cache'  );
}

/*                                                  */
/*   FONCTIONNEMENT DE LA POP-UP EDITION ETUDIANT   */
/*                                                  */
const popupEditionEtudiant = document.getElementById ( 'popup-edition-etudiant'  );
const btnEdition           = document.querySelector  ( '.edition'                );
const btnAnnuler           = document.querySelector  ( '.btn-annuler'            );
const btnValider           = document.querySelector  ( '.btn-valider'            );  //TODO: validation

btnEdition.addEventListener ( 'click', ouverturePopupEditionEtudiant );
btnAnnuler.addEventListener ( 'click', fermeturePopupEditionEtudiant );

function ouverturePopupEditionEtudiant ( )
{
	console.log('edition')
	popupEditionEtudiant.classList.add ('ouvert');
}

function fermeturePopupEditionEtudiant ( )
{
	popupEditionEtudiant.classList.remove ( 'ouvert' );
}

/*                                     */
/*   BAR DE NAVIGATION DES SEMSETRES   */
/*                                     */

const ensBoutonsSemestre = document.querySelectorAll ( '.semestre' );

console.log (ensBoutonsSemestre)

ensBoutonsSemestre.forEach ( function ( bouton )
{
	bouton.addEventListener ( 'click', function ( event )
	{
		ensBoutonsSemestre.forEach ( function ( bouton )
		{
			bouton.classList.remove ( 'btn-clique' );
		} )
		
		bouton.classList.add ( 'btn-clique' );
	} )
} );