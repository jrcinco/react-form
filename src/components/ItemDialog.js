import React, {Fragment, useState} from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ItemDialog = ({openDialog, closeDialog, addItem}) => {

  const [values, setValues] = useState({
    name: '',
    calories: '',
    fat: '',
    carbs: '',
    protein: ''
  })

  const handleChange = (name) => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const save = () => {
    addItem(values.name, values.calories, values.fat, values.carbs, values.protein)
  }

  return (
    <Fragment>      
      <Dialog open={openDialog} onClose={closeDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new dessert.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={values.name}
            onChange={handleChange('name')}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="calories"
            label="Calories"
            value={values.calories}
            onChange={handleChange('calories')}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="fat"
            label="Fat"
            value={values.fat}
            onChange={handleChange('fat')}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="carbs"
            label="Carbs"
            value={values.carbs}
            onChange={handleChange('carbs')}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="protein"
            label="Protein"
            value={values.protein}
            onChange={handleChange('protein')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={save} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default ItemDialog