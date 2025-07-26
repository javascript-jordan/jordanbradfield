interface IExternalLink {
  name: string;
  url: string;
  icon: string;
}

interface IExternalLinks {
  [key: string]: IExternalLink;
}

export { IExternalLink, IExternalLinks };
