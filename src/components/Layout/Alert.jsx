const Alert = ({msg, ...props}) => {
    const styled = {
        padding: 10,
        color: "white",
        width: "100%",
        backgroundColor: 'Red',
        borderRadius: 3,
        margin: '10px 0'
    }
  return <p style={styled}>{msg}</p>;
};

export default Alert;
