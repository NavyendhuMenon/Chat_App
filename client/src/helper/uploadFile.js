const CLOUDINARY_NAME = import.meta.env.VITE_CLOUDINARY_NAME

if (!CLOUDINARY_NAME) {
    console.error("Cloudinary name is missing! Check your .env file.");
}

const URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/auto/upload`;

export const uploadFile = async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "chatApp-file");

    try {
        const response = await fetch(URL, {
            method: "POST",
            body: formData,
        });

        const responseData = await response.json();

        if (responseData.error) {
            console.error("Cloudinary Error:", responseData.error.message);
        }

        return responseData;
    } catch (error) {
        console.error("Upload failed:", error);
    }
};
