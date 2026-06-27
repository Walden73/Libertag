/* ===========================================================
   LiberTag — site vitrine · interactions + i18n
   =========================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------- i18n dictionary */
  const I18N = {
    fr: {
      nav_system: 'Le Système', nav_example: 'Exemples', nav_import: 'Import-Export', nav_features: 'Fonctionnalités', nav_tags: 'Les tags', nav_pricing: 'Tarifs', nav_faq: 'FAQ', nav_cta: 'Télécharger',
      hero_eyebrow: 'Étiquetage photo avancé',
      hero_title: 'Vos souvenirs,<br />à <em>chérir</em>.',
      hero_lead: "N'entassez plus vos milliers d'images en vrac.<br />Faites-en une bibliothèque vivante et retrouvez chaque photo en un clin d'oeil.<br />L'application qui libère enfin vos photos de l'oubli.",
      compat_label: 'Étiquettes compatibles avec',
      badge_small: 'Disponible sur', hero_secondary: "Voir l'app",
      hero_note: '4,8 — « Je retrouve enfin les photos de mes enfants »',
      phone_micro: '5064 images · 3 sources', phone_micro2: '12 albums · 5064 images', phone_title: 'Sources Activées',
      phone_lib: 'Photothèque', phone_gal: 'Galeries',
      tab_pers: 'Pers.', tab_lieu: 'Lieu', tab_even: 'Évèn.', tab_theme: 'Thème', tab_divers: 'Divers',
      seg_all: 'Tout', seg_albums: 'Albums', seg_fav: 'Étoiles',
      demo_eyebrow: "L'app en images", demo_title: 'Pensée pour la mémoire de famille',
      demo_lead: "Une galerie sombre et chaleureuse, des étiquettes claires, un geste pour tout retrouver. Voici LiberTag, écran par écran.",
      demo1_t: 'Toutes vos sources, réunies', demo1_p: "Pellicule, albums, captures : LiberTag rassemble vos images sans les déplacer.",
      demo2_t: 'Étiquetez en un geste', demo2_p: "L'IA propose, vous validez. Le bon tag se pose sur la photo en une touche.",
      demo3_t: 'Cinq familles de tags', demo3_p: "Personnes, lieux, évènements, thèmes… chaque tag trouve naturellement sa catégorie.",
      editag_ai: 'Suggestions IA', editag_posed: 'Tags posés', newtag_title: 'Nouveau tag', newtag_cat: 'Catégorie',
      feat_eyebrow: 'Plaisir des retrouvailles', feat_title: "Revoir ses photos n'a jamais été aussi utile — ni aussi amusant.", feat_lead: "Prenez-vous au jeu de l'étiquetage de souvenirs,<br />puis créez d'exceptionnels albums en un rien de temps.",
      f1_t: 'Étiquetage assisté', f1_p: 'Des suggestions de tags apparaissent sous chaque photo. Un coup d\u2019œil, une touche, c\u2019est rangé.',
      f2_t: 'Tags parents', f2_p: '« Mamie » sous « Famille Halimi ». Une hiérarchie douce qui suit la logique de vos souvenirs.',
      f3_t: 'Plusieurs sources', f3_p: 'Pellicule, albums, scans, captures — réunis dans une seule galerie, sans rien déplacer.',
      f4_t: 'Recherche instantanée', f4_p: 'Croisez un nom, un lieu et une année. La bonne photo remonte en un instant.',
      f5_t: 'Favoris & albums', f5_p: 'Étoilez les plus belles, regroupez-les en albums vivants qui se mettent à jour seuls.',
      f6_t: 'Vos photos restent vôtres', f6_p: "Tout se passe sur votre téléphone. Aucune photo n'est envoyée ailleurs sans vous.",
      tagsys_eyebrow: 'Le système de tags', tagsys_title: 'Cinq couleurs pour toute une vie',
      tagsys_lead: "Chaque Tag est lié à une grande famille reconnaissable d'un coup d'œil — et peut vivre sous un tag parent dans la <em>Tagothèque</em>.<br />La seule limite est celle de votre imagination.",
      cat1_t: 'Personne', cat1_p: "Gens, familles, cercles d'amis",
      cat2_t: 'Lieu', cat2_p: 'Endroits, villes, pays',
      cat3_t: 'Évènement', cat3_p: 'Dates, fêtes, voyages',
      cat4_t: 'Thème', cat4_p: 'Styles, sujets, ambiances',
      cat5_t: 'Divers', cat5_p: 'Tout le reste',
      tree_head: 'Echantillon de la Tagothèque',
      tree_place: 'LIEU',
      tg_australia: 'Australie', tg_wedding: 'Mariage', tg_babies: 'Bébés', tg_cars: 'Voitures', tg_animals: 'Animaux',
      tg_childhood: 'Enfance', tg_photobooth: 'Photomaton', tg_dad: 'Papa', tg_mudbath: 'Bain de boue',
      tg_holiday84: 'Vacances 1984', tg_italy: 'Italie', tg_pisa: 'Tour de Pise', tg_ancestors: 'Aïeux',
      tg_beach: 'Plage', tg_wallplants: 'Plantes muricoles', tg_insects: 'Insectes', tg_bees: 'Abeilles',
      tg_flowers: 'Fleurs', tg_dandelion: 'Pissenlit', tg_celebrities: 'Célébrités', tg_mom: 'Maman',
      tg_youth: 'Jeunesse', tg_bw: 'Noir & Blanc',
      aria_stars3: '3 étoiles sur 5', aria_stars4: '4 étoiles sur 5', aria_stars5: '5 étoiles sur 5',
      aria_demo_tagging: "Démonstration d'étiquetage",
      aria_fan: 'Sept niveaux de visionneuse déployés en éventail, du swipe plein écran à la grille six colonnes',
      feat_attr1: 'Attribuez vos Tags', feat_attr2: "une photo après l'autre…", feat_attr3: '…ou bien en', feat_attr4: 'sélection groupée !',
      svc_eyebrow: 'Fonctionnalités', svc_title: 'Services <em>compris</em>',
      svc_lead: "Autant joindre l'utile à l'agréable<br />et tagger dans une interface riche et confortable.",
      svc2_t: 'Albums sophistiqués', svc2_p: 'Mixez vos étiquettes pour créer des albums sophistiqués en un tournemain\u00a0!',
      svc3_t: 'Reconnaissance\u00a0IA', svc3_p: "Reconnaissance faciale, lecture des métadonnées pour opérer des rapprochements : l'IA intégrée vous fera des suggestions de plus en plus pertinentes au fil du temps.",
      svc4_t: 'Édition de photos', svc4_p: "Une petite gamme d'outils élémentaires pour des retouches rapides, individuelles ou groupées : pivoter, rogner, luminosité, saturation et quelques filtres de base…",
      svc5_t: 'Modes multiples<br>de tagging', svc5_p: "Pour aller encore plus vite, l'application propose des interfaces de tagging malines, adaptées à toutes les formes de collections photo.",
      svc6_t: 'Coffre privé', svc6_p: "Un coffre privé, avec code de déverrouillage, pour ranger vos photos les plus confidentielles — avec création de sous-dossiers. Petit bonus : il possède aussi sa propre arborescence de tags.",
      svc_pill: '01 · Le pilier', svc1_t: 'Visionneuse <em>7&nbsp;niveaux</em>', svc1_lead: 'Une large palette de vues adaptées à vos besoins pour un tagging rapide…',
      xmp_eyebrow: 'Import-Export', xmp_title: 'Focus pour les collectionneurs et les photographes méticuleux.',
      xmp_lead: "Profitez de la haute compatibilité des étiquettes de LiberTag. <br />Importez-y vos photos et taggez-les à grande vitesse. <br />Puis exportez-les dans votre logiciel d'édition favori : vous venez de gagner un temps précieux de labelisation massive de vos clichés.",
      xmp_cap: "L'écran d'export — résolution et encodage des tags, en deux gestes.",
      xmp_exp_eye: 'Ce qui est exporté', xmp_exp_h: 'Trois champs XMP standards',
      xmp_f1_p: "Liste plate des noms de tags — lue par tous les logiciels : Lightroom, Photos, Finder, l'Explorateur Windows, digiKam…",
      xmp_f2_p: 'Le chemin hiérarchique complet, du parent à l\'enfant : <span class="kpath">Parent|Enfant</span>.',
      xmp_f3_p: "La note de 1 à 5 étoiles — le standard universel d'appréciation (0 = absente du fichier).",
      xmp_modes_eye: 'Modes de sortie', xmp_m1_t: 'Sidecar',
      xmp_m1_p: 'Un fichier <span class="em">.xmp</span> posé à côté de l\'image, identique à ce que génère Lightroom. Compatible avec tous les formats — JPG, PNG, HEIC, WEBP, TIFF, RAW.',
      xmp_m2_t: 'Gravé dans la photo',
      xmp_m2_p: 'Le XMP est inscrit dans le fichier lui-même. Un <span class="em">JPEG</span> est patché sans aucune perte ; les autres formats sont réencodés en JPEG qualité 92.',
      xmp_m3_t: 'Renommage de masse des fichiers', xmp_bonus: 'Bonus',
      xmp_m3_p: "Renommez tous vos exports d'un seul geste selon un modèle — séquence, date, dimensions… Vos clichés arrivent déjà nommés proprement.",
      price_eyebrow: 'Offre de lancement', price_title: "Une licence à vie pour une tranquillité d'esprit",
      price_lead: "Pas d'abonnement, jamais de pubs, et un prix faramineusement bas pour la première vague de curieux.",
      plan1_t: 'Freemium', plan1_tag: 'Taguer gratuitement', plan1_price: '0 €', plan1_per: '',
      plan1_f1: 'Toutes les fonctionnalités SANS pubs', plan1_f2: 'Usage illimité dans le temps', plan1_f3: 'Limite de 20 tags', plan1_f4: 'Limite de 20 photos par export', plan1_cta: 'Télécharger',
      plan2_flag: 'Offre de lancement', plan2_t: 'Premium', plan2_tag: 'Des collections illimitées de tags', plan2_price: '4,99 €', plan2_per: 'pour toujours',
      plan2_f1: 'Toutes les fonctionnalités', plan2_f2: 'Licence à vie', plan2_f3: 'Mises à jour gratuites', plan2_f4: 'Zéro pubs', plan2_cta: 'Télécharger',
      faq_eyebrow: 'Questions fréquentes', faq_title: 'Tout ce qu\u2019il faut savoir',
      cta_title: 'Des milliers de photos.<br /><em>Zéro chaos.</em>',
      cta_lead: "Téléchargez LiberTag <br>et magnifiez vos photos dans les albums qu'elles méritent.",
      foot_tagline: "L'application qui libère<br>vos photos de l'oubli",
      foot_product: 'Produit', foot_plan: 'Plan', foot_company: 'À propos', foot_dl: 'Télécharger',
      foot_privacy: 'Confidentialité', foot_terms: 'Conditions', foot_contact: 'Contact',
      foot_copy: '© 2026 <a href="https://www.fluxart.fr">FluXart</a> — Conçu avec soin pour Android.', foot_made: 'Conçu avec soin pour Android.',
      faq: [
        ['LiberTag déplace-t-il mes photos ?', "Non. LiberTag lit vos photos là où elles sont déjà — pellicule, albums, dossiers. Vos images ne sont copiées ou déplacées qu'à votre seule initiative dans l'application."],
        ['Mes photos sont-elles envoyées sur un serveur ?', "LiberTag ne gère aucun serveur externe. Tout reste dans votre téléphone.<br />Vous serez ultérieurement informé(e) si nous mettons en place un système de sauvegarde sur le cloud."],
        ['Qu\u2019est-ce qu\u2019un « tag parent » ?', "C'est un tag qui en regroupe d'autres, que vous êtes libres de créer ou pas.<br />« France » et « Italie » seraient des tags-enfants du tag-parent « Europe », par exemple.<br />C'est ce qu'on appelle des « tags hiérarchiques », utilisés dans des logiciels comme Lightroom.<br />Cela permet une recherche plus large quand on remonte dans la hiérarchie.<br />Mais la plupart des logiciels ne gèrent pas cette hiérarchie. Ainsi vous exporterez « France », « Italie » et « Europe » comme 3 tags indépendants sur les photos concernées.<br />Quand vous attribuez un tag-enfant, LiberTag attribue aussi automatiquement à l'image les tags-parents que vous aurez créés à cet effet."],
        ['L\u2019étiquetage automatique est-il fiable ?', "L'IA propose des suggestions sous chaque photo ; libre à vous de les valider ou pas.<br />La qualité des résultats s'accroît avec le nombre de photos taggées et répertoriées par l'IA. Et vous avez accès à ce répertoire de l'IA pour écarter les images non pertinentes à son apprentissage."],
        ['Comment est né LiberTag ? Est-ce un projet institutionnel ?', "Pas du tout. LiberTag est né d'un besoin réel de son fondateur, qui stockait presque 10 000 photos de famille depuis une vingtaine d'années sans pouvoir les classer ou les retrouver correctement.<br /><br />Jusqu'ici, aucun logiciel ni application ne permettait une indexation précise et rapide de milliers d'images sans que cela prenne des semaines, avec épuisement mental à la clé.<br />D'où l'idée d'utiliser le « tapping » rapide du mobile pour accélérer considérablement le catalogage.<br />Aucune application ne rivalise aujourd'hui avec LiberTag en termes d'indexation massive de photos."],
        ['Sur quelles plateformes est-il disponible ?', 'LiberTag est disponible sur Android, via Google Play. Une version iOS est à l\u2019étude.'],
      ],
    },
    en: {
      nav_system: 'The System', nav_example: 'Examples', nav_import: 'Import-Export', nav_features: 'Features', nav_tags: 'Tags', nav_pricing: 'Pricing', nav_faq: 'FAQ', nav_cta: 'Download',
      hero_eyebrow: 'Advanced photo tagging',
      hero_title: 'Your memories,<br />to <em>cherish</em>.',
      hero_lead: "Stop letting thousands of images pile up in a heap.<br />Turn them into a living library and find any photo in the blink of an eye.<br />The app that finally frees your photos from oblivion.",
      compat_label: 'Works with',
      badge_small: 'Get it on', hero_secondary: 'See the app',
      hero_note: "4.8 — \u201CI can finally find my kids' photos\u201D",
      phone_micro: '5,064 images · 3 sources', phone_micro2: '12 albums · 5,064 images', phone_title: 'Active Sources',
      phone_lib: 'Photo Library', phone_gal: 'Galleries',
      tab_pers: 'People', tab_lieu: 'Place', tab_even: 'Event', tab_theme: 'Theme', tab_divers: 'Other',
      seg_all: 'All', seg_albums: 'Albums', seg_fav: 'Starred',
      demo_eyebrow: 'The app in pictures', demo_title: 'Built for family memory',
      demo_lead: 'A warm, dark gallery, clear labels, one gesture to find anything. Here is LiberTag, screen by screen.',
      demo1_t: 'All your sources, together', demo1_p: 'Camera roll, albums, screenshots: LiberTag gathers your images without moving them.',
      demo2_t: 'Tag in one gesture', demo2_p: 'AI suggests, you confirm. The right tag lands on the photo in a single tap.',
      demo3_t: 'Five families of tags', demo3_p: 'People, places, events, themes… every tag naturally finds its category.',
      editag_ai: 'AI suggestions', editag_posed: 'Applied tags', newtag_title: 'New tag', newtag_cat: 'Category',
      feat_eyebrow: 'The joy of looking back', feat_title: 'Revisiting your photos has never been so useful — or so much fun.', feat_lead: 'Make a game of tagging your memories,<br />then create exceptional albums in no time.',
      f1_t: 'Assisted tagging', f1_p: 'Tag suggestions appear under each photo. A glance, a tap, and it\u2019s filed away.',
      f2_t: 'Parent tags', f2_p: '\u201CGranny\u201D under \u201CHalimi Family\u201D. A gentle hierarchy that follows the logic of your memories.',
      f3_t: 'Multiple sources', f3_p: 'Camera roll, albums, scans, screenshots — together in one gallery, nothing moved.',
      f4_t: 'Instant search', f4_p: 'Cross a name, a place and a year. The right photo surfaces in an instant.',
      f5_t: 'Favorites & albums', f5_p: 'Star the best ones, group them into living albums that update on their own.',
      f6_t: 'Your photos stay yours', f6_p: 'Everything happens on your phone. No photo leaves it without you.',
      tagsys_eyebrow: 'The tag system', tagsys_title: 'Five colors for a lifetime',
      tagsys_lead: 'Every Tag belongs to a recognizable family you spot at a glance — and can live under a parent tag in the <em>Tag Library</em>.<br />The only limit is your imagination.',
      cat1_t: 'Person', cat1_p: 'People, families, circles of friends',
      cat2_t: 'Place', cat2_p: 'Spots, cities, countries',
      cat3_t: 'Event', cat3_p: 'Dates, parties, trips',
      cat4_t: 'Theme', cat4_p: 'Styles, subjects, moods',
      cat5_t: 'Other', cat5_p: 'Everything else',
      tree_head: 'Sample from the Tag Library',
      tree_place: 'PLACE',
      tg_australia: 'Australia', tg_wedding: 'Wedding', tg_babies: 'Babies', tg_cars: 'Cars', tg_animals: 'Animals',
      tg_childhood: 'Childhood', tg_photobooth: 'Photo Booth', tg_dad: 'Dad', tg_mudbath: 'Mud Bath',
      tg_holiday84: 'Holiday 1984', tg_italy: 'Italy', tg_pisa: 'Tower of Pisa', tg_ancestors: 'Ancestors',
      tg_beach: 'Beach', tg_wallplants: 'Wall Plants', tg_insects: 'Insects', tg_bees: 'Bees',
      tg_flowers: 'Flowers', tg_dandelion: 'Dandelion', tg_celebrities: 'Celebrities', tg_mom: 'Mom',
      tg_youth: 'Youth', tg_bw: 'Black & White',
      aria_stars3: '3 stars out of 5', aria_stars4: '4 stars out of 5', aria_stars5: '5 stars out of 5',
      aria_demo_tagging: 'Tagging demonstration',
      aria_fan: 'Seven viewer levels fanned out, from full-screen swipe to a six-column grid',
      feat_attr1: 'Assign your Tags', feat_attr2: 'one photo after another…', feat_attr3: '…or else in', feat_attr4: 'bulk selection!',
      svc_eyebrow: 'Features', svc_title: 'Services <em>included</em>',
      svc_lead: 'Why not mix business with pleasure<br />and tag in a rich, comfortable interface.',
      svc2_t: 'Sophisticated albums', svc2_p: 'Mix your labels to build sophisticated albums in a snap!',
      svc3_t: 'AI\u00a0recognition', svc3_p: 'Facial recognition and metadata reading to connect the dots: the built-in AI gives you ever more relevant suggestions over time.',
      svc4_t: 'Photo editing', svc4_p: 'A small set of essential tools for quick edits, one by one or in bulk: rotate, crop, brightness, saturation and a few basic filters…',
      svc5_t: 'Multiple tagging<br>modes', svc5_p: 'To go even faster, the app offers clever tagging interfaces suited to every kind of photo collection.',
      svc6_t: 'Private vault', svc6_p: 'A private vault, with an unlock code, to store your most confidential photos — subfolders included. A nice bonus: it has its own tag tree as well.',
      svc_pill: '01 · The pillar', svc1_t: '<em>7-level</em> viewer', svc1_lead: 'A wide range of views tailored to your needs for fast tagging…',
      xmp_eyebrow: 'Import-Export', xmp_title: 'A focus for collectors and meticulous photographers.',
      xmp_lead: 'Make the most of LiberTag\u2019s highly compatible labels. <br />Import your photos and tag them at top speed. <br />Then export them to your favorite editing software: you\u2019ve just saved precious time mass-labeling your shots.',
      xmp_cap: 'The export screen — resolution and tag encoding, in two gestures.',
      xmp_exp_eye: 'What gets exported', xmp_exp_h: 'Three standard XMP fields',
      xmp_f1_p: 'A flat list of tag names — read by every app: Lightroom, Photos, Finder, Windows Explorer, digiKam…',
      xmp_f2_p: 'The full hierarchical path, from parent to child: <span class="kpath">Parent|Child</span>.',
      xmp_f3_p: 'The 1-to-5-star rating — the universal standard for appreciation (0 = absent from the file).',
      xmp_modes_eye: 'Output modes', xmp_m1_t: 'Sidecar',
      xmp_m1_p: 'An <span class="em">.xmp</span> file placed next to the image, identical to what Lightroom generates. Compatible with every format — JPG, PNG, HEIC, WEBP, TIFF, RAW.',
      xmp_m2_t: 'Embedded in the photo',
      xmp_m2_p: 'The XMP is written into the file itself. A <span class="em">JPEG</span> is patched losslessly; other formats are re-encoded as JPEG at quality 92.',
      xmp_m3_t: 'Bulk file renaming', xmp_bonus: 'Bonus',
      xmp_m3_p: 'Rename all your exports in one go from a template — sequence, date, dimensions… Your shots arrive already cleanly named.',
      price_eyebrow: 'Launch offer', price_title: 'A lifetime license for true peace of mind',
      price_lead: 'No subscription, never any ads, and an absurdly low price for the first wave of curious early birds.',
      plan1_t: 'Freemium', plan1_tag: 'Tag for free', plan1_price: '$0', plan1_per: '',
      plan1_f1: 'All features WITHOUT ads', plan1_f2: 'Unlimited in time', plan1_f3: 'Limit of 20 tags', plan1_f4: 'Limit of 20 photos per export', plan1_cta: 'Download',
      plan2_flag: 'Launch offer', plan2_t: 'Premium', plan2_tag: 'Unlimited tag collections', plan2_price: '$4.99', plan2_per: 'forever',
      plan2_f1: 'All features', plan2_f2: 'Lifetime license', plan2_f3: 'Free updates', plan2_f4: 'Zero ads', plan2_cta: 'Download',
      faq_eyebrow: 'Frequently asked', faq_title: 'Everything you need to know',
      cta_title: 'Thousands of photos.<br /><em>Zero chaos.</em>',
      cta_lead: 'Download LiberTag<br>and showcase your photos in the albums they deserve.',
      foot_tagline: 'The app that frees<br>your photos from oblivion',
      foot_product: 'Product', foot_plan: 'Sitemap', foot_company: 'About', foot_dl: 'Download',
      foot_privacy: 'Privacy', foot_terms: 'Terms', foot_contact: 'Contact',
      foot_copy: '© 2026 <a href="https://www.fluxart.fr">FluXart</a> — Crafted with care for Android.', foot_made: 'Crafted with care for Android.',
      faq: [
        ['Does LiberTag move my photos?', 'No. LiberTag reads your photos right where they already are — camera roll, albums, folders. Your images are only ever copied or moved when you choose to, inside the app.'],
        ['Are my photos sent to a server?', 'LiberTag runs no external server. Everything stays on your phone.<br />You\u2019ll be notified later on if we ever add a cloud backup system.'],
        ['What is a \u201Cparent tag\u201D?', 'It\u2019s a tag that groups others together, which you\u2019re free to create or not.<br />\u201CFrance\u201D and \u201CItaly\u201D would be child tags of the parent tag \u201CEurope\u201D, for example.<br />These are what we call \u201Chierarchical tags\u201D, used in software like Lightroom.<br />They allow a broader search as you move up the hierarchy.<br />But most software doesn\u2019t handle this hierarchy, so you\u2019ll export \u201CFrance\u201D, \u201CItaly\u201D and \u201CEurope\u201D as 3 independent tags on the photos concerned.<br />When you assign a child tag, LiberTag also automatically applies to the image the parent tags you created for that purpose.'],
        ['Is automatic tagging reliable?', 'The AI offers suggestions under each photo; it\u2019s up to you to confirm them or not.<br />Result quality improves as more photos are tagged and indexed by the AI. And you have access to that AI index to remove images irrelevant to its learning.'],
        ['How did LiberTag come about? Is it a corporate project?', 'Not at all. LiberTag was born from a real need of its founder, who had been storing nearly 10,000 family photos for some twenty years without being able to sort or find them properly.<br /><br />Until now, no software or app allowed precise, fast indexing of thousands of images without it taking weeks — and mental exhaustion along the way.<br />Hence the idea of using the phone\u2019s quick \u201Ctapping\u201D to dramatically speed up cataloging.<br />No app today rivals LiberTag when it comes to mass photo indexing.'],
        ['Which platforms is it available on?', 'LiberTag is available on Android, via Google Play. An iOS version is being considered.'],
      ],
    },
  };

  /* ---------------------------------------------------- warm photo tones */
  const TONES = [
    ['#7c6750', '#2c2118'], ['#8f7556', '#352720'], ['#5b4f3e', '#241c14'],
    ['#a07e54', '#43301f'], ['#6d5e49', '#2a211a'], ['#9a7a52', '#3c2a1c'],
    ['#544a3a', '#221b14'], ['#b08a5a', '#523a23'], ['#7a6a52', '#312619'],
    ['#8a6e4a', '#392818'], ['#655643', '#272015'], ['#a98f63', '#4b3722'],
  ];
  function grad(i) { const t = TONES[i % TONES.length]; return `linear-gradient(150deg, ${t[0]}, ${t[1]})`; }

  function fillGrid(el, count, opts) {
    opts = opts || {};
    el.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const d = document.createElement('div');
      d.className = 'tile' + (i % 7 === 2 ? ' star' : '') + (i === (opts.framed ?? -1) ? ' framed' : '');
      d.style.background = grad(i + (opts.seed || 0));
      el.appendChild(d);
    }
  }

  /* ---------------------------------------------------- editag chips + cats */
  const CATCOL = { personne: '#CB8497', lieu: '#83ABA1', even: '#C68C5E', theme: '#AE92B8', divers: '#9E9E8F' };
  function chip(label, col, applied) {
    const s = document.createElement('span');
    s.style.cssText = `display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;font-size:12.5px;font-weight:600;` +
      (applied
        ? `background:${col};color:#1c1409;`
        : `background:${col}22;color:${col};border:1px dashed ${col}66;`);
    if (applied) { s.innerHTML = `<svg width="12" height="12" style="display:block"><use href="#ic-check"/></svg>`; }
    s.appendChild(document.createTextNode(label));
    return s;
  }

  function buildPhoneContent(L) {
    document.querySelectorAll('[data-grid]').forEach((el) => {
      const k = el.getAttribute('data-grid');
      fillGrid(el, 12, { seed: k === 'gallery2' ? 4 : 0, framed: k === 'gallery2' ? 7 : -1 });
    });
    const ai = document.querySelector('[data-chips="ai"]');
    if (ai) { ai.innerHTML = ''; [['William', CATCOL.personne], ['Tel Aviv', CATCOL.lieu], ['Été 2024', CATCOL.even]].forEach(([t, c]) => ai.appendChild(chip(t, c, false))); }
    const posed = document.querySelector('[data-chips="posed"]');
    if (posed) { posed.innerHTML = ''; [['Famille Halimi', CATCOL.personne], ['Argentique', CATCOL.theme]].forEach(([t, c]) => posed.appendChild(chip(t, c, true))); }
    const cats = document.querySelector('[data-cats="mini"]');
    if (cats) {
      cats.innerHTML = '';
      const rows = [['ic-person', 'cat1_t', CATCOL.personne, true], ['ic-pin', 'cat2_t', CATCOL.lieu, false], ['ic-cal', 'cat3_t', CATCOL.even, false]];
      rows.forEach(([ic, key, col, on]) => {
        const r = document.createElement('div');
        r.style.cssText = `display:flex;align-items:center;gap:12px;padding:11px 13px;border-radius:13px;` +
          (on ? `background:${col}1f;border:2px solid ${col};` : `background:#1C1512;border:1px solid rgba(239,227,210,.09);`);
        r.innerHTML = `<span style="width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;${on ? `background:${col};color:#1c1409` : `background:${col}26;color:${col}`}"><svg width="20" height="20"><use href="#${ic}"/></svg></span>` +
          `<span style="flex:1;font-weight:600;font-size:15px;color:#EFE3D2">${L[key]}</span>` +
          (on ? `<span style="color:${col}"><svg width="18" height="18"><use href="#ic-check"/></svg></span>` : '');
        cats.appendChild(r);
      });
    }
  }

  /* ---------------------------------------------------- FAQ */
  function nbspGuillemets(s) {
    // keep « and » glued to their adjacent word so they never wrap alone
    return s.replace(/«\s*/g, '«\u00a0').replace(/\s*»/g, '\u00a0»');
  }

  function buildFaq(L) {
    const list = document.getElementById('faqList');
    if (!list) return;
    list.innerHTML = '';
    L.faq.forEach(([q, a]) => {
      q = nbspGuillemets(q); a = nbspGuillemets(a);
      const item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML =
        `<button class="faq-q"><span>${q}</span><span class="pm"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="6" x2="12" y2="18"/><line x1="6" y1="12" x2="18" y2="12"/></svg></span></button>` +
        `<div class="faq-a"><div class="faq-a-inner">${a}</div></div>`;
      const btn = item.querySelector('.faq-q');
      const ans = item.querySelector('.faq-a');
      btn.addEventListener('click', () => {
        const open = item.classList.contains('open');
        list.querySelectorAll('.faq-item.open').forEach((o) => { o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
        if (!open) { item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
      });
      list.appendChild(item);
    });
  }

  /* ---------------------------------------------------- apply language */
  let currentLang = localStorage.getItem('lt_lang') || 'fr';
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lt_lang', lang);
    const L = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (L[k] != null) el.textContent = L[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      if (L[k] != null) el.innerHTML = L[k];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const k = el.getAttribute('data-i18n-aria');
      if (L[k] != null) el.setAttribute('aria-label', L[k]);
    });
    document.querySelectorAll('.lang-toggle button').forEach((b) => b.classList.toggle('on', b.getAttribute('data-lang') === lang));
    buildPhoneContent(L);
    buildFaq(L);
  }

  /* ---------------------------------------------------- nav + interactions */
  function initNav() {
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.classList.remove('open')));

    document.querySelectorAll('.lang-toggle button').forEach((b) =>
      b.addEventListener('click', () => applyLang(b.getAttribute('data-lang'))));
  }

  /* ---------------------------------------------------- reveal on scroll */
  function initReveal() {
    const els = Array.from(document.querySelectorAll('.reveal'));
    document.documentElement.classList.add('js-reveal');
    const reveal = (e) => e.classList.add('in');
    // reveal anything already within (or above) the viewport
    const checkVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((e) => { if (!e.classList.contains('in') && e.getBoundingClientRect().top < vh * 0.92) reveal(e); });
    };
    if (!('IntersectionObserver' in window)) { els.forEach(reveal); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach((e) => io.observe(e));
    // safety nets: rect check now + on scroll, and a hard fallback so nothing ever stays hidden
    checkVisible();
    window.addEventListener('scroll', checkVisible, { passive: true });
    requestAnimationFrame(checkVisible);
    setTimeout(() => els.forEach(reveal), 1500);
  }

  /* ---------------------------------------------------- tag-attribution scene (manège) */
  function initTagScene() {
    const stage = document.querySelector('.ts-stage');
    if (!stage) return;
    const shots = Array.from(stage.querySelectorAll('.ts-shot'));
    const dots = Array.from(stage.querySelectorAll('.ts-dots i'));
    const n = shots.length;
    if (!n) return;
    let active = 0;
    const sp = () => Math.min(280, Math.max(150, window.innerWidth * 0.2));
    function layout() {
      const step = sp();
      shots.forEach((s, k) => {
        let rel = ((k - active) % n + n) % n;
        if (rel > n / 2) rel -= n;
        const ax = Math.abs(rel);
        const vis = ax <= 2;
        const x = rel * step;
        const sc = Math.max(.55, 1 - ax * 0.16);
        const ry = Math.max(-32, Math.min(32, -rel * 22));
        s.style.transform = `translate(-50%, -50%) translateX(${x}px) rotateY(${ry}deg) scale(${sc})`;
        const print = s.querySelector('.ts-print');
        if (print) print.style.filter = ax === 0 ? 'none' : `blur(${Math.min(9, ax * 3.4)}px)`;
        s.style.opacity = vis ? (ax === 0 ? 1 : ax === 1 ? .82 : .42) : 0;
        s.style.zIndex = 20 - ax;
        s.classList.toggle('on', ax === 0);
        s.classList.toggle('tagged', vis && rel <= 0);
      });
      dots.forEach((d, k) => d.classList.toggle('on', k === active));
    }
    layout();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer;
    const next = () => { active = (active + 1) % n; layout(); };
    const start = () => { timer = setInterval(next, 3000); };
    start();
    window.addEventListener('resize', layout);
    document.addEventListener('visibilitychange', () => {
      clearInterval(timer);
      if (!document.hidden) start();
    });
  }

  /* ---------------------------------------------------- boot */
  function boot() {
    initNav();
    applyLang(currentLang);
    initReveal();
    initTagScene();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // expose for tweaks
  window.LTSite = { applyLang, fillGrid };
})();
