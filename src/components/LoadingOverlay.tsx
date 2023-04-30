import { useLoading } from '@/contexts/loadingContext';
import React from 'react';

const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const spinnerStyle: React.CSSProperties = {
    display: 'inline-block',
    width: 60,
    height: 60,
    border: '8px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={overlayStyle}>
      <div style={spinnerStyle}></div>
      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
