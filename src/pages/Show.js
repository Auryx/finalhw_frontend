import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();
  console.log(post)
  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.origin_country}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Cheese</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="write Name here"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="origin-country"
            placeholder="write Origin Country here"
            defaultValue={post.origin_country}
          />
          <input
            type="text"
            name="type"
            placeholder="write Type here"
            defaultValue={post.type}
          />
          <button>Update Cheese</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Todo</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
