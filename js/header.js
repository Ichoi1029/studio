const toggleBtn = document.querySelector('.gnb-toggle-btn');
const gnb = document.querySelector('.gnb');

toggleBtn.addEventListener('click', () => {
    gnb.classList.toggle('active');
});
