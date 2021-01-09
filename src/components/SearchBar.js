import React, { Component } from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';

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
            <>
            <div className="search-div">
                <InputGroup onChange={(e) => this.handleChange(e)} type="text" name="name" className="mb-3">
                    <Form inline>
                        <FormControl type="text" placeholder={`Search book`} className="mr-sm-2" style={{marginRight: '0', borderRadius: '10px', boxShadow: 'rgb(19, 12, 12) 0px 7px 30px 12px'}}/>
                    </Form>
                </InputGroup>
            </div>
                <div className="results-div" style={{fontSize: '16px', fontWeight: '700'}}>
                    {this.props.count === 0 ? (<>
                    </>):(<>
                        <Button>{this.props.count} results</Button>
                    </>)}
                </div>
                </>
        )
    }
}

export default SearchBar;