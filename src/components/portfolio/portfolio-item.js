import React from 'react';
import {Link} from 'react-router-dom';

export default function(props) {
  const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div>
      <img src={thumb_image_url} alt="bck image" />
      <img src={logo} alt="Logo" />
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link to details</Link>
    </div>
  );
}