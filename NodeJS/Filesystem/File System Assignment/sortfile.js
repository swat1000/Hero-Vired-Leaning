let fs = require('fs');

// Getting the input and output file 
let args = process.argv.slice(2);
let inputFile = args[0];
let outputFile = args[1];

// Checking that input and output file there
if (!inputFile || !outputFile) {
  console.error('Please provide input and output file paths.');
  process.exit(1);
}

// Checking that the input file exists
if (!fs.existsSync(inputFile)) {
  console.error(`File not found: ${inputFile}`);
  process.exit(1);
}

// Reading the contents of the file
let filecontent = fs.readFileSync(inputFile, 'utf8');

// Spliting the file contents into arra
let lines = filecontent.split('\n');

// Filtering empty lines and lines that starting with "#"
let filteredLines = lines.filter(line => {
  return line.trim() !== '' && !line.startsWith('#');
});

// Sorting the filtered lines alphabet order
let sortedLines = filteredLines.sort();

// Writing the sorted lines to the op file
fs.writeFileSync(outputFile, sortedLines.join('\n'));

console.log(`Sorted lines are been written to ${outputFile}`);
