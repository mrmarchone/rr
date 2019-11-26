import React from 'react';
import {Searchh, InputSearch} from './style';
import {Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
class Search extends React.Component {
    closeS () {
        this.props.close(false);
    }
    render () {
        return (
            <Searchh show={this.props.search} className={'text-center'}>
                <i className={'fa fa-times fa-3x text-light my-5'} onClick={()=>this.closeS()}></i>
                <InputSearch>
                    <InputGroup>
                        <Input style={{
                            backgroundColor: 'transparent',
                            borderRightColor: 'transparent',
                            borderTopLeftRadius: '0px',
                            borderBottomLeftRadius: '00px',
                            border: 'none',
                            borderBottom: '1px solid rgb(48, 142, 191)',
                            color: 'white'
                        }}/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText className='iconSearch'
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderLeftColor: 'transparent',
                                                color: 'white',
                                                borderTopRightRadius: '0px',
                                                borderBottomRightRadius: '0px',
                                                border: 'none',
                                                borderBottom: '1px solid rgb(48, 142, 191)'
                                            }}>
                                <i className="fa fa-search"></i></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </InputSearch>
            </Searchh>
        );
    }
}
export default Search;