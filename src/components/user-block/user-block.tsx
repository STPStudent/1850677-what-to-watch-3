import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {logoutAction} from '../../store/api-actions.ts';
import React from 'react';
import {AuthorizationStatus} from '../../const.ts';
import {Link} from 'react-router-dom';

export function UserBlock() {
  const {authorizationStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const signOutClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to="/login" className="user-block__link">Sign in</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src="/img/avatar.jpg"
            alt="User avatar"
          />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={signOutClickHandler}>Sign out</a>
      </li>
    </ul>
  );
}
