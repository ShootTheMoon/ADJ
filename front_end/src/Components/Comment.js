import React from 'react'
import './Comment.css'

function Comment(props) {
  return (
    <div className="comment-body">
        <article className="article-body">
            <footer className="footer-comment">
                <div className="user-comment">
                    <b className="user-name">{props.User}</b> <span className="span-comment">says:</span>
                </div>
            </footer>
            <div className="comment-div">
                <p className="comment-text">{props.Comment}</p>
            </div>
        </article>
    </div>
  )
}

export default Comment