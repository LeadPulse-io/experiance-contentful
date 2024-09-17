import Image from 'next/image'

export default function Tile0(props: any) {
  return (
    <div className="tile">
      <p>{props.title} </p>
      <Image src={'/network.png'} width={81} height={82} alt="service icon" />
    </div>
  )
}
