process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
  process.stdout.write('\r-   ');
  process.stdout.write('\r\\   '); 
  
}, 300,500,700);
