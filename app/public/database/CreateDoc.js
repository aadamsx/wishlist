class CreateDoc {
  constructor(db, path) {
    this.db = db;
    this.path = path;
    this.values = null;
  }

  withKey(key) {
    this.key = key;

    return this;
  }

  withValues(values) {
    this.values = values;

    return this;
  }

  async execute() {
    if (!this.values) {
      throw new Error('Values to create not set. Please call `withValues()` before executing');
    }

    const colRef = this.db.collection(this.path);

    let docRef;

    if (this.key) {
      docRef = colRef.doc(this.key);

      await docRef.set(this.values);
    } else {
      docRef = await colRef.add(this.values);
    }


    return {
      ...this.values,
      id: docRef.id,
    };
  }
}

export default CreateDoc;
