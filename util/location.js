const API_KEY = ``;

export function getMapPreview(latitude, longitude) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=AIzaSyCja8rif1I8H3xk7OB_0BnCfzApVgeHt9c`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  return "Address Of this Place";
}
