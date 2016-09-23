import React, { PropTypes } from 'react';

const CharacterFilterByText = ({onChange}) => {

    return (
        <div className="row">
            <div className="col-md-12 form-group">
                <input className="pull-right" type="text" onChange={onChange} placeholder="search" />
            </div>
        </div>
    );
};

CharacterFilterByText.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default CharacterFilterByText;
