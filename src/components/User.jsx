import { useLocation } from "react-router-dom"

const User = () => {
  const user = useLocation().this.state.return (
    <div>
      <h1>Showing User { user.id } </h1>
    </div>
  )
}

export default User