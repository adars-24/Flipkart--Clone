import { Box, Button, styled } from "@mui/material";
import { useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
 
 

const Image = styled("img")({
  padding: "15px",
});

const StyledButton = styled(Button)(({theme}) => ({
    width: '48%',
    borderRadius: '2px',
    height: '50px',
    color: '#fff',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}))



const ActionItems = ({ product }) => {
  const dispatch = useDispatch();
const navigate = useNavigate();

const {id} = product;

const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
navigate('/cart')
  }

  const buyNow = () => {
 let response = payUsingPaytm({amount: 500, email: 'sherr@gmail.com'})
  
  let information = {
    action: 'https://securegw-stage.paytm.in/order/process',
    params: response 
  }
  post(information);
  }
  
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="details" />
      </Box>
      <StyledButton
        variant="contained" onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained"  onClick = {() => buyNow()}    style={{ background: "#fb541b" }}>
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItems;
