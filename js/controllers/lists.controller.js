'use strict';
// Lists Controller

function ListsController() {
  this.$addTaskForm = $('#add_task');
  this.$wrapper = $('#wrapper');
  this.$addListForm = $('#add_list');
  this.$listTitleInput = $('#list_title');
  this.$selectListMenu = $('#select_list');
}

ListsController.prototype.hideTaskForm = function(){
  this.$addTaskForm.hide(); //thanks troy!
};

ListsController.prototype.init = function() {
  this.hideTaskForm();
  //and and destory
  this.addListFormListener();
  this.destroyListLiveEventListener();
};

ListsController.prototype.addListFormListener = function() {
  var self = this;
  this.$addListForm.submit(function(event) {
    //prevent the event from happening
    event.preventDefault();

    var listTitle = self.$listTitleInput.val(),
        list = new List(listTitle);
    list.build();
    self.$addTaskForm.one().show();

    self.$listTitleInput.val('');
  });
};

ListsController.prototype.destroyListLiveEventListener = function(){

  var self = this;
  this.$wrapper.on('click', '.destroy-list', function(){

    var listId = parseInt($(this).parents('h2').next('ul').data('id'));
    //remember $( "html" ).parents() returns empty set.
    List.all.splice(listId, 1, null);

    self.$selectListMenu.find('option[value="'+listId+'"]').remove();
    $(this).parents('.list').remove();
  });
};
