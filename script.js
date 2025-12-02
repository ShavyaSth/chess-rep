// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Difficulty button handlers
document.getElementById('easy-btn').addEventListener('click', function() {
    console.log('Easy difficulty selected');
    alert('Easy mode selected!');
});

document.getElementById('medium-btn').addEventListener('click', function() {
    console.log('Medium difficulty selected');
    alert('Medium mode selected!');
});

document.getElementById('hard-btn').addEventListener('click', function() {
    console.log('Hard difficulty selected');
    alert('Hard mode selected!');
});
