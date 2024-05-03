import TeacherItem from './TeacherItem'
const TeacherList =({listTeacher})=>{
    console.log("кек", listTeacher)
    if(!listTeacher|| !listTeacher.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }
    else
return (
    <div>
        {listTeacher.map((list)=>(
            <TeacherItem listTeacher={list} key={list.id}/>
        ))}
        </div>
);
}
export default TeacherList;