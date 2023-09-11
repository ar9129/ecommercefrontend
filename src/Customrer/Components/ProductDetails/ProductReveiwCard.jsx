import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    < Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white sx={{width:56, height:56, bgcolor:"#9155fd"}}'>R</Avatar>
            </Box>
        </Grid>
        
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Aditya</p>
                    <p className='opacity-70'>April 5, 2023</p>
                </div>
            </div>
            <Rating value={4.3} precision={.01} readOnly name='half-rating'/>
            <p>Awesome fitting, superb color, I love this Shirt.</p>
        </Grid>

    </Grid>

  )
}

export default ProductReviewCard