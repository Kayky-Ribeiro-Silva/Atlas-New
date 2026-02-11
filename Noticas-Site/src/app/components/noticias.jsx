type NewsItem = {
  id: string;
  title: string;
  image: any; 
  content: string;
};

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Novo Parque na Cidade',
    image: require('../imgNews/parque.jpg'),
    content: 'A cidade inaugurou um novo parque com áreas verdes, playgrounds e trilhas para caminhada. A iniciativa visa melhorar a qualidade de vida da população e incentivar atividades ao ar livre.',
  },
  {
    id: '2',
    title: 'Vacinação contra Gripe',
    image: require('../imgNews/vacina.jpg'),
    content: 'O governo anunciou a campanha de vacinação contra a gripe para este ano. As vacinas estarão disponíveis em todos os postos de saúde a partir da próxima semana.',
  },
  {
    id: '3',
    title: 'Feira de Tecnologia',
    image: require('../imgNews/tecnologia.jpg'),
    content: 'A feira anual de tecnologia trouxe novidades em inteligência artificial, robótica e gadgets. O evento contou com palestras de especialistas e exposições interativas.',
  },
];
