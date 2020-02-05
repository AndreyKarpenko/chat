import React from 'react';
import Proptypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import { Icon } from 'antd';

import './Message.scss';

const Message = (props) => {
  const {avatar, text, date, isMe, isRead} = props;
  return (
    <div className={classNames('message', {'message--isme' : isMe})}>
      <div className='message__avatar'>
        <img src={avatar} alt='User Avatar'/>
      </div>
      <div className='message__content'>
        <div className='message__bubble'>
          <p className='message__text'>
            {text}
          </p>
        </div>
        <div>
          {
            isRead && isMe && <Icon type="check" style={{ fontSize: '16px', color: '#3674ff' }} theme="outlined" />
          }
          <span className='message__date'>
            {distanceInWordsToNow(date, {addSuffix: true, locale: ruLocale})}
          </span>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  className: Proptypes.string,
  avatar: Proptypes.string,
  text: Proptypes.string,
  date: Proptypes.string,
  isMe: Proptypes.bool
};

export default Message;
