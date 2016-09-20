'use strict';
// Tasks Controller
function TasksController(){
  this.$taskPriorityInput = $('#task_priority');
  this.$wrapper = $('#wrapper');
  this.$addTaskForm = $('#add_task');
  this.$selectListMenu = $('#select_list');
  this.$taskDescriptionInput = $('#task_description');
}

// ListsController.prototype.destroyListLiveEventListener = function(){
//
//   var self = this;
//   this.$wrapper.on('click', '.destroy-list', function(){
//
//     var listId = parseInt($(this).parents('h2').next('ul').data('id'));
//     //remember $( "html" ).parents() returns empty set.
//     List.all.splice(listId, 1, null);
//
//     self.$selectListMenu.find('option[value="'+listId+'"]').remove();
//     $(this).parents('.list').remove();
//   });


TasksController.prototype.destroyListLiveEventListener = function(){
  this.$wrapper.on('click', '.destroy-task', function(){

    var listId = parseInt($(this).parents('ul').data('id')),
        taskId = parseInt($(this).parent('li').data('id')),

        list = List.all[listId];
        list.tasks.splice(taskId, 1, null);
    $(this).parent('li').remove();
  });
};


TasksController.prototype.addTaskFormListener = function(){
  var self = this;

  this.$addTaskForm.submit(function(event) {
    event.preventDefault();
    var listId = parseInt(self.$selectListMenu.val()),
        taskDescription = self.$taskDescriptionInput.val(),
        taskPriority = self.$taskPriorityInput.val(),
        task = new Task(taskDescription, taskPriority, List.all[listId]);


    task.build();
    self.$taskDescriptionInput.val('');
    self.$taskPriorityInput.val('');
  });
};

TasksController.prototype.init = function() {

  this.addTaskFormListener();
  this.destroyListLiveEventListener();
};
