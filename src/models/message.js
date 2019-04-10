export class Message {
  constructor(data = {}) {
    this.text = data['text'] || '';
    this.user = data['user'] || null;
    this.id = data['id'] || new Date().getTime();
  }

  isAuthor(user = {name: ''}) {
    return user.name === this.user.name;
  }
}