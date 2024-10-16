const cards = document.querySelectorAll('.card');

// 각 카드에 마우스 이벤트 추가
cards.forEach(card => {
    // 마우스를 올렸을 때 실행
    card.addEventListener('mouseenter', () => {
        const img = card.querySelector('img');
        const texts = card.querySelectorAll('h3, p');

        // 이미지 이동 애니메이션
        img.style.transform = 'translateY(-100%)';

        // 텍스트 보여주기
        texts.forEach(text => {
            text.style.opacity = '1';
        });
    });

    // 마우스를 뗐을 때 실행
    card.addEventListener('mouseleave', () => {
        const img = card.querySelector('img');
        const texts = card.querySelectorAll('h3, p');

        // 이미지를 원래 위치로
        img.style.transform = 'translateY(0)';

        // 텍스트 숨기기
        texts.forEach(text => {
            text.style.opacity = '0';
        });
    });
});