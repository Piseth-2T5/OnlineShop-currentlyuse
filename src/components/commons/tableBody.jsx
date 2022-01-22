const TableBody = ({items}) => {
    return <tbody>
        {items.map(item => <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.inStock}</td>
            <td>{item.rate}</td>
        </tr> )}
    </tbody>;
}
 
export default TableBody;