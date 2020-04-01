import React from 'react';
import {Message} from 'components';

const Home = () => {
  return (
    <section className='home'>
      <Message
        avatar='https://sun6-14.userapi.com/c857424/v857424264/f869e/zEGXGUZNSNI.jpg?ava=1'
        text='Hello, World!'
        date={new Date('Mon Feb 03 2020 12:40:11')}
        isMe={false}
        isRead={true}
      />
      <Message
        avatar='https://sun9-1.userapi.com/c854428/v854428765/aefdf/zTLjp0DTmuM.jpg?ava=1'
        text='Equally he minutes my hastily. Able rent long in do we. Steepest speaking up attended it as. Took sold add play may none him few. Expression alteration entreaties mrs can terminated estimating. Ecstatic elegance gay but disposed. In expression an solicitude principles in do. Mrs assured add private married removed believe did she.'
        date={new Date('Mon Feb 03 2020 12:40:11')}
        isMe={true}
        isRead={true}
      />
      <Message
        avatar='https://sun6-14.userapi.com/c857424/v857424264/f869e/zEGXGUZNSNI.jpg?ava=1'
        text='Equally he minutes my hastily. Able rent long in do we. Steepest speaking up attended it as. Took sold add play may none him few. Expression alteration entreaties mrs can terminated estimating. Ecstatic elegance gay but disposed. In expression an solicitude principles in do. Mrs assured add private married removed believe did she. Whatever throwi'
        date={new Date('Mon Feb 03 2020 12:40:11')}
        isMe={false}
        isRead={true}
      />
      <Message
        avatar='https://sun9-1.userapi.com/c854428/v854428765/aefdf/zTLjp0DTmuM.jpg?ava=1'
        text='HI!'
        date={new Date('Mon Feb 03 2020 12:40:11')}
        isMe={true}
        isRead={true}
      />
      <Message
        avatar='https://sun9-1.userapi.com/c854428/v854428765/aefdf/zTLjp0DTmuM.jpg?ava=1'
        text='Салам, Брут!'
        date={new Date('Mon Feb 03 2020 15:40:11')}
        isMe={true}
        isRead={false}
      />
    </section>
  );
};

export default Home;
