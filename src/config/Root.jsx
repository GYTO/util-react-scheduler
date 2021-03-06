// @flow

import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Scheduler from '../components/Scheduler';
import SchedulerBuilder from '../components/SchedulerBuilder';
import Sort from '../components/Sort';
import Algolia from '../components/Algolia';
import Analytics from '../components/Analytics';
import CreateRawData from '../components/CreateRawData';
import TableFilter from '../components/TableFilter';
import RestApiLoop from '../components/RestAPILoop';
import Cart from '../components/Cart';
import Tabs from '../components/Tabs';
import Firebase from '../components/Firebase';
import Services from '../components/Scheduler/Services';
import Events from '../components/Scheduler/Events';

class Root extends React.Component<{}> {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to='/'>Scheduler Builder</Link></li>
                        <li><Link to='/scheduler'>Scheduler</Link></li>
                        <li><Link to='/algolia'>Algolia</Link></li>
                        <li><Link to='/sort'>Sort</Link></li>
                        <li><Link to='/analytics'>Analytics</Link></li>
                        <li><Link to='/rawData'>rawData</Link></li>
                        <li><Link to='/table'>Table Filtering</Link></li>
                        <li><Link to='/rest-api-loop'>Rest API Loop with Log</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/tabs'>Tabs</Link></li>
                        <li><Link to='/firebase'>Firebase</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/events'>Events</Link></li>
                    </ul>

                    <Route path='/' exact component={SchedulerBuilder} />
                    <Route path='/scheduler' component={Scheduler} />
                    <Route path='/algolia' component={Algolia} />
                    <Route path='/sort' component={Sort} />
                    <Route path='/analytics' component={Analytics} />
                    <Route path='/rawData' component={CreateRawData} />
                    <Route path='/table' component={TableFilter} />
                    <Route path='/rest-api-loop' component={RestApiLoop} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/tabs' component={Tabs} />
                    <Route path='/firebase' component={Firebase} />
                    <Route path='/services' component={Services} />
                    <Route path='/events' component={Events} />
                </nav>
            </Router>
        );
    }
}

export default Root;
