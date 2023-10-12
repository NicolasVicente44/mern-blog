import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col items-end border border-black rounded-lg p-4 ">
          <textarea
            rows="5"
            className="w-full focus:outline-none bg-transparent"
            placeholder="Leave a comment..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <div className="flex items-center gap-x-2 pt-2">
            {formCancelHandler && (
              <button
                onClick={formCancelHandler}
                className="px-6 py-2.5 rounded-lg border-2 border-red-500 text-red-500  hover:opacity-[0.6]"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-white text-black font-semibold  border-black border-2  hover:opacity-[0.6]"
            >
              {btnLabel}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
