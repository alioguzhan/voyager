window.onload = function(){
    console.log('Date: '+ new Date());
    var SONGS = [];
    chrome.storage.local.get('songList', function(result){
        console.log(result);
        if (result) {
            SONGS = result.songList || SONGS;
        }
        window.SONGS = SONGS;
        for (var i = 0; i < SONGS.length; i++) {
            var li = document.createElement('li');
            var name = SONGS[i].name;
            console.log(name);
            li.textContent = name;
            var songList = document.getElementById('song-list');
            songList.innerHTML = li + songList.innerHTML;
        };
    });
};