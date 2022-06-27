import React from 'react'
import swal from 'sweetalert'

function Alert(props) {
    props.alert && swal(props.alert.msg);
  return (
    <>
    </>
  )
}

export default Alert