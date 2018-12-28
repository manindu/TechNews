const sourceLogos = [
  {
    id: 'the-verge',
    logoUrl: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395359/ios-icon.0.png',
  },
  {
    id: 'the-next-web',
    logoUrl:
      'https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/apple-touch-icon-120x120.png',
  },
  {
    id: 'polygon',
    logoUrl:
      'https://cdn.vox-cdn.com/uploads/hub/sbnu_logo_minimal/405/touch_icon_ipad_retina_1000x1000.7014.png',
  },
  {
    id: 'techcrunch',
    logoUrl:
      'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180',
  },
  {
    id: 'the-huffington-post',
    logoUrl: 'https://icon-locator.herokuapp.com/lettericons/H-120-0dbc96.png',
  },
  {
    id: 'bloomberg',
    logoUrl: 'https://icon-locator.herokuapp.com/lettericons/B-120.png',
  },
  {
    id: 'techradar',
    logoUrl: 'https://vanilla.futurecdn.net/techradar/20181220/apple-touch-icon.png',
  },
  {
    id: 'the-new-york-times',
    logoUrl:
      'https://www.nytimes.com/vi-assets/static-assets/apple-touch-icon-319373aaf4524d94d38aa599c56b8655.png',
  },
];

export const getLogoById = id => {
  const source = sourceLogos.filter(source => source.id === id);
  if (source.length <= 0) return null;

  return source[0].logoUrl;
};
