const countryCodes = {
  "Andorra": "ad",
  "United Arab Emirates": "ae",
  "Afghanistan": "af",
  "Antigua and Barbuda": "ag",
  "Anguilla": "ai",
  "Albania": "al",
  "Armenia": "am",
  "Angola": "ao",
  "Antarctica": "aq",
  "Argentina": "ar",
  "American Samoa": "as",
  "Austria": "at",
  "Australia": "au",
  "Aruba": "aw",
  "Åland Islands": "ax",
  "Azerbaijan": "az",
  "Bosnia and Herzegovina": "ba",
  "Barbados": "bb",
  "Bangladesh": "bd",
  "Belgium": "be",
  "Burkina Faso": "bf",
  "Bulgaria": "bg",
  "Bahrain": "bh",
  "Burundi": "bi",
  "Benin": "bj",
  "Saint Barthélemy": "bl",
  "Bermuda": "bm",
  "Brunei": "bn",
  "Bolivia": "bo",
  "Caribbean Netherlands": "bq",
  "Brazil": "br",
  "Bahamas": "bs",
  "Bhutan": "bt",
  "Bouvet Island": "bv",
  "Botswana": "bw",
  "Belarus": "by",
  "Belize": "bz",
  "Canada": "ca",
  "Cocos (Keeling) Islands": "cc",
  "DR Congo": "cd",
  "Central African Republic": "cf",
  "Republic of the Congo": "cg",
  "Switzerland": "ch",
  "Côte d'Ivoire (Ivory Coast)": "ci",
  "Cook Islands": "ck",
  "Chile": "cl",
  "Cameroon": "cm",
  "China": "cn",
  "Colombia": "co",
  "Costa Rica": "cr",
  "Cuba": "cu",
  "Cape Verde": "cv",
  "Curaçao": "cw",
  "Christmas Island": "cx",
  "Cyprus": "cy",
  "Czechia": "cz",
  "Germany": "de",
  "Djibouti": "dj",
  "Denmark": "dk",
  "Dominica": "dm",
  "Dominican Republic": "do",
  "Algeria": "dz",
  "Ecuador": "ec",
  "Estonia": "ee",
  "Egypt": "eg",
  "Western Sahara": "eh",
  "Eritrea": "er",
  "Spain": "es",
  "Ethiopia": "et",
  "European Union": "eu",
  "Finland": "fi",
  "Fiji": "fj",
  "Falkland Islands": "fk",
  "Micronesia": "fm",
  "Faroe Islands": "fo",
  "France": "fr",
  "Gabon": "ga",
  "United Kingdom": "gb",
  "England": "gb-eng",
  "Northern Ireland": "gb-nir",
  "Scotland": "gb-sct",
  "Wales": "gb-wls",
  "Grenada": "gd",
  "Georgia": "ge",
  "French Guiana": "gf",
  "Guernsey": "gg",
  "Ghana": "gh",
  "Gibraltar": "gi",
  "Greenland": "gl",
  "Gambia": "gm",
  "Guinea": "gn",
  "Guadeloupe": "gp",
  "Equatorial Guinea": "gq",
  "Greece": "gr",
  "South Georgia": "gs",
  "Guatemala": "gt",
  "Guam": "gu",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Hong Kong": "hk",
  "Heard Island and McDonald Islands": "hm",
  "Honduras": "hn",
  "Croatia": "hr",
  "Haiti": "ht",
  "Hungary": "hu",
  "Indonesia": "id",
  "Ireland": "ie",
  "Israel": "il",
  "Isle of Man": "im",
  "India": "in",
  "British Indian Ocean Territory": "io",
  "Iraq": "iq",
  "Iran": "ir",
  "Iceland": "is",
  "Italy": "it",
  "Jersey": "je",
  "Jamaica": "jm",
  "Jordan": "jo",
  "Japan": "jp",
  "Kenya": "ke",
  "Kyrgyzstan": "kg",
  "Cambodia": "kh",
  "Kiribati": "ki",
  "Comoros": "km",
  "Saint Kitts and Nevis": "kn",
  "North Korea": "kp",
  "South Korea": "kr",
  "Kuwait": "kw",
  "Cayman Islands": "ky",
  "Kazakhstan": "kz",
  "Laos": "la",
  "Lebanon": "lb",
  "Saint Lucia": "lc",
  "Liechtenstein": "li",
  "Sri Lanka": "lk",
  "Liberia": "lr",
  "Lesotho": "ls",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Latvia": "lv",
  "Libya": "ly",
  "Morocco": "ma",
  "Monaco": "mc",
  "Moldova": "md",
  "Montenegro": "me",
  "Saint Martin": "mf",
  "Madagascar": "mg",
  "Marshall Islands": "mh",
  "North Macedonia": "mk",
  "Mali": "ml",
  "Myanmar": "mm",
  "Mongolia": "mn",
  "Macau": "mo",
  "Northern Mariana Islands": "mp",
  "Martinique": "mq",
  "Mauritania": "mr",
  "Montserrat": "ms",
  "Malta": "mt",
  "Mauritius": "mu",
  "Maldives": "mv",
  "Malawi": "mw",
  "Mexico": "mx",
  "Malaysia": "my",
  "Mozambique": "mz",
  "Namibia": "na",
  "New Caledonia": "nc",
  "Niger": "ne",
  "Norfolk Island": "nf",
  "Nigeria": "ng",
  "Nicaragua": "ni",
  "Netherlands": "nl",
  "Norway": "no",
  "Nepal": "np",
  "Nauru": "nr",
  "Niue": "nu",
  "New Zealand": "nz",
  "Oman": "om",
  "Panama": "pa",
  "Peru": "pe",
  "French Polynesia": "pf",
  "Papua New Guinea": "pg",
  "Philippines": "ph",
  "Pakistan": "pk",
  "Poland": "pl",
  "Saint Pierre and Miquelon": "pm",
  "Pitcairn Islands": "pn",
  "Puerto Rico": "pr",
  "Palestine": "ps",
  "Portugal": "pt",
  "Palau": "pw",
  "Paraguay": "py",
  "Qatar": "qa",
  "Réunion": "re",
  "Romania": "ro",
  "Serbia": "rs",
  "Russia": "ru",
  "Rwanda": "rw",
  "Saudi Arabia": "sa",
  "Solomon Islands": "sb",
  "Seychelles": "sc",
  "Sudan": "sd",
  "Sweden": "se",
  "Singapore": "sg",
  "Saint Helena, Ascension and Tristan da Cunha": "sh",
  "Slovenia": "si",
  "Svalbard and Jan Mayen": "sj",
  "Slovakia": "sk",
  "Sierra Leone": "sl",
  "San Marino": "sm",
  "Senegal": "sn",
  "Somalia": "so",
  "Suriname": "sr",
  "South Sudan": "ss",
  "São Tomé and Príncipe": "st",
  "El Salvador": "sv",
  "Sint Maarten": "sx",
  "Syria": "sy",
  "Eswatini (Swaziland)": "sz",
  "Turks and Caicos Islands": "tc",
  "Chad": "td",
  "French Southern and Antarctic Lands": "tf",
  "Togo": "tg",
  "Thailand": "th",
  "Tajikistan": "tj",
  "Tokelau": "tk",
  "Timor-Leste": "tl",
  "Turkmenistan": "tm",
  "Tunisia": "tn",
  "Tonga": "to",
  "Turkey": "tr",
  "Trinidad and Tobago": "tt",
  "Tuvalu": "tv",
  "Taiwan": "tw",
  "Tanzania": "tz",
  "Ukraine": "ua",
  "Uganda": "ug",
  "United States Minor Outlying Islands": "um",
  "United Nations": "un",
  "United States": "us",
  "Alaska": "us-ak",
  "Alabama": "us-al",
  "Arkansas": "us-ar",
  "Arizona": "us-az",
  "California": "us-ca",
  "Colorado": "us-co",
  "Connecticut": "us-ct",
  "Delaware": "us-de",
  "Florida": "us-fl",
  "Georgia (US)": "us-ga",
  "Hawaii": "us-hi",
  "Iowa": "us-ia",
  "Idaho": "us-id",
  "Illinois": "us-il",
  "Indiana": "us-in",
  "Kansas": "us-ks",
  "Kentucky": "us-ky",
  "Louisiana": "us-la",
  "Massachusetts": "us-ma",
  "Maryland": "us-md",
  "Maine": "us-me",
  "Michigan": "us-mi",
  "Minnesota": "us-mn",
  "Missouri": "us-mo",
  "Mississippi": "us-ms",
  "Montana": "us-mt",
  "North Carolina": "us-nc",
  "North Dakota": "us-nd",
  "Nebraska": "us-ne",
  "New Hampshire": "us-nh",
  "New Jersey": "us-nj",
  "New Mexico": "us-nm",
  "Nevada": "us-nv",
  "New York": "us-ny",
  "Ohio": "us-oh",
  "Oklahoma": "us-ok",
  "Oregon": "us-or",
  "Pennsylvania": "us-pa",
  "Rhode Island": "us-ri",
  "South Carolina": "us-sc",
  "South Dakota": "us-sd",
  "Tennessee": "us-tn",
  "Texas": "us-tx",
  "Utah": "us-ut",
  "Virginia": "us-va",
  "Vermont": "us-vt",
  "Washington": "us-wa",
  "Wisconsin": "us-wi",
  "West Virginia": "us-wv",
  "Wyoming": "us-wy",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Vatican City (Holy See)": "va",
  "Saint Vincent and the Grenadines": "vc",
  "Venezuela": "ve",
  "British Virgin Islands": "vg",
  "United States Virgin Islands": "vi",
  "Vietnam": "vn",
  "Vanuatu": "vu",
  "Wallis and Futuna": "wf",
  "Samoa": "ws",
  "Kosovo": "xk",
  "Yemen": "ye",
  "Mayotte": "yt",
  "South Africa": "za",
  "Zambia": "zm",
  "Zimbabwe": "zw"
};

