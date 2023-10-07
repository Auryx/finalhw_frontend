// YOUR DEPLOYED API BASE URL
const URL = "https://cheese-app-backend-z1im.onrender.com/cheese/"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL)
    const todos = await response.json()
    console.log(todos)
    return todos
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + params.id)
    const todo = await response.json()
    return todo
}