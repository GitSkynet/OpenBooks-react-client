import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';

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
                {/* <input type="text" name="name" onChange={(e) => this.handleChange(e)} placeholder={"Search over the OpenLibra API..."}></input> */}
                <InputGroup onChange={(e) => this.handleChange(e)} type="text" name="name" className="mb-3">
                    <FormControl
                        placeholder="Search over the OpenLibra API..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}

export default SearchBar;