var selectedFile;

$(document).ready(function(){
	$("#uploadButton").hide();

});

$("#file").on(
	"change",function(event){
		selectedFile = event.target.files[0];
		$("#uploadButton").show();
	});

function uploadFile(){
	
var filename = selectedFile.name;

var storageRef = firebase.storage().ref('/images/' + filename);

var uploadTask = storageRef.put(selectedFile);

uploadTask.on('state_changed',function(snapshot){

},function(error){

},function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    
  });
});
}
