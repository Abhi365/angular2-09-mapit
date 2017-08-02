import { Component,OnInit } from '@angular/core';
import { MarkerService } from './marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'AGM project';

  //Zoom Level
  zoom : number = 10;
  //Start Position
  lat: number = 18.5204;
  lng: number = 73.8567;
  //Values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
  //Markers
  markers: marker[];

  constructor( private _markerservice:MarkerService) {
    this.markers=this._markerservice.getMarkers();
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  clickedMarker(marker:marker , index:number) {
    console.log("Clicked Marker:"+marker.name+' at index '+index);
    
  }

  mapClicked($event:any) {
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any , $event:any) {
    console.log('dragEnd',marker,$event);
    
    var updMarker ={
      name:marker.name,
      lat:parseFloat(marker.lat),
      lng:parseFloat(marker.lng),
      draggable:false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this._markerservice.updateMarker(updMarker,newLat,newLng);
  }

  addMarker() {
    console.log('Adding Marker');
    if(this.markerDraggable == "yes"){
      var isDraggable = true;
    }
    else {
      var isDraggable = false;
    }

    var newMarker= {
      name:this.markerName,
      lat:parseFloat(this.markerLat),
      lng:parseFloat(this.markerLng),
      draggable:isDraggable
    }
    
    this.markers.push(newMarker);
    this._markerservice.addMarker(newMarker);
  }


  removeMarker(marker) {
    console.log('Removing Marker...');
    for(var i = 0;i<this.markers.length;i++ ) {
      if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
        this.markers.splice(i, 1);
      }
    }

    this._markerservice.removeMarker(marker);
    

  }

}


  //Marker Type
interface marker {
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;
}
  
