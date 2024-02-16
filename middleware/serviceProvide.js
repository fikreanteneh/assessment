
class Database {
  db = [];

  Add(data) {
    db.push(data);
  }

  Delete(id) {
      db = db.filter
    }
    
    Update(data) {
        
    } 
    GetAll()  {
    
}
    GetById() {
    
    }
    

}

let db;

export function provideDatabase() {
    if (db == null) {
        db = new Database()
    }
    return db;
} 