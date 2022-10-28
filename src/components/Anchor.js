import React from 'react';
export default function Anchor(props) {
    const { url, text, id } = props;
    return (
      <>
        <div className="card">
        <a href={url} id={id}>{text}</a>
        </div>
      </>
    );
  }