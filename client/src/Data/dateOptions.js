const date = new Date();
const year = date.getFullYear();

const years = new Array(100);
for (let i = 0; i < 100; i += 1) {
  years[i] = year - i;
}

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getDays = (selectedYear, selectedMonth) => {
  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
  const days = new Array(daysInMonth);
  for (let i = 1; i <= daysInMonth; i += 1) {
    days[i - 1] = i;
  }
  return days;
};

export {
  years,
  months,
  getDays,
};
