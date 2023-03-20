interface Database<Key, Value> {
  create(id: Key, value: Value): void;
  find(id: Key): Value;
  update(id: Key, value: Value): void;
  remove(id: Key): void;
  findAll(): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedString: string): void;
}

type DBKeys = string | number | symbol;

class InMemoryDataBase<Key extends DBKeys, Value>
  implements Database<Key, Value>
{
  protected db: Record<Key, Value> = {} as Record<Key, Value>;
  create(id: Key, value: Value): void {
    this.db[id] = value;
  }
  find(id: Key): Value {
    return this.db[id];
  }
  update(id: Key, value: Value): void {
    this.db[id] = value;
  }
  remove(id: Key): void {
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

class DiskDB<Key extends DBKeys, Value>
  extends InMemoryDataBase<Key, Value>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedString: string): void {
    this.db = JSON.parse(storedString);
  }
}

const redis = new DiskDB();
redis.create("first", "nice");
redis.create(10, 10);
redis.create("12", 12);
redis.findAll();
const backup = redis.saveToString();

const pocketbaseDB = new DiskDB();
pocketbaseDB.findAll();
pocketbaseDB.restoreFromString(backup);
pocketbaseDB.findAll();
