"use client";

import { Input, message } from "antd";
import React, { useState } from "react";
import Actions from "./actions";
import { ArrowDown, ArrowUp } from "lucide-react";

interface CommentsProps {
  comments: any;
  handleInsertNode: (folderId: number, items: any) => void;
  handleEditNode: (folderId: number, value: any) => void;
  handleDeleteNode: (folderId: number) => void;
}

const Comments = ({ comments, handleInsertNode, handleEditNode, handleDeleteNode }: CommentsProps) => {
  const [input, setInput] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleMakeComment = (input: string) => {
    if (editMode) {
      handleEditNode(comments.id, input);
      setShowReplyInput(false);
      setEditMode(false);
      messageApi.success("Comment edited successfully.");
    } else {
      handleInsertNode(comments.id, input);
      messageApi.success("Comment Created successfully.");
    }

    if (editMode || showReplyInput) {
      setEditMode(false);
      setShowReplyInput(false);
    }

    setInput("");
  };

  const handleDelete = () => {
    handleDeleteNode(comments.id);
    messageApi.success("Comment Deleted successfully.");
  };

  return (
    <div>
      <div className="flex gap-5 items-end">
        {comments.id === 1 ? (
          <>
            <Input.TextArea
              placeholder="Leave a comment...."
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInput(e.target.value)}
              style={{ height: 120 }}
            />
            <Actions type="COMMENT" className="" handleClick={() => handleMakeComment(input)} buttonColor={"#823"} />
          </>
        ) : (
          <div className="flex flex-col gap-1 w-full bg-gray-100 p-2 rounded-md">
            <div className="p-2 rounded-lg bg-white">
              {editMode ? (
                <Input.TextArea
                  placeholder="Edit your previous comment"
                  defaultValue={comments.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInput(e.target.value)}
                  style={{ height: 120 }}
                />
              ) : (
                <div className=" min-h-12">
                  <span className="text-wrap text-sm min-h-10">{comments.name}</span>
                </div>
              )}
            </div>
            <div className="flex gap-5 mt-2">
              {editMode ? (
                <>
                  <Actions
                    type="Save"
                    className=""
                    handleClick={() => {
                      handleMakeComment(input);
                    }}
                    buttonColor={"default"}
                  />
                  <Actions
                    type="Cancel"
                    className=""
                    handleClick={() => {
                      setEditMode(false);
                    }}
                    buttonColor={"danger"}
                    isDanger={true}
                  />
                </>
              ) : (
                <>
                  <Actions
                    type="Reply"
                    className=""
                    handleClick={() => {
                      // handleMakeComment(input)
                      setShowReplyInput(true);
                    }}
                    buttonColor={"default"}
                    icon={showReplyInput ? <ArrowUp size={13} /> : <ArrowDown size={13} />}
                  />
                  <Actions
                    type="Edit"
                    className=""
                    handleClick={() => {
                      setEditMode(true);
                    }}
                    buttonColor={"danger"}
                  />
                  <Actions
                    type="Delete"
                    className="bg-red-500"
                    handleClick={handleDelete}
                    buttonColor={"#789543"}
                    isDanger={true}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Show comments list */}
      <div className={`${comments.id === 1 ? "mt-5" : "ml-5 mt-4"} `}>
        {showReplyInput && (
          <div className="flex flex-col gap-1 w-full bg-gray-100 p-2 rounded-md mb-4">
            <div className="p-2 rounded-lg bg-white">
              <Input.TextArea
                placeholder="Reply on this Comment...."
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInput(e.target.value)}
                style={{ height: 120 }}
              />
            </div>
            <div className="flex gap-5 mt-2">
              <Actions
                type="Save"
                className=""
                handleClick={() => {
                  handleMakeComment(input);
                }}
                buttonColor={"default"}
              />
              <Actions
                type="Cancel"
                className=""
                handleClick={() => {
                  setShowReplyInput(false);
                }}
                buttonColor={"danger"}
                isDanger={true}
              />
            </div>
          </div>
        )}

        <div className="border-l border-l-gray-500 pl-1 rounded-tl-xl rounded-bl-xl">
          {comments?.items?.map((comment: any) => {
            return (
              <Comments
                comments={comment}
                key={comment.id}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
              />
            );
          })}
        </div>
      </div>

      {contextHolder}
    </div>
  );
};

export default Comments;
