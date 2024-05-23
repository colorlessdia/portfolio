// param: YYYY-MM-DDThh:mm:ss
export const calcDDay = (startDate: string): number => {
  const startDateMS = new Date(startDate).getTime();
  const currentDateMS = new Date().getTime();

  const diffMS = currentDateMS - startDateMS;
  const day = Math.ceil(diffMS / (1000 * 60 * 60 * 24));

  return day;
};