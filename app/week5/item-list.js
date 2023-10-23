"use client"
import Item from './item.js';
import { useState } from 'react';
import itemsList from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    let names = itemsList.sort((a,b) => a.name.toLowerCase > b.name.toLowerCase);

    let categories = itemsList.sort((a,b) => a.category.toLowerCase < b.category.toLowerCase);

    return (
        <div className="text-center mb-1 text-2xl font-semibold">
            <label>Sort by: </label>
            <button className="border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-center mb-1 text-2x1 font-semibold"
            onClick={() => setSortBy("name")}>
                Name
            </button>
            <button className=" border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-center mb-1 text-2x1 font-semibold"
            onClick={() => setSortBy("category")}>
                Category
            </button>

            {if (sortBy == "name") {
                {names.map((item) => (
                <Item item={item} key={item.id}></Item>
                ))}
            } else {
                {categories.map((item) => (
                    <Item item={item} key={item.id}></Item>
                ))}
            }};
            
        </div>
    );
}