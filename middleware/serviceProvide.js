class Database {
  db = [];

  Add(data) {
    data.id = data.length;
    db.push(data);
    return data;
  }

  Delete(id) {
    const length = db.length;
    db = db.filter((data) => data.id != id);
    if (db.length == length) throw new Error("Resource Not Found");
    return {};
  }

  Update(id, data) {
    let index;
    for (let i = 0; i < data.length; i++) {
      if (db[i].id == id) {
        index = i;
        break;
      }
    }
    if (index == null) throw new Error("Resource Not FOund");
    db[index] = data;
    return db[index];
  }

  GetAll() {
    return db;
  }
  GetById(id) {
    const data = db.filter((data) => data.id == id);
    if (data.length == 0) throw new Error("Resource Not Found");
    return data[0];
  }
}

let db;

export function provideDatabase() {
  if (db == null) {
    db = new Database();
  }
  return db;
}
