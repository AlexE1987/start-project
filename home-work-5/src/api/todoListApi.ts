import { IlistItem } from "../types/todoListIt2"

export const putData = async (id:number, data: IlistItem ) => {

  await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
};

export const postData = async (data: IlistItem) => {
  await fetch('http://localhost:3000/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
}

export const deleteData = async (id: number) => {
  await fetch(`http://localhost:3000/todo/${id}`, {
    method: 'DELETE'
  });
}