import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/construction');
  }, [router]);

  return null; // Não renderiza nada enquanto redireciona
};

export default HomePage; 