import React, {Component, Fragment} from 'react'

import Button from '@material-ui/core/Button'
import ItemDialog from '../components/ItemDialog'
import ItemTable from '../components/ItemTable'

class ListContainer extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      openDialog: false,
      rows: [
        this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        this.createData('Eclair', 262, 16.0, 24, 6.0),
        this.createData('Cupcake', 305, 3.7, 67, 4.3),
        this.createData('Gingerbread', 356, 16.0, 49, 3.9),
        this.createData('YingYang', 356, 16.0, 49, 3.9)
      ]
    }
  }

  addItem = (name, calories, fat, carbs, protein) => {
    this.handleClose()
    this.state.rows.push({name, calories, fat, carbs, protein})
  }

  createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein }
  }

  handleClickOpen = () => {    
    this.setState({
      openDialog: true
    })
  }

  handleClose = (name) => {
    console.log(name)
    this.setState({
      openDialog: false
    })
  }  

  render() {
    return (
      <Fragment>
        <h1>Information</h1>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Item
        </Button>
        <ItemDialog openDialog={this.state.openDialog} 
                    closeDialog={this.handleClose}
                    addItem={this.addItem}
        />
        <ItemTable rows={this.state.rows}/>  
      </Fragment>
    )
  }
}

export default ListContainer