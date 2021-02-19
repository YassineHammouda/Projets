/*$(document).ready(function(){ //---> formule pour afficher ou effacer un elements avec deux bouton différents 
    $("#eff1").click(function(){
      $("h2").hide();
    });
    $("#aff1").click(function(){
      $("h2").show();
    });
  });
  function myMsg(){ ---> fonction pour afficher un message lors du clique sur l'élements
    alert("Hello World !!")
}
  //Commentaire et exercice expliqué sur Jquery

/* Tout d'abord jQuery est une bibliothèque javascript qui va nous permettre de mieux mettre en page nos site  en html css et js.
Syntaxe jQuery
La syntaxe jQuery est faite sur mesure pour sélectionner des éléments HTML et effectuer certaines actions sur le ou les éléments.

La syntaxe de base est: $ ( sélecteur ). action ()

Un signe $ pour définir / accéder à jQuery
Un ( sélecteur ) pour "interroger (ou rechercher)" des éléments HTML
Une action jQuery () à effectuer sur le ou les éléments
Exemples:

$(this).hide() - masque l'élément courant.

$("p").hide() - masque tous les éléments <p>.

$(".test").hide() - masque tous les éléments avec class = "test".

$("#test").hide() - masque l'élément avec id = "test".

Connaissez-vous les sélecteurs CSS?

jQuery utilise la syntaxe CSS pour sélectionner des éléments. Vous en apprendrez plus sur la syntaxe du sélecteur dans le prochain chapitre de ce didacticiel.

Astuce: si vous ne connaissez pas CSS, vous pouvez lire notre tutoriel CSS .

L'événement Document Ready
Vous avez peut-être remarqué que toutes les méthodes jQuery de nos exemples se trouvent dans un événement document ready:

$(document).ready(function(){

  // jQuery methods go here...

});
C'est pour empêcher tout code jQuery de s'exécuter avant que le document ne soit fini de charger (est prêt).

Il est recommandé d'attendre que le document soit complètement chargé et prêt avant de l'utiliser. Cela vous permet également d'avoir votre code JavaScript avant le corps de votre document, dans la section head.

Voici quelques exemples d'actions qui peuvent échouer si des méthodes sont exécutées avant que le document ne soit complètement chargé:

Essayer de masquer un élément qui n'est pas encore créé
Essayer d'obtenir la taille d'une image qui n'est pas encore chargée
Conseil: l' équipe jQuery a également créé une méthode encore plus courte pour l'événement document prêt:

$(function(){

  // jQuery methods go here...

});
Utilisez la syntaxe que vous préférez. Nous pensons que l'événement document prêt est plus facile à comprendre lors de la lecture du code.

Sélecteurs jQuery
Les sélecteurs jQuery sont l'une des parties les plus importantes de la bibliothèque jQuery.

Sélecteurs jQuery
Les sélecteurs jQuery vous permettent de sélectionner et de manipuler des éléments HTML.

Les sélecteurs jQuery sont utilisés pour «rechercher» (ou sélectionner) des éléments HTML en fonction de leur nom, id, classes, types, attributs, valeurs des attributs et bien plus encore. Il est basé sur les sélecteurs CSS existants , et en plus, il possède ses propres sélecteurs personnalisés.

Tous les sélecteurs de jQuery commencent par le signe dollar et les parenthèses: $ ().

Le sélecteur d'élément
Le sélecteur d'élément jQuery sélectionne les éléments en fonction du nom de l'élément.

Vous pouvez sélectionner tous les <p>éléments sur une page comme celle-ci:

$("p")
Exemple

Lorsqu'un utilisateur clique sur un bouton, tous les <p>éléments seront masqués:

Exemple
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
Le sélecteur #id
Le sélecteur jQuery utilise l'attribut id d'une balise HTML pour trouver l'élément spécifique.#id

Un identifiant doit être unique dans une page, vous devez donc utiliser le sélecteur #id lorsque vous souhaitez rechercher un élément unique et unique.

Pour trouver un élément avec un identifiant spécifique, écrivez un caractère de hachage, suivi de l'identifiant de l'élément HTML:

$("#test")
Exemple

Lorsqu'un utilisateur clique sur un bouton, l'élément avec id = "test" sera masqué:

Exemple
$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
PUBLICITÉ


Le sélecteur .class
Le .class sélecteur jQuery trouve des éléments avec une classe spécifique.

Pour rechercher des éléments avec une classe spécifique, écrivez un caractère point, suivi du nom de la classe:

$(".test")
Exemple

Lorsqu'un utilisateur clique sur un bouton, les éléments avec class = "test" seront masqués:

Exemple
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});
Plus d'exemples de sélecteurs jQuery
Syntax	Description	Example
$("*")	Selects all elements	
$(this)	Selects the current HTML element	
$("p.intro")	Selects all <p> elements with class="intro"	
$("p:first")	Selects the first <p> element	
$("ul li:first")	Selects the first <li> element of the first <ul>	
$("ul li:first-child")	Selects the first <li> element of every <ul>	
$("[href]")	Selects all elements with an href attribute	
$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button")	Selects all <button> elements and <input> elements of type="button"	
$("tr:even")	Selects all even <tr> elements	
$("tr:odd")	Selects all odd <tr> elements	
Utilisez notre testeur de sélecteur jQuery pour démontrer les différents sélecteurs.

Pour une référence complète de tous les sélecteurs jQuery, veuillez consulter notre Référence des sélecteurs jQuery .

Fonctions dans un fichier séparé
Si votre site Web contient beaucoup de pages et que vous souhaitez que vos fonctions jQuery soient faciles à maintenir, vous pouvez placer vos fonctions jQuery dans un fichier .js séparé.

Lorsque nous démontrons jQuery dans ce tutoriel, les fonctions sont ajoutées directement dans la <head> section. Cependant, il est parfois préférable de les placer dans un fichier séparé, comme celui-ci (utilisez l'attribut src pour faire référence au fichier .js):

Exemple
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="my_jquery_functions.js"></script>
</head>

-->
$(document).ready(function () {
        alert("Hello Baddy, bienvenue sur ma page internet !!!!!!!"); ---> permet lors du raffraichissement de la page d'afficher une alerte!!
      });
      function clickh1(){
        alert("TryItYourSelf random!!!!"); ---> PERMET LORS DU CLIC SUR LE H1 D AFFICHER UNE ALERTE!!!!
      }
 --> permet de cacher le selecteur indiqué lors du click sur le h1.
       function hideh1(){
        $("h1").hide();
      };

      --> Il y a de la difference entre la nomination des évenements entre js et jquery.

      ---------------------------------------------Les evenements jquery--------------------------------------------------------------------------
      Méthodes d'événement jQuery
jQuery est fait sur mesure pour répondre aux événements d'une page HTML.

Que sont les événements?
Toutes les actions des différents visiteurs auxquelles une page Web peut répondre sont appelées événements.

Un événement représente le moment précis où quelque chose se produit.

Exemples:

déplacer une souris sur un élément
sélection d'un bouton radio
en cliquant sur un élément
Le terme «incendies / licenciés» est souvent utilisé pour les événements. Exemple: "L'événement de pression de touche est déclenché, au moment où vous appuyez sur une touche".

Voici quelques événements DOM courants:

Mouse Events	Keyboard Events	Form Events	Document/Window Events
click	keypress	submit	load
dblclick	keydown	change	resize
mouseenter	keyup	focus	scroll
mouseleave	 	blur	unload
Syntaxe jQuery pour les méthodes d'événement
Dans jQuery, la plupart des événements DOM ont une méthode jQuery équivalente.

Pour attribuer un événement de clic à tous les paragraphes d'une page, vous pouvez procéder comme suit:

$("p").click();
L'étape suivante consiste à définir ce qui doit se passer lorsque l'événement se déclenche. Vous devez passer une fonction à l'événement:

$("p").click(function(){
  // action goes here!!
});
ADVERTISEMENT


Méthodes d'événement jQuery couramment utilisées
$ (document) .ready ()

La $(document).ready()méthode nous permet d'exécuter une fonction lorsque le document est complètement chargé. Cet événement est déjà expliqué dans le chapitre Syntaxe jQuery .

Cliquez sur()

La click()méthode attache une fonction de gestionnaire d'événements à un élément HTML.

La fonction est exécutée lorsque l'utilisateur clique sur l'élément HTML.

L'exemple suivant indique: Lorsqu'un événement de clic se déclenche sur un <p>élément; masquer l' <p>élément courant :

Exemple
$("p").click(function(){
  $(this).hide();
});

dblclick ()

La dblclick()méthode attache une fonction de gestionnaire d'événements à un élément HTML.

La fonction est exécutée lorsque l'utilisateur double-clique sur l'élément HTML:

Exemple
$("p").dblclick(function(){
  $(this).hide();
});
mouseenter ()

La mouseenter()méthode attache une fonction de gestionnaire d'événements à un élément HTML.

La fonction est exécutée lorsque le pointeur de la souris entre dans l'élément HTML:

Exemple
$("#p1").mouseenter(function(){
  alert("You entered p1!");
});
souris ()

La mouseleave()méthode attache une fonction de gestionnaire d'événements à un élément HTML.

La fonction est exécutée lorsque le pointeur de la souris quitte l'élément HTML:

Exemple
$("#p1").mouseleave(function(){
  alert("Bye! You now leave p1!");
});
souris vers le bas()

La mousedown()méthode attache une fonction de gestionnaire d'événements à un élément HTML.

La fonction est exécutée, lorsque le bouton gauche, central ou droit de la souris est enfoncé, alors que la souris est sur l'élément HTML:

Exemple
$("#p1").mousedown(function(){
  alert("Mouse down over p1!");
});
souris ()

La mouseup()méthode attache une fonction de gestionnaire d'événements à un élément HTML.

La fonction est exécutée lorsque le bouton gauche, central ou droit de la souris est relâché, alors que la souris est au-dessus de l'élément HTML:

Exemple
$("#p1").mouseup(function(){
  alert("Mouse up over p1!");
});
flotter()

La hover()méthode prend deux fonctions et est une combinaison des méthodes mouseenter()et mouseleave().

La première fonction est exécutée lorsque la souris entre dans l'élément HTML, et la deuxième fonction est exécutée lorsque la souris quitte l'élément HTML:

Exemple
$("#p1").hover(function(){
  alert("You entered p1!");
},
function(){
  alert("Bye! You now leave p1!");
});
concentrer()

La focus()méthode attache une fonction de gestionnaire d'événements à un champ de formulaire HTML.

La fonction est exécutée lorsque le champ de formulaire obtient le focus:

Exemple
$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});
brouiller()

La blur()méthode attache une fonction de gestionnaire d'événements à un champ de formulaire HTML.

La fonction est exécutée lorsque le champ de formulaire perd le focus:

Exemple
$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});
La méthode on ()
La on()méthode attache un ou plusieurs gestionnaires d'événements pour les éléments sélectionnés.

Joindre un événement de clic à un <p>élément:

Exemple
$("p").on("click", function(){
  $(this).hide();
});
Attachez plusieurs gestionnaires d'événements à un <p>élément:

Exemple:
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});

---->selecteur
balise.classe : les éléments p.center qu'ont la classe center. exemple : p.center {
  text-align: center;
  color: red;
}
<h1 class="center">This heading will not be affected</h1>
<p class="center">This paragraph will be red and center-aligned.</p> ---> on selectionne que l'élement p de la classe center.


---> selecteur
p.center {
  text-align: center;
  color: red;
}

p.large {
  font-size: 300%;
}
<h1 class="center">This heading will not be affected</h1>
<p class="center">This paragraph will be red and center-aligned.</p>--> impacte seulement les elements de la balise p de classe center
<p class="center large">This paragraph will be red, center-aligned, and in a large font-size.</p> --> impacte seulement les elements de la balise p de classe center et large.



function appendText(){
          var txt1 = "<p>Bonjour Lis cette phrase.</p>"; ---> permet l'affichaged'une noouvelle ligne en cliquant sur un bouton facon html
            var txt2 = $("<p></p>").text("Bonjour Lis cette Ligne.");---> permet l'affichaged'une noouvelle ligne en cliquant sur un bouton facon jquery
            var txt3 = document.createElement("p");
            txt3.innerHTML = "Bonjour Combien il y a t'il de ligne.";---> permet l'affichaged'une noouvelle ligne en cliquant sur un bouton face js native
            $("body").append(txt1,txt2,txt3);
      }


      //Revision jquery

      <h1>montitre</h1>
      <h2>petittitre</h2>

      <button onclick=texteH1()>Texte du H1</button>
       <button onclick=htmlH1()>Html du H1</button>
        <button onclick=hidebutton()>Cacher le boutton</button>


        <h3>fezpofpozkep^fk</h3>
        <form onsubmit="valid()">
        <input type="number"required/>
        <input type="submit"value="valider"/>


        <script>
        function texteH1(){
          alert($("h1").text());
        }
        function htmlH1(){
          alert($("h1").html());
        }
        </script>
        <h1 class="text-center">Introduction à Jquery</h1>
    <h2 class="ml-4">Afficher/effacer un fichier</h2>
    <br />
    <button id="eff1" class="ml-4 bg-primary text-white">Cacher</button>
    <button id="aff1" class="bg-primary text-white">Afficher</button>
    <br />
    <br />
    <h3 class="ml-4" onclick="myMsg()">
      Afficher un message d'alerte en cliquant sur la phrase.
    </h3>
    <br />
    <p class="ml-4">Cette phrase.</p>
    <br />
    <button onclick="appendText()" class="ml-4 bg-success">
      Ajoute du texte
    </button>

    append et prepend ajoute du contenue à l'interieur du body. pour append et prepend les elements s'ajoute au selecteur selectionne (donc l element devient le fils du selecteur)
    jQuery append (), méthode
La append()méthode jQuery insère le contenu À LA FIN des éléments HTML sélectionnés.

Exemple
$("p").append("Some appended text.");
jQuery prepend (), méthode
La prepend()méthode jQuery insère le contenu AU DEBUT des éléments HTML sélectionnés.

Exemple
$("p").prepend("Some prepended text.");

Exemple et syntaxe After et before pour eux les elements ajouté se trouvent a cote du selecteur (ils seront ses freres)

$(document).ready(function(){
  $("#btn1").click(function(){
    $("img").before("<b>Before</b>");
  });

  $("#btn2").click(function(){
    $("img").after("<i>After</i>");
  });
});


Remove Elements
Supprimer des éléments / du contenu
Pour supprimer des éléments et du contenu, il existe principalement deux méthodes jQuery:

remove() - Supprime l'élément sélectionné (et ses éléments enfants)
empty() - Supprime les éléments enfants de l'élément sélectionné
jQuery remove (), méthode
La remove()méthode jQuery supprime le ou les éléments sélectionnés et leurs éléments enfants.

Exemple
$("#div1").remove();

jQuery empty (), méthode
La empty()méthode jQuery supprime les éléments enfants du ou des éléments sélectionnés.

Exemple
$("#div1").empty();
