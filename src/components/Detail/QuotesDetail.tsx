import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const QuotesDetail = () => {
    const { quote_id } = useParams()

    const items = useSelector((state: any) => state.quotes.items)
    const quote = items.find((item: any) => item.quote_id === Number(quote_id) )
  return (
    <div>{quote_id},
    <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  )
}

export default QuotesDetail