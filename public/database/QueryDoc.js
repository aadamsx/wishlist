class QueryDoc {
  constructor(db, path, docId) {
    this.db = db;
    this.path = path;
    this.docId = docId;
  }

  async execute() {
    const query = this.db.collection(this.path);

    const snapshot = await query.doc(this.docId).get();

    return snapshot.data();
  }
}

export default QueryDoc;
