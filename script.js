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

document.querySelectorAll('.tabs li').forEach(tab => {
  tab.addEventListener('click', () => {
    // 1. Encontra o container pai deste grupo específico
    const container = tab.closest('.tab-container');
    
    // 2. Remove 'is-active' apenas das abas DESTE container
    container.querySelectorAll('.tabs li').forEach(item => {
      item.classList.remove('is-active');
    });
    
    // 3. Adiciona 'is-active' na aba clicada
    tab.classList.add('is-active');

    // 4. Esconde todos os conteúdos DESTE container
    container.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.add('is-hidden');
    });

    // 5. Mostra o conteúdo correspondente pelo ID
    const targetId = tab.dataset.tab;
    container.querySelector(`#${targetId}`).classList.remove('is-hidden');
  });
});