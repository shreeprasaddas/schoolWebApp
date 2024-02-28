// const { AD2BS } = require('nepali-date-converter');
import NepaliDate from "nepali-date-converter"
// Convert English date to Nepali date
const englishDate = new Date('2024-02-22');
const nepaliDate = NepaliDate.fromAD(englishDate);
console.log('Nepali Date:', nepaliDate.format());
  