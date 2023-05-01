import ProgressBar from '@/components/ProgressBar';
import TaskContainer from '@/components/TaskContainer';
import { useLoading } from '@/contexts/loadingContext';
import useTodos from '@/hooks/useTodos';
import React, { useEffect } from 'react';

const IndexPage = () => {
  const { setIsLoading } = useLoading();
  const {
    todos,
    updateData,
    setTodos,
    getTaskList,
  } = useTodos()

  useEffect(() => {
    // console.log(todos)
    if (todos.state === "GET_TASKLIST_SUCCESS") {
      setTodos({
        ...todos,
        state: "STAND_BY"
      })
    }
    setIsLoading(false)
  }, [todos.state, updateData.state])

  useEffect(() => {
    setIsLoading(true)
    getTaskList()
  }, []);

  return (
    <div>
      <ProgressBar todos={todos} setTodos={setTodos} />
      <TaskContainer todos={todos} setTodos={setTodos} />
      <br />
    </div>
  );
};

export default IndexPage;
