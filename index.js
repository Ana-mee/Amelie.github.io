window.addEventListener('load', () => {
    const character = document.getElementById('character');
    const dress = document.getElementById('dress');
    const shoes = document.getElementById('shoes');
    const hat = document.getElementById('hat');

    dress.addEventListener('click', () => {
        character.style.backgroundImage = "url('dress.png')";
    });

    shoes.addEventListener('click', () => {
        character.style.backgroundImage = "url('shoes.png')";
    });

    hat.addEventListener('click', () => {
        character.style.backgroundImage = "url('hat.png')";
    });
});