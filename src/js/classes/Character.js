export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be between 2 and 10 characters');
    }

    if (!name || !type || typeof name !== 'string' || typeof type !== 'string') {
      throw new Error('Name and type must have string values');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}