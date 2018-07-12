class QueryDoc {
  constructor(db, path, docId) {
    this.db = db;
    this.path = path;
    this.docId = docId;
  }

  async execute() {
    const docRef = this.db.collection(this.path).doc(this.docId);

    const snapshot = await docRef.get();

    return {
      ...snapshot.data(),
      id: this.docId,
    };
  }
}

export default QueryDoc;
