import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './ContactForm.module.scss';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    if ((!name && number) || (name && !number)) {
      return;
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <label htmlFor={nameInputId} className={styles.Label}>
        <span className={styles.LabelText}>Name</span>
        <input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          // required
          maxLength="40"
          className={styles.Input}
        />
      </label>

      <label htmlFor={numberInputId} className={styles.Label}>
        <span className={styles.LabelText}>Number</span>
        <input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          // required
          maxLength="18"
          className={styles.Input}
        />
      </label>

      <button type="submit" className={styles.Button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = { ...INITIAL_STATE };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { name, number } = this.state;

//     this.props.onSubmit({ ...this.state });

//     if ((!name && number) || (name && !number)) {
//       return;
//     }

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit} className={styles.Form}>
//         <label htmlFor={this.nameInputId} className={styles.Label}>
//           <span className={styles.LabelText}>Name</span>
//           <input
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             placeholder="Enter name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             // required
//             maxLength="40"
//             className={styles.Input}
//           />
//         </label>

//         <label htmlFor={this.numberInputId} className={styles.Label}>
//           <span className={styles.LabelText}>Number</span>
//           <input
//             id={this.numberInputId}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             placeholder="Enter number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             // required
//             maxLength="18"
//             className={styles.Input}
//           />
//         </label>

//         <button type="submit" className={styles.Button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
