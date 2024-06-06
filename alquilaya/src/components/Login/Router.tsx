import { useRouter } from 'next/router';

const useNavigation = () => {
  const router = useRouter();

  const redirectToHome = () => {
    router.push('/');
  };

  return redirectToHome;
};

export default useNavigation;
