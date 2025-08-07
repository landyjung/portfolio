const link=()=>{
    //모든 a태그 중에서 href 속성값이 "#"으로 시작하는 요소 선택
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

export default link;