const dayCodes = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const weather_codes = {
  0: {
    name: "Clear Sky",
    icons: {
      day: "clear.svg",
      night: "clear-night.svg",
    },
  },
  1: {
    name: "Mainly Clear",
    icons: {
      day: "clear.svg",
      night: "clear-night.svg",
    },
  },
  2: {
    name: "Partly Cloudy",
    icons: {
      day: "partly-cloudy.svg",
      night: "partly-cloudy-night.svg",
    },
  },
  3: {
    name: "Overcast",
    icons: {
      day: "overcast.svg",
      night: "overcast.svg",
    },
  },
  45: {
    name: "Fog",
    icons: {
      day: "fog.svg",
      night: "fog-night.svg",
    },
  },
  48: {
    name: "Rime Fog",
    icons: {
      day: "rime-fog.svg",
      night: "rime-fog.svg",
    },
  },
  51: {
    name: "Light Drizzle",
    icons: {
      day: "light-drizzle.svg",
      night: "light-drizzle.svg",
    },
  },
  53: {
    name: "Moderate Drizzle",
    icons: {
      day: "drizzle.svg",
      night: "drizzle.svg",
    },
  },
  55: {
    name: "Heavy Drizzle",
    icons: {
      day: "heavy-drizzle.svg",
      night: "heavy-drizzle.svg",
    },
  },
  56: {
    name: "Light Freezing Drizzle",
    icons: {
      day: "drizzle.svg",
      night: "drizzle.svg",
    },
  },
  57: {
    name: "Dense Freezing Drizzle",
    icons: {
      day: "heavy-drizzle.svg",
      night: "heavy-drizzle.svg",
    },
  },
  61: {
    name: "Slight Rain",
    icons: {
      day: "slight-rain.svg",
      night: "slight-rain-night.svg",
    },
  },
  63: {
    name: "Moderate Rain",
    icons: {
      day: "rain.svg",
      night: "rain.svg",
    },
  },
  65: {
    name: "Heavy Rain",
    icons: {
      day: "heavy-rain.svg",
      night: "heavy-rain.svg",
    },
  },
  66: {
    name: "Light Freezing Rain",
    icons: {
      day: "rain.svg",
      night: "rain.svg",
    },
  },
  67: {
    name: "Heavy Freezing Rain",
    icons: {
      day: "heavy-rain.svg",
      night: "heavy-rain.svg",
    },
  },
  71: {
    name: "Slight snowfall",
    icons: {
      day: "light-snow.svg",
      night: "light-snow-night.svg",
    },
  },
  73: {
    name: "Moderate snowfall",
    icons: {
      day: "snow.svg",
      night: "snow.svg",
    },
  },
  75: {
    name: "Heavy snowfall",
    icons: {
      day: "heavy-snow.svg",
      night: "heavy-snow.svg",
    },
  },
  77: {
    name: "Snow Grains",
    icons: {
      day: "snow-grains.svg",
      night: "snow-grains.svg",
    },
  },
  80: {
    name: "Slight Rain Showers",
    icons: {
      day: "slight-rain-showers.svg",
      night: "slight-rain-showers-night.svg",
    },
  },
  81: {
    name: "Moderate Rain Showers",
    icons: {
      day: "rain-showers.svg",
      night: "rain-showers.svg",
    },
  },
  82: {
    name: "Violent Rain Showers",
    icons: {
      day: "heavy-rain-showers.svg",
      night: "heavy-rain-showers.svg",
    },
  },
  85: {
    name: "Light Snow Showers",
    icons: {
      day: "light-snow-showers.svg",
      night: "light-snow-showers.svg",
    },
  },
  86: {
    name: "Heavy Snow Showers",
    icons: {
      day: "heavy-snow-showers.svg",
      night: "heavy-snow-showers.svg",
    },
  },
  95: {
    name: "Thunderstorm",
    icons: {
      day: "thunderstorm.svg",
      night: "thunderstorm.svg",
    },
  },
  96: {
    name: "Slight Hailstorm",
    icons: {
      day: "hail.svg",
      night: "hail.svg",
    },
  },
  99: {
    name: "Heavy Hailstorm",
    icons: {
      day: "heavy-hail.svg",
      night: "heavy-hail.svg",
    },
  },
};

