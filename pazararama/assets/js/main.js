// Mobile Nav Menu Start
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenuWrapper = document.querySelector('.navigation--inline-wrapper');

if (mobileMenuIcon && mobileMenuWrapper) {
    mobileMenuIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenuWrapper.classList.toggle('active');
        if (!mobileMenuWrapper.classList.contains('visible')) {
            mobileMenuWrapper.classList.add('visible');
        }
        else {
            setTimeout(() => {
                mobileMenuWrapper.classList.remove('visible');
            }, 300);
        }
    })
}
// Mobile Nav Menu End

// Footer Year Start
const footerYear = document.getElementById('footer-year');
footerYear.innerText = new Date().getFullYear();
// Footer Year End