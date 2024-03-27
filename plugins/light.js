// plugins/lightGallery.client.js
import lightGallery from 'lightgallery';

export default (context, inject) => {
  if (process.client) {
    // Ensure code runs only in the browser environment
    inject('lightGallery', lightGallery);
  }
};
