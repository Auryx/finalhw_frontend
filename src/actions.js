import { redirect } from "react-router-dom"

const URL = "https://cheese-app-backend-z1im.onrender.com/cheese/"

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newTodo = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    // send request to backend
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    console.log(newTodo)
    // redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get todo id
    const id = params.id

    // get form data
    const formData = await request.formData()

    // construct request body
    const updatedTodo = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }
    console.log(updatedTodo)
    // send request to backend
    const response = await fetch(URL + `${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })
    console.log(response)
    // redirect back to show page page
    return redirect(`/${id}`)
}

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id

    // send request to backend
    await fetch(URL + `${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}
