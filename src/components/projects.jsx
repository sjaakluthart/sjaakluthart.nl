/* global window */
import React from 'react';
import Card from 'anchor-ui/card';
import CardHeader from 'anchor-ui/card-header';
import CardContent from 'anchor-ui/card-content';
import IconExit from 'anchor-ui/icons/icon-exit';
import Button from 'anchor-ui/button';
import anchor from '../assets/images/anchor.chat.jpg';
import bishops from '../assets/images/bishops.jpg';
import anchorUI from '../assets/images/anchor-ui.jpg';
import badBishops from '../assets/images/bad-bishops.jpg';
import github from '../assets/images/github-blue.svg';

export default () => {
  const style = {
    card: {
      background: '#FEFEFE'
    },
    content: {
      display: 'flex',
      flexDirection: 'column'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  };

  return (
    <article>
      <h1>Projects</h1>
      <section>
        <Card style={style.card}>
          <CardHeader
            title="Anchor UI"
            subtitle="UI kit for chat engines made with React"
            avatar={anchor}
          />
          <CardContent style={style.content}>
            <img src={anchorUI} alt="Anchor UI" />
            <div style={style.buttons}>
              <Button iconButton onClick={() => window.open('https://github.com/anchorchat/anchor-ui', '_blank')}>
                <img style={{ width: '24px' }} src={github} alt="github" />
              </Button>
              <Button iconButton onClick={() => window.open('https://anchorchat.github.io/anchor-ui', '_blank')}>
                <IconExit color="#5999B4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardHeader
            title="Bad Bishops"
            subtitle="Online multiplayer chess. Work in progress"
            avatar={bishops}
          />
          <CardContent style={style.content}>
            <img src={badBishops} alt="Bad Bishops" />
            <div style={style.buttons}>
              <Button iconButton onClick={() => window.open('https://github.com/rijkvanzanten/bad-bishops', '_blank')}>
                <img style={{ width: '24px' }} src={github} alt="github" />
              </Button>
              <Button iconButton onClick={() => window.open('https://bad-bishops.com/', '_blank')}>
                <IconExit color="#5999B4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card style={style.card}>
          <CardHeader
            title="Anchor UI"
            subtitle="UI kit for chat engines made with React"
            avatar={anchor}
          />
          <CardContent style={style.content}>
            <img src={anchorUI} alt="Anchor UI" />
            <div style={style.buttons}>
              <Button iconButton onClick={() => window.open('https://github.com/anchorchat/anchor-ui', '_blank')}>
                <img style={{ width: '24px' }} src={github} alt="github" />
              </Button>
              <Button iconButton onClick={() => window.open('https://anchorchat.github.io/anchor-ui', '_blank')}>
                <IconExit color="#5999B4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  );
};
