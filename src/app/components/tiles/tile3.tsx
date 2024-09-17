export default function Tile3(props: any) {
  return (
    <div className="tile tile_animation3">
      <p>{props.title}</p>
      <svg width="384" height="88" viewBox="0 0 384 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 85H114.235C137.431 85 156.235 66.196 156.235 43V41.4706C156.235 19.1193 138.116 1 115.765 1H112.593C91.9932 1 75.2941 17.6991 75.2941 38.2985V38.2985C75.2941 58.8979 91.9932 75.597 112.593 75.597H277.054C297.654 75.597 314.353 58.8979 314.353 38.2985V38.2985C314.353 17.6991 297.654 1 277.054 1H273.882C251.531 1 233.412 19.1193 233.412 41.4706V43C233.412 66.196 252.216 85 275.412 85H384"
          stroke="currentColor"
          strokeOpacity="0.4"
        />
        <circle className="c1" cx="51.5" cy="84.5" r="3.5" fill="currentColor" />
        <circle className="c2" cx="151.5" cy="60.5" r="3.5" fill="currentColor" />
        <circle className="c3" cx="88.5" cy="10.5" r="3.5" fill="currentColor" />
        <circle className="c4" cx="215.5" cy="75.5" r="3.5" fill="currentColor" />
        <circle className="c5" cx="258.5" cy="3.5" r="3.5" fill="currentColor" />
        <circle className="c6" cx="329.5" cy="84.5" r="3.5" fill="currentColor" />
        <defs>
          <linearGradient id="paint0_linear_2_3" x1="384" y1="64.3684" x2="246.04" y2="64.3684" gradientUnits="userSpaceOnUse">
            <stop stopColor="#151313" stopOpacity="0" />
            <stop offset="1" stopColor="#7B6F6F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