const searchWeather = document.getElementById("search-input");

const submitButton = document.getElementById("submit-button");

const countryPicture = document.getElementById("country-picture");
const countryName = document.getElementById("country-name");
const cityName = document.getElementById("city-name");
const admin1 = document.getElementById("admin1");
const admin2 = document.getElementById("admin2");
const resultsBox = document.getElementById("results-box");

const displayLocation = document.getElementById("location");
const temperatureTxt = document.getElementById("temperature");
const whatDay = document.getElementById("day-time");
const temperatureInfo = document.getElementById("temperature-info");
const tempImage = document.getElementById("weather-img");
const humidityText = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const windDirection = document.getElementById("wind-direction");
const windDirectionImage = document.getElementById("wind-direction-image");
const windDirectionInfo = document.getElementById("wind-direction-info");
const humidityImage = document.getElementById("humidity-image");
const humidityInfo = document.getElementById("humidity-info");
const windSpeedInfo = document.getElementById("wind-speed-info");
const windImage = document.getElementById("wind-image");
const rainImage = document.getElementById("rain-image");
const rainText = document.getElementById("rain-text");
const rainInfo = document.getElementById("rain-info");
const weatherDetailsInfoBox = document.getElementById(
  "weather-detailed-info-box"
);
const weatherDetailsInfo = document.getElementById("weather-detailed-info");
const temperatureMoreInfo = document.getElementById("temperature-more-info");
const weeklyForecastText = document.getElementById("weekly-forecast-text");

const firstDay = document.getElementById("first-day");
const secondDay = document.getElementById("second-day");
const thirdDay = document.getElementById("third-day");
const fourthDay = document.getElementById("fourth-day");
const fifthDay = document.getElementById("fifth-day");
const sixthDay = document.getElementById("sixth-day");

const firstDayImage = document.getElementById("first-day-image");
const secondDayImage = document.getElementById("second-day-image");
const thirdDayImage = document.getElementById("third-day-image");
const fourthDayImage = document.getElementById("fourth-day-image");
const fifthDayImage = document.getElementById("fifth-day-image");
const sixthDayImage = document.getElementById("sixth-day-image");

