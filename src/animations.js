function showLoadingAnimation() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block'; // Show loader
}

function hideLoadingAnimation() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide loader
}

export { showLoadingAnimation, hideLoadingAnimation };
