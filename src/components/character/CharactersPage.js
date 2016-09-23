import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';
import CharacterList from './CharacterList';
import CharacterThumbnailList from './CharacterThumbnailList';
import CharacterFilterByAbecedary from './CharacterFilterByAbecedary';
import CharacterFilterByText from './CharacterFilterByText';
import ChangeListView from './ChangeListView';
import { browserHistory } from 'react-router';

class CharactersPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            filter: Object.assign({}, { type: 'abecedary', value: 'All'}),
            viewType: 'thumbnail'
        };

        this.redirectToAddCharacterPage = this.redirectToAddCharacterPage.bind(this);
        this.onFilterByText = this.onFilterByText.bind(this);
        this.onFilterByAbecedary = this.onFilterByAbecedary.bind(this);
        this.onChangeListView = this.onChangeListView.bind(this);
    }

    characterRow(character, index) {
        return <div key={index}>{character.name}</div>;
    }

    redirectToAddCharacterPage() {
        browserHistory.push('/character');
    }

    onFilterByText(event) {
        this.setState({filter: { type: 'text', value: event.target.value }});
    }

    onFilterByAbecedary(filter) {
        this.setState({filter: { type: 'abecedary', value: filter }});
    }

    onChangeListView(viewType) {
        this.setState({viewType: viewType});
    }

    render() {
        const {characters} = this.props;

        let viewList = <CharacterThumbnailList characters={characters} filter={this.state.filter}/>;

        if (this.state.viewType === 'list') {
            viewList = <CharacterList characters={characters} filter={this.state.filter}/>;
        }

        return (
            <div>
                <h1>Super Heroes Wiki</h1>
                <p>Find information about the most popular superheroes of the world!</p>
                <input 
                    type="submit"
                    value="Add a Super Hero"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCharacterPage}/>                
                <CharacterFilterByText onChange={this.onFilterByText}/>
                <CharacterFilterByAbecedary onClick={this.onFilterByAbecedary}/>
                <ChangeListView onClick={this.onChangeListView} />
                {viewList}
            </div>
        );
    }
}

CharactersPage.propTypes = {
    characters: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(characterActions, dispatch) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
