import './style.css';
import './to-go-bg.jpg';

class Todo{
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}