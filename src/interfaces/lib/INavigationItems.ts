export default interface INavigationItems {
  title?: string;
  prependIcon?: string;
  href?: string;
  target?: string;
  type?: string;
  onClick?: () => void;
}
