function List(){
    const chars = ["abc","xyz","jkl","pqr"];
    const listItems = chars.map(character => <li>{character}</li>)

    const fruitList = [{name: "apple", weight:1},{name: "banana", weight:2},{name: "orange", weight:0.5},{name: "coconut", weight:1.5},{name:"mango", weight:1.5}];

    fruitList.sort((a,b)=>a.name.localeCompare(b.name));
    fruitList.sort((a,b)=> a.weight- b.weight)

    const fruits = fruitList.map(fruit => <li key={fruit.name} >{fruit.name}( {fruit.weight} kgs)</li>)
    return (<>
                <ul>{listItems} </ul>
                <ul>{fruits}</ul>
                <ul>{fruits}</ul>
            </>);
}
export default List