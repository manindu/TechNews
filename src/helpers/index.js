export const newsSources = [
  {
    id: 'the-verge',
    name: 'The Verge',
    logoUrl: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395359/ios-icon.0.png',
  },
  {
    id: 'the-next-web',
    name: 'The Next Web',
    logoUrl:
      'https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/apple-touch-icon-120x120.png',
  },
  {
    id: 'polygon',
    name: 'Polygon',
    logoUrl:
      'https://cdn.vox-cdn.com/uploads/hub/sbnu_logo_minimal/405/touch_icon_ipad_retina_1000x1000.7014.png',
  },
  {
    id: 'techcrunch',
    name: 'Techcrunch',
    logoUrl:
      'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180',
  },
  {
    id: 'the-huffington-post',
    name: 'The Huffington Post',
    logoUrl: 'https://icon-locator.herokuapp.com/lettericons/H-120-0dbc96.png',
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    logoUrl: 'https://icon-locator.herokuapp.com/lettericons/B-120.png',
  },
  {
    id: 'techradar',
    name: 'Techradar',
    logoUrl: 'https://vanilla.futurecdn.net/techradar/20181220/apple-touch-icon.png',
  },
  {
    id: 'the-new-york-times',
    name: 'The New York Times',
    logoUrl:
      'https://www.nytimes.com/vi-assets/static-assets/apple-touch-icon-319373aaf4524d94d38aa599c56b8655.png',
  },
];

export const getSourceById = id => {
  const source = newsSources.filter(item => item.id === id);
  if (source.length <= 0) return null;

  return source[0];
};
