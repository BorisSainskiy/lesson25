// // task 1 - start
let comparison = (d1, d2) => {
  if (d1 > d2) {
    return 1;
  } else if (d1 < d2) {
    return -1;
  }

  return 0;
};
// alert(comparison(2, 2));
// // task 1 - end

// // task 2 - start
let factorial = a => {
  if (a < 0) {
    alert("Error");
  } else if (a == 0) {
    return 0;
  } else if (a == 1) {
    return 1;
  }

  return a * factorial(a - 1);
};

// alert(factorial(-1));
// // task 2 - end;

// // task 3 - start
let konk = (a1, a2, a3) => {
  return String(a1) + String(a2) + String(a3);
};
alert(konk(1, 2, 3));
// // task 3 - end

// // task 4 - start
let s = (a, b = a) => {
  return a * b;
};
alert(s(2));
// // task 4 - end

// task 5 - start
let ideal = a => {
  let s = 0;
  for (let i = 2; i <= a; i++) {
    if (a % i == 0) {
      s += i;
    }
  }
  if (a == 2) {
    return false;
  } else if (a == s) {
    return true;
  } else {
    return false;
  }
};
// alert(ideal(17));
// task 5 - end

// // task 6 - start
let diapason = (min, max) => {
  let str = "";
  for (let i = min; i < max; i++) {
    if (ideal(i)) {
      str += i + " ";
    }
  }
  return str;
};

// alert(diapason(2, 6));
// // task 6 - end

// task 7 - start
let time = (hours = "00", minutes = "00", second = "00") => {
  let time = String(hours) + "," + String(minutes) + "," + String(second);
  let newTime = time.split(",");
  time = newTime.join(":");
  return `"${time}"`;
};

// alert(time());
//task 7 - end

// task 8 - start
let secondsTime = (hours, minutes, second) => {
  return second + minutes * 60 + hours * 60 * 60;
};
// alert(secondsTime(3, 12, 20));
// task 8 - end

// task 9 - start
let timeFromSecond = seconds => {
  let h, m, s;
  h = Math.floor(seconds / 3600);
  seconds -= h * 3600;
  m = Math.floor(seconds / 60);
  s = seconds - m * 60;
  return time(h, m, s);
};
// alert(timeFromSecond(11540));
// task 9 - end
let betweenTimes = (h1, m1, s1, h2, m2, s2) => {
  let seconds1 = secondsTime(h1, m1, s1);
  let seconds2 = secondsTime(h2, m2, s2);
  let newSeconds = seconds1 - seconds2;
  return timeFromSecond(newSeconds);
};
alert(betweenTimes(2, 10, 40, 1, 5, 10));
