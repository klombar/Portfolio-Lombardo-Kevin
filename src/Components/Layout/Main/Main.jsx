import proptypes from 'prop-types';

function Main({children}) {
  return (
    <div className="main" role='main'>
      {children}
    </div>
  )
}

export default Main

Main.propTypes = {
  children: proptypes.node.isRequired
}