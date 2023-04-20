const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const searchStyle = {
    border: "1px solid grey",
    borderRadius: "5px",
    height: "30px",
    width: "30%",
    padding: "0px 20px 0px 20px",
    outline: "0",
    backgroundColor: "#f5f5f5",
    fontSize: "15px",
    marginRight: "2px"
}

const aggButtonStyle = {
    border: "1px solid grey",
    height: "30px",
    borderRadius: "5px"
}

export default function SearchBar(props) {
    return (
        <div style={containerStyle}>
            <input type='search' style={searchStyle} />
            <button onClick={props.onSearch} style={aggButtonStyle}>
                Agregar
            </button>
        </div>
    );
}
