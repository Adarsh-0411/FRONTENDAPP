import React from 'react';

const Contact = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.contactContainer}>
        <h4 style={styles.formTitle}>Fill The Form For Any Problem</h4>
        <div style={styles.formBox}>
          <table style={styles.formTable}>
            <tbody>
              <tr>
                <td><label>Enter Student Name</label></td>
                <td><input type="text" name="sname" required style={styles.input} /></td>
              </tr>

              <tr>
                <td><label>Enter Email</label></td>
                <td><input type="email" name="email" required style={styles.input} /></td>
              </tr>

              <tr>
                <td><label>Enter Subject</label></td>
                <td><input type="text" name="subject" required style={styles.input} /></td>
              </tr>

              <tr>
                <td><label>Enter Message</label></td>
                <td><textarea name="message" rows="4" required style={{ ...styles.input, ...styles.textarea }}></textarea></td>
              </tr>

              <tr>
                <td><label>Enter Contact No</label></td>
                <td><input type="tel" name="contactNo" pattern="[6789][0-9]{9}" placeholder="MUST BE 10 DIGITS" required style={styles.input} /></td>
              </tr>

              <tr>
                <td><input type="submit" value="Submit" style={styles.button} /></td>
                <td><input type="reset" value="Clear" style={styles.button} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '', // Background color for the entire page
    minHeight: '100vh', // Ensure the background color covers the entire viewport height
  },
  contactContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#007bff',
  },
  formBox: {
    backgroundColor: '#ffffff', // Background color for the form box
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  formTable: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    resize: 'vertical',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Contact;
