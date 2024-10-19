// script.js
const storyThumbnails = document.querySelectorAll('.story');
const storyModal = document.getElementById('storyModal');
const storyImage = document.getElementById('storyImage');
const closeStoryBtn = document.getElementById('closeStory');
const nextStoryBtn = document.getElementById('nextStory');
const prevStoryBtn = document.getElementById('prevStory');
const progressBar = document.querySelector('.progress');

let currentStoryIndex = 0;
const stories = [
    "img/radwa.jpg", // استبدل هذه بمسارات القصص الفعلية
    "img/youssef.png",   
    'img/salma.jpg',
   
   
  

];

// فتح القصة عند النقر على صورة مصغرة
storyThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        currentStoryIndex = parseInt(this.getAttribute('data-story')) - 1;
        openStory(currentStoryIndex);
    });
});

// إغلاق القصة
closeStoryBtn.addEventListener('click', closeStory);
nextStoryBtn.addEventListener('click', () => {
    currentStoryIndex = (currentStoryIndex + 1) % stories.length;
    openStory(currentStoryIndex);
});
prevStoryBtn.addEventListener('click', () => {
    currentStoryIndex = (currentStoryIndex - 1 + stories.length) % stories.length;
    openStory(currentStoryIndex);
});

function openStory(index) {
    storyImage.src = stories[index];
    storyModal.style.display = 'flex';
    progressBar.style.width = '0%';

    // تشغيل العداد الزمني للقصة
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 0);

    // الانتقال للقصة التالية بعد 5 ثوانٍ
    setTimeout(() => {
        nextStoryBtn.click();
    }, 5000);
}

function closeStory() {
    storyModal.style.display = 'none';
    progressBar.style.width = '0%';
}

const toggler = document.getElementById('navbar-toggler');
const menu = document.getElementById('navbar-menu');

toggler.addEventListener('click', function() {
  menu.classList.toggle('active');
});
