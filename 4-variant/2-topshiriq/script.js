function convertToLetters() {
  var units = [
    "",
    "bir",
    "ikki",
    "uch",
    "to'rt",
    "besh",
    "olti",
    "yetti",
    "sakkiz",
    "to'qqiz",
  ];
  var teens = [
    "o'n",
    "o'n bir",
    "o'n ikki",
    "o'n uch",
    "o'n to'rt",
    "o'n besh",
    "o'n olti",
    "o'n yetti",
    "o'n sakkiz",
    "o'n to'qqiz",
  ];
  var tens = [
    "",
    "",
    "yigirma",
    "o'ttiz",
    "qirq",
    "ellik",
    "oltmish",
    "yetmish",
    "sakson",
    "to'qson",
  ];
  var hundreds = [
    "",
    "yuz",
    "ikki yuz",
    "uch yuz",
    "to'rt yuz",
    "besh yuz",
    "olti yuz",
    "yetti yuz",
    "sakkiz yuz",
    "to'qqiz yuz",
  ];

  var number = parseInt(document.getElementById("number").value);
  var result = "";

  if (isNaN(number)) {
    result = "Raqam kiriting :";
  } else if (number === 0) {
    result = "nol";
  } else if (number < 0 || number > 999) {
    result = "Shu oraliqda: 1 dan 999";
  } else {
    if (number >= 100) {
      result += hundreds[Math.floor(number / 100)] + " ";
      number %= 100;
    }

    if (number >= 20) {
      result += tens[Math.floor(number / 10)] + " ";
      number %= 10;
    } else if (number >= 10) {
      result += teens[number - 10] + " ";
      number = 0;
    }

    if (number > 0) {
      result += units[number] + " ";
    }
  }

  document.getElementById("result").textContent = result.trim();
}
