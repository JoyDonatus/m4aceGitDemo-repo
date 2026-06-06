//Real-World Project: Log Processor - 
// Build a log file processor using streams and events to parse, filter, and analyze log files efficiently

const fs = require('fs');
const { Transform } = require('stream');
const EventEmitter = require('events');


const alertSystem = new EventEmitter();

alertSystem.on('criticalError', (errorMessage) => {
    console.log(`🚨 ALERT SYSTEM TRIGGERED: ${errorMessage}`);
});

class LogFilter extends Transform {
    constructor(emitter) {
        super();
        this.emitter = emitter; 
    }

    _transform(chunk, _encoding, callback) {
        const logData = chunk.toString();
        
        const lines = logData.split('\n');

        lines.forEach(line => {
            // Check if the line contains an ERROR tag
            if (line.includes('ERROR:')) {
                this.emitter.emit('criticalError', line.trim());
                
                this.push(line + '\n');
            }
        });

        callback();
    }
}

// 3. Assemble and execute the stream pipeline
const reader = fs.createReadStream('server.log');
const processor = new LogFilter(alertSystem);
const writer = fs.createWriteStream('errors_only.log');

reader.pipe(processor).pipe(writer);

writer.on('finish', () => {
    console.log('\n Log file processing complete. Cleaned errors saved to errors_only.log');
});