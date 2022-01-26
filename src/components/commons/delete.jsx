const Delete = ({item ,onDelete}) => {
    return <a className="text-dark del ml-1" onClick={()=>onDelete()}><i className="fas fa-times"></i></a>;
}
 
export default Delete;