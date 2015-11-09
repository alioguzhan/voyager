window.onload = function(){
    console.log('Date: '+ new Date());
    var SONGS = [];
    chrome.storage.local.get('songList', function(result){
        console.log(result);
        if (result) {
            SONGS = result.songList || SONGS;
        }
        for (var i = 0; i < SONGS.length; i++) {
            var li = document.createElement('li');
            li.className = "song-item";
            var name = SONGS[i].name;
            li.textContent = name;
            var songList = document.getElementById('song-list');
            songList.innerHTML = li.outerHTML + songList.innerHTML;
        };
    });
};