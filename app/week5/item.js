export default function Item({ item }) {
    return (
        <ul>
            <li>Name: {item.name}</li>
            <li>Quantity: {item.quantity}</li>
            <li>Category: {item.category}</li>
        </ul>
    );
}