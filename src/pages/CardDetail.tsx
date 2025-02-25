import { useParams } from 'react-router-dom'

export default function CardDetail() {
  const { id } = useParams()
  return <div>CardDetail {id}</div>
}
