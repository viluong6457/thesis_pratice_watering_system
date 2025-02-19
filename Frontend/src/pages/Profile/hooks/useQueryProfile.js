import { useQuery } from 'react-query';
import { ProfileService } from '../ProfileService';

const useQueryProfile = () => {
  const { data, isLoading } = useQuery('get-Profile', ProfileService.get, {
    refetchOnWindowFocus: false
  });
  return {
    profile: data?.usr,
    isLoading
  };
};

export default useQueryProfile;
