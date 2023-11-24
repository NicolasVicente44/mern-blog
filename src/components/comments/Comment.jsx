import React from "react";
import { images, stables } from "../../constants";
import { BsFillReplyFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import CommentForm from "./CommentForm";
import { MdAddComment } from "react-icons/md";

const Comment = ({
  comment,
  loggedInUserId,
  affectedComment,
  setAffectedComment,
  AddComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggedIn = Boolean(loggedInUserId);
  const commentBelongsToUser = loggedInUserId === comment.user._id;

  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;

  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={
          comment?.user?.avatar
            ? stables.UPLOAD_FOLDER_BASE_URL + comment.user.avatar
            : images.defaultUserImage
        }
        alt="usersprofileimage"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-black text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        <span className="text-xs text-black">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
          })}
        </span>
        {!isEditing && (
          <p className="font-opensans mt-[10px] text-dark-hard">
            {comment.desc}
          </p>
        )}

        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-dark-hard  font-roboto text-sm mt-3 mb-3">
          {isUserLoggedIn && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <BsFillReplyFill className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}

          {commentBelongsToUser && (
            <>
              <button
                className="flex items-center space-x-2"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
              >
                <BiSolidEdit className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button
                className="flex items-center space-x-2"
                onClick={() => deleteComment(comment._id)}
              >
                <RiDeleteBin2Fill className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              AddComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                AddComment={AddComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteComment={deleteComment}
                loggedInUserId={loggedInUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
