var nam="Basil khan";
console.log("lower case",nam.toLowerCase());
console.log("upper case",nam.toUpperCase());
function func(input:string):string{
      return input
      .toLowerCase()
      .split(' ')
      .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
      .join(' ');
}

const titleCaseName= func(nam);
console.log("Title case",titleCaseName);
