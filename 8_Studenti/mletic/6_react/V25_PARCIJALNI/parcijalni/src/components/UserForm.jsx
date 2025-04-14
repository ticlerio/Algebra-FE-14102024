import React from 'react';

class UserForm extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <label htmlFor="name">Github username:</label>
        <br />
        <input id="name" type="text" autoFocus />

        <button style={styles.button}>GO!</button>
      </div>
    );
  }
}

export default UserForm;

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
};
