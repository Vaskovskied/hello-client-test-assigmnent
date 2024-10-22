const throttle = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay = 1000
) => {
  let shouldWait = false;

  return (...args: T) => {
    if (shouldWait) return;
    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};

export default throttle;
