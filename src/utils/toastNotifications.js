import { toast } from 'sonner';

export const showSuccessToast = (message) => {
  toast.success(message, {
    style: {
      background: '#10b981',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    duration: 3000,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    style: {
      background: '#ef4444',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    duration: 4000,
  });
};

export const showWarningToast = (message) => {
  toast.warning(message, {
    style: {
      background: '#f59e0b',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    duration: 3000,
  });
};

export const showLoadingToast = (message) => {
  return toast.loading(message, {
    style: {
      background: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
  });
};

export const updateToast = (toastId, message, type = 'success') => {
  const styleConfig = {
    success: {
      background: '#10b981',
      color: '#fff',
    },
    error: {
      background: '#ef4444',
      color: '#fff',
    },
    warning: {
      background: '#f59e0b',
      color: '#fff',
    },
  };

  toast(message, {
    id: toastId,
    style: {
      ...styleConfig[type],
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
  });
};

export const showInfoToast = (message) => {
  toast(message, {
    style: {
      background: '#06b6d4',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    duration: 3000,
  });
};
