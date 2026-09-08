/* =========================================================
   INTELICONNECT AFRICA — BLOG
   Comportements JS partagés : bouton "Retour en haut" et
   filtre de catégories sur la page de listing du blog.
   ========================================================= */
(function () {

    // ---------- Retour en haut ----------
    var toTop = document.getElementById('blog-to-top');
    if (toTop) {
        function toggleToTop() {
            if (window.scrollY > 400) {
                toTop.classList.add('blog-visible');
            } else {
                toTop.classList.remove('blog-visible');
            }
        }
        window.addEventListener('scroll', toggleToTop, { passive: true });
        toggleToTop();

        toTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---------- Filtre de catégories (page blog.html) ----------
    var filterButtons = document.querySelectorAll('.blog-filter-btn');
    var cards = document.querySelectorAll('[data-category]');

    if (filterButtons.length && cards.length) {
        filterButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var cat = btn.getAttribute('data-filter');

                filterButtons.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');

                cards.forEach(function (card) {
                    var show = (cat === 'tous' || card.getAttribute('data-category') === cat);
                    card.closest('.blog-card-col').style.display = show ? '' : 'none';
                });
            });
        });
    }

})();
