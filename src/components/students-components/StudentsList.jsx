import StudentItem from "./StudentItem";
const StudentsList = ({ listStudent }) => {
  console.log("кек", listStudent);
  if (!listStudent || !listStudent.length) {
    return <h1 style={{ textAlign: "center" }}>Студенты не найдены!</h1>;
  } else
    return (
      <div className="">
        {listStudent.map((list) => (
          <StudentItem listStudent={list} key={list.id} />
        ))}
      </div>
    );
};
export default StudentsList;
