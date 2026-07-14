/* ================================================
   JLEvenement — Logique du panier
   Stockage : localStorage
   Affichage des prix en euros
================================================ */

(function() {
  'use strict';

  var PANIER_KEY = 'jlevenement_panier';

  // === PANIER ===
  function getPanier() {
    try {
      var raw = localStorage.getItem(PANIER_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch(e) { return []; }
  }

  function savePanier(panier) {
    try {
      localStorage.setItem(PANIER_KEY, JSON.stringify(panier));
    } catch(e) {}
  }

  function formatPrix(n) {
    return Math.round(n) + ' €';
  }

  function majBadge() {
    var badge = document.getElementById('badge-panier');
    if (!badge) return;
    var panier = getPanier();
    var totalQte = 0;
    for (var i = 0; i < panier.length; i++) { totalQte += panier[i].qte; }
    badge.textContent = totalQte;
    badge.style.display = '';
  }

  function majPiedPanier() {
    var pied = document.getElementById('panier-pied');
    var vide = document.getElementById('panier-vide');
    var totalEl = document.getElementById('panier-total');
    var detailEl = document.getElementById('panier-detail');
    if (!pied || !totalEl || !detailEl) return;
    var panier = getPanier();
    if (panier.length === 0) {
      if (vide) vide.style.display = '';
      pied.style.display = 'none';
      detailEl.innerHTML = '';
      totalEl.textContent = '0 €';
      return;
    }
    if (vide) vide.style.display = 'none';
    pied.style.display = '';

    var detailHtml = '';
    var total = 0;
    for (var i = 0; i < panier.length; i++) {
      var item = panier[i];
      var sousTotal = item.prix * item.qte;
      total += sousTotal;
      detailHtml += '<div class="panier-detail-item">' + item.nom + ' — ' + item.qte + ' × ' + formatPrix(item.prix) + ' = ' + formatPrix(sousTotal) + '</div>';
    }

    detailEl.innerHTML = detailHtml;
    totalEl.textContent = formatPrix(total);
  }

  function renderPanier() {
    var corps = document.getElementById('panier-corps');
    if (!corps) return;
    var panier = getPanier();
    var html = '';

    if (panier.length === 0) {
      html = '<div class="panier-vide-message"><p>Votre panier est vide<\/p></div>';
    } else {
      for (var i = 0; i < panier.length; i++) {
        var item = panier[i];
        html += '<div class="panier-item" data-id="' + item.id + '">' +
          '<div class="panier-item-img"><img src="' + item.image + '" alt="' + item.nom + '"></div>' +
          '<div class="panier-item-info">' +
            '<div class="panier-item-nom">' + item.nom + '<\/div>' +
            '<div class="panier-item-prix">' + formatPrix(item.prix) + ' / unité<\/div>' +
          '<\/div>' +
          '<div class="panier-item-qte">' +
            '<button class="qte-btn" onclick="Cart.retirer(' + item.id + ')" aria-label="Diminuer">\u2212<\/button>' +
            '<span>' + item.qte + '<\/span>' +
            '<button class="qte-btn" onclick="Cart.ajouter(' + item.id + ')" aria-label="Augmenter">+<\/button>' +
          '<\/div>' +
          '<button class="panier-item-suppr" onclick="Cart.supprimer(' + item.id + ')" aria-label="Supprimer">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"><\/path><\/svg>' +
          '<\/button>' +
        '<\/div>';
      }
    }

    // Ins\u00e9rer les items dans le conteneur
    while (corps.firstChild) { corps.removeChild(corps.firstChild); }
    var temp = document.createElement('div');
    temp.innerHTML = html;
    while (temp.firstChild) { corps.appendChild(temp.firstChild); }

    majBadge();
    majPiedPanier();
  }

  var Cart = {
    ajouter: function(id) {
      var produit = null;
      for (var i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === id) { produit = PRODUCTS[i]; break; }
      }
      if (!produit) return;
      var panier = getPanier();
      var idx = -1;
      for (var j = 0; j < panier.length; j++) {
        if (panier[j].id === id) { idx = j; break; }
      }
      if (idx > -1) {
        panier[idx].qte++;
      } else {
        panier.push({ id: produit.id, nom: produit.nom, prix: produit.prix, image: produit.image, qte: 1 });
      }
      savePanier(panier);
      renderPanier();
    },

    retirer: function(id) {
      var panier = getPanier();
      var idx = -1;
      for (var j = 0; j < panier.length; j++) {
        if (panier[j].id === id) { idx = j; break; }
      }
      if (idx === -1) return;
      if (panier[idx].qte > 1) {
        panier[idx].qte--;
      } else {
        panier.splice(idx, 1);
      }
      savePanier(panier);
      renderPanier();
    },

    supprimer: function(id) {
      var panier = getPanier();
      for (var j = panier.length - 1; j >= 0; j--) {
        if (panier[j].id === id) panier.splice(j, 1);
      }
      savePanier(panier);
      renderPanier();
    },

    vider: function() {
      savePanier([]);
      renderPanier();
    },

    obtenirPanier: function() {
      return getPanier();
    }
  };

  window.Cart = Cart;

  // === BOUTON DEVIS DANS LE PANNEAU PANIER ===
  window.addEventListener('DOMContentLoaded', function() {
    var btnDevis = document.getElementById('btn-devis-panier');
    var msgField = document.getElementById('contact-message');

    if (btnDevis) {
      btnDevis.addEventListener('click', function() {
        var panier = getPanier();
        if (panier.length === 0) {
          alert('Votre panier est vide.');
          return;
        }
        var lignes = [];
        for (var i = 0; i < panier.length; i++) {
          var item = panier[i];
          lignes.push('- ' + item.nom + ' x' + item.qte + ' : ' + formatPrix(item.prix * item.qte));
        }
        var total = 0;
        for (var j = 0; j < panier.length; j++) { total += panier[j].prix * panier[j].qte; }
        var msg = '[Panier - JLEvenement]\n\n' + lignes.join('\n') + '\n\nTotal : ' + formatPrix(total) + '\n\nMerci de me faire parvenir un devis pour ces prestations.';
        if (msgField) {
          msgField.value = msg;
          window.location.href = 'index.html#contact';
        }
        fermerPanier();
      });
    }
  });

  // === OUVERTURE / FERMETURE DU PANNEAU PANIER ===
  var panneauPanier = document.getElementById('cart-panel');
  var btnPanier = document.getElementById('btn-panier');
  var overlay = document.getElementById('overlay');
  var btnFermer = document.getElementById('btn-fermer-panier');

  function ouvrirPanier() {
    if (panneauPanier) panneauPanier.classList.add('ouvert');
    if (overlay) overlay.classList.add('actif');
    document.body.style.overflow = 'hidden';
  }

  function fermerPanier() {
    if (panneauPanier) panneauPanier.classList.remove('ouvert');
    if (overlay) overlay.classList.remove('actif');
    document.body.style.overflow = '';
  }

  window.ouvrirPanier = ouvrirPanier;
  window.fermerPanier = fermerPanier;

  if (btnPanier) {
    btnPanier.addEventListener('click', function() {
      if (panneauPanier && panneauPanier.classList.contains('ouvert')) {
        fermerPanier();
      } else {
        ouvrirPanier();
      }
    });
  }

  if (btnFermer) {
    btnFermer.addEventListener('click', fermerPanier);
  }

  if (overlay) {
    overlay.addEventListener('click', fermerPanier);
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') fermerPanier();
  });

  // Initialisation au chargement
  renderPanier();

})();