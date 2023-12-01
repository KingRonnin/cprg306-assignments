"use client";

import { useState } from 'react';
import { useEffect } from 'react';
import NewItem from './new-item.js';  
import ItemList from './item-list.js'; 
import itemsData from './items.json'; 
import MealsIdeas from './meal-ideas.js'
import getItems from './_services/shopping-list-service.js'
import addItem from './_services/shopping-list-service.js'

function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");


    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (selectedItem) => {
        const cleanName = selectedItem.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
        setSelectedItemName(cleanName);
    };

    return (
        <div style={{display: 'flex'}}>
            <div>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <MealsIdeas ingredient={selectedItemName}/>
        </div>
    );
}

async function loadItems() {
    const items = await getItems(user.iud);
    setItems(items);
}

useEffect(() => {loadItems()}, [user.uid]);

async function handleAddItem(newItem) {
    const items = await addItem(newItem, user.uid);
    setItems(prevItems => [...prevItems, items]);
}

export default Page;
