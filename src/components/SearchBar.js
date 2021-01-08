import React, { Component } from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap';

class SearchBar extends Component {

    handleChange = (event) => {
        let { value } = event.target
        if (value) {
            this.props.filterSearch(value)
        } else {
            this.props.clearSearch()
        }
    }

    render() {
        return (
            <div className="search-div">
                <InputGroup onChange={(e) => this.handleChange(e)} type="text" name="name" className="mb-3">
                    <Form inline>
                        <FormControl type="text" placeholder="Search book" className="mr-sm-2" style={{marginRight: '0'}}/>
                    </Form>
                </InputGroup>
            </div>
        )
    }
}

export default SearchBar;