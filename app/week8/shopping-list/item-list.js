"use client";
import { useState } from 'react';
import Item from './item';

function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    let sortedItems = [...items];
    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    const handleItemClick = (item) => {
        if (onItemSelect) {
            onItemSelect(item);
        }
    }

    return (
        <div>
            <button
            style={{backgroundColor: sortBy === 'name' ? 'black' : 'white'}}
            onClick={() => setSortBy('name')}
            >
                Sort by Name
            </button>

            <button
            style={{backgroundColor: sortBy === 'category' ? 'black' : 'white'}}
            onClick={() => setSortBy('category')}
            >
                Sort by Category
            </button>

            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} {...item} 
                    onSelect = {() => handleItemClick(item)}/>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
