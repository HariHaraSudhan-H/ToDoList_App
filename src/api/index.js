const customFetch = async (url,{customConfig})=>{
    try {
        const response = await fetch(url,customConfig);
        const data = await response.json();
        console.log(data);

        if(data){
            return {
                data:data,
                success:true
            }
        }

        throw new Error(data.message);
    } catch (error) {
        return {
            message: error.message,
            success: false
        }
    }
}

export const getTodos = ()=>{
    return customFetch('https://jsonplaceholder.typicode.com/todos',{
        method : 'GET'
    })
}

export const addTodo = (newTodo)=>{
    return customFetch('https://jsonplaceholder.typicode.com/todos',{
        method : 'POST'
    })
}
export const updateTodo = (todoId)=>{
    return customFetch('https://jsonplaceholder.typicode.com/todos',{
        method : 'PUT'
    })
}
export const deleteToDo = (todoId)=>{
    return customFetch('https://jsonplaceholder.typicode.com/todos',{
        method : 'DELETE'
    })
}