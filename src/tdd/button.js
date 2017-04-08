import React from 'react';

const getRandomString = () => {
    let link = 'http://www.google.com';
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) { link = 'http://www.pinterest.com'; }
    if (randomNumber === 2) { link = 'http://www.instagram.com'; }
    if (randomNumber === 3) { link = 'http://www.twitter.com'; }
    return link;
};

const Button = (props) => {
    const { link, text } = props;
    return (
        <form action={link}>
            <button className="hd-button" type="submit">{text}</button>
        </form>
    );
};

Button.defaultProps = {
    link: getRandomString(),
};

Button.propTypes = {
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string,
};

export default Button;
