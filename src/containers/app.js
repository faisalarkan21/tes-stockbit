import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
// import NavBarContainer from './navbar-container';
import { loadGetTown } from '../actions';
import MainComponent from '../components';

/* eslint no-use-before-define: ["error", { "functions": false }] */
@connect(mapStateToProps, { loadGetTown })
class App extends React.Component {
  constructor(props) {
    super(props);  
  }

  componentDidMount(){
    const { match: { params : { capitalcity }} } = this.props;
    if (capitalcity){
      return this.props.loadGetTown(`/${capitalcity}`);
    }    
  }

  componentWillReceiveProps(nextProps){
    const { match: { params : { capitalcity }} } = nextProps;
      if (capitalcity !== this.props.match.params.capitalcity) {
        return this.props.loadGetTown(`/${capitalcity}`);
      }
  }

  render() {

    const { result, match, isLoading } = this.props;
  
    if (isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <MainComponent
          {...result}
          {...match}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.callApi,
    isLoading: state.isLoading,
  };
}


export default withRouter(App);


