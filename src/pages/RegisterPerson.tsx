import React, { FC } from 'react'

//compoennets
import Register from '../componentes/Forms/Register'
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

interface Props { }

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      width: '100%',
      display: 'grid',
      placeItems: 'center'
    }
  })
)
const RegisterPerson: FC<Props> = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      <Register />
    </div>

  )
}

export default RegisterPerson