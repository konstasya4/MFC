import EmploeeyItem from './EmploeeyItem'
const EmploeeyList =({listEmploeey})=>{
    console.log("кек", listEmploeey)
    if(!listEmploeey|| !listEmploeey.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                Сотрудники не найдены!
            </h1>
        )
    }
    else
return (
    <div>
        {listEmploeey.map((list)=>(
            <EmploeeyItem listEmploeey={list} key={list.id}/>
        ))}
        </div>
);
}
export default EmploeeyList;