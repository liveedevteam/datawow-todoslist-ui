import { useLoading } from '@/contexts/loadingContext';
import useTodos from '@/hooks/useTodos';
import React, { useEffect } from 'react';

const IndexPage = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { todos, getTaskList } = useTodos()

  useEffect(() => {
    setIsLoading(false)
  }, [todos])

  useEffect(() => {
    setIsLoading(true)
    getTaskList()
  }, []);

  return (
    <div>
    </div>
  );
};

export default IndexPage;
