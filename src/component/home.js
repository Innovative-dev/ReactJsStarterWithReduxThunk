// import React from 'react';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { informationFetch } from '../store/actions'
// class Home extends React.Component{

//     constructor(props){
//         super(props);
//         console.log('constructor');
//     }
//     componentDidMount(){
//         this.props.informationFetch();
//     }

//     render(){

//         const { dataList } = this.props.homeReducer.infomation;
//         // 
//         if(dataList !=( undefined || null) ){
//             var info = dataList.map( (item, key) =>
//                    <div className="container">
//                         <div className="row">
//                             <div className="col-md-6">
//                                     <ul>
//                                          <li>  class: <b>{item.categoryName}</b></li>
//                                       </ul>
//                             </div>
//                             <div className="col-md-6">
//                                     <ul>
//                                          <li>  name: <b>{item.name}</b></li>
//                                       </ul>
//                             </div>
//                         </div>                   
//                     </div>
                   
//             ) ;
//         } else{
//             var info = <div>data is not found</div>
//         }

        
//         return(
//             <div>
//                 <br/>
//                 <h2 className="title p-5">Hello this is the title.....</h2>
//                 <br/>
//                 {info}
//             </div>
//         )
//     }
// }

//   const mapStateToProps = (state) => {
//       const { homeReducer }  = state;
//       console.log("state in home"+homeReducer);
//       return { homeReducer };
//   }

// //   function mapDispatchToProps(dispatch) {
// //     return bindActionCreators({
// //       informationFetch: informationFetch
// //     }, dispatch);
// //   }

//   const mapDispatchToProps = dispatch => {
//     return {
//         informationFetch: (value) => dispatch(informationFetch(value))
//     };
// };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(Home);



import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { informationFetch } from '../store/actions';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        console.log('constructor');
        this.state ={
            query: '',
            data: [],
            searchData:[]
        }
        this.timeout = null;

        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount(){
        // this.props.informationFetch();
        this.getData();
    }

    getData = () =>{
        console.log('getdata is called');
        fetch("https://api.github.com/users/supreetsingh247/repos")
        .then( response => response.json())
        .then( res => {
            // console.log('data response' + JSON.stringify(res));
                this.setState({ data : res, searchData: res});
        });
    }

    handleSearch = (event) =>{
        // console.log(e.target.value);

        clearTimeout(this.timeout);
        if(this.timeout){
            setTimeout( event=>  this.setState( {query: event.target.value},
                () =>{
                    this.fillterData();
                }   
                ), 2000)
        }

       

        
        // this.fillterData();
}

// fillterData = () => setTimeout(() => {
//     console.log('helo i called');
//     console.log(this.state.query);
//     var searchString = this.state.query;
//     var responseData = this.state.data;
    
//     console.log("searchString "+searchString);
//     // if(searchString.length>0){
//             responseData = responseData.filter( element => {
//                 // return element.name.toLowerCase().includes(searchString.toLowerCase());
//                 return element.name.toLowerCase().includes(searchString.toLowerCase());
//             });
            
//             this.setState( {searchData: responseData });
//     // }
//     console.log("search-data"+this.state.searchData);
// }, 1000);

fillterData = () => {
       

            var searchString = this.state.query;
            var responseData = this.state.data;

            responseData = responseData.filter( element => {
                return element.name.toLowerCase().includes(searchString.toLowerCase());
            });
            
            this.setState( {searchData: responseData });
            console.log("search-data"+this.state.searchData);
}

    render(){
       
        return(
            <div>
                <br/>
                <h2 className="title p-5">Hello this is the title.....</h2>
                <br/>
                <div className="container">
                <form>
                    <input placeholder="Search here.." value={this.state.query} onChange={this.handleSearch}/>
                </form>
                {
                    this.state.searchData.map( item =>
                        <h6 key ={item.id}>{item.name}</h6>
                )
                }
                </div>
            </div>
        )
    }
}
