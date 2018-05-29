class QueryCollection {
  constructor(db, path) {
    this.db = db;
    this.path = path;
    this.whereClauses = [];
  }

  where(field, operater, value) {
    this.whereClauses.push({ field, operater, value });

    return this;
  }

  async execute() {
    const data = {};
    let query = this.db.collection(this.path);

    this.whereClauses.forEach((c) => {
      query = query.where(c.field, c.operater, c.value);
    });

    const snapshot = await query.get();

    snapshot.forEach((doc) => {
      data[doc.id] = doc.data();
    });

    return data;
  }
}

export default QueryCollection;
