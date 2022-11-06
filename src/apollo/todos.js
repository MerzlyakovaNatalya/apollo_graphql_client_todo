import { gql } from '@apollo/client';

//получение todo
export const ALL_TODO = gql`
query AllTodos {
    todos: allTodos {
    id
    title
    completed
  }
}
`
//добавление todo
export const ADD_TODO = gql`
mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!){
  newTodo: createTodo(title: $title, user_id: $userId, completed: $completed){
    id
    title
    completed
  }
}
`
//обновление todo
export const UPDATE_TODO = gql`
mutation UpdateTodo($id: ID!, $completed: Boolean){
  updateTodo(id: $id, completed: $completed){
    id
    title
    completed
  }
}
`