import React, { Component } from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';

class SearchBar extends Component {

    handleChange = (event) => {
        let { value } = event.target
        console.log(value, "VALUE!!")
        if (value) {
            this.props.filterSearch(value)
            this.setState({value: value})
        } else {
            this.props.clearSearch()
        }
    }

    render() {
        return (
            <div className="search-div">
                <InputGroup onChange={(e) => this.handleChange(e)} type="text" name="name" className="mb-3">
                    <Form inline>
                        <FormControl type="text" placeholder={`Search book`} className="mr-sm-2" style={{marginRight: '0', borderRadius: '10px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}/>
                        {this.props.count === 0 ? 
                        (<>
                            <Button className="button-search" type="text"><img style={{width: '20px'}} src="https://res.cloudinary.com/ytyt/image/upload/v1610278437/search_p5dc7v.png" alt="search"/></Button>
                        </>):(<>
                            <Button href={`/books/openlibra/${this.state?.value}`} className="button-search" type="text">{this.props.count} results</Button>
                            </>)}
                    </Form>
                </InputGroup>
            </div>
        )
    }
}

export default SearchBar;