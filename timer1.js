const arguments = process.argv.slice(2);
for (const arg of arguments) {
  if (arg < 0 || isNaN(arg)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (arg * 1000));
}