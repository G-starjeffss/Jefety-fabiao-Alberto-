const timeZones = {
  local: { label: 'Local time', target: undefined },
  utc: { label: 'UTC', target: 'UTC' },
  newYork: { label: 'New York', target: 'America/New_York' },
  london: { label: 'London', target: 'Europe/London' },
  dubai: { label: 'Dubai', target: 'Asia/Dubai' },
  tokyo: { label: 'Tokyo', target: 'Asia/Tokyo' }
};

function updateClock() {
  const now = new Date();

  const localTime = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  }).format(now);

  document.getElementById('localTime').textContent = formatTime(now, undefined);
  document.getElementById('localDate').textContent = formatDate(now, undefined);

  document.getElementById('utcTime').textContent = formatTime(now, 'UTC');
  document.getElementById('utcDate').textContent = formatDate(now, 'UTC');

  document.getElementById('newYorkTime').textContent = formatTime(now, 'America/New_York');
  document.getElementById('newYorkDate').textContent = formatDate(now, 'America/New_York');

  document.getElementById('londonTime').textContent = formatTime(now, 'Europe/London');
  document.getElementById('londonDate').textContent = formatDate(now, 'Europe/London');

  document.getElementById('dubaiTime').textContent = formatTime(now, 'Asia/Dubai');
  document.getElementById('dubaiDate').textContent = formatDate(now, 'Asia/Dubai');

  document.getElementById('tokyoTime').textContent = formatTime(now, 'Asia/Tokyo');
  document.getElementById('tokyoDate').textContent = formatDate(now, 'Asia/Tokyo');
}

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone
  }).format(date);
}

function formatDate(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone
  }).format(date);
}

updateClock();
setInterval(updateClock, 1000);
