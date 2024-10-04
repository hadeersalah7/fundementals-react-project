import { useEffect } from 'react';
import fetchAuth from '../axios/custome';
import axios from 'axios';
const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    const resp1 = await fetchAuth("/react-store-products");
    const resp2 = await axios(randomUserUrl)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
