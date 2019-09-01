import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julia Alcantara",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu mi bibendum neque egestas. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sapien nec sagittis aliquam malesuada. Nunc pulvinar sapien et ligula ullamcorper. Risus quis varius quam quisque id diam vel quam elementum. Tortor condimentum lacinia quis vel eros donec ac. Turpis egestas sed tempus urna et pharetra pharetra. In nisl nisi scelerisque eu ultrices vitae. Proin libero nunc consequat interdum varius."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=8"
        },
        date: "04 Jun 2019",
        content:
          " Acima de tudo, é fundamental ressaltar que a execução dos pontos do programa representa uma abertura para a melhoria dos métodos utilizados na avaliação de resultados. Do mesmo modo, o consenso sobre a necessidade de qualificação acarreta um processo de reformulação e modernização do investimento em reciclagem técnica. Podemos já vislumbrar o modo pelo qual a necessidade de renovação processual maximiza as possibilidades por conta de todos os recursos funcionais envolvidos. Desta maneira, a estrutura atual da organização obstaculiza a apreciação da importância das condições inegavelmente apropriadas. Não obstante, o entendimento das metas propostas assume importantes posições no estabelecimento dos modos de operação convencionais. ",
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            content:
              "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a percepção das dificuldades promove a alavancagem do fluxo de informações. Por outro lado, o comprometimento entre as equipes faz parte de um processo de gerenciamento dos níveis de motivação departamental. Por conseguinte, a hegemonia do ambiente político aponta para a melhoria do impacto na agilidade decisória. Ainda assim, existem dúvidas a respeito de como o fenômeno da Internet oferece uma interessante oportunidade para verificação do processo de comunicação como um todo."
          },
          {
            id: 3,
            author: {
              name: "Cezar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            content:
              "O incentivo ao avanço tecnológico, assim como o início da atividade geral de formação de atitudes facilita a criação das formas de ação. Percebemos, cada vez mais, que o julgamento imparcial das eventualidades pode nos levar a considerar a reestruturação de alternativas às soluções ortodoxas. Pensando mais a longo prazo, a consolidação das estruturas nos obriga à análise das diretrizes de desenvolvimento para o futuro."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="content">
        {this.state.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
