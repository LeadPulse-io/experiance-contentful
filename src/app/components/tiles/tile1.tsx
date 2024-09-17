export default function Tile1(props: any) {
  return (
    <div className="tile tile_animaiton1">
      <p>{props.title}</p>
      <svg className="animation" width="299" height="18" viewBox="0 0 299 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="8.5" r="7" fill="white" stroke="#151313" />
        <circle cx="291.5" cy="8.5" r="7" fill="white" stroke="#151313" />
        <path className="animation1_element" d="M39 9H149" stroke="currentColor" strokeWidth="17" fill="currentColor" />
        <path d="M16 9H285" stroke="#151313" />
      </svg>
    </div>
  )
}
