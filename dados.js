let dados = [
    {
      titulo: "14 hábitos de desenvolvedores",
      imagem: "https://m.media-amazon.com/images/I/613-pa+n7cL._AC_UF1000,1000_QL80_.jpg",
      info: "Mais Informações",
      tags: "desenvolvimento, habito, produtividade, programador",
      link: "info.html?id=1"
  },
  {
    titulo: "C# para Iniciantes",
    imagem: "https://regys.com.br/wp-content/uploads/2021/10/LIvroCSharpCapa.png",
    info: "Mais informações",
    tags: "csharp, programacao, orientado a objetos, iniciantes",
    link: "info.html?id=2"
  },
  {
      titulo: "Código Limpo",
      imagem: "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF894,1000_QL80_.jpg",
      info: "Mais Informações",
      tags: "desenvolvimento, boas praticas, codigo limpo, refatoracao",
      link: "info.html?id=3"
  },
  {
      titulo: "Curso Intensivo de Python",
      imagem: "https://m.media-amazon.com/images/I/71+zivhMZKL._AC_UF1000,1000_QL80_.jpg",
      info: "Mais Informações",
      tags: "python, programacao, linguagem de programacao, iniciantes",
      link: "info.html?id=4"
  },
  {
      titulo: "Entendendo algoritmos",
      imagem: "https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UF1000,1000_QL80_.jpg",
      info: "Mais Informações",
      tags: "algoritmos, estrutura de dados, logica de programacao, ciencia da computacao",
      link: "info.html?id=5"
  },
  {
      titulo: "Guia Front-End",
      imagem: "https://m.media-amazon.com/images/I/41cyu+Z3TEL._SY580_.jpg",
      info: "Mais Informações",
      tags: "frontend, desenvolvimento web, html, css, javascript",
      link: "info.html?id=6"
  },
  {
      titulo: "Guia Prático: HTML & CSS",
      imagem: "https://m.media-amazon.com/images/I/31o1jSCehiL._SY580_.jpg",
      info: "Mais Informações",
      tags: "html, css, desenvolvimento_web, frontend, iniciantes",
      link: "info.html?id=7"
  },
  {
      titulo: "HTML5 e CSS3: Domine a web do futuro",
      imagem: "https://m.media-amazon.com/images/I/41+axHNoWBL._SY580_.jpg",
      info: "Mais Informações",
      tags: "html5, css3, desenvolvimento web, frontend",
      link: "info.html?id=8"
  },
  {
      titulo: "Introdução à Linguagem SQL",
      imagem: "https://m.media-amazon.com/images/I/711siL1zU1L._AC_UF1000,1000_QL80_.jpg",
      info: "Mais Informações",
      tags: "sql, banco de dados, gerenciamento de dados",
      link: "info.html?id=9"
  },
  {
      titulo: "Java para iniciantes",
      imagem: "https://m.media-amazon.com/images/I/41NPr-88NFL._SY580_.jpg",
      info: "Mais Informações",
      tags: "java, programacao, orientado a objetos, iniciantes",
      link: "info.html?id=10"
  },
  {
      titulo: "Lógica de Programação: JavaScript e HTML",
      imagem: "https://m.media-amazon.com/images/I/41RsYqkciqL._SY580_.jpg",
      info: "Mais Informações",
      tags: "logica de programacao, javascript, html, desenvolvimento web",
      link: "info.html?id=11"
  },
  {
      titulo: "Lógica de programação em portugol",
      imagem: "https://m.media-amazon.com/images/I/41NiWHgP+dL._SY580_.jpg",
      info: "Mais Informações", 
      tags: "logica de programacao, portugol, algoritmos",
      link: "info.html?id=12"
  },
  {
      titulo: "O programador pragmático",
      imagem: "https://m.media-amazon.com/images/I/41WH7HFsbzL.jpg",
      info: "Mais Informações",
      tags: "desenvolvimento, boas praticas, programador, metodologia",
      link: "info.html?id=13"
  },
  {
      titulo: "Programação funcional para leigos",
      imagem: "https://m.media-amazon.com/images/I/81Y8qOS33-L._AC_UF894,1000_QL80_.jpg",
      info: "Mais Informações",
      tags: "programacao funcional, paradigma funcional, lambda calculus",
      link: "info.html?id=14"
  },
  {
      titulo: "Scratch",
      imagem: "https://www.casadocodigo.com.br/cdn/shop/products/Scratch_ebook_large.jpg?v=1631650184",
      info: "Mais Informações",
      tags: "scratch, programacao visual, educacional, criancas, crianças",
      link: "info.html?id=15"
  },
  {
      titulo: "Use a cabeça! Java",
      imagem: "https://m.media-amazon.com/images/I/61jzaHuWFLL._AC_UF894,1000_QL80_.jpg",
      info: "Mais Informações",
      tags: "java, programacao, orientado a objetos",
      link: "info.html?id=16"
  }
]

    const livros = {
        1: {
            titulo: "14 hábitos de desenvolvedores altamente produtivos",
            autor: "Zeno Rocha",
            descricao: "Este não é um livro tradicional. Você não encontrará o mesmo formato ou estrutura que um livro comum possui. Na verdade, este livro foi projetado para ser o mais simples e objetivo possível. Você pode seguir a ordem dos capítulos ou lê-los individualmente. Tudo é independente e não depende de conhecimentos anteriores. No final de cada hábito, você encontrará uma seção marcada como 'Perguntas e Respostas', onde entrevisto desenvolvedores sênior e líderes de tecnologia de várias empresas para entender como eles chegaram lá. Fui atrás de gigantes da tecnologia como Google, Amazon, Microsoft e Adobe. Startups poderosas como GitHub, Spotify, Elastic, Segment, GoDaddy e Shopify. E até organizações estabelecidas, como Citibank, BlackBerry e The New York Times. A idéia é apresentar a você não o ponto de vista de apenas uma pessoa, mas uma coleção de idéias sobre como navegar em sua carreira.",
            imagem: "https://m.media-amazon.com/images/I/613-pa+n7cL._AC_UF1000,1000_QL80_.jpg"
        },
        2: {
            titulo: "C# para Iniciantes",
            autor: "André Carlucci, Carlos dos Santos, Claudenir Campos Andrade, Rafael Almeida, Ray Carneiro, Renato Haddad",
            descricao: "Este livro é o resultado de um trabalho voluntário, realizado por 6 amigos MVPs, que têm paixão por compartilhar conhecimento. Quando dizemos voluntário, significa que o ganho que teremos é apenas o aprendizado que cada um de vocês vai adquirir e isto representa para nós o maior “lucro” que teremos. O objetivo deste livro é ajudar a quem precisa aprender a programar na linguagem Visual C#, uma das mais usadas no mercado mundial. A demanda por profissionais nesta área é enorme, e como não temos desenvolvedores suficientes, incentivamos qualquer pessoa a estudar e ter o conhecimento para entrar na área.",
            imagem: "https://regys.com.br/wp-content/uploads/2021/10/LIvroCSharpCapa.png"
        },
        3: {
            titulo: "Código Limpo",
            autor: "Robert C. Martin",
            descricao: "Publicado em 2008, 'Código Limpo' é um clássico na literatura de engenharia de software. Robert C. Martin, também conhecido como 'Uncle Bob', apresenta um conjunto de princípios e melhores práticas para escrever código que seja não apenas funcional, mas também limpo, legível e fácil de manter. A obra aborda temas como a organização do código, a refatoração, e a importância de seguir boas práticas de codificação. É uma leitura indispensável para desenvolvedores que desejam aprimorar a qualidade do seu trabalho e criar software de alta qualidade.",
            imagem: "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF894,1000_QL80_.jpg"
        },
        4: {
            titulo: "Curso Intensivo de Python",
            autor: "Eric Matthes",
            descricao: "O Curso Intensivo de Python é o guia de programação Python mais vendido do mundo. Com essa introdução rápida e abrangente, você será capaz de escrever, programar, solucionar problemas e desenvolver aplicações que funcionam num piscar de olhos.Comece aprendendo os conceitos básicos de programação, como variáveis, listas, classes e loops, e pratique a escrita de código limpo com exercícios para cada tópico.",
            imagem: "https://m.media-amazon.com/images/I/71+zivhMZKL._AC_UF1000,1000_QL80_.jpg"
        },
        5: {
            titulo: "Entendendo Algoritmos",
            autor: "Aditya Bhargava",
            descricao: "Entendendo Algoritmos é um livro que visa tornar a compreensão de algoritmos acessível para iniciantes. Aditya Bhargava utiliza ilustrações e exemplos claros para explicar conceitos fundamentais de algoritmos de maneira visual e intuitiva. O livro aborda algoritmos comuns como busca e ordenação, e fornece uma base sólida para aqueles que desejam entender como os algoritmos funcionam e como aplicá-los na resolução de problemas de programação.",
            imagem: "https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UF1000,1000_QL80_.jpg"
        },
        6: {
            titulo: "Guia Front-End",
            autor: "Diego Eis",
            descricao: "O guia para desenvolvedores front-end é projetado para orientar iniciantes na escolha dos tópicos mais relevantes para aprender na área de desenvolvimento web. Em vez de ensinar programação detalhada, ele fornece uma visão geral dos assuntos essenciais, organizados por prioridade, para que você saiba por onde começar e o que é mais importante. O guia enfatiza o aprendizado de HTML, CSS e JavaScript antes de avançar para tópicos adicionais como SEO e metodologias específicas. Embora não seja um livro didático, inclui referências úteis e links para estudos adicionais. O objetivo é economizar tempo e evitar a sobrecarga de informações ao oferecer uma direção clara e prática para iniciantes.",
            imagem: "https://m.media-amazon.com/images/I/41cyu+Z3TEL._SY580_.jpg"
        },
        7: {
            titulo: "Guia Prático: HTML & CSS",
            autor: " Wallace Fragoso",
            descricao: "O livro 'Guia Prático: HTML e CSS' de Wallace Fragoso é um recurso voltado para iniciantes que desejam aprender e dominar as bases do desenvolvimento web. O guia oferece uma abordagem prática e direta, cobrindo os fundamentos do HTML e do CSS de forma clara e acessível. Com exemplos e exercícios práticos, o livro ensina a criar e estilizar páginas web, proporcionando uma sólida compreensão dos conceitos essenciais e das melhores práticas. Ideal para quem está começando na área, o livro busca facilitar o aprendizado e a aplicação dos conhecimentos em projetos reais.",
            imagem: "https://m.media-amazon.com/images/I/31o1jSCehiL._SY580_.jpg"
        },
        8: {
            titulo: "HTML5 e CSS3: Domine a Web do Futuro",
            autor: "Lucas Mazza",
            descricao: "Crie páginas elegantes de forma simples! HTML e CSS, quando bem utilizados, podem ser o sucesso de um projeto e, com os novos recursos, muito do que antes era trabalhoso agora não é mais. Aprenda as melhores técnicas para escrever seu site através de exemplos práticos de funcionalidades úteis do cotidiano. Construa menus, aplique efeitos, estilize elementos visuais, melhore a semântica da sua página e muito mais!",
            imagem: "https://m.media-amazon.com/images/I/41+axHNoWBL._SY580_.jpg"
        },
        9: {
            titulo: "Introdução à Linguagem SQL",
            autor: "Thomas Nield",
            descricao: "Atualmente as empresas estão coletando dados a taxas exponenciais e mesmo assim poucas pessoas sabem como acessá-los de maneira relevante. Se você trabalha em uma empresa ou é profissional de TI, este curto guia prático lhe ensinará como obter e transformar dados com o SQL de maneira significativa. Você dominará rapidamente os aspectos básicos do SQL e aprenderá como criar seus próprios bancos de dados.",
            imagem: "https://m.media-amazon.com/images/I/711siL1zU1L._AC_UF1000,1000_QL80_.jpg"
        },
        10: {
            titulo: "Java para Iniciantes",
            autor: "Luiz Fernando Duarte Junior",
            descricao: "Este livro é um guia objetivo e didático para iniciantes que desejam aprender o básico da linguagem Java e criar seus primeiros programas interativos em modo console. Ele fornece um passo-a-passo claro para programadores iniciantes, ideal para quem está começando um curso técnico ou superior em Informática. Além de ensinar fundamentos de Java, o livro oferece uma introdução ao mercado de desenvolvimento de software. É também um excelente material de reforço para disciplinas de Algoritmos, ajudando a solidificar conceitos essenciais e a prática de programação.",
            imagem: "https://m.media-amazon.com/images/I/81khWwYeXEL._SL1500_.jpg"
        },
        11: {
            titulo: "Lógica de Programação: JavaScript e HTML",
            autor: "Paulo Silveira, Adriano Almeida",
            descricao: "Agora é a hora para você aprender a programar! Com uma abordagem totalmente prática e voltada para o iniciante os conceitos de programação são apresentados de forma simples através do surgimento de suas necessidades, sempre levando em consideração a motivaçção prática das mesmas e suas soluções. Usando apenas um navegador e um editor de textos você vai criar seus primeiros programas. A lógica apresentada leva em consideração os problemas do dia a dia de forma a tornar a programação familiar desde o começo do aprendizado. O livro usa HTML e JavaScript, mostrando a sintaxe, instruções, funções específicas da linguagem e problemas corriqueiros da programação. Somado a isso você ainda aprende a usar o Canvas do HTML para desenhar usando código e impressionar qualquer pessoa. Entre no mundo da programação com os livros da Editora Casa do Código.",
            imagem: "https://m.media-amazon.com/images/I/71TgHqqfwXL._SL1500_.jpg"
        },
        12: {
            titulo: "Lógica de Programação em Portugol",
            autor: "Joice Barbosa Mendes, Rafael da Silva Muniz",
            descricao: "O livro de Joice Mendes e Rafael Muniz é um guia acessível para iniciantes em lógica de programação, utilizando a pseudo-linguagem Portugol. Com foco em facilitar o aprendizado, ele aborda desde os fundamentos da criação de algoritmos e sintaxe do Portugol até tópicos mais avançados como variáveis, estruturas condicionais, operadores, e funções. O material inclui 85 exemplos de código, 55 exercícios de fixação com gabarito e um projeto prático, todos acompanhados por vídeos complementares disponíveis online. É ideal para aprimorar a percepção lógica e aplicar conceitos de programação de forma estruturada e prática.",
            imagem: "https://m.media-amazon.com/images/I/41NiWHgP+dL._SY580_.jpg"
        },
        13: {
            titulo: "O Programador Pragmático",
            autor: "Andrew Hunt e David Thomas",
            descricao: "'O Programador Pragmático' é uma obra seminal que oferece conselhos práticos para desenvolvedores de software. Andrew Hunt e David Thomas exploram uma ampla gama de tópicos, desde técnicas de codificação e design até gerenciamento de projetos e desenvolvimento pessoal. O livro é conhecido por suas dicas valiosas e sua abordagem pragmática, ajudando os programadores a melhorar suas habilidades e a adotar práticas de desenvolvimento eficientes e eficazes.",
            imagem: "https://m.media-amazon.com/images/I/41WH7HFsbzL.jpg"
        },
        14: {
            titulo: "Programação Funcional para Leigos",
            autor: "John Paul Mueller",
            descricao: "Especialmente para não desenvolvedores, a programação funcional pode ser a ferramenta perfeita para codificar uma infinidade de problemas. Você verá como os processos da programação funcional são usados para derivar, analisar e comprovar o valor dos algoritmos; explorar as diferenças no Haskell e no Python, aprendendo quando usar as abordagens pura e impura; verá por que a programação funcional é vital para a IA e aplicativos de jogos; e usará suas novas habilidades.",
            imagem: "https://m.media-amazon.com/images/I/81Y8qOS33-L._SL1500_.jpg"
        },
        15: {
            titulo: "Scratch",
            autor: "Helton Varela, Claudia Tinós Peviani",
            descricao: "O livro sobre Scratch oferece uma introdução acessível à programação por meio de uma linguagem visual baseada em blocos, desenvolvida pelo Media Lab do MIT. Ideal para estudantes, educadores e curiosos, o livro guia a criação de um jogo de labirinto, abordando conceitos básicos de programação de forma divertida e didática. O Scratch, utilizado globalmente em escolas e universidades, promove habilidades essenciais como raciocínio lógico, criatividade e resolução de problemas. Com sua abordagem prática e visual, o livro é uma excelente ferramenta para quem deseja dar os primeiros passos no mundo da programação.",
            imagem: "https://www.casadocodigo.com.br/cdn/shop/products/Scratch_ebook_large.jpg?v=1631650184"
        },
        16: {
            titulo: "Use a Cabeça! Java",
            autor: "Kathy Sierra e Bert Bates",
            descricao: "'Use a Cabeça! Java' faz parte da popular série 'Head First', conhecida por sua abordagem visual e interativa ao ensino de programação. Kathy Sierra e Bert Bates utilizam técnicas de ensino baseadas em pesquisa para tornar o aprendizado de Java mais envolvente e eficaz. O livro cobre desde os conceitos básicos da linguagem até tópicos mais avançados, usando uma abordagem prática e uma variedade de exercícios para ajudar os leitores a dominar Java de forma divertida e eficaz.",
            imagem: "https://m.media-amazon.com/images/I/61jzaHuWFLL._AC_UF894,1000_QL80_.jpg",
        }
    };
  