document.addEventListener('DOMContentLoaded', () => {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name) || `/P3/m.html?fullName=John%20Doe`;
    }

    const fullNameFromDonation = getUrlParameter('fullName');
    const fullNameElement = document.getElementById('donorFullName');

    if (fullNameElement) {
        fullNameElement.textContent = fullNameFromDonation || 'Anonymous Donor';
    }
});

