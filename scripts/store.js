/* eslint-disable strict */

const store = (function () {

  const items = [];
  const hideCheckedItems = false;
  searchTerm = '';

  const findById = (id) => {
    return items.find(item => item.id === id);
  };

  const addItem = function(name) {
    try {
        Item.validateName(name);
        const item = Item.create(name);
        this.items.push(item)
    } catch {
        console.log('error.message');
    }
  }

  const findAndToggleChecked = function(id) {
      const item = this.findById(id);
      item.checked = !item.checked;
  }

  const findAndUpdateName = function(id, newName) {
      try {
        Item.validateName(newName);
        const item = findById(id);
        item.name = newName;
      } catch {
          console.log('Cannot update name: {error.message}');

      }
  }
  const findAndDelete = function(id) {
    const itemIndex = this.items.findIndex( item => item.id == id);
    this.items.splice(itemIndex, 1);
  }


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}() );
