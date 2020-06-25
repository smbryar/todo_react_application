import moment from 'moment';

function sortTasks(taskList) {
    function comparer(a, b) {
      if (a.completed && !b.completed) return 1; // completed tasks come at bottom of list
      if (!a.completed && b.completed) return -1;
      if (moment(a.endDate).isAfter(b.endDate)) return 1; // items ordered by proximity of end date
      if (moment(b.endDate).isAfter(a.endDate)) return -1;
      return 0;
    }
    return taskList.sort(comparer);
  }

export default sortTasks;