import { useState } from 'react';
import {
  Button,
  createMultiStyleConfigHelpers,
  FormControl,
  Input,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_TODO, ALL_TODO } from '../apollo/todos';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [addTodo, {error}] = useMutation(ADD_TODO, {
    update(cache, {data: {newTodo}}) {
     const {todos} = cache.readQuery({query: ALL_TODO});
     cache.writeQuery({
      query: ALL_TODO,
      data: {
        todos: [newTodo, ...todos]
      }
     })
    }
  })

  const handleAddTodo = () => {
    if (text.trim().length) {
      addTodo({
        variables: {
          title: text,
          userId : 123,
          completed: false
        }
      })
      setText('');
    }
  }

  const handleKey = (event) => {
    if (event.key === "Enter") handleAddTodo();
  }

  if (error) {
   return <h1>Error...</h1>
  }

  return (
    <FormControl display={'flex'} mt={6}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKey}
      />
      <Button onClick={handleAddTodo}>Add todo</Button>
    </FormControl>
  );
};

export default AddTodo;