type ConfigValue<T> = T | string | number | boolean | ObjectOrString;

export type ObjectOrString = {
  [key: string]: ConfigValue;
};
