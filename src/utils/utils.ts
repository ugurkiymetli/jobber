export const getRandomTimeoutInSeconds = (): number => {
    const max = 2000;
    const min = 1000;
    const randomSeconds = Math.floor(Math.random() * (max - min + 1) + min);
    return randomSeconds;
  };