const firstDayMaximumTemperature = document.getElementById(
  "first-day-maximum-temperature"
);
const firstDayMinimumTemperature = document.getElementById(
  "first-day-minimum-temperature"
);

const secondDayMaximumTemperature = document.getElementById(
  "second-day-maximum-temperature"
);
const secondDayMinimumTemperature = document.getElementById(
  "second-day-minimum-temperature"
);

const thirdDayMaximumTemperature = document.getElementById(
  "third-day-maximum-temperature"
);
const thirdDayMinimumTemperature = document.getElementById(
  "third-day-minimum-temperature"
);

const fourthDayMaximumTemperature = document.getElementById(
  "fourth-day-maximum-temperature"
);
const fourthDayMinimumTemperature = document.getElementById(
  "fourth-day-minimum-temperature"
);

const fifthDayMaximumTemperature = document.getElementById(
  "fifth-day-maximum-temperature"
);
const fifthDayMinimumTemperature = document.getElementById(
  "fifth-day-minimum-temperature"
);

const sixthDayMaximumTemperature = document.getElementById(
  "sixth-day-maximum-temperature"
);
const sixthDayMinimumTemperature = document.getElementById(
  "sixth-day-minimum-temperature"
);

function styleHomePage() {
  tempImage.style.width = "150px";
  tempImage.style.height = "150px";
  tempImage.style.objectFit = "cover";

  weatherDetailsInfoBox.style.borderRadius = "5px";
  // weatherDetailsInfoBox.style.border = '1px solid rgb(196, 196, 196)';
  weatherDetailsInfoBox.style.backgroundColor = "#ffffff;";
}

