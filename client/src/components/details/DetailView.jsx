import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productActions";

import { Box,   styled, Grid} from "@mui/material";

import ActionItems from "./ActionItems";
import ProductDetails from "./ProductDetails";




const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;



const Container = styled(Grid)(({theme}) => ({
  background: '#ffffff',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: 0
    }
}))
  


const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  console.log(product)

  return (
    <Component>
      {product && Object.keys(product).length && 
        <Container container>
          <Grid item lg = {4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>

          <RightContainer item lg = {8} md={8} sm={8} xs={12}>
            
            <ProductDetails product={product}/>
          </RightContainer>
        </Container>
      }
    </Component>
  );
};

export default DetailView;
