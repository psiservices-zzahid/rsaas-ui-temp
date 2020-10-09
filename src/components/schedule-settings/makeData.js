import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len - 1990; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    agentName: namor.generate({ words: 1, numbers: 0 }),
    groups: namor.generate({ words: 1, numbers: 0 }),
    monitor_capacity: Math.floor(Math.random() * 30),
    checkin_capacity: Math.floor(Math.random() * 100),
    support_capacity: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66 ? "true" : statusChance > 0.33 ? "false" : "false",
    start_date: namor.generate({ words: 1, numbers: 0 }),
    start_time: namor.generate({ words: 1, numbers: 0 }),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
