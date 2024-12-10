const images = [
  {
    src: "images/campo-cafe.avif",
    text: "Somos um café aconchegante que nasceu no coração de um bairro árabe de Nova York. Fundado por um casal apaixonado por cafés e pela cultura libanesa, nosso espaço carrega as memórias e o espírito acolhedor das antigas cafeterias de Beirute. Com suas paredes adornadas por artes tradicionais e aromas exóticos que lembram as ruas movimentadas de Hamra, cada visita é uma viagem a um mundo onde histórias são compartilhadas e amizades florescem.",
    title: "Quem somos?",
  },
  {
    src: "images/valores.jpg",
    text: "Nossos valores são intrinsecamente ligados ao compromisso com o meio ambiente e à sustentabilidade. Em 2020, iniciamos um projeto chamado 'Raízes Verdes', em que destinamos parte de nossos lucros para a plantação de árvores em regiões áridas do Oriente Médio. Esta iniciativa não só ajuda a combater a desertificação, mas também apoia comunidades locais que dependem dessas árvores para sustento e sombra.",
    title: "Nosso compromisso",
  },
  {
    src: "images/graos.png",
    text: "Nossos grãos exclusivos são o coração e a alma de nossa cafeteria. Cultivados em plantações familiares no alto das montanhas do Líbano, esses grãos são considerados uma joia rara por sua origem única e terroir excepcional. Colhidos à mão e torrados de forma artesanal, eles passam por um rigoroso processo de seleção. Esse método resulta em um café de perfil rico e encorpado, com notas sutis de especiarias e frutas secas.",
    title: "Nossos grãos",
  },
];

let currentIndex = 0;

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.querySelector(
    ".sobre-nos-container"
  ).style.backgroundImage = `url(${images[currentIndex].src})`;
  document.getElementById("title-text").textContent =
    images[currentIndex].title;
  document.getElementById("main-text").textContent = images[currentIndex].text;
}

function init() {
  document.querySelector(
    ".sobre-nos-container"
  ).style.backgroundImage = `url(${images[0].src})`;
  document.getElementById("title-text").textContent = images[0].title;
  document.getElementById("main-text").textContent = images[0].text;
}

window.onload = () => {
  init();
  renderCarousel();
  setupMenuToggle();
};

const bebidas = [
  {
    src: "images/capuccino-ovomaltine.jpg",
    nome: "Capuccino Ovomaltine",
    link: "../pages/coffees.html",
  },
  {
    src: "images/cafe-gelado.jpg",
    nome: "Gelatto",
    link: "../pages/coffees.html",
  },
  {
    src: "images/cafe-cremoso.png",
    nome: "Raccoon Cremoso",
    link: "../pages/coffees.html",
  },
  {
    src: "images/cafe-frapuccino.jpg",
    nome: "Expresso das Neves",
    link: "../pages/coffees.html",
  },
  {
    src: "images/cafe-gelado-chantilly.avif",
    nome: "Raccoon Pingado",
    link: "../pages/coffees.html",
  },
  {
    src: "images/cafe-gelatto-chantilly.jpg",
    nome: "Branca de Neve",
    link: "../pages/coffees.html",
  },
];

function renderCarousel() {
  const carouselContainer = document.querySelector(".carousel");
  carouselContainer.innerHTML = "";

  const isSmallScreen = window.innerWidth < 500;
  const numberOfCards = isSmallScreen ? 1 : 3;

  for (let i = currentIndex; i < currentIndex + numberOfCards; i++) {
    const bebida = bebidas[i % bebidas.length];

    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const img = document.createElement("img");
    img.src = bebida.src;
    img.alt = bebida.nome;
    cardImage.appendChild(img);

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    const h3 = document.createElement("h3");
    h3.textContent = bebida.nome;
    const a = document.createElement("a");
    a.href = bebida.link;
    a.classList.add("ver-mais");
    a.textContent = "Ver mais";
    cardInfo.appendChild(h3);
    cardInfo.appendChild(a);

    card.appendChild(cardImage);
    card.appendChild(cardInfo);

    carouselContainer.appendChild(card);
  }
}

function moveCarousel(direction) {
  const isSmallScreen = window.innerWidth < 600;
  const numberOfCards = isSmallScreen ? 1 : 3;

  if (direction === "left") {
    currentIndex =
      (currentIndex - numberOfCards + bebidas.length) % bebidas.length;
  } else if (direction === "right") {
    currentIndex = (currentIndex + numberOfCards) % bebidas.length;
  }

  renderCarousel();
}

function setupMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
}


// script do pular a imagem do card pratos
document.querySelectorAll('.image-gallery').forEach(gallery => {
  const images = gallery.querySelectorAll('img');
  const prevButton = gallery.querySelector('.prev');
  const nextButton = gallery.querySelector('.next');
  let currentIndex = 0;

  // Atualiza
  const updateGallery = () => {
    images.forEach((img, index) => {
      img.classList.toggle('active', index === currentIndex);
    });
  };

  // Voltar
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  // Pular
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });
});
