/*
Design a logger system that receives a stream of messages along with its timestamps,
each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity),
return true if the message should be printed in the given timestamp, otherwise return false.

It is possible that several messages arrive roughly at the same time.
*/

class Logger {
  private messagesHashTable: { [key: string]: number } = {};

  // Time complexity: O(1)
  // Space complexity: O(n)
  shouldPrintMessage(timestamp: number, message: string) {
    if (
      !this.messagesHashTable[message] ||
      timestamp - this.messagesHashTable[message] >= 10
    ) {
      this.messagesHashTable[message] = timestamp;
      return true;
    }

    return false;
  }
}

// Tests

const logger = new Logger();

console.log(logger.shouldPrintMessage(1, 'foo')); // returns true;
console.log(logger.shouldPrintMessage(2, 'bar')); // returns true;
console.log(logger.shouldPrintMessage(3, 'foo')); // returns false;
console.log(logger.shouldPrintMessage(8, 'bar')); // returns false;
console.log(logger.shouldPrintMessage(10, 'foo')); // returns false;
console.log(logger.shouldPrintMessage(11, 'foo')); // returns true;
