
class Formatter {
  static capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  static replaceAll(str, find, replace) {
    return str.replace(find, replace);    
  }
  static sanitize(value) {
    let str = value;
    str = str.replace('!', '');
    str = str.replace('$', '');
    str = str.replace('@', '');
    str = str.replace('#', '');
    str = str.replace('(', '');
    str = str.replace(')', '');
    str = str.replace('{', '');
    str = str.replace('^', '');
    str = str.replace('*', '');
    return str;
  }
  static titleize(value) {
    const words = value.split(" ");
    return Formatter.capitalize(words.map(word => {
      if (!(word == 'the' || word == 'a' || word == 'an' ||
        word == 'but' || word == 'of' || word == 'and' ||
        word == "for" || word == "at" || word == "by" ||
        word == "and" || word == "from"))
        return word[0].toUpperCase() + word.substring(1);
      else
        return word;
    }).join(" "));
  }
}