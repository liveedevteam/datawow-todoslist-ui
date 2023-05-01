import ProgressBar from '@/components/ProgressBar';
import TaskContainer from '@/components/TaskContainer';
import { useLoading } from '@/contexts/loadingContext';
import useTodos from '@/hooks/useTodos';
import React, { useEffect } from 'react';

const IndexPage = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { todos, setTodos, getTaskList } = useTodos()

  useEffect(() => {
    setIsLoading(false)
  }, [todos])

  useEffect(() => {
    setIsLoading(true)
    getTaskList()
  }, []);

  return (
    <div>
      <ProgressBar todos={todos} />
      <TaskContainer todos={todos} setTodos={setTodos} />
      <br />
    </div>
  );
};

export default IndexPage;
