const getCurrentTime = () => {
  const date = new Date();

  const currentTime = {
    'YYYY': date.getFullYear().toString(),
    'MM': (date.getMonth() + 1).toString().padStart(2, '0'),
    'DD': date.getDate().toString().padStart(2, '0'),
    'hh': date.getHours().toString().padStart(2, '0'),
    'mm': date.getMinutes().toString().padStart(2, '0'),
    'ss': date.getSeconds().toString().padStart(2, '0'),
    'ms': date.getTime().toString()
  };

  return currentTime;
};

export default getCurrentTime;