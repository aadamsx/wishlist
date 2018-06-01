class DeleteDoc {
  constructor(db, path, docId) {
    this.db = db;
    this.path = path;
    this.docId = docId;
  }

  async execute() {
    const docRef = this.db.collection(this.path).doc(this.docId);

    await docRef.delete();
  }
}

export default DeleteDoc;
