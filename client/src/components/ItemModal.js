import React, { Component } from 'react';
// import React, { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import uuid from 'uuid';

class ItemModal extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
      this.setState({
        modal: !this.state.modal
      })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem ={
      id: uuid(),
      name:this.state.name
    }

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button
          color = 'dark'
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
          >Add Item
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for='item'>Item</Label>
                  <Input
                    type="text"
                    name="name"
                    id="id"
                    placeholder="Add Shopping List"
                    onChange={this.onChange}/>
                    <Button color="dark" style= {{marginTop: '2rem'}}
                      block>Add Item</Button>
                </FormGroup>
              </Form>
            </ModalBody>

          </Modal>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
