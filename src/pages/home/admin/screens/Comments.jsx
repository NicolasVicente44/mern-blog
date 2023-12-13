import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPosts } from "../../../../services/posts"; // Adjust the import path as needed
import { getAllComments } from "../../../../services/comment"; // Adjust the import path as needed
import { useSelector } from "react-redux";
import { images, stables } from "../../../../constants";
import { Link } from "react-router-dom";
import {
  createNewComment,
  updateComment,
  deleteComment,
  updateCommentStatus,
} from "../../../../services/comment";

const Comments = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch all posts
  const {
    data: postsData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryFn: () => getAllPosts(searchKeyword, currentPage),
    queryKey: ["posts"],
  });

  // Fetch comments for the selected post
  const { data: commentsData, isLoading: isLoadingComments } = useQuery({
    queryFn: () => getAllComments(selectedPostId),
    queryKey: ["comments", selectedPostId],
    enabled: !!selectedPostId, // Fetch comments only if a post is selected
  });

  const loadCommentsForPost = (postId) => {
    setSelectedPostId(postId);
  };
  const acceptComment = async (commentId) => {
    try {
      const token = userState.token; // Get the user's token from your state or context
      const status = "accepted"; // Define the status for accepted comments

      await updateCommentStatus({ token, status, commentId });
      // After accepting, you may want to refetch unaccepted comments
      queryClient.invalidateQueries("unacceptedComments");
    } catch (error) {
      // Handle errors here
      console.error("Error accepting comment:", error);
    }
  };

  const declineComment = async (commentId) => {
    try {
      const token = userState.token; // Get the user's token from your state or context
      const status = "declined"; // Define the status for declined comments

      await updateCommentStatus({ token, status, commentId });
      // After declining, you may want to refetch unaccepted comments
      queryClient.invalidateQueries("unacceptedComments");
    } catch (error) {
      // Handle errors here
      console.error("Error declining comment:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Manage Comments</h1>

      {isLoading || isFetching ? (
        <table>
          <tbody>
            <tr>
              <td colSpan={5} className="text-center py-10 w-full">
                Loading...
              </td>
            </tr>
          </tbody>
        </table>
      ) : postsData?.data?.length === 0 ? (
        <table>
          <tbody>
            <tr>
              <td colSpan={5} className="text-center py-10 w-full">
                No posts found
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table>
          <tbody>
            {postsData?.data.map((post) => (
              <tr key={post.id}>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="/" className="relative block">
                        <img
                          src={
                            post?.photo
                              ? stables.UPLOAD_FOLDER_BASE_URL + post?.photo
                              : images.samplePostImage
                          }
                          alt={post.title}
                          className="mx-auto object-cover rounded-lg w-10 aspect-square"
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {post.title}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {post.categories.length > 0
                      ? post.categories
                      : "Uncategorized"}
                    {console.log(post.categories)}
                  </p>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div className="flex gap-x-2">
                    {post.tags.length > 0
                      ? post.tags.map((tag, index) => (
                          <p key={index}>
                            {tag}
                            {post.tags.length - 1 !== index && ","}
                          </p>
                        ))
                      : "No tags"}
                  </div>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <Link
                    to={`/admin/comments/${post?.slug}`} // Replace with your actual edit route
                    className="text-green-600 hover:text-green-900"
                  >
                    Comments List
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedPostId && (
        <div>
          <h2 className="text-xl font-semibold">Comments for Selected Post</h2>
          {isLoadingComments ? (
            <p>Loading comments...</p>
          ) : (
            commentsData?.map((comment) => (
              <div key={comment.id}>
                <p>{comment.desc}</p>
                {/* Add more comment details as needed */}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
