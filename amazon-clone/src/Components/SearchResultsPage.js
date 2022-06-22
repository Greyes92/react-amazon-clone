import React, { useEffect , useState } from 'react'
import styled from 'styled-components';
import ResultsItems from './ResultsItems';
import { useLocation } from 'react-router-dom'


function SearchResultsPage({ searchQuery }) {

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('i fired once')
    const fetchData = async () => {
      const data = await fetch(`https://api.scaleserp.com/search?api_key=EB2A7054AF544850A25A012791ED3920&q=${searchQuery}&google_domain=google.com&location=United+States&gl=us&hl=en&search_type=shopping&num=20`)
      const json = await data.json();
      return setResults(json.shopping_results) & setLoading(false)
    }
    fetchData()
  },[])

  if(loading === true){
    console.log('loading')
    
    return (
    <LoadingMessage>
    <img src={'https://media0.giphy.com/media/hW9umw9Iu17ODEEfCQ/200w.gif?cid=82a1493bhyg2zh0qb9ri9ds52ydl39prgmsf89mx682hw0sl&rid=200w.gif&ct=s'} />
    </LoadingMessage>
    )
  } else {
  return (
    <ResultsPageContainer >
      <ResultsItems results={results}/>
    </ResultsPageContainer>

  )
}
}

export default SearchResultsPage;

const ResultsPageContainer = styled.div`
  display: flex;
  padding: 14px 18px 18px 18px;
  align-items: flex-start;
`
const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  img{
    height: 300px;
  }
`