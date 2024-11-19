interface DetailInfoType {
  title?: string
  text: string
  value: string | number
}

const DetailInfo = (props: DetailInfoType) => {
  return (
    <div className="mb-3">
      <b className="capitalize">{props.title}</b>
      <div className="flex justify-between">
        <p className="capitalize">{props.text}</p>
        <p className={`capitalize ${props.text === 'total payment' ? 'text-2xl font-bold' : 'font-semibold'}`}>{props.value}</p>
      </div>
    </div>
  )
}

export default DetailInfo
