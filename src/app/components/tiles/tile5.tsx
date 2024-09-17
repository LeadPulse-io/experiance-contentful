export default function Tile5(props: any) {
  return (
    <div className="tile tile_animation4">
      <p>{props.title}</p>
      <svg width="106" height="65" viewBox="0 0 106 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 2C1 1.44772 1.44772 1 2 1H79C79.5523 1 80 1.44772 80 2V23C80 23.5523 79.5523 24 79 24H15.3459C15.1218 24 14.9042 24.0753 14.728 24.2137L2.61782 33.7289C1.96169 34.2444 1 33.777 1 32.9425V24V2Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <path
          d="M106 33C106 32.4477 105.552 32 105 32H28C27.4477 32 27 32.4477 27 33V54C27 54.5523 27.4477 55 28 55H91.6541C91.8782 55 92.0958 55.0753 92.272 55.2137L104.382 64.7289C105.038 65.2444 106 64.777 106 63.9425V55V33Z"
          fill="currentColor"
          fillOpacity="currentOpacity"
        />
        <rect x="16" y="7" width="56" height="4" fill="white" />
        <rect x="35" y="38" width="56" height="4" fill="white" />
        <rect x="16" y="14" width="33" height="4" fill="white" />
        <rect x="35" y="45" width="33" height="4" fill="white" />
      </svg>
    </div>
  )
}
