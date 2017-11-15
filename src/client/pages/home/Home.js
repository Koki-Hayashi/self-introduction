import React from 'react';
import {connect} from 'react-redux';
import {updateTitle, save, fetch} from './homeActionCreator';
import {setAppState} from '../../header/HeaderUpdateService'

const blockName = 'home';

class Home extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.home)
	setAppState(nextProps.home.status);
  }

  componentDidMount() {
	this.props.fetch();
  }

  render() {
	const {home, updateTitle, save} = this.props;
	const {title} = home;

	return (
			<div className={`${blockName}`}>
			  <div className={`${blockName}__title`}>
				{title}
			  </div>
			  <div>
				<span>change title:</span><input onChange={(e) => updateTitle(e.target.value)}/>
			  </div>
			  <button className={`${blockName}__save-btn`} onClick={save}>save</button>
			</div>
	);
  }
}

export default connect(
		state => ({
		  home: state.homeReducer.model,
		}),
		{updateTitle, save, fetch},
)(Home);