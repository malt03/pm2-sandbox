export async function main() {
  let i = 0;
  while (true) {
    await fetch('http://localhost:3000');
    console.log(`Fetched ${i++}`);
  }
}

main();
