(function() {
  'use strict';

  function slugify(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/[-\s]+/g, '-');
  }

  function formatPrix(n) {
    return Math.round(n) + ' €';
  }

  var body = document.body;
  var slug = body.getAttribute('data-product-slug') || '';
  var params = new URLSearchParams(window.location.search);
  var requestedId = parseInt(params.get('id'), 10);

  var produit = null;
  if (window.PRODUCTS && window.PRODUCTS.length) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      var candidate = PRODUCTS[i];
      if (slug && slugify(candidate.nom) === slug) {
        produit = candidate;
        break;
      }
      if (Number.isFinite(requestedId) && candidate.id === requestedId) {
        produit = candidate;
        break;
      }
    }
  }

  var nomEl = document.getElementById('fiche-nom');
  var descEl = document.getElementById('fiche-description');
  var prixEl = document.getElementById('fiche-prix');
  var categorieEl = document.getElementById('fiche-categorie');
  var idEl = document.getElementById('fiche-id');
  var imageEl = document.getElementById('fiche-image');
  var btn = document.getElementById('ajout-panier-btn');

  if (!nomEl || !descEl || !prixEl || !categorieEl || !idEl || !imageEl || !btn) return;

  if (!produit) {
    nomEl.textContent = 'Produit non trouvé';
    descEl.textContent = 'Cette fiche n’a pas encore de produit associé. Elle est prête pour un futur import depuis Google Sheets.';
    prixEl.textContent = 'À venir';
    categorieEl.textContent = 'Produit';
    idEl.textContent = 'ID : -';
    imageEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#888;">Image à venir</div>';
    btn.style.display = 'none';
    return;
  }

  categorieEl.textContent = produit.categorie;
  nomEl.textContent = produit.nom;
  descEl.textContent = produit.description;
  prixEl.textContent = formatPrix(produit.prix);
  idEl.textContent = 'ID : ' + produit.id;
  imageEl.innerHTML = '<img src="' + produit.image + '" alt="' + produit.nom + '" loading="lazy">';

  btn.addEventListener('click', function() {
    if (window.Cart && typeof window.Cart.ajouter === 'function') {
      window.Cart.ajouter(produit.id);
    }
  });
})();
