let person = process.argv[2];

module.exports = function (result) {
  console.log('Searching...');

  console.log(`Found ${result.length} person(s) by name ${person}:`);

  result.forEach((row) => {
    console.log(row.first_name + ' ' + row.last_name + ', born ' + row.birthdate);
    // console.log(`%{row.first_name} %{row.last_name} born: %{row.birthdate}`);
  });
}