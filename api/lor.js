// api/lor.js

export default {
  async getCertificates() {
    return await this.$axios.get('/api/certificates');
  },
};

// {
//     "links": {
//         "next": null,
//         "previous": null
//     },
//     "count": 5,
//     "total_pages": 1,
//     "results": [
//         {
//             "id": 5,
//             "image": "https://lorapi.pythonanywhere.com/media/dropzone/certificate/2024/3/29/17116846352422373.png.1100x1100_q85.webp",
//             "title": "cer5"
//         },
//         {
//             "id": 4,
//             "image": "https://lorapi.pythonanywhere.com/media/dropzone/certificate/2024/3/29/17116846085312533.png.1100x1100_q85.webp",
//             "title": "cer4"
//         },
//         {
//             "id": 3,
//             "image": "https://lorapi.pythonanywhere.com/media/dropzone/certificate/2024/3/29/1711684590180571.png.1100x1100_q85.webp",
//             "title": "cer3"
//         },
//         {
//             "id": 2,
//             "image": "https://lorapi.pythonanywhere.com/media/dropzone/certificate/2024/3/29/17116845768093085.png.1100x1100_q85.webp",
//             "title": "cer2"
//         },
//         {
//             "id": 1,
//             "image": "https://lorapi.pythonanywhere.com/media/dropzone/certificate/2024/3/29/17116845528506923.png.1100x1100_q85.webp",
//             "title": "cer1"
//         }
//     ]
// }
