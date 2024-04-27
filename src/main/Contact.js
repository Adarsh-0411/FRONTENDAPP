import React from 'react';

const Contact = () => {
  return (
    <div style={styles.contactContainer}>
      <h4 style={styles.formTitle}>Fill The Form For Any Problem</h4>
      <div style={styles.formBox}>
        <table style={styles.formTable}>
          <tr>
            <td><label>Enter Student Name</label></td>
            <td><input type="text" name="sname" required /></td>
          </tr>

          <tr>
            <td><label>Enter Email</label></td>
            <td><input type="email" name="email" required /></td>
          </tr>

          <tr>
            <td><label>Enter Subject</label></td>
            <td><input type="text" name="subject" required /></td>
          </tr>

          <tr>
            <td><label>Enter Message</label></td>
            <td><textarea name="message" rows="4" required></textarea></td>
          </tr>

          <tr>
            <td><label>Enter Contact No</label></td>
            <td><input type="tel" name="contactNo" pattern="[6789][0-9][9]" placeholder="MUST BE 10 DIGITS " required /></td>
          </tr>

          <tr>
            <td><input type="submit" value="Submit" style={styles.button} /></td>
            <td><input type="reset" value="Clear" style={styles.button} /></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const styles = {
  contactContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  formTitle: {
    textAlign: 'center',
  },
  formBox: {
    backgroundColor: '#4ab5ea61',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  formTable: {
    width: '100%',
  },
  button: {
    padding: '8px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Contact;
