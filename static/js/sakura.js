// Sakura (Cherry Blossom) falling animation
(function() {
    const sakuraContainer = document.createElement('div');
    sakuraContainer.className = 'sakura-container';
    document.body.appendChild(sakuraContainer);

    // Sakura petal configuration
    const petalCount = 30; // Number of petals
    const colors = [
        'rgba(255, 182, 193, 0.8)', // light pink
        'rgba(255, 192, 203, 0.8)', // pink
        'rgba(255, 228, 225, 0.8)', // misty rose
        'rgba(255, 218, 224, 0.8)', // lighter pink
        'rgba(255, 240, 245, 0.8)'  // lavender blush
    ];

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';

        // Random properties
        const size = Math.random() * 10 + 8; // 8-18px
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 10 + 15; // 15-25 seconds
        const delay = Math.random() * 5; // 0-5 seconds delay
        const swingAmount = Math.random() * 100 + 50; // 50-150px horizontal swing
        const color = colors[Math.floor(Math.random() * colors.length)];

        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${startX}px`;
        petal.style.backgroundColor = color;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        petal.style.setProperty('--swing-amount', `${swingAmount}px`);

        sakuraContainer.appendChild(petal);

        // Remove and recreate petal after animation
        setTimeout(() => {
            petal.remove();
            createPetal();
        }, (duration + delay) * 1000);
    }

    // Create initial petals
    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => createPetal(), i * 200);
    }

    // Adjust on window resize
    window.addEventListener('resize', () => {
        const petals = document.querySelectorAll('.sakura-petal');
        petals.forEach(petal => {
            const currentLeft = parseInt(petal.style.left);
            if (currentLeft > window.innerWidth) {
                petal.style.left = `${window.innerWidth - 20}px`;
            }
        });
    });
})();
