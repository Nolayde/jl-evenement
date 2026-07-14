/* ================================================
   JLEvenement — Base de donnees produits
   26 produits dans 10 categories
================================================ */

var CATEGORIES = [
  "Sonorisations",
  "Lumieres",
  "Machines a effets",
  "Packs son et lumieres",
  "Video",
  "Karaoke",
  "DJ",
  "Deco salle",
  "Scene",
  "Photobooth"
];

var PRODUCTS = [
  // SONORISATIONS
  { id: 1,  categorie: "Sonorisations",          nom: "Enceinte JBL PRX815",          description: "Enceinte active 15 pouces, 1500W. Ideale pour salles jusqu'a 200 personnes.", prix: 45,  image: "https://via.placeholder.com/400x300?text=Enceinte+JBL" },
  { id: 2,  categorie: "Sonorisations",          nom: "Micro Sans-fil Shure SM58",    description: "Micro main sans-fil professionnel, portee 50m.", prix: 15,  image: "https://via.placeholder.com/400x300?text=Micro+Shure" },
  { id: 3,  categorie: "Sonorisations",          nom: "Table Yamaha MG16XU",         description: "Table de mixage 16 canaux avec effets integres.", prix: 35,  image: "https://via.placeholder.com/400x300?text=Table+Yamaha" },
  { id: 4,  categorie: "Sonorisations",          nom: "Pack Return Stage 4",          description: "Pack retour scene complet, 4 retours, cables inclus.", prix: 25,  image: "https://via.placeholder.com/400x300?text=Pack+Return" },
  { id: 5,  categorie: "Sonorisations",          nom: "Sub QSC KS118",                description: "Subwoofer 18 pouces, 3200W. Resonation puissant.", prix: 55,  image: "https://via.placeholder.com/400x300?text=Sub+QSC" },

  // LUMIERES
  { id: 6,  categorie: "Lumieres",               nom: "Lyre LED Sharpy",              description: "Lyre LED 230W, faisceau concentre, couleurs RGBW.", prix: 30,  image: "https://via.placeholder.com/400x300?text=Lyre+LED" },
  { id: 7,  categorie: "Lumieres",               nom: "Par LED RGBW 18x12W",         description: "Pack de 6 PAR LED RGBW, parfaite pour washes.", prix: 20,  image: "https://via.placeholder.com/400x300?text=Par+LED" },
  { id: 8,  categorie: "Lumieres",               nom: "Strobe 2000W",                 description: "Strobe puissant 2000W pour effets speciaux.", prix: 20,  image: "https://via.placeholder.com/400x300?text=Strobe" },
  { id: 9,  categorie: "Lumieres",               nom: "Pied Eclairage TP-7800",       description: "Pied telescopique jusqu'a 3m, charge max 30kg.", prix: 8,   image: "https://via.placeholder.com/400x300?text=Pied+Eclairage" },

  // MACHINES A EFFETS
  { id: 10, categorie: "Machines a effets",      nom: "Machine Fumee Antari Z-800II", description: "Machine fumee 800W, fumee dense et uniforme.", prix: 25,  image: "https://via.placeholder.com/400x300?text=Machine+Fumee" },
  { id: 11, categorie: "Machines a effets",      nom: "Machine Bulle Look 850",       description: "Machine a bulles haute capacite, 2000 jets/min.", prix: 20,  image: "https://via.placeholder.com/400x300?text=Machine+Bulle" },
  { id: 12, categorie: "Machines a effets",      nom: "Jet Canon Confetti 2m",        description: "Canon a confettis, portee 2m, securite garantie.", prix: 15,  image: "https://via.placeholder.com/400x300?text=Jet+Confetti" },
  { id: 13, categorie: "Machines a effets",      nom: "Canon a Fumee DMX",             description: "Canon a fumee controle DMX, fumee au sol spectaculaire.", prix: 30,  image: "https://via.placeholder.com/400x300?text=Canon+Fumee" },

  // PACKS SON ET LUMIERES
  { id: 14, categorie: "Packs son et lumieres",   nom: "Pack DJ Soiree 1",             description: "Sonorisation + eclairage complet pour soiree 100 pers.", prix: 90,  image: "https://via.placeholder.com/400x300?text=Pack+DJ+1" },
  { id: 15, categorie: "Packs son et lumieres",   nom: "Pack Concert 1",               description: "Sonorisation + eclairage complet pour concert 300 pers.", prix: 150, image: "https://via.placeholder.com/400x300?text=Pack+Concert" },
  { id: 16, categorie: "Packs son et lumieres",   nom: "Pack Anniversaire",            description: "Petit kit son + lumiere pour anniversaire 50 pers.", prix: 50,  image: "https://via.placeholder.com/400x300?text=Pack+Anniversaire" },
  { id: 17, categorie: "Packs son et lumieres",   nom: "Pack Semaine Culturelle",      description: "Pack complet semaine culturelle, 7 jours.", prix: 350, image: "https://via.placeholder.com/400x300?text=Pack+Semaine" },

  // VIDEO
  { id: 18, categorie: "Video",                  nom: "Ecran LED P3 2x3m",            description: "Ecran LED 2m x 3m, pitch 3.9mm, haute luminosite.", prix: 300, image: "https://via.placeholder.com/400x300?text=Ecran+LED" },
  { id: 19, categorie: "Video",                  nom: "Videoprojecteur 8000 lumens",  description: "Videoprojecteur puissant 8000 lumens, Full HD.", prix: 80,  image: "https://via.placeholder.com/400x300?text=Video+Proj" },
  { id: 20, categorie: "Video",                  nom: "Camera PTZ 4K",                 description: "Camera PTZ 4K avec tracking automatique.", prix: 60,  image: "https://via.placeholder.com/400x300?text=Camera+PTZ" },
  { id: 21, categorie: "Video",                  nom: "Ecran 65 pouces 4K",           description: "Ecran plat 65 pouces 4K, pieds inclus.", prix: 50,  image: "https://via.placeholder.com/400x300?text=Ecran+65" },

  // KARAOKE
  { id: 22, categorie: "Karaoke",                nom: "Set Karaoke Pro 1",             description: "2 micros + console karaoke + haut-parleurs.", prix: 40,  image: "https://via.placeholder.com/400x300?text=Karaoke+Pro" },
  { id: 23, categorie: "Karaoke",                nom: "Set Karaoke Compact",           description: "1 micro + console karaoke compacte.", prix: 25,  image: "https://via.placeholder.com/400x300?text=Karaoke+Compact" },
  { id: 24, categorie: "Karaoke",                nom: "Karaoke Stand Alone",           description: "Kiosque karaoke autonome avec ecran tactile.", prix: 55,  image: "https://via.placeholder.com/400x300?text=Karaoke+Stand" },

  // DJ
  { id: 25, categorie: "DJ",                    nom: "Console Pioneer DJM-900NXS2",  description: "Table DJ professionnelle 4 canaux.", prix: 50,  image: "https://via.placeholder.com/400x300?text=Pioneer+DJM" },
  { id: 26, categorie: "DJ",                    nom: "PLX-3000 + CDJ-2000NXS2",      description: "Platines CDJ + platines vinyl, set pro complet.", prix: 80,  image: "https://via.placeholder.com/400x300?text=PLX+CDJ" },
  { id: 27, categorie: "DJ",                    nom: "Controller DDJ-1000SRT",       description: "Controller Serato / Rekordbox, 4 canaux.", prix: 40,  image: "https://via.placeholder.com/400x300?text=DDJ-1000" },
  { id: 28, categorie: "DJ",                    nom: "Casque Pioneer HDJ-X10",       description: "Casque DJ professionnel, confort maximal.", prix: 15,  image: "https://via.placeholder.com/400x300?text=Casque+DJ" },

  // DECO SALLE
  { id: 29, categorie: "Deco salle",            nom: "Guirlandes Guinguette 10m",    description: "Guirlandes guinguette 10m, 10 ampoules, exterieur.", prix: 8,   image: "https://via.placeholder.com/400x300?text=Guirlandes" },
  { id: 30, categorie: "Deco salle",            nom: "Kit Ballons Helium 100pcs",    description: "100 ballons + helium, couleurs assorties.", prix: 25, image: "https://via.placeholder.com/400x300?text=Kit+Ballons" },
  { id: 31, categorie: "Deco salle",            nom: " rideau Decoratif",            description: "Rideau LED decoratif 3m x 2m, effets lumineux.", prix: 15, image: "https://via.placeholder.com/400x300?text=Rideau+LED" },
  { id: 32, categorie: "Deco salle",            nom: "Tours Ballon 2m",              description: "Tour a ballons deco 2m, installation possible.", prix: 35, image: "https://via.placeholder.com/400x300?text=Tour+Ballon" },

  // SCENE
  { id: 33, categorie: "Scene",                 nom: "Podium Aluminium 1m x 1m",     description: "Podium alu 1x1m, reglablene hauteur, 500kg.", prix: 30,  image: "https://via.placeholder.com/400x300?text=Podium" },
  { id: 34, categorie: "Scene",                 nom: "Structure Decors 6m x 4m",    description: "Structure modulable 6m x 4m pour scine evenementielle.", prix: 80,  image: "https://via.placeholder.com/400x300?text=Structure" },
  { id: 35, categorie: "Scene",                 nom: "Garde-corps Scine",           description: "Set garde-corps securite scine, 10 pieces.", prix: 15,  image: "https://via.placeholder.com/400x300?text=Garde-corps" },
  { id: 36, categorie: "Scene",                 nom: "Tapis Scine Noir",             description: "Tapis de sol noir 2m x 10m, anti-deparant.", prix: 20,  image: "https://via.placeholder.com/400x300?text=Tapis+Scene" },

  // PHOTOBOOTH
  { id: 37, categorie: "Photobooth",            nom: "Borne Selfie Touch 2",         description: "Borne selfie tactile, impressions en 5 secondes.", prix: 120, image: "https://via.placeholder.com/400x300?text=Borne+Selfie" },
  { id: 38, categorie: "Photobooth",            nom: "Borne Selfie Classique",       description: "Borne photo classique, ecran 21 pouces.", prix: 80,  image: "https://via.placeholder.com/400x300?text=Borne+Classique" },
  { id: 39, categorie: "Photobooth",            nom: "Kit Accessoires Photo",        description: "Kit 50 accessoires (chapeaux, moustaches, cadres...).", prix: 20,  image: "https://via.placeholder.com/400x300?text=Accessoires" },
  { id: 40, categorie: "Photobooth",            nom: "Fond Vert 3m x 3m",           description: "Fond vert chromakey 3x3m, supports inclus.", prix: 15,  image: "https://via.placeholder.com/400x300?text=Fond+Vert" }
];
