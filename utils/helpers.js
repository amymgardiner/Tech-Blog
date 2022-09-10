module.exports = {
  format_date: (date) => {
    const moment = require('moment-timezone');
    return `${moment(date).tz('America/Chicago').format('l')}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  format_break: (paragraph) => {
    return paragraph.replaceAll('\n', '<br />');
  },
};
