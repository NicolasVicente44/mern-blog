import axios from "axios";

const BASE_URL = "https://mern-blog-backend-fd7k.onrender.com"; // Update with your backend URL

export const createNewComment = async ({
  token,
  desc,
  slug,
  parent,
  replyOnUser,
}) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/api/comments`,
      {
        desc,
        slug,
        parent,
        replyOnUser,
      },
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.message);
    }
    throw new Error(error.message);
  }
};

export const updateComment = async ({ token, desc, status, commentId }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `${BASE_URL}/api/comments/${commentId}`,
      {
        desc,
        status, // Include the status field in the request body
      },
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.message);
    }
    throw new Error(error.message);
  }
};

export const getAllComments = async (slug) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/comments/byPost/${slug}`);
    return response.data;
  } catch (error) {
    // Error handling
    throw new Error(error.message);
  }
};

export const deleteComment = async ({ token, commentId }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `${BASE_URL}/api/comments/${commentId}`,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.message);
    }
    throw new Error(error.message);
  }
};

export const updateCommentStatus = async ({ token, status, commentId }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `${BASE_URL}/api/comments/${commentId}/status`,
      { status },
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};
