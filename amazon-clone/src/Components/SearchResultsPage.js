import React, { useEffect , useState } from 'react'
import styled from 'styled-components';
import ResultsItems from './ResultsItems';

function SearchResultsPage() {
  const [loading, setLoading] = useState([]);
  const [results, setResults] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.scaleserp.com/search?api_key=EB2A7054AF544850A25A012791ED3920&q=clothes&google_domain=google.com&location=United+States&gl=us&hl=en&search_type=shopping&num=20')
      const json = await data.json();
      return setResults(json.shopping_results), setLoading(false)
    }
    fetchData()
    .catch(console.error)
  }, [])


  return (
    <ResultsPageContainer >
      <ResultsItems results={results}/>
    </ResultsPageContainer>

  )
}

export default SearchResultsPage;

const ResultsPageContainer = styled.div`
  display: flex;
  padding: 14px 18px 18px 18px;
  align-items: flex-start;
`
