export interface TecnologyIStudy {
  id: string;
  image: string;
  tecnologyName: string;
  description: string;
}

export const TecnologiesIStudy: TecnologyIStudy[] = [
  {
    description:
      "Linguagem de programação Back-end muito utilizada na área de ciência de dados",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    tecnologyName: "Python",
    id: '1'
  },
  {
    description:
      "Linguagem de desenvolvimento web, por baixo dos panos é um conjunto de novas adicções ao JavaScript, tornando ele uma linguagem tipada",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    tecnologyName: "TypeScript",
    id: '2'
  },
  {
    description:
      "Linguagem de desenvolvimento web, presente em todos os sites modernos",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    tecnologyName: "JavaScript",
    id: '3'
  },
  {
    description:
      "Linguagem de marcação de hypertexto, responsável por inserir os elementos de um site na tela",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    tecnologyName: "HTML5",
    id: '4'
  },
  {
    description:
      "Assim como o HTML o CSS nada mais é do que uma linguagem de marcação, porém voltada para estilos de páginas web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    tecnologyName: "CSS3",
    id: '5'
  },
  {
    description:
      "Biblioteca da linguagem JavaScript que permite criar sites e aplicativos mobile(em sua versão React native), muito conhecida por sua modularização, permitindo a utilização do mesmo código em várias partes",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tecnologyName: "React.JS",
    id: '6'
  },
  {
    description:
      "Biblioteca voltada para a estilização de componentes React e React native",
    image:
      "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    tecnologyName: "Styled-components",
    id: '7'
  },
  {
    description:
      "Tecnologia de versionamento de código importantissima para o cotidiano de um programador independente de qual seja sua especialização",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    tecnologyName: "Git",
    id: '8'
  },
];
