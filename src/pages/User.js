import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from '../context'
import Spinner from "../components/layout/Spinner";
import Repos from "../components/users/Repos";

function User(props) {

  const context = useContext(Context)

  useEffect(() => {
    context.getUser(props.match.params.username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    avatar_url,
    hireable,
    location,
    bio,
    html_url,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists
  } = context.user;

  if (context.loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Home
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="avatar"
            className="round-img"
            style={{ width: 100 }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Page
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={context.repos} />
    </Fragment>
  );
}

export default User;
