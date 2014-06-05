
      <script>
         $(document).ready(function(){
             $('#fire-audio-recorder').click(function(e){

                 // capture callback
                 var captureSuccess = function(mediaFiles) {
                     var i, path, len;
                     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                         path = mediaFiles[i].fullPath;
                         // do something interesting with the file
                     }
                 };

                 // capture error callback
                 var captureError = function(error) {
                     navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
                 };

                 // start audio capture
                 navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1});

             });


             $('#fire-video-recorder').click(function(e){

                 // capture callback
                 var captureSuccess = function(mediaFiles) {
                     var i, path, len;
                     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                         path = mediaFiles[i].fullPath;
                         // do something interesting with the file
                     }
                 };

                 // capture error callback
                 var captureError = function(error) {
                     navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
                 };

                 // start video capture
                 navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:1});


             });

             $('#fire-camera').click(function(e){

                 // capture callback
                 var captureSuccess = function(mediaFiles) {
                     var i, path, len;
                     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                         path = mediaFiles[i].fullPath;
                         // do something interesting with the file
                     }
                 };

                 // capture error callback
                 var captureError = function(error) {
                     navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
                 };

                 // start image capture
                 navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
             });
         });

      </script>