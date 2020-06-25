import moment from 'moment';

function createGraphData(tasks) {
    const data = [{id:"Today", data:[{x:moment().format("YYYY-MM-DD"),y:"Today"}, {x:moment().format("YYYY-MM-DD"),y:"Today"}]}];

    data.push(...tasks.filter(task => !task.completed).map(task => {
    let newTask = {};
    newTask.id = task.taskID;
    let startData = {};
    startData.x = moment(task.startDate).format("YYYY-MM-DD");
    startData.y = task.name;
    let endData = {};
    endData.x = moment(task.endDate).format("YYYY-MM-DD");
    endData.y = task.name;
    newTask.data = [startData, endData];
    return newTask;
  }));
  return data;
}

export default createGraphData;


