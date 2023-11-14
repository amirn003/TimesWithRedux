const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
  .map(time => time.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    console.log(mins, secs);
    return mins * 60 + secs;
    // return parseInt(timeCode.split(':')[0]) * 60 + parseInt(timeCode.split(':')[1]) ;
  })
  ;
