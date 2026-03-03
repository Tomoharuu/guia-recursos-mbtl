document.addEventListener('DOMContentLoaded', () => {
  // Funções para abrir e fechar modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Botões que abrem modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Elementos que fecham modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});

let switchTabs = (tab) => {
	// get all tab list items and remove the is-active class
	let tabs = document.querySelectorAll(".tabs li");
	tabs.forEach(t => {t.classList.remove("is-active");});
	// set is-active on the passed tab element
	tab.classList.add("is-active");
	// get all content elements and remove is-active
	let contents = document.querySelectorAll("#tab-content .content");
	contents.forEach(t => {t.classList.remove("is-active");});
	// get the data-index data attribute from the selected tab (passed here)
	let activeTabIndex = tab.getAttribute("data-index");
	// get the corresonding tab content via the data-content attribute
	let activeContent = document.querySelector(`[data-content='${activeTabIndex}']`);
	// set is-active on the corresponding tab content
	activeContent.classList.add("is-active");
}