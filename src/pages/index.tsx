import { useLoading } from '@/contexts/loadingContext';
import useTodos from '@/hooks/useTodos';
import React, { useEffect } from 'react';

const IndexPage = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { todos, getTaskList } = useTodos()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, []);

  return (
    <div>
      <h1>Hello Next.js</h1>
    </div>
  );
};

export default IndexPage;
