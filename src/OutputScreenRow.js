const OutputScreenRow=(props)=>{
    return(
        <div className="screen-row">
            {/*console.log(props.value)*/}
            <input type="text" readOnly value={props.value}></input>
        </div>)
}
export default OutputScreenRow;