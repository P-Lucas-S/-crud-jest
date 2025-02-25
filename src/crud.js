let items = [];

function createItem(item) {
    if (!item.name || !item.price) {
        throw new Error("Item must have a name and price");
    }
    items.push(item);
    return item;
}

function getAllItems() {
    return items;
}

function getItemById(id) {
    const item = items.find((item) => item.id === id);
    if (!item) {
        throw new Error("Item not found");
    }
    return item;
}

function updateItem(id, updatedItem) {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
        throw new Error("Item not found");
    }
    items[index] = { ...items[index], ...updatedItem };
    return items[index];
}

function deleteItem(id) {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
        throw new Error("Item not found");
    }
    items.splice(index, 1);
    return { message: "Item deleted" };
}

module.exports = { createItem, getAllItems, getItemById, updateItem, deleteItem, items };