import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const Rating = ({ value, text }) => {
    return (
        <>
            <i
                sx={
                    value >= 1 ? (
                        <StarIcon />
                    ) : value >= 0.5 ? (
                        <StarHalfIcon />
                    ) : (
                        <StarBorderIcon />
                    )
                }
            ></i>
        </>
    )
}

export default Rating
