export class Init {
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log('No markers found....creating....');
            var markers = [
                {
    name: 'Comp One',
    lat: 18.5204,
    lng: 73.8567,
    draggable: true
  },
  {
    name: 'Comp One',
    lat: 30.9010,
    lng: 75.8573,
    draggable: true
  },
  {
    name: 'Comp One',
    lat: 28.9010,
    lng: 75.8573,
    draggable: true
  }
            ];
            localStorage.setItem('markers',JSON.stringify(markers));
        } else {
            console.log('Loading markers.....');
        }
    }
}
