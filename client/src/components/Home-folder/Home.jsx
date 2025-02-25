
import { useEffect } from 'react';
import {Box,styled} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'


//components
import Navbar from "./Navbar"
import Banner from "./Banner"
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { getProducts } from '../../redux/actions/productActions';

const Component = styled(Box)`
padding: 10px;
background: #f2f2f2;
`;
const Home = () => {

  const {products} = useSelector(state => state.getProducts);
  

const dispatch = useDispatch();

useEffect(() => {
dispatch(getProducts())
},[dispatch])

  return (
    <>
    <Navbar/>
    <Component>
<Banner/>
<MidSlide products={products} title="Deals of the Day" timer={true}/>
<MidSection/>
<Slide products={products} title="Discount for You" timer={false}/>
<Slide products={products} title="Suggesting Items" timer={false}/>
<Slide products={products} title="Top Selection"  timer={false}/>
<Slide products={products} title="Recommended Items"  timer={false}/>
<Slide products={products} title="Trending Items"  timer={false}/>
<Slide products={products} title="Season top picks"  timer={false}/>
<Slide products={products} title="Home Appliances"  timer={false}/>
</Component>
    </>
  )
}

export default Home