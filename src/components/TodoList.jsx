import { VStack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { useMutation, useQuery } from '@apollo/client';

import TodoItem from './TodoItem';
import TotalCount from './TotalCount';
import { ALL_TODO, UPDATE_TODO } from '../apollo/todos';

const TodoList = () => {
  const {loading, error, data} = useQuery(ALL_TODO);
  const [toggleTodo, {error: updateError}] = useMutation(UPDATE_TODO);

  if(loading) {
    return <Spinner/>
  }

  if(error  || updateError) {
    return <h1>Error</h1>
  }
  
  return (
    <>
    <VStack spacing={2} mt={4}>
      {data.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          onToggle={toggleTodo}
          {...todo}
        />
      ))}
    </VStack>
    <TotalCount />
    </>
  );
};

export default TodoList;