function getDayOfTheWeek(data) {
  const d = new Date();
  const dayNumber = d.getDay();
  const hours = d.getHours();
  const minutes = d.getMinutes();

  if (minutes < 10) {
    whatDay.innerHTML =
      `${dayCodes[dayNumber]}, ` + `${hours}:` + `0${minutes}` + ` PM`;
  } else {
    whatDay.innerHTML =
      `${dayCodes[dayNumber]}, ` + `${hours}:` + `${minutes}` + ` PM`;
  }

  if (dayCodes[dayNumber] === "Sunday") {
    //First Day
    firstDay.innerHTML = "Mon";

    //Icon
    firstDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[1]].icons.day
    }`;

    //Maximum Temp For Day One
    firstDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[1])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    firstDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[1])}` +
      `${data.current_units.temperature_2m}`;

    //Second Day
    secondDay.innerHTML = "Tue";
    //Icon
    secondDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[2]].icons.day
    }`;

    //Maximum Temp For Day One
    secondDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[2])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    secondDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[2])}` +
      `${data.current_units.temperature_2m}`;

    //Third Day
    thirdDay.innerHTML = "Wed";
    //Icon
    thirdDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[3]].icons.day
    }`;

    //Maximum Temp For Day One
    thirdDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[3])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    thirdDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[3])}` +
      `${data.current_units.temperature_2m}`;

    //Fourth Day
    fourthDay.innerHTML = "Thu";
    //Icon
    fourthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[4]].icons.day
    }`;

    //Maximum Temp For Day One
    fourthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[4])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fourthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[4])}` +
      `${data.current_units.temperature_2m}`;

    //Fifth Day
    fifthDay.innerHTML = "Fri";
    //Icon
    fifthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[5]].icons.day
    }`;

    //Maximum Temp For Day One
    fifthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[5])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fifthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[5])}` +
      `${data.current_units.temperature_2m}`;

    //Sixth Day
    sixthDay.innerHTML = "Sat";
    //Icon
    sixthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[6]].icons.day
    }`;

    //Maximum Temp For Day One
    sixthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[6])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    sixthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[6])}` +
      `${data.current_units.temperature_2m}`;
  } else if (dayCodes[dayNumber] === "Monday") {
    //First Day
    firstDay.innerHTML = "Tue";

    //Icon
    firstDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[1]].icons.day
    }`;

    //Maximum Temp For Day One
    firstDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[1])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    firstDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[1])}` +
      `${data.current_units.temperature_2m}`;

    //Second Day
    secondDay.innerHTML = "Wed";
    //Icon
    secondDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[2]].icons.day
    }`;

    //Maximum Temp For Day One
    secondDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[2])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    secondDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[2])}` +
      `${data.current_units.temperature_2m}`;

    //Third Day
    thirdDay.innerHTML = "Thu";
    //Icon
    thirdDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[3]].icons.day
    }`;

    //Maximum Temp For Day One
    thirdDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[3])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    thirdDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[3])}` +
      `${data.current_units.temperature_2m}`;

    //Fourth Day
    fourthDay.innerHTML = "Fri";
    //Icon
    fourthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[4]].icons.day
    }`;

    //Maximum Temp For Day One
    fourthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[4])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fourthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[4])}` +
      `${data.current_units.temperature_2m}`;

    //Fifth Day
    fifthDay.innerHTML = "Sat";
    //Icon
    fifthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[5]].icons.day
    }`;

    //Maximum Temp For Day One
    fifthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[5])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fifthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[5])}` +
      `${data.current_units.temperature_2m}`;

    //Sixth Day
    sixthDay.innerHTML = "Sun";
    //Icon
    sixthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[6]].icons.day
    }`;

    //Maximum Temp For Day One
    sixthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[6])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    sixthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[6])}` +
      `${data.current_units.temperature_2m}`;
  } else if (dayCodes[dayNumber] === "Tuesday") {
    //First Day
    firstDay.innerHTML = "Wed";

    //Icon
    firstDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[1]].icons.day
    }`;

    //Maximum Temp For Day One
    firstDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[1])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    firstDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[1])}` +
      `${data.current_units.temperature_2m}`;

    //Second Day
    secondDay.innerHTML = "Thu";
    //Icon
    secondDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[2]].icons.day
    }`;

    //Maximum Temp For Day One
    secondDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[2])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    secondDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[2])}` +
      `${data.current_units.temperature_2m}`;

    //Third Day
    thirdDay.innerHTML = "Fri";
    //Icon
    thirdDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[3]].icons.day
    }`;

    //Maximum Temp For Day One
    thirdDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[3])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    thirdDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[3])}` +
      `${data.current_units.temperature_2m}`;

    //Fourth Day
    fourthDay.innerHTML = "Sat";
    //Icon
    fourthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[4]].icons.day
    }`;

    //Maximum Temp For Day One
    fourthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[4])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fourthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[4])}` +
      `${data.current_units.temperature_2m}`;

    //Fifth Day
    fifthDay.innerHTML = "Sun";
    //Icon
    fifthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[5]].icons.day
    }`;

    //Maximum Temp For Day One
    fifthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[5])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fifthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[5])}` +
      `${data.current_units.temperature_2m}`;

    //Sixth Day
    sixthDay.innerHTML = "Mon";
    //Icon
    sixthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[6]].icons.day
    }`;

    //Maximum Temp For Day One
    sixthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[6])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    sixthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[6])}` +
      `${data.current_units.temperature_2m}`;
  } else if (dayCodes[dayNumber] === "Wednesday") {
    //First Day
    firstDay.innerHTML = "Thu";

    //Icon
    firstDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[1]].icons.day
    }`;

    //Maximum Temp For Day One
    firstDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[1])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    firstDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[1])}` +
      `${data.current_units.temperature_2m}`;

    //Second Day
    secondDay.innerHTML = "Fri";
    //Icon
    secondDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[2]].icons.day
    }`;

    //Maximum Temp For Day One
    secondDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[2])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    secondDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[2])}` +
      `${data.current_units.temperature_2m}`;

    //Third Day
    thirdDay.innerHTML = "Sat";
    //Icon
    thirdDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[3]].icons.day
    }`;

    //Maximum Temp For Day One
    thirdDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[3])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    thirdDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[3])}` +
      `${data.current_units.temperature_2m}`;

    //Fourth Day
    fourthDay.innerHTML = "Sun";
    //Icon
    fourthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[4]].icons.day
    }`;

    //Maximum Temp For Day One
    fourthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[4])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fourthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[4])}` +
      `${data.current_units.temperature_2m}`;

    //Fifth Day
    fifthDay.innerHTML = "Mon";
    //Icon
    fifthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[5]].icons.day
    }`;

    //Maximum Temp For Day One
    fifthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[5])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fifthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[5])}` +
      `${data.current_units.temperature_2m}`;

    //Sixth Day
    sixthDay.innerHTML = "Tue";
    //Icon
    sixthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[6]].icons.day
    }`;

    //Maximum Temp For Day One
    sixthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[6])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    sixthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[6])}` +
      `${data.current_units.temperature_2m}`;
  } else if (dayCodes[dayNumber] === "Thursday") {
    //First Day
    firstDay.innerHTML = "Fri";

    //Icon
    firstDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[1]].icons.day
    }`;

    //Maximum Temp For Day One
    firstDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[1])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    firstDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[1])}` +
      `${data.current_units.temperature_2m}`;

    //Second Day
    secondDay.innerHTML = "Sat";
    //Icon
    secondDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[2]].icons.day
    }`;

    //Maximum Temp For Day One
    secondDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[2])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    secondDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[2])}` +
      `${data.current_units.temperature_2m}`;

    //Third Day
    thirdDay.innerHTML = "Sun";
    //Icon
    thirdDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[3]].icons.day
    }`;

    //Maximum Temp For Day One
    thirdDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[3])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    thirdDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[3])}` +
      `${data.current_units.temperature_2m}`;

    //Fourth Day
    fourthDay.innerHTML = "Mon";
    //Icon
    fourthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[4]].icons.day
    }`;

    //Maximum Temp For Day One
    fourthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[4])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fourthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[4])}` +
      `${data.current_units.temperature_2m}`;

    //Fifth Day
    fifthDay.innerHTML = "Tue";
    //Icon
    fifthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[5]].icons.day
    }`;

    //Maximum Temp For Day One
    fifthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[5])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fifthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[5])}` +
      `${data.current_units.temperature_2m}`;

    //Sixth Day
    sixthDay.innerHTML = "Wed";
    //Icon
    sixthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[6]].icons.day
    }`;

    //Maximum Temp For Day One
    sixthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[6])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    sixthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[6])}` +
      `${data.current_units.temperature_2m}`;
  } else if (dayCodes[dayNumber] === "Friday") {
    //First Day
    firstDay.innerHTML = "Sat";

    //Icon
    firstDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[1]].icons.day
    }`;

    //Maximum Temp For Day One
    firstDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[1])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    firstDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[1])}` +
      `${data.current_units.temperature_2m}`;

    //Second Day
    secondDay.innerHTML = "Sun";
    //Icon
    secondDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[2]].icons.day
    }`;

    //Maximum Temp For Day One
    secondDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[2])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    secondDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[2])}` +
      `${data.current_units.temperature_2m}`;

    //Third Day
    thirdDay.innerHTML = "Mon";
    //Icon
    thirdDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[3]].icons.day
    }`;

    //Maximum Temp For Day One
    thirdDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[3])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    thirdDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[3])}` +
      `${data.current_units.temperature_2m}`;

    //Fourth Day
    fourthDay.innerHTML = "Tue";
    //Icon
    fourthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[4]].icons.day
    }`;

    //Maximum Temp For Day One
    fourthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[4])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fourthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[4])}` +
      `${data.current_units.temperature_2m}`;

    //Fifth Day
    fifthDay.innerHTML = "Wed";
    //Icon
    fifthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[5]].icons.day
    }`;

    //Maximum Temp For Day One
    fifthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[5])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fifthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[5])}` +
      `${data.current_units.temperature_2m}`;

    //Sixth Day
    sixthDay.innerHTML = "Thu";
    //Icon
    sixthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[6]].icons.day
    }`;

    //Maximum Temp For Day One
    sixthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[6])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    sixthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[6])}` +
      `${data.current_units.temperature_2m}`;
  } else if (dayCodes[dayNumber] === "Saturday") {
    //First Day
    firstDay.innerHTML = "Sun";

    //Icon
    firstDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[1]].icons.day
    }`;

    //Maximum Temp For Day One
    firstDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[1])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    firstDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[1])}` +
      `${data.current_units.temperature_2m}`;

    //Second Day
    secondDay.innerHTML = "Mon";
    //Icon
    secondDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[2]].icons.day
    }`;

    //Maximum Temp For Day One
    secondDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[2])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    secondDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[2])}` +
      `${data.current_units.temperature_2m}`;

    //Third Day
    thirdDay.innerHTML = "Tue";
    //Icon
    thirdDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[3]].icons.day
    }`;

    //Maximum Temp For Day One
    thirdDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[3])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    thirdDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[3])}` +
      `${data.current_units.temperature_2m}`;

    //Fourth Day
    fourthDay.innerHTML = "Wed";
    //Icon
    fourthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[4]].icons.day
    }`;

    //Maximum Temp For Day One
    fourthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[4])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fourthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[4])}` +
      `${data.current_units.temperature_2m}`;

    //Fifth Day
    fifthDay.innerHTML = "Thu";
    //Icon
    fifthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[5]].icons.day
    }`;

    //Maximum Temp For Day One
    fifthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[5])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    fifthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[5])}` +
      `${data.current_units.temperature_2m}`;

    //Sixth Day
    sixthDay.innerHTML = "Fri";
    //Icon
    sixthDayImage.src = `assets/${
      weather_codes[data.daily.weather_code[6]].icons.day
    }`;

    //Maximum Temp For Day One
    sixthDayMaximumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_max[6])}` +
      `${data.current_units.temperature_2m}`;

    //Minimum Temp For Day One
    sixthDayMinimumTemperature.innerHTML =
      `${Math.ceil(data.daily.temperature_2m_min[6])}` +
      `${data.current_units.temperature_2m}`;
  }
}

const clickedSubmit = submitButton.addEventListener(
  "click",
  function searchLocation() {
    const searchValue = searchWeather.value;

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        displayLocation.innerHTML = `${data.results[0].name}, ${data.results[0].admin1}, ${data.results[0].country}`;

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,rain,precipitation,wind_direction_10m,is_day`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            temperatureTxt.innerHTML =
              `${Math.ceil(data.current.temperature_2m)}` +
              `${data.current_units.temperature_2m}`;
            temperatureInfo.innerHTML = `${
              weather_codes[data.current.weather_code].name
            }`;

            data.current.is_day === 1
              ? (tempImage.src = `assets/${
                  weather_codes[data.current.weather_code].icons.day
                }`)
              : (tempImage.src = `assets/${
                  weather_codes[data.current.weather_code].icons.night
                }`);

            //Styles
            weatherDetailsInfo.style.background = "white";
            tempImage.style.width = "150px";
            tempImage.style.height = "150px";
            tempImage.style.objectFit = "cover";
            weatherDetailsInfoBox.style.display = "flex";
            weatherDetailsInfoBox.style.flexDirection = "column";
            weatherDetailsInfoBox.style.backgroundColor = "#ffffff;";
            weatherDetailsInfoBox.style.justifyContent = "center";
            weatherDetailsInfoBox.style.alignItems = "flex-start";
            weatherDetailsInfoBox.style.padding = "15px 0 15px 10px";
            temperatureMoreInfo.style.backgroundColor = "white";

            humidityText.innerHTML =
              `${data.daily.precipitation_probability_max[0]}` +
              `${data.daily_units.precipitation_probability_max}`;

            windSpeed.innerHTML = `${data.current.wind_speed_10m}km/h`;

            const degree = data.current.wind_direction_10m;

            const directions = [
              "North",
              "Norht East",
              "East",
              "South East",
              "South",
              "South West",
              "West",
              "North West",
            ];
            const index = Math.round(degree / 45) % 8;
            windDirection.innerHTML = `${directions[index]}`;
            windDirectionImage.src = "images/icons8-weather-station-wind.gif";
            windDirectionInfo.innerHTML = "Wind Direction";

            humidityInfo.innerHTML = "Precipitation";
            humidityImage.src = "images/icons8-precipitation (1).gif";

            windSpeedInfo.innerHTML = "Wind Speed";
            windImage.src = "images/icons8-windsock.gif";

            rainImage.src = "images/icons8-rain-gauge.gif";
            rainText.innerHTML =
              `${data.current.rain}` + `${data.current_units.rain}`;
            rainInfo.innerHTML = "Rain";

            weeklyForecastText.innerHTML = "6 Day Forecast";

            getDayOfTheWeek(data);
          });
      });
  }
);

