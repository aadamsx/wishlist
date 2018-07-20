class UpdateDoc {
  constructor(db, path, docId) {
    this.db = db;
    this.path = path;
    this.docId = docId;
  }

  withValue(values) {
    this.values = values;

    return this;
  }

  async execute() {
    const docRef = this.db.collection(this.path).doc(this.docId);

    await docRef.update(this.values);

    const snapshot = await docRef.get();

    return {
      ...snapshot.data(),
      id: this.docId,
    };
  }
}

export default UpdateDoc;
