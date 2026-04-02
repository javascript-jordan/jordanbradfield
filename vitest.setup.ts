import { config } from "@vue/test-utils";

// Suppress specific Vue warnings in tests
config.global.config.warnHandler = (msg) => {
  const ignoredWarnings = ['Invalid prop name: "key"', 'Property "key" was accessed during render'];

  if (ignoredWarnings.some((warning) => msg.includes(warning))) {
    return;
  }
};
