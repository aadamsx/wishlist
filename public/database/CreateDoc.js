class CreateDoc {
  constructor(db, path) {
    this.db = db;
    this.path = path;
    this.value = null;
  }

  withValue(value) {
    this.value = value;

    return this;
  }

  async execute() {
    if (!this.value) {
      throw new Error('Value to create not set. Please call `withValue()` before executing');
    }

    const query = this.db.collection(this.path);

    const docRef = await query.add(this.value);

    return {
      ...this.value,
      id: docRef.id,
    };
  }
}

export default CreateDoc;
