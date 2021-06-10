import React, { FC } from 'react'
import { Typography } from '@material-ui/core';

interface Props {}

const Home:FC<Props> = (props) => {
  return (
    <Typography variant={"h1"}>
        Home
    </Typography>
   )
 }

export default Home