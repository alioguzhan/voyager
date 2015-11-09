
var favButton = $('<li id="favButton"><a style="background:none; text-indent:0px;">Fav</a></li>');
$('ul.social').prepend(favButton);

$('#favButton').on('click', function(){
  var songName = $('.song-name').text();
  var songDate = new Date().toLocaleDateString();
  var song = {'name': songName, 'datePlayed': songDate}
  console.log(song);
  var SONGS = [];
  chrome.storage.local.get('songList', function(result){
    console.log(result);
    if (result) {
      SONGS = result.songList || SONGS;
      SONGS.push(song);
    }
    chrome.storage.local.set({'songList': SONGS});
  });
});