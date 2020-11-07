import React, { Component } from 'react';


class ListFavorites extends Component{
  render(){
    
    const profiles = this.props.profiles;
    const users = this.props.users;
    const movies = this.props.movies
  return(
    <ul className='favorites-list'>
      {profiles.map((profile)=>(
            <li key={profile.id}>
			<p>{`${users[profile.userID].name}'s favorite movie is "${movies[profile.favoriteMovieID].name}."`}</p>
              
        </li>
      ))}
    </ul>
    )
  
  }}

export default ListFavorites;