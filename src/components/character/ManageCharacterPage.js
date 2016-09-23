import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';
import CharacterForm from './CharacterForm';

class ManageCharacterPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            character: Object.assign({}, props.character),
            errors: {}
        };

        this.updateCharacterState = this.updateCharacterState.bind(this);
        this.saveCharacter = this.saveCharacter.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.character.id != nextProps.character.id) {
            this.setState({character: Object.assign({}, nextProps.character)});
        }
    }

    updateCharacterState(event) {
        const field = event.target.name;
        let character = this.state.character;
        character[field] = event.target.value;
        
        return this.setState({character: character});
    }
    
    saveCharacter(event) {
        event.preventDefault();
        this.props.actions.saveCharacter(this.state.character);
        this.context.router.push('/');
    }

    render() {
        return (
            <CharacterForm 
                allCompanies={this.props.companies}
                onChange={this.updateCharacterState}
                onSave={this.saveCharacter}
                character={this.state.character}
                errors={this.state.errors}
            />
        );
    }
}

ManageCharacterPage.propTypes = {
    character: PropTypes.object.isRequired,
    companies: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCharacterPage.contextTypes = {
    router: PropTypes.object
};

function getCharacterById(characters, id) {
    const character = characters.filter(character => character.id == id);
    if (character.length) return character[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const characterId = ownProps.params.id;
    let character = {id: '', companyId: '', name: '', powers: '', realName: '', alias: '', imageUrl: ''};

    if (characterId && state.characters.length > 0) {
        character = getCharacterById(state.characters, characterId);
    }

    const companiesFormattedForDropdown = state.companies.map(company => {
        return {
            value: company.id,
            text: company.name
        };
    });

    return {
        character: character,
        companies: companiesFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(characterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCharacterPage);
