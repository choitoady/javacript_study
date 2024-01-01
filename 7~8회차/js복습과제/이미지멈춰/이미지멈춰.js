let currentIndex = 0;
let isAutoPlaying = true;
let intervalId;

function toggleAutoChange() {
    if (isAutoPlaying) {
        stopAutoChange();
    } else {
        startAutoChange();
    }
}

function startAutoChange() {
    intervalId = setInterval(changeImage, 1000); // 1초마다 이미지 변경
    isAutoPlaying = true;
}

function stopAutoChange() {
    clearInterval(intervalId); // 이미지 변경 멈추기
    isAutoPlaying = false;
}

function changeImage() {
    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.getElementsByTagName('img');

    // 현재 이미지 숨기기
    images[currentIndex].style.display = 'none';

    // 다음 이미지 보이기
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

// 페이지 로드 후 자동으로 이미지 변경 시작
startAutoChange();