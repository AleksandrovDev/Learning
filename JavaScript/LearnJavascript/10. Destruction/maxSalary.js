let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let maxSalary = 0;
  let nameWithMaxSalary = null;
  for (let [ name, salary ] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      nameWithMaxSalary = name;
      maxSalary = salary;
    }
  }
  return nameWithMaxSalary;
}

function topSalaryWithReduce(salaries) {
  if (Object.keys(salaries).length === 0) {
    return null;
  }
  return Object.entries(salaries).reduce((res, cur) => {
    return res[1] < cur[1] ? cur : res;
  })[0]
}

console.log(topSalary(salaries));

console.log(topSalaryWithReduce(salaries));