const searchLocationOnKeyUp = searchWeather.addEventListener("keyup", function searchLocation(event){

  const value = searchWeather.value;

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=5&language=en&format=json`).then((res)=>res.json()).then((data)=>{
    console.log(data);
    console.log(Object.keys(data.results).length);
    //console.log(countryCodes[countryNameFromResults]);

    if(value===""){
      resultsBox.innerHTM = "";
    }

    if(Object.keys(data.results).length == 1){
      resultsBox.innerHTML = `<p>${Object.keys(data.results).length} result for "${value}"</p>
      <div id="result-1" class="results">
                <img id="country-picture" src="https://flagcdn.com/${countryCodes[data.results[0].country]}.svg" class="country-picture">
                <p id="country-name">${data.results[0].country}</p>
                <p id="city-name">${data.results[0].name}</</p>
                <p id="admin1">${data.results[0].admin1}</</p>
                <p id="admin2">${data.results[0].admin2}</p>
            </div>`
    }

    if(Object.keys(data.results).length == 2){
      resultsBox.innerHTML = `<p>${Object.keys(data.results).length} result for "${value}"</p>
      <div id="result-1" class="results">
                <img id="country-picture" src="https://flagcdn.com/${countryCodes[data.results[0].country]}.svg" class="country-picture">
                <p id="country-name">${data.results[0].country}</p>
                <p id="city-name">${data.results[0].name}</p>
                <p id="admin1">${data.results[0].admin1}</p>
                <p id="admin2">${data.results[0].admin2}</p>
            </div>

            <div id="result-2" class="results">
                <img id="country-picture2" src="https://flagcdn.com/${countryCodes[data.results[1].country]}.svg" class="country-picture">
                <p id="country-name2">${data.results[1].country}</p>
                <p id="city-name2">${data.results[1].name}</p>
                <p id="admin1-2">${data.results[1].admin1}</p>
                <p id="admin2-2">${data.results[1].admin2}</p>
            </div>`
    }

    if(Object.keys(data.results).length == 3){
      resultsBox.innerHTML = `<p>${Object.keys(data.results).length} result for "${value}"</p>
      <div id="result-1" class="results">
                <img id="country-picture" src="https://flagcdn.com/${countryCodes[data.results[0].country]}.svg" class="country-picture">
                <p id="country-name">${data.results[0].country}</p>
                <p id="city-name">${data.results[0].name}</p>
                <p id="admin1">${data.results[0].admin1}</p>
                <p id="admin2">${data.results[0].admin2}</p>
            </div>

            <div id="result-2" class="results">
                <img id="country-picture2" src="https://flagcdn.com/${countryCodes[data.results[1].country]}.svg" class="country-picture">
                <p id="country-name2">${data.results[1].country}</p>
                <p id="city-name2">${data.results[1].name}</p>
                <p id="admin1-2">${data.results[1].admin1}</p>
                <p id="admin2-2">${data.results[1].admin2}</p>
            </div>

            <div id="result-3" class="results">
                <img id="country-picture3" src="https://flagcdn.com/${countryCodes[data.results[2].country]}.svg" class="country-picture">
                <p id="country-name3">${data.results[2].country}</p>
                <p id="city-name3">${data.results[2].name}</p>
                <p id="admin1-3">${data.results[2].admin1}</p>
                <p id="admin2-3">${data.results[2].admin2}</p>
            </div>`
    }

    if(Object.keys(data.results).length == 4){
      resultsBox.innerHTML = `<p>${Object.keys(data.results).length} result for "${value}"</p>
      <div id="result-1" class="results">
                <img id="country-picture" src="https://flagcdn.com/${countryCodes[data.results[0].country]}.svg" class="country-picture">
                <p id="country-name">${data.results[0].country}</p>
                <p id="city-name">${data.results[0].name}</p>
                <p id="admin1">${data.results[0].admin1}</p>
                <p id="admin2">${data.results[0].admin2}</p>
            </div>

            <div id="result-2" class="results">
                <img id="country-picture2" src="https://flagcdn.com/${countryCodes[data.results[1].country]}.svg" class="country-picture">
                <p id="country-name2">${data.results[1].country}</p>
                <p id="city-name2">${data.results[1].name}</p>
                <p id="admin1-2">${data.results[1].admin1}</p>
                <p id="admin2-2">${data.results[1].admin2}</p>
            </div>

            <div id="result-3" class="results">
                <img id="country-picture3" src="https://flagcdn.com/${countryCodes[data.results[2].country]}.svg" class="country-picture">
                <p id="country-name3">${data.results[2].country}</p>
                <p id="city-name3">${data.results[2].name}</p>
                <p id="admin1-3">${data.results[2].admin1}</p>
                <p id="admin2-3">${data.results[2].admin2}</p>
            </div>

            <div id="result-4" class="results">
                <img id="country-picture4" src="https://flagcdn.com/${countryCodes[data.results[3].country]}.svg" class="country-picture">
                <p id="country-name4">${data.results[3].country}</p>
                <p id="city-name4">${data.results[3].name}</p>
                <p id="admin1-4">${data.results[3].admin1}</p>
                <p id="admin2-4">${data.results[3].admin2}</p>
            </div>`
    }

    if(Object.keys(data.results).length == 5){
      resultsBox.innerHTML = `<p>${Object.keys(data.results).length} result for "${value}"</p>
      <div id="result-1" class="results">
                <img id="country-picture" src="https://flagcdn.com/${countryCodes[data.results[0].country]}.svg" class="country-picture">
                <p id="country-name">${data.results[0].country}</p>
                <p id="city-name">${data.results[0].name}</p>
                <p id="admin1">${data.results[0].admin1}</p>
                <p id="admin2">${data.results[0].admin2}</p>
            </div>

            <div id="result-2" class="results">
                <img id="country-picture2" src="https://flagcdn.com/${countryCodes[data.results[1].country]}.svg" class="country-picture">
                <p id="country-name2">${data.results[1].country}</p>
                <p id="city-name2">${data.results[1].name}</p>
                <p id="admin1-2">${data.results[1].admin1}</p>
                <p id="admin2-2">${data.results[1].admin2}</p>
            </div>

            <div id="result-3" class="results">
                <img id="country-picture3" src="https://flagcdn.com/${countryCodes[data.results[2].country]}.svg" class="country-picture">
                <p id="country-name3">${data.results[2].country}</p>
                <p id="city-name3">${data.results[2].name}</p>
                <p id="admin1-3">${data.results[2].admin1}</p>
                <p id="admin2-3">${data.results[2].admin2}</p>
            </div>

            <div id="result-4" class="results">
                <img id="country-picture4" src="https://flagcdn.com/${countryCodes[data.results[3].country]}.svg" class="country-picture">
                <p id="country-name4">${data.results[3].country}</p>
                <p id="city-name4">${data.results[3].name}</p>
                <p id="admin1-4">${data.results[3].admin1}</p>
                <p id="admin2-4">${data.results[3].admin2}</p>
            </div>

            <div id="result-5" class="results">
                <img id="country-picture5" src="https://flagcdn.com/${countryCodes[data.results[4].country]}.svg" class="country-picture">
                <p id="country-name5">${data.results[3].country}</p>
                <p id="city-name5">${data.results[4].name}</p>
                <p id="admin1-5">${data.results[4].admin1}</p>
                <p id="admin2-5">${data.results[4].admin2}</p>
            </div>`
    }
  })

})

function geolocator() {
  if (navigator.geolocation) {
    const myLoc = navigator.geolocation.getCurrentPosition(getLocation);
    //console.log(myLoc);
  } else {
    ("Your browser doesn't support geolocation API");
  }
}

function getLocation(position) {
  fetch(
    `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=sakhe_dudula`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const geoLocationName = data.geonames[0].name;
      const geoLocationCountryName = data.geonames[0].countryName;
      const geolocationProvince = data.geonames[0].adminName1;
      const geoLocationCountryCode = data.geonames[0].countryCode;

      displayLocation.innerHTML = `${geoLocationName}, ${geolocationProvince}, ${geoLocationCountryName}`;

      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${geoLocationName}&countryCode=${geoLocationCountryCode}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,rain,precipitation,wind_direction_10m,is_day`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              temperatureTxt.innerHTML =
                `${Math.ceil(data.current.temperature_2m)}` +
                `${data.current_units.temperature_2m}`;
              temperatureInfo.innerHTML = `${
                weather_codes[data.current.weather_code].name
              }`;

              data.current.is_day === 1
                ? (tempImage.src = `assets/${
                    weather_codes[data.current.weather_code].icons.day
                  }`)
                : (tempImage.src = `assets/${
                    weather_codes[data.current.weather_code].icons.night
                  }`);

              //Styles
              weatherDetailsInfo.style.background = "white";
              tempImage.style.width = "150px";
              tempImage.style.height = "150px";
              tempImage.style.objectFit = "cover";
              weatherDetailsInfoBox.style.display = "flex";
              weatherDetailsInfoBox.style.flexDirection = "column";
              weatherDetailsInfoBox.style.backgroundColor = "#ffffff;";
              weatherDetailsInfoBox.style.justifyContent = "center";
              weatherDetailsInfoBox.style.alignItems = "flex-start";
              weatherDetailsInfoBox.style.padding = "15px 0 15px 10px";
              temperatureMoreInfo.style.backgroundColor = "white";

              humidityText.innerHTML =
                `${data.daily.precipitation_probability_max[0]}` +
                `${data.daily_units.precipitation_probability_max}`;

              windSpeed.innerHTML = `${data.current.wind_speed_10m}km/h`;

              const degree = data.current.wind_direction_10m;

              const directions = [
                "North",
                "Norht East",
                "East",
                "South East",
                "South",
                "South West",
                "West",
                "North West",
              ];
              const index = Math.round(degree / 45) % 8;
              windDirection.innerHTML = `${directions[index]}`;
              windDirectionImage.src = "images/icons8-weather-station-wind.gif";
              windDirectionInfo.innerHTML = "Wind Direction";

              humidityInfo.innerHTML = "Precipitation";
              humidityImage.src = "images/icons8-precipitation (1).gif";

              windSpeedInfo.innerHTML = "Wind Speed";
              windImage.src = "images/icons8-windsock.gif";

              rainImage.src = "images/icons8-rain-gauge.gif";
              rainText.innerHTML =
                `${data.current.rain}` + `${data.current_units.rain}`;
              rainInfo.innerHTML = "Rain";

              weeklyForecastText.innerHTML = "6 Day Forecast";

              getDayOfTheWeek(data);
            });
        });
    });
}

geolocator();

submitButton.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    submitButton.click();
  }
});
