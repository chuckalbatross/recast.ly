var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={ (evt) => {
      props.onSearch(evt.target.value); 
    }}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);


//WHY ISN'T THIS EVENT BINDING??? ANSWER: BABEL TRANSPILER NOT RUNNING

// class Search extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     }
//   }

//   onSearchInput(evt) {
//     this.state.inputValue = 'test';
//     // console.log('THIS: ', this);
//     console.log('Search Input Event Triggered');
//     console.log('inputValue equals: ', this.state.inputValue);
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <input className="form-control" type="text" value={this.state.inputValue} onChange={this.onSearchInput.bind(this)}/>
//         <button className="btn hidden-sm-down" onClick={this.onSearchInput.bind(this)} >
//           <span className="glyphicon glyphicon-search"></span>
//         </button>
//       </div>
//     )
//   } 
// };




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
