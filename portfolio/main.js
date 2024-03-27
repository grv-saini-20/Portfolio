document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar-link');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function updateProgressBar(progressBar, targetValue, duration) {
    const startValue = parseFloat(progressBar.value);
    const increment = (targetValue - startValue) / (duration / 100); // Calculate increment per 100ms

    let currentValue = startValue;

    const updateProgress = () => {
        currentValue += increment;
        progressBar.value = currentValue.toFixed(2); // Ensure value is rounded

        if (currentValue < targetValue) {
            requestAnimationFrame(updateProgress);
        }
    };

    updateProgress();
}



