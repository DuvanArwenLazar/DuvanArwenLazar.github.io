ScrollReveal().reveal('.navbar', { delay: 100 });
ScrollReveal().reveal('.text', { delay: 800 });
ScrollReveal().reveal('.image', { delay: 900 });
ScrollReveal().reveal('.first-title', { delay: 600 });
ScrollReveal().reveal('.academic', { delay: 700 });
ScrollReveal().reveal('.second-title', { delay: 600 });
ScrollReveal().reveal('.experience-container', { delay: 700 });
ScrollReveal().reveal('.third-title', { delay: 600 });
ScrollReveal().reveal('.images', { delay: 700 });
ScrollReveal().reveal('.footer', { delay: 800 });

const elements = document.getElementsByClassName("iterator");
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    console.log(element);
    ScrollReveal().reveal(element, { delay: 100 + (index * 250) / 2 });
}