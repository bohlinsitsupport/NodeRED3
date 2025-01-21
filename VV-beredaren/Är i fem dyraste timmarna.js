let nu = new Date();

nu.setMinutes(0, 0, 0);

nu = nu.toISOString();

nu = nu.substring(0, nu.indexOf(':'));

console.log(nu);