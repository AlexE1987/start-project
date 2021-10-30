import { IlistItem } from "../types/todoListIt2"

export const sendData = async (id:number, data: IlistItem ) => {

  await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
}