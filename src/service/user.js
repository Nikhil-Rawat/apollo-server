class User {
  constructor() {
    this.users = new Map();
    this.id = 0;
    this.length = 0;
  }

  getAllUsers() {
    return this.users.values();
  }

  createUsers(user) {
    this.id += 1;
    this.users.set(this.id, { ...user, id: this.id });
    return this.users.get(this.id);
  }

  updateUsers(id, role) {
    const user = this.users.get(Number(id));
    this.users.set(Number(id), { ...user, role });
    return this.users.get(Number(id));
  }

  deleteUser(id) {
    this.users.delete(Number(id));
    return id;
  }

  getUser(id) {
    return this.users.get(Number(id));
  }
}

export default new User();
