/* eslint-disable jsx-a11y/anchor-is-valid */
function DataBody({ image, firstName, lastName, phone, email, dob }) {
  return (
    <tr>
      <th scope="row">
        <img src={image.thumbnail} alt={firstName + " " + lastName} />
      </th>
      <td>{firstName + " " + lastName}</td>
      <td>{phone}</td>
      <td><a href="#">{email}</a></td>
      <td>{dob.substring(5,7) + "-" + dob.substring(8,10) + "-" + dob.substring(0,4)}</td>
    </tr>
  )
}

export default DataBody;