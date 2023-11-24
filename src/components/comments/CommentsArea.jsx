import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createNewComment,
  deleteComment,
  updateComment,
} from "../../services/comment";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const CommentsArea = ({ className, loggedInUserId, comments, postSlug }) => {
  const userState = useSelector((state) => state.user);
  const [affectedComment, setAffectedComment] = useState(null);
  const queryClient = useQueryClient();
  console.log(` token: ${userState.userInfo.token}`);

  const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
    useMutation({
      mutationFn: ({ desc, slug, parent, replyOnUser, token }) => {
        return createNewComment({ desc, slug, parent, replyOnUser, token });
      },
      onSuccess: () => {
        toast.success(
          "Your comment was sent successfully, it will be visible after an admin's confirmation."
        );
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const { mutate: mutateUpdateComment } = useMutation({
    mutationFn: ({ desc, commentId, token }) => {
      return updateComment({ desc, commentId, token });
    },
    onSuccess: () => {
      toast.success("Your comment was updated successfully.");
      queryClient.invalidateQueries(["blog", postSlug]);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const { mutate: mutateDeleteComment } = useMutation({
    mutationFn: ({ commentId, token }) => {
      return deleteComment({ commentId, token });
    },
    onSuccess: () => {
      toast.success("Your comment was deleted successfully.");
      queryClient.invalidateQueries(["blog", postSlug]);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    mutateNewComment({
      desc: value,
      parent,
      replyOnUser,
      token: userState.userInfo.token,
      slug: postSlug,
    });
  };

  const updateCommentHandler = (value, commentId) => {
    mutateUpdateComment({
      desc: value,
      token: userState.userInfo.token,
      commentId,
    });
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    mutateDeleteComment({
      token: userState.userInfo.token,
      commentId,
    });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel={"Post"}
        formSubmitHandler={(value) => addCommentHandler(value)}
        loading={isLoadingNewComment}
      />

      <div className="space-y-4 mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            loggedInUserId={loggedInUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            AddComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsArea;
