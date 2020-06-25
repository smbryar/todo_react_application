import moment from 'moment';

function calculatePercentageCompletion(startDate, endDate) {
  const now = moment().valueOf();
  const start = moment(startDate, "YYYY-MM-DD").valueOf();
  const end = moment(endDate, "YYYY-MM-DD").valueOf();
  const percentageCompletion = ((now - start) / (end - start)) * 100;
  if (percentageCompletion < 0) return 0;
  return isFinite(percentageCompletion) ? percentageCompletion : 100;
}

export default calculatePercentageCompletion;