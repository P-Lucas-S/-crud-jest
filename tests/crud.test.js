// tests/crud.test.js
const { createItem, getAllItems, getItemById, updateItem, deleteItem, items } = require('../src/crud');

beforeEach(() => {
    // Limpa o array de items antes de cada teste
    items.length = 0;
});

test('createItem should add a new item to the list', () => {
    const newItem = { id: 1, name: "Item 1", price: 10 };
    createItem(newItem);
    expect(items).toContainEqual(newItem);
});

test('createItem should throw an error if name or price is missing', () => {
    expect(() => createItem({ id: 1 })).toThrow("Item must have a name and price");
});

test('getAllItems should return all items', () => {
    const item1 = { id: 1, name: "Item 1", price: 10 };
    const item2 = { id: 2, name: "Item 2", price: 20 };
    createItem(item1);
    createItem(item2);
    expect(getAllItems()).toEqual([item1, item2]);
});

test('getItemById should return the correct item', () => {
    const item1 = { id: 1, name: "Item 1", price: 10 };
    createItem(item1);
    expect(getItemById(1)).toEqual(item1);
});

test('getItemById should throw an error if item is not found', () => {
    expect(() => getItemById(999)).toThrow("Item not found");
});

test('updateItem should update an existing item', () => {
    const item1 = { id: 1, name: "Item 1", price: 10 };
    createItem(item1);
    const updatedItem = updateItem(1, { name: "Updated Item", price: 15 });
    expect(updatedItem).toEqual({ id: 1, name: "Updated Item", price: 15 });
});

test('updateItem should throw an error if item is not found', () => {
    expect(() => updateItem(999, { name: "Updated Item" })).toThrow("Item not found");
});

test('deleteItem should remove an item from the list', () => {
    const item1 = { id: 1, name: "Item 1", price: 10 };
    createItem(item1);
    deleteItem(1);
    expect(items).not.toContainEqual(item1);
});

test('deleteItem should throw an error if item is not found', () => {
    expect(() => deleteItem(999)).toThrow("Item not found");
});