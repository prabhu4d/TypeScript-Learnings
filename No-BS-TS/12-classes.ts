interface Database {
  create(value: string): void;
  find(id: number): string;
  update(id: number, value: string): void;
  remove(id: number): void;
  findAll(): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedString: string): void;
}

class InMemoryDataBase implements Database {
  private currentIndex: number = 0;
  protected db: Record<number, string> = {};
  create(value: string): void {
    this.db[this.currentIndex] = value;
    this.currentIndex++;
  }
  find(id: number): string {
    return this.db[id];
  }
  update(id: number, value: string): void {
    this.db[id] = value;
  }
  remove(id: number): void {
    delete this.db[id];
  }
  findAll(): void {
    if (Object.keys(this.db).length === 0) {
      console.error("No Data in DB");
    } else {
      for (const tuple in this.db) {
        console.log(`${tuple} : ${this.db[tuple]}`);
      }
    }
  }
}

class DiskDB extends InMemoryDataBase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedString: string): void {
    this.db = JSON.parse(storedString);
  }
}

const redis = new DiskDB();
redis.create("nice");
redis.create("typescript");
redis.findAll();
const backup = redis.saveToString();

const pocketbaseDB = new DiskDB();
pocketbaseDB.findAll();
pocketbaseDB.restoreFromString(backup);
pocketbaseDB.findAll();
