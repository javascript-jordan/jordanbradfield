type ConfigValue = string | number | boolean | ObjectOrString;

export type ObjectOrString = {
  [key: string]: ConfigValue;
};
