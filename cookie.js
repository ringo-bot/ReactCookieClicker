'use strict';

const e = React.createElement;

class Square extends React.Component {
  constructor(props) {
    super(props);
	this.state = {clicks: this.props.cookies}

  }
	
  render() {
  
    return e(
      'div',
      { 
		class: 'square',
	  },
	  e('div',
	  {
		  class: 'counter'
	  },
	  'Cookies: ' + this.state.clicks
	  ),
	  e('img',
	  {
		class: 'cookie',
		src: 'cookie.png',
		onClick: () => {this.setState({clicks: (this.state.clicks + 1)}); createCookie(this.state.clicks + 1);},
	  },
	  ),
	  e('button',
	  {
		  class: 'erase',
		  onClick: () => {eraseCookies(); this.setState({clicks: 0})},
	  },
	  'Erase Cookies'
	  )
    );
  }
}

function createCookie(cookies) {
	document.cookie = "cookies=" + cookies + ";max-age=${60*60*24*7};" + "Secure";
}

function getCookies() {
  const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('cookies='))
  .split('=')[1];
  return parseInt(cookieValue)
}

function eraseCookies() {   
    document.cookie = 'cookies=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Secure';
}

const cookies = document.cookie.split(';').some((item) => item.trim().startsWith('cookies=')) ? getCookies() : 0;
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Square, {cookies: cookies}, ));
