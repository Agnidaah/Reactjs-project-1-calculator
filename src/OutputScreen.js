import OutputScreenRow from "./OutputScreenRow";
const OutputScreen=(props)=>{
    return(
        <div className="screen">
            <OutputScreenRow value = {props.see.question}/>
            <OutputScreenRow value = {props.see.answer}/>
        </div>)
}
export default OutputScreen;