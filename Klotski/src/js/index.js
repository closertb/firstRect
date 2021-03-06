/**
 * Title:
 * @author Mr Denzel
 * @create Date 2018-02-03 21:47
 * @version 1.0
 * Description:
 */
import '../css/index.scss';

import React from 'react';
import {render} from 'react-dom'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Game from './page/game';
import Simple from "./page/simple";
import Home from "./page/home";
import {Icons} from './component/icon';
import CityPicker from './page/cityPicker';



/*
export default class Game extends React.Component {

}*/



class Root  extends React.Component {
    render(){
        return (<Router>
            <div>
                <Icons/>
                <Route exact path='/' component={Home}/>
                <Route path='/game' component={Game}/>
                <Route path='/simple' component={Simple}/>
            </div>
        </Router>)
    }
}
/**
* picker组件测试程序
* */
class Treat extends React.Component{
    render(){
        return (<CityPicker>
        </CityPicker>)
    }
}
render((
    <Root />
), document.getElementById('app'));
