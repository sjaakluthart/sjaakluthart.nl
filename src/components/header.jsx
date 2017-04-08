/* global window */
import React from 'react';
import styles from 'anchor-ui/settings/styles';
import Button from 'anchor-ui/button';
import IconRocket from 'anchor-ui/icons/icon-rocket';
import IconCamera from 'anchor-ui/icons/icon-add-image';
import code from '../assets/images/code.svg';
import turntable from '../assets/images/turntable.svg';
import bass from '../assets/images/bass.svg';
import github from '../assets/images/github.svg';
import sjaak from '../assets/images/sjaak.jpg';

export default () => {
  const style = {
    image: {
      boxShadow: styles.depthShadows[0]
    }
  };

  return (
    <header>
      <img className="sjaak" style={style.image} src={sjaak} alt="sjaak" />
      <h1>Sjaak Luthart</h1>
      <h2>Fontend Developer | Bass Player</h2>
      <div className="buttons">
        <img style={style.image} src={code} alt="code" />
        <img style={style.image} src={turntable} alt="turntable" />
        <img style={style.image} src={bass} alt="bass" />
      </div>
      <div className="links">
        <Button onClick={() => window.open('https://github.com/sjaakluthart', '_blank')} iconButton>
          <img style={{ width: '24px' }} src={github} alt="github" />
        </Button>
        <Button onClick={() => window.open('mailto:mail@sjaakluthart.nl')} iconButton>
          <IconRocket color="#FEFEFE" />
        </Button>
        <Button onClick={() => window.open('https://www.instagram.com/sjaakluthart/', '_blank')} iconButton>
          <IconCamera color="#FEFEFE" />
        </Button>
      </div>
    </header>
  );
};
