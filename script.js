// Array of 39 local image URLs from the "img" folder
const photos = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png',
    'img/8.png',
    'img/9.png',
    'img/10.png',
    'img/11.png',
    'img/12.png',
    'img/13.png',
    'img/14.png',
    'img/15.png',
    'img/16.png',
    'img/17.png',
    'img/18.png',
    'img/19.png',
    'img/20.png',
    'img/21.png',
    'img/22.png',
    'img/23.png',
    'img/24.png',
    'img/25.png',
    'img/26.png',
    'img/27.png',
    'img/28.png',
    'img/29.png',
    'img/30.png',
    'img/31.png',
    'img/32.png',
    'img/33.png',
    'img/34.png',
    'img/35.png',
    'img/36.png',
    'img/37.png',
    'img/38.png',
    'img/39.png'
  ];
  
  let currentIndex = 0;
  const photoElement = document.getElementById('photo');
  
  // Function to display the current photo with flip animation
  function showPhoto(index) {
    // Add the turning class to start the flip
    photoElement.classList.add('turning');
    
    // Wait for half the transition duration to swap the image
    setTimeout(() => {
      photoElement.src = photos[index];
    }, 300);
  
    // Remove the turning class after the flip is complete
    setTimeout(() => {
      photoElement.classList.remove('turning');
    }, 600);
  }
  
  // Previous button handler
  function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto(currentIndex);
  }
  
  // Next button handler
  function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
  }
  
  // Initial display
  showPhoto(currentIndex);
  
  // Optional: add keyboard navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      prevPhoto();
    } else if (event.key === 'ArrowRight') {
      nextPhoto();
    }
  });

  function showPhoto(index) {
    photoElement.classList.add('turning');
  
    setTimeout(() => {
      photoElement.src = photos[index];
      // Set size each time (not necessary if already set)
      photoElement.style.width = '600px';
      photoElement.style.height = '690px';
    }, 300);
  
    setTimeout(() => {
      photoElement.classList.remove('turning');
    }, 600);
  }
  
  const bookContainer = document.querySelector('.book-container');

bookContainer.style.display = 'flex';
bookContainer.style.flexDirection = 'column';
bookContainer.style.justifyContent = 'center';
bookContainer.style.alignItems = 'center';
