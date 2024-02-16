class Database {
  db = [];

  Add(data) {
    data.id = data.length ?? 0;
    this.db.push(data);
    return data;
  }

  Delete(id) {
    const length = this.db.length;
    this.db = this.db.filter((data) => data.id != id);
    if (this.db.length == length) throw new Error("Resource Not Found");
    return {};
  }

  Update(id, data) {
    let index;
    for (let i = 0; i < data.length; i++) {
      if (this.db[i].id == id) {
        index = i;
        break;
      }
    }
    if (index == null) throw new Error("Resource Not FOund");
    this.db[index] = data;
    return this.db[index];
  }

  GetAll() {
    return this.db;
  }
  GetById(id) {
    const data = this.db.filter((data) => data.id == id);
    if (data.length == 0) throw new Error("Resource Not Found");
    return data[0];
  }
}

let database;

export function provideDatabase() {
  if (database == null) {
    database = new Database();
  }
  return database;
}
