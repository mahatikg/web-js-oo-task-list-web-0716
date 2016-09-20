'use strict';
// Task Model
function Task(description, priority, list) {
  this.priority = priority;
  this.list = list;
  this.description = description;
  this.id = this.list.tasks.length;
  this.list.tasks.push(this);
}

//describe('creating new task elements', function() {
  // it('the el method should create a string representing the li', function() {
  //   var anotherTask = new Task('give the dog a bath', 'high', list),
  //       expectedString1 = '<li data-id="0"><button class="destroy-task">x</button> Walk the dog, high</li>',
  //       expectedString2 = '<li data-id="1"><button class="destroy-task">x</button> give the dog a bath, high</li>';
  //   expect(task.liEl()).toEqual(expectedString1);
  //   expect(anotherTask.liEl()).toEqual(expectedString2);
  // });

Task.prototype.liEl = function() {
  return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`;
};

Task.prototype.build = function() {
  $('#list-'+this.list.id).append(this.liEl());
};
