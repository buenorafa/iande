// Projetos
const cards = [
  {
    link: "https://www.joaopessoa.pb.gov.br/noticias/populacao-pode-solicitar-servico-de-cata-treco-para-recolher-moveis-e-eletrodomesticos-em-suas-residencias/",
    title: "Cata-treco",
    description:
      "Com o objetivo de evitar o descarte irregular de móveis velhos e eletrodomésticos, a Prefeitura de João Pessoa, por meio da Autarquia Especial Municipal de Limpeza Urbana (Emlur), disponibiliza o serviço de Cata-treco, que pode ser solicitado pela população por teleatendimento. Dessa forma, a solicitação do Cata-treco pode ser feita por meio dos telefones 0800-083-2425 / 3214-7628 / 3214-7660.",
  },
  {
    link: "https://ipesa.org.br/programas-e-projetos/residuos-solidos/do-lixo-a-cidadania/",
    title: "Do lixo à cidadania",
    description:
      "Lixo à Cidadania é um projeto do IPESA em parceria com o Movimento Nacional dos Catadores de Materiais Recicláveis tem como objetivos a profissionalização dos catadores como forma de apoiar o desenvolvimento de políticas efetivas de gestão de resíduos sólidos e estimular os municípios a adotarem sistemas de coleta seletiva com inclusão dos catadores.",
  },
  {
    link: "https://ipoema.org.br/?gad=1&gclid=Cj0KCQjw9deiBhC1ARIsAHLjR2Cvr1v_KCz75r29jP7jteB_Viue-wU5ZqMURurJj0mCS80sbt9U2HUaAqxlEALw_wcB ",
    title: "IPOEMA",
    description:
      "O IPOEMA é uma organização sem fins lucrativos que promove a permacultura e práticas sustentáveis, oferecendo cursos, palestras e vivências, além de desenvolver projetos de pesquisa e educação ambiental. O instituto também atua como um centro de referência em permacultura ecológica, oferecendo consultorias e assessorias a projetos de agricultura familiar, comunidades rurais, urbanas e empresas.",
  },
];

function createCard(json) {
  return `<a
    href="${json.link}" target="_blank"
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
        <p style="text-align: justify;" class="text-gray-800 text-base px-6 pb-6 mb-5">
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
