import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar />
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="gray"/>
        <InputOption Icon={CommentIcon} title="Comment" color="gray"/>
        <InputOption Icon={RepeatIcon} title="Repost" color="gray"/>
        <InputOption Icon={SendIcon} title="Send" color="gray"/>
      </div>
    </div>
  )
}

export default Post
