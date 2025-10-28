let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);

companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");

console.log(companies);
