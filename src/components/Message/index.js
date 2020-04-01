import React from 'react';
import Proptypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import { Icon } from 'antd';
import soundFile from '../../the_pussycat_dolls-react.mp3';

import './Message.scss';

class Message extends React.Component {

  state = {
    analyser: null,
    dataArray: [],
    newArray: []
  };

  render() {
    const {avatar, text, date, isMe, isRead} = this.props;
    const {newArray} = this.state;
    return (
      <div className={classNames('message', {'message--isme' : isMe})}>
        <div className='message__avatar'>
          <img src={avatar} alt='User Avatar'/>
        </div>
        <div className='message__content'>
          <div className='message__bubble'>
            <p onClick={this.handleClick} className='message__text'>
              {text}
            </p>
            <div className='spectrum__wrapper'>
              {
                newArray.length ? newArray.map((item, index) => {
                  if(index > newArray.length / 2)
                    return <div style={{height: 4, width: 4, marginBottom: item / 4,  backgroundColor: 'rgba(255, 0,0,0.3)'}}/>
                }) : null
              }
            </div>
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
  }

  handleClick = () => {
    const audioFile = new Audio();
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(audioFile);
    const analyser = audioContext.createAnalyser();
    audioFile.src = soundFile;
    analyser.fftSize = 128;
    source.connect(audioContext.destination);
    source.connect(analyser);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    this.setState({
      dataArray,
      analyser,
      newArray: Array.from(dataArray)
    }, () => {
      audioFile.play();
      this.loop();
    });
  };

  loop = () => {
    const { analyser, dataArray } = this.state;
    requestAnimationFrame(this.loop);
    analyser.getByteFrequencyData(dataArray);
    this.setState({
      newArray: Array.from(dataArray)
    });
  };
}

Message.propTypes = {
  className: Proptypes.string,
  avatar: Proptypes.string,
  text: Proptypes.string,
  date: Proptypes.string,
  isMe: Proptypes.bool
};

export default Message;
