const zodiac = document.getElementById("zodiac");
const body = document.body;

const luckycolor = () => {
  switch (zodiac.value) {
    case "Aries":
      body.style.backgroundColor = "#E49F34";
      break;
    case "Taurus":
      body.style.backgroundColor = "#F3797A";
      break;
    case "Gemini":
      body.style.backgroundColor = "#B1E89C";
      break;
    case "Cancer":
      body.style.backgroundColor = "#46447F";
      break;
    case "Leo":
      body.style.backgroundColor = "#FFDE59";
      break;
    case "Virgo":
      body.style.backgroundColor = "#85EEF2";
      break;
    case "Libra":
      body.style.backgroundColor = "#EE85F2";
      break;
    case "Scorpio":
      body.style.backgroundColor = "#424242";
      break;
    case "Sagittarius":
      body.style.backgroundColor = "#4D39EC";
      break;
    case "Capricorn":
      body.style.backgroundColor = "#D739EC";
      break;
    case "Aquarius":
      body.style.backgroundColor = "#59067B";
      break;
    case "Pisces":
      body.style.backgroundColor = "#33F3C0";
      break;
    default:
      body.style.backgroundColor = "#fff";
      break;
  }
};
