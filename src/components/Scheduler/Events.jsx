// @flow
import * as React from 'react';
import Event from './Events/Event';
import Header from './containers/Header';
import layoutStyles from './scss/layout.module.scss';
import buttonStyles from './scss/button.module.scss';

type Props = {}

type State = {}

class Events extends React.Component<Props, State> {
    render() {
        return (
            <div id='outer-container'>
                <Header title={'Events'} />
                <div className={layoutStyles.container}>
                    <div id="page-wrap">
                        <Event/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
