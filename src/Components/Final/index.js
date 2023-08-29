import './index.css'

const Final = props => {
  const {user, deleteTodo} = props
  const {imageUrl, name, genre, duration, id} = user
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div className="imageContainer">
        <img src={imageUrl} alt="track" className="listImage" />
        <div>
          <p className="listHead">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="lastContainer">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteTodo}
          data-testid="delete"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/571/111/original/vector-delete-icon.jpg"
            alt="tha"
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default Final
