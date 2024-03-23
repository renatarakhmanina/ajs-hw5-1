export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be between 2 and 10 characters');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}