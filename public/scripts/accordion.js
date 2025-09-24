const menuButtons = document.querySelectorAll('.menu-option');
    const contentBodies = document.querySelectorAll('.accordion-body');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            const currentActiveContent = document.querySelector('.accordion-body.active');
            const targetContent = document.querySelector(`[data-content="${targetTab}"]`);

            if (currentActiveContent && currentActiveContent !== targetContent) {
                currentActiveContent.classList.remove('active');
                currentActiveContent.classList.add('out');
				setTimeout(()=>{
					currentActiveContent.classList.remove('out')
					currentActiveContent.classList.add('hidden');
				}, 500)
            }

            // Eliminar la clase 'active' de todos los botones
            menuButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase 'active' al botón clickeado
            button.classList.add('active');

            if (targetContent && !targetContent.classList.contains('active')) {
                // Si el contenido ya está activo, no hagas nada
                // Si no, quita la clase 'hidden' y añade 'active' para animar
                setTimeout(() => {
					targetContent.classList.remove('hidden');
                    targetContent.classList.add('active');
                }, 501); // Pequeño retraso para asegurar que la clase 'hidden' se aplique antes
            }
        });
    });