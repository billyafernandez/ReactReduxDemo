import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import CharactersPage from './components/character/CharactersPage';
import ManageCharacterPage from './components/character/ManageCharacterPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CharactersPage} />
        <Route path="character" component={ManageCharacterPage} />
        <Route path="character/:id" component={ManageCharacterPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
