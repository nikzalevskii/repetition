export const menuData = [
  {
    id: 'main',
    title: 'Главная',
    type: 'item',
  },
  {
    id: 'movies',
    title: 'Фильм',
    type: 'group',
    items: [
      { id: 'movies-top', title: 'Топ' },
      { id: 'movies-popular', title: 'Популярные' },
      { id: 'movies-new', title: 'Новые' },
    ],
  },
  {
    id: 'series',
    title: 'Сериал',
    type: 'group',
    items: [
      { id: 'series-top', title: 'Топ' },
      { id: 'series-popular', title: 'Популярные' },
      { id: 'series-new', title: 'Новые' },
    ],
  },
  {
    id: 'cartoons',
    title: 'Мультфильмы',
    type: 'group',
    items: [
      { id: 'cartoons-top', title: 'Топ' },
      { id: 'cartoons-popular', title: 'Популярные' },
      { id: 'cartoons-new', title: 'Новые' },
    ],
  },
  {
    id: 'service',
    title: 'Служебное',
    type: 'group',
    items: [
      { id: 'about', title: 'О нас' },
      { id: 'faq', title: 'Вопросы и ответы' },
      { id: 'contacts', title: 'Контакты' },
    ],
  },
]
