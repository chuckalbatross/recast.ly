var searchYouTube = (options, callback) => {
  // NOTE TO SELF. REVIEW 'THIS'. https://stackoverflow.com/questions/133973/how-does-this-keyword-work-within-a-function
  // this.dog = 'doggy';
  // console.log(this.dog);

  console.log('YOUTUBE API KEY', window.YOUTUBE_API_KEY);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query || 'puppy',
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: true,
      type: 'video',
      maxResults: options.max || 5 
    },
    success: function (data) {
      console.log('Success', data);
      // console.log('THIS', this);
      callback({videoList: data.items, videoPlaying: data.items[0]});


      //iterate through the data.items array, pushing the objects to callback
      // for (var i = 0; i < data.items.length; i++) {
      // callback({videoList: data.items});
      // }
    },
    error: function (data) {
      console.error('Fail', data);
    }
  });
};

window.searchYouTube = searchYouTube;
