function onChange(files) {
  var option = {};
  var labels = document.getElementsByTagName('label');
  for(var i = 0, length = labels.length; i < length; i++) {
    var documentId = labels[i].getAttribute('for');
    var value = document.getElementById(documentId).value;
    if(value.length) {
      option[documentId] = +value;
    }
  }
  document.getElementById('loading').style.display = 'inline-block';
  __video_metadata_thumbnails__
    .getThumbnails(files[0], option)
    .then(function(thumbnails) {
      var container = document.getElementById('thumbnails_container');
      container.innerHTML = '';
      for (var i = 0, length = thumbnails.length; i < length; i++) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        span.innerText = 'frame ' + thumbnails[i].currentTime;
        var img = document.createElement('img');
        img.src = URL.createObjectURL(thumbnails[i].blob);
        div.appendChild(img);
        div.appendChild(span);
        container.appendChild(div);
      }
      document.getElementById('loading').style.display = 'none';
    })
    .catch(function(error) {
      console.log(error);
    });
}
