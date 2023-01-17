export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.location = { lat: location.lat, lng: location.lng }; // {lat: , lng: }
    this.address = location.address;
    this.id = new Date().toString() + Math.random().toString() + Math.random().toString();
  }
}
