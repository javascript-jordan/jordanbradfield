interface IStringConfig {
  [key: string]: IStringConfig | string;
}

interface IStrings {
  [key: string]: IStringConfig | string;
}

export default IStrings;
