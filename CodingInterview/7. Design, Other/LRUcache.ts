class LRUcache {
  private readonly cacheMap = new Map();

  constructor(private readonly capacity: number) {}

  get(key: number): number {
    if (!this.cacheMap.has(key)) {
      return -1;
    }

    const value = this.cacheMap.get(key);

    this.cacheMap.delete(key);
    this.cacheMap.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.cacheMap.has(key)) {
      this.cacheMap.delete(key);
      this.cacheMap.set(key, value);
      return;
    }

    if (this.cacheMap.size < this.capacity) {
      this.cacheMap.set(key, value);
    } else {
      const oldestKey = this.cacheMap.keys().next().value;
      this.cacheMap.delete(oldestKey);
      this.cacheMap.set(key, value);
    }
  }
}
