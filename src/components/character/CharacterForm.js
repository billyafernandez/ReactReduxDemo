import React from 'react';
import TextInput from '../common/TextInput';
import TextAreaInput from '../common/TextAreaInput';
import SelectInput from '../common/SelectInput';

const CharacterForm = ({character, allCompanies, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Super Hero</h1>

            <SelectInput
            name="companyId"
            label="Company"
            value={character.companyId}
            defaultOption="Select Company"
            options={allCompanies}
            onChange={onChange} error={errors.companyId}
            />

            <TextInput
            name="name"
            label="Name"
            value={character.name}
            onChange={onChange}
            error={errors.name}/>            
            
            <TextAreaInput
            name="powers"
            label="Powers"
            value={character.powers}
            onChange={onChange}
            error={errors.powers}/>    

            <TextInput
            name="realName"
            label="Real Name"
            value={character.realName}
            onChange={onChange}
            error={errors.realName}/>

            <TextAreaInput
            name="alias"
            label="Aliases"
            value={character.alias}
            onChange={onChange}
            error={errors.alias}/>          

            <div className="img-form-group">
                <TextInput
                name="imageUrl"
                label="Image Url"
                value={character.imageUrl}
                onChange={onChange}
                error={errors.imageUrl}/>
                <div className="text-center">
                    <img src={character.imageUrl} width="160" height="160" alt={character.name}/>
                </div>
            </div>

            <input
            type="submit"
            disabled={loading}
            value={loading ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={onSave}/>

        </form>
    );
};

CharacterForm.propTypes = {
    character: React.PropTypes.object.isRequired,
    allCompanies: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CharacterForm;
