const config = {
    apiKey: "AIzaSyCYhu7Oq0u5DIQLGORbml14MlN5pxnDL18",
    authDomain: "database-79c7c.firebaseapp.com",
    databaseURL: "https://database-79c7c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database-79c7c",
    storageBucket: "database-79c7c.appspot.com",
    messagingSenderId: "705269422292",
    appId: "1:705269422292:web:b9de4443f5623aefc60341",
    measurementId: "G-9V2RXHWKLX"
  };
  
  import { getDatabase, ref, set , get , child , onValue} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  const app = initializeApp(config);
  
  
  var keys=[];
  var credits=[];
  
  var reference = ref(getDatabase(),'subjectcode5thsem/');
      onValue(reference, (snapshot) => 
      {
          snapshot.forEach(function(childval)
          {
          console.log(childval.key+" " +childval.val());
          keys.push(childval.key);
          credits.push(childval.val());
          })
      });
  

var i=0;

document.getElementById("auto").onclick= function() {
    if(i>keys.length-1)
    {
        i=0;
        alert("List Completed cycle starts over");
        document.getElementById("course-code").value='';
        document.getElementById("unit-load").value='';
    }
    else
    {
    console.log (keys[i]);
    console.log(credits[i]);
    document.getElementById("course-code").value=keys[i];
    document.getElementById("unit-load").value=parseInt(credits[i]);
    i++;
    }
}