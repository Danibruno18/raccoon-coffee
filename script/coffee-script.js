function setupButtonInteractions() {
  const buttons = document.querySelectorAll(".raccoon-btn");
  const rightContainer = document.querySelector(".right-container");

  if (!buttons || !rightContainer) {
    console.error("Não foram encontrados os botões ou o container direito.");
    return;
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const isActive = button.classList.contains("active");

      if (isActive) {
        location.reload();
      } else {
        buttons.forEach((btn) => {
          if (btn !== button) {
            btn.style.display = "none";
          } else {
            btn.style.position = "relative";
            btn.style.top = "0";
            btn.style.left = "0";
            btn.style.transform = "none";
          }
        });

        const textContainer = document.createElement("div");
        textContainer.className = "text-container";
        textContainer.innerHTML = generateTextForButton(index);
        rightContainer.appendChild(textContainer);

        button.classList.add("active");

        setTimeout(() => {
          textContainer.classList.add("visible");
        }, 1000);
      }
    });
  });
}

function generateTextForButton(index) {
  switch (index) {
    case 0:
      return `
              <p>O Expresso do Oriente tem suas origens nas montanhas árabes, onde o grão de café é cultivado em condições únicas. Diz-se que o grão foi descoberto por um eremita no século XIV, que notou os efeitos energizantes de uma planta selvagem. O segredo do grão foi transmitido de geração em geração, com técnicas de cultivo preservadas até os dias atuais. Esse café é considerado um dos mais refinados do mundo, sendo cultivado em altitudes elevadas, onde o clima árido confere ao grão um sabor suave e único, que se tornou um símbolo da cultura árabe.</p>
            `;
    case 1:
      return `
              <p>A preparação do Expresso do Oriente é um ritual que destaca o sabor e a suavidade do grão. A moagem do café é feita na hora, ajustando-se para extrair os óleos essenciais sem perder os sabores delicados. A prensa francesa é o método tradicional utilizado, pois ela permite que o café infunda lentamente, preservando a intensidade e a suavidade. A água deve estar entre 90°C e 96°C, garantindo que os óleos se libere de maneira eficiente. O resultado é um café de corpo médio, com uma acidez delicada e uma espuma suave no topo, criando uma experiência sensorial única.</p>
            `;
    case 2:
      return `
              <p>O café ganhou popularidade na Europa no século XIX, quando um comerciante árabe o trouxe para Paris. Imediatamente se tornou um sucesso, sendo imitado por europeus. No entanto, o segredo do grão e da preparação sempre permaneceu com os árabes, tornando-o um dos cafés mais exclusivos e admirados do mundo.</p>
              <p>O Expresso do Oriente é um símbolo cultural importante nas reuniões sociais árabes. </p>
            `;

    default:
      return `<p>Informação não disponível.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupButtonInteractions();
});
