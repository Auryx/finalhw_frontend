import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const todos = useLoaderData()
  console.log(todos[0].id)
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
    <h2>Create a Cheese</h2>
    <Form action="/create" method="post">
        <input type="text" name="name" placeholder="write Name here"/>
        <input type="text" name="origin_country" placeholder="write Origin Country here"/>
        <input type="text" name="type" placeholder="write Type here"/>
        <button>Create New Cheese</button>
    </Form>
  </div>
  {todos.map((todos) => <Post key={todos.id} post={todos}  />)}
  </>;
};

export default Index;
