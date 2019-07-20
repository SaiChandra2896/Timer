const Secondstohhmmss = (totalseconds) => {
  const hours = Math.floor(totalseconds / 3600);
  const minutes = Math.floor((totalseconds - (hours * 3600)) / 60);
  let seconds = totalseconds - (hours * 3600) - (minutes * 60);

  seconds = Math.floor(Math.round(seconds * 100) / 100)

  let result = (hours < 10 ? "0" + hours : hours);
  result += ":" + (minutes < 10 ? "0" + minutes : minutes);
  result += ":" + (seconds < 10 ? "0" + seconds : seconds);
  return result;
}

module.exports = Secondstohhmmss;