const formatTime = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return month + "月" + day + "日";
};

const tomorrowTime = (date) => {
  const month = date.getMonth() + 1;
  const tomorrow = date.getDate() + 1;

  return month + "月" + tomorrow + "日";
};

const formTime = (date) =>{
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
 
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

module.exports = {
  formatTime,
  tomorrowTime,
  formTime
};
