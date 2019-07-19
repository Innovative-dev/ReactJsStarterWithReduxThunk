import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { informationFetch } from '../store/actions'
class Home extends React.Component{

    constructor(props){
        super(props);
        console.log('constructor');
    }
    componentDidMount(){
        this.props.informationFetch();
    }

    render(){

        const { dataList } = this.props.homeReducer.infomation;
        // 
        if(dataList !=( undefined || null) ){
            var info = dataList.map( (item, key) =>
                   <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                    <ul>
                                         <li>  class: <b>{item.categoryName}</b></li>
                                      </ul>
                            </div>
                            <div className="col-md-6">
                                    <ul>
                                         <li>  name: <b>{item.name}</b></li>
                                      </ul>
                            </div>
                        </div>                   
                    </div>
                   
            ) ;
        } else{
            var info = <div>data is not found</div>
        }

        
        return(
            <div>
                <br/>
                <h2 className="title p-5">Hello this is the title.....</h2>
                <br/>
                {info}
            </div>
        )
    }
}

  const mapStateToProps = (state) => {
      const { homeReducer }  = state;
      console.log("state in home"+homeReducer);
      return { homeReducer };
  }

//   function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//       informationFetch: informationFetch
//     }, dispatch);
//   }

  const mapDispatchToProps = dispatch => {
    return {
        informationFetch: (value) => dispatch(informationFetch(value))
    };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);