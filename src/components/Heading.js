function fn(props) {

    return (
        <div style={{ border: ' 2px solid black' }}>
            <h1>id:{props.id}</h1>
            <h1>user name:{props.name}</h1>
            <h1>Age:{props.age}</h1>
            <h1>place:{props.place}</h1>
        </div>
    )
}
export default fn;