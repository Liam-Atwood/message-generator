// Random number generator
function randNumGen(num) {
    return Math.floor(Math.random() * num);
}

// Arrays of message outputs
// Array of fortunes
const fortunes = [
    "A pleasant surprise awaits you.",
    "Your hard work will pay off soon.",
    "A journey of a thousand miles begins with a single step.",
    "Your creativity will lead you to great places.",
    "Good things come to those who wait.",
    "An unexpected opportunity will knock on your door.",
    "Your kindness will be rewarded tenfold.",
    "A smile is your passport to many hearts.",
    "Your greatest strength lies within you.",
    "Adventure awaits those who are brave enough to take the first step.",
    "Your future is as bright as your faith.",
    "The best way to predict the future is to create it."
];
  
// Array of lucky numbers
const luckyNumbers = [
    "7, 13, 22, 36, 48",
    "3, 8, 17, 25, 42",
    "1, 9, 18, 27, 45",
    "5, 11, 23, 34, 49",
    "2, 14, 26, 38, 50",
    "6, 15, 24, 33, 41",
    "4, 12, 21, 39, 47",
    "10, 19, 28, 37, 46",
    "8, 16, 29, 35, 44",
    "7, 20, 31, 40, 43",
    "1, 11, 22, 33, 44",
    "9, 18, 27, 36, 45"
];
  
// Array of Chinese words
const words = [
    "幸福 (xìngfú) - happiness",
    "成功 (chénggōng) - success",
    "旅程 (lǚchéng) - journey",
    "创意 (chuàngyì) - creativity",
    "耐心 (nàixīn) - patience",
    "机会 (jīhuì) - opportunity",
    "善良 (shànliáng) - kindness",
    "微笑 (wēixiào) - smile",
    "力量 (lìliang) - strength",
    "冒险 (màoxiǎn) - adventure",
    "信念 (xìnniàn) - faith",
    "未来 (wèilái) - future"
];

// Put together the message
function messageGenerator() {
    const fortuneOutput = fortunes[randNumGen(fortunes.length)];
    const luckyNumber = luckyNumbers[randNumGen(luckyNumbers.length)];
    const word = words[randNumGen(words.length)];

    console.log(`Your fortune for today is:   ${fortuneOutput}`);
    console.log(`Your lucky number is:        ${luckyNumber}`);
    console.log(`The word of the day is:      ${word}`);
}

messageGenerator();