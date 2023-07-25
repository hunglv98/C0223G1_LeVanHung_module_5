import React, { useEffect, useState } from 'react';
import { createTask, getListTask } from "../service/taskService";

function ToDoList() {
    const [task, setTask] = useState([]);

    const getList = async () => {
        const data = await getListTask();
        setTask(data);
    }
    useEffect(() => {
        getList();
    }, []);

    const onSubmit = async () => {
        const input = document.getElementById('name').value;
        console.log(input);
        const obj = {
            name: input
        }
        await createTask(obj);
        const data = await getListTask();
        setTask(data);
    }

    return (
        <>
            <h1>To-do List</h1>
            <label htmlFor='name' ></label>
            <input type='text' id='name'></input>
            <button type='submit' onClick={onSubmit}>Submit</button>
            <ul>
                {task.map(
                    (t) => {
                        return (
                            <li key={t.id}>{t.name}</li>
                        )
                    }
                )}

            </ul>
        </>

    )

}
export default ToDoList;