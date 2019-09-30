/**
 * Test example class
 */
export class Test {
  /**
   * Set up params
   * @param name
   */
  constructor(name) {
    this.name = name;
    this.date = new Date();
  }

  /**
   * Initialization script
   */
  setup() {
    console.log(`Initializing... Today is ${this.date.getDate()}`);
  }

  /**
   * Run tests
   */
  run() {
    console.log(`Testing ${this.name}`);
  }
}
