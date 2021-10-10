import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className="title">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
