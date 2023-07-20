function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun('bathe my dog')); 


function mondayWork(task = 'go to the office') {
  return `This Monday, I will ${task}.`;
}
console.log(mondayWork('work from home')); 


function wrapAdjective(type = '*') {
  return function (adjective = 'special') {
    return `You are ${type}${adjective}${type}!`;
  };
}
const encouragingPromptFunction = wrapAdjective('||');
console.log(encouragingPromptFunction('a dedicated programmer')); 

