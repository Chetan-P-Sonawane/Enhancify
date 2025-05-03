import axios from "axios";

const API_KEY = "wx45dmu374ur7dts2";
const BASE_URL = "https://techhk.aoscdn.com";
const MAX_RETRIES = 20;


export const enhancedImageAPI = async (file) => {
  try {
    // const taskId = await uploadImage(file);
    // console.log("Image Uploaded Successfully, Task id:", taskId);

    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Image Enhanced Successfully, Data:", enhancedImageData);

    return enhancedImageData
  } catch (error) {
    console.log("Error while Enhancing Image", error.message);
  }
};

const uploadImage = async (file) => {
  // code to upload image

    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData, 
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            }
        }
    );

    if(!data?.data?.task_id){
        throw new console.log("Error Failed to upload image, task_id not found")
    }

    return data.data.task_id;
};

const pollForEnhancedImage = async (taskId, retries = 1) => {
  const result = await fetchEnhancedImage(taskId);

  if(result.state === 4) {
    console.log(`Processing...(${retries}/${MAX_RETRIES})`);

    if(retries >= MAX_RETRIES){
        throw new Error("Max retries reached. Please try again later.");
    }

    // await for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return pollForEnhancedImage(taskId, retries + 1);
  }

    console.log("Enhanced Image URL", result);
    return result;
};


const fetchEnhancedImage = async (taskId) => {
  // fetch image
    const { data } = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
               "X-API-KEY": API_KEY,
            },
        }
      );

    if (!data?.data) {
      throw new console.log("Error while image enhancing, Image not found");
    }

    return data.data;
};

