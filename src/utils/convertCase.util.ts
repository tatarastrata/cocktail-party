export const toSentenceCase = (text: string) =>
  text.replace(/(?<!^)(?=[A-Z])/g, ' ');
