import { Typography, Box, styled, TableBody, TableRow, TableCell, Table } from "@mui/material";

import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetails = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const date = new Date(new Date().getTime()+(5*24*60*60*1000))

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        78 Ratings & 21 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="flipkart-assured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>

      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          ₹<strike>{product.price.mrp}</strike>{" "}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          
          {product.price.discount}off
        </Box>
      </Typography>
      <Typography>Availabe Offers</Typography>
      <SmallText>
        <Typography><StyledBadge/>Get extra 2% off upto ₹80 on 1 item T&C</Typography>
        <Typography><StyledBadge/>Get extra 23% off (price inclusive of discount)</Typography>
        <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100* Know More</Typography>
        <Typography><StyledBadge/>Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</Typography>
        <Typography><StyledBadge/>Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C</Typography>
      </SmallText>

<Table>
    <TableBody>
        <ColumnText>
            <TableCell style={{color: '#878787'}}>Delivery</TableCell>
            <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
        </ColumnText>

        <ColumnText>
            <TableCell style={{color: '#878787'}}>Warranty</TableCell>
            <TableCell> No Warranty</TableCell>
        </ColumnText>

        <ColumnText>
            <TableCell style={{color: '#878787'}}>Seller</TableCell>
            <TableCell>
                <Box component="span" style={{color: '#2874f0'}}>SuperComNet </Box>
                <Typography>GST invoice available</Typography>
                <Typography>View more seller starting from ₹{product.price.cost} </Typography>
            </TableCell>
        </ColumnText>

        <ColumnText>
            <TableCell colSpan={2}>
                <img src={adURL} alt="flipkart points" style={{width: 200}} />
            </TableCell>
        </ColumnText>

        <ColumnText>
            <TableCell style={{color: '#878787'}}>Description</TableCell>
            <TableCell> {product.description}</TableCell>
        </ColumnText>

    </TableBody>
</Table>

    </>
  );
};

export default ProductDetails;
