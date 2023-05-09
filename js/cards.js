// Projetos
const cards = [
  {
    link: "www.google.com",
    title: "Projeto Batatinha",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat.",
  },
  {
    link: "www.ifpb.com.br",
    title: "Projeto Cenourinha",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat.",
  },
  {
    link: "www.ifpb.com.br",
    title: "Projeto Cenourinha",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aut necessitatibus accusantium quaerat.",
  },
];

function createCard(json) {
  return `<a
    href="${json.link}"
    class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink no-underline hover:no-underline"
    >
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-xl"
    >
      <div class="flex flex-wrap justify-between">
        <div class="w-full font-bold text-2xl text-gray-800 px-6 pt-8 pb-3">
          ${json.title}
        </div>
        <div class="w-full mb-4 flex justify-center px-6 pb-4">
          <div
            class="h-0.5 mx-auto gradient w-full opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <p class="text-gray-800 text-base px-6 pb-6 mb-5">
          ${json.description}
        </p>
      </div>
    </div>
  </a>`;
}
// Seleciono a tag do grid
const grid = document.querySelector("#cardGrid");
// Chamada da func de criar o card p/ cada objeto do array e salvo numa unica string content
const content = cards.map((elem) => createCard(elem)).join("");
// Adiciono o conteudo dinamicamente no html
grid.innerHTML = content;
