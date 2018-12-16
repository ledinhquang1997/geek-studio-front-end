import axios from 'axios';
const CLOUDINARY_UPLOAD_PRESET = 'quangpreset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/quanglibrary/image/upload';
function uploadImage(file) {
    return new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("file", file);
        formData.append("timestamp", (Date.now() / 1000) | 0);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append('api_key', '812224886185293');
        // formData.append('api_secret', 'aMYbGrNsbVE0aqRS5RspjBxsCuY');
        axios({
            url: CLOUDINARY_UPLOAD_URL,
            method: "POST",
            headers: { "X-Requested-With": "XMLHttpRequest" },
            data: formData
        }).then(data => { resolve(data.data) }, err => { reject(err) });
    })
}



export const ImageService = {
    uploadImage
}