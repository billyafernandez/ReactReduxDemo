import React, { PropTypes } from 'react';

const ChangeListView = ({onClick}) => {

    const thumbnailView = () => onClick('thumbnail');
    const listView = () => onClick('list');

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="pull-right form-group">
                    <button type="button" className="btn btn-default" aria-label="Left Align"
                        onClick={thumbnailView}>
                        <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                    </button>   
                    <button type="button" className="btn btn-default" aria-label="Left Align"
                        onClick={listView}>
                        <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                    </button>
                </div>
            </div>        
        </div>
    );
};

ChangeListView.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ChangeListView;
