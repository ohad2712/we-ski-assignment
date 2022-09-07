import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <div>
      Page Not Found
      <div>
        <Link className='link' to='/'>
          Return to main page
        </Link>
      </div>
    </div>
  )
}
