// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         < Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         < VideoPlayer video={window.exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         < VideoList videos={window.exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

// REFACTOR FROM STATELESS FUNCTIONAL COMPONENT INTO CLASS COMPONENT
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoPlaying: window.exampleVideoData[0],
      videoList: [],
      searchQuery: '',
      deBounce: false,
      autoplayState: false
    };
  }

  onVideoListEntryClick(currVideo) {
    this.setState({videoPlaying: currVideo});
  }

  onSearch(searchInput) {

    this.setState({ searchQuery: searchInput });

    //bind this context
    var context = this;
    setInterval(() => {
      //deBounce prevents it from searching repeatedly. Only searches when searchQuery changes
      if (!context.state.deBounce) {
        context.setState({ deBounce: true });
        context.props.search({query: context.state.searchQuery}, context.setState.bind(context));
      }
    }, 500);
    
    this.setState({ deBounce: false });

    // options = {
    //   query: this.state.searchQuery,
    //   max: 5,
    //   key: window.YOUTUBE_API_KEY
    // }
    // this.props.search(options, this.setState.bind(this));
  }

  setAutoplay() {
    this.setState({ autoplayState: !this.state.autoplayState })
  }

  componentDidMount() {
    this.props.search('filler', this.setState.bind(this)); 
  }

  render() {
    //convert autoplayState boolean to 0 or 1 (for src url) and OFF or ON (for button text)
    var autoplay = {
      autoplayInt : this.state.autoplayState ? 1 : 0,
      autoplayString : this.state.autoplayState ? 'ON' : 'OFF'
    };

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.onSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer 
              video={this.state.videoPlaying} 
              autoplay={autoplay}
              autoplayClick={this.setAutoplay.bind(this)}
            />
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.videoList} 
              videoClick={this.onVideoListEntryClick.bind(this)}   //don't want to also bind currVideo. Why?
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// console.log(window);