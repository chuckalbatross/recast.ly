// var VideoList = (props) => (
//   <div className="video-list">
//     <div>< VideoListEntry video={props.videos[0]}/></div>
//     <div>< VideoListEntry video={props.videos[1]}/></div>
//     <div>< VideoListEntry video={props.videos[2]}/></div>
//     <div>< VideoListEntry video={props.videos[3]}/></div>
//     <div>< VideoListEntry video={props.videos[4]}/></div>
//   </div>
// );

// BAD ATTEMPT AT HAVING VARIABLE LENGTH ARRAY PASSED IN AS PROPS
// var VideoList = (props) => {
//   return (
//     <div className="video-list">
//     {
//       for (var i = 0; i < props.videos.length; i++) {
//         <div>< VideoListEntry video={props.videos[i]}/></div>
//       }
//     }
//   </div>
//   )
// };


//WRAP IN ANONYMOUS FUNCTION TO PREVENT IT FROM BEING CALLED

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} videoClick={props.videoClick} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
