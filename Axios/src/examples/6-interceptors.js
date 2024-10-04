import { useEffect } from 'react';
import fetchAuth from '../axios/interceptors';

const url = 'https://www.course-api.com/react-store-products';
const Interceptors = () => {
  const fetchData = async () => {
    const resp = await fetchAuth("/react-store-productsss");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
