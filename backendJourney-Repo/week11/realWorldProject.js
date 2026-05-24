//Real-World Project: Log Processor - 
// Build a log file processor using streams and events to parse, filter, and analyze log files efficiently

const fs = require("fs");
const readline = require("readline");
const EventEmitter = require("events");

// Create custom class
class LogProcessor extends EventEmitter {
  constructor(filePath) {
    super();

    this.filePath = filePath;
    this.errorCount = 0;
  }

  // Start processing logs
  processLogs() {

    // Create read stream
    const stream = fs.createReadStream(this.filePath);

    // Read line by line
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    // When a new line is read
    rl.on("line", (line) => {

      // Emit event for every line
      this.emit("lineRead", line);

      // Filter ERROR logs
      if (line.includes("ERROR")) {

        this.errorCount++;

        // Emit error event
        this.emit("errorLog", line);
      }
    });

    // When reading is complete
    rl.on("close", () => {

      // Emit complete event
      this.emit("done", this.errorCount);
    });
  }
}

// Create object
const processor = new LogProcessor("log.txt");

// Runs for every line
processor.on("lineRead", (line) => {
  console.log("Line Read:", line);
});

// Runs only for ERROR logs
processor.on("errorLog", (line) => {
  console.log("ERROR FOUND:", line);
});

// Runs when processing finishes
processor.on("done", (count) => {
  console.log("\nLog processing complete");
  console.log("Total Errors:", count);
});


// Start processing
processor.processLogs();