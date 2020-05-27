import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'

const JobFiltersWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 15px 20px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  position: absolute;
  top: -36px;
  width: 100%;
  button {
    background: none;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.primary};
    font-size: 13px;
    line-height: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Filter = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 8px;
  background-color: ${props => props.theme.colors.neutral[1]};
  border-radius: 4px;
  :not(:first-child) {
    margin-left: 16px;
  }
  span {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    font-size: 13px;
    line-height: 24px;
    margin-right: 8px;
    padding: 4px 0px;
  }
  button {
    padding: 9px;
    display: flex;
    align-items: center;
    border-radius: 0 4px 4px 0;
    background-color: ${props => props.theme.colors.primary};
    &:hover {
      background-color: ${props => props.theme.colors.black};
    }
    svg {
      height: 14px;
      width: 14px;
    }
  }
`

const JobFilters = ({ filters, setFilters }) => {
  const clearFilters = () => {
    setFilters([])
  }

  const removeFilter = filterToRemove => {
    setFilters(prevFilters =>
      prevFilters.filter(filter => filter !== filterToRemove),
    )
  }
  return (
    <JobFiltersWrapper>
      <Flex>
        {filters.map(filter => (
          <Filter key={filter}>
            <span>{filter}</span>
            <button
              aria-label="remove filter"
              onClick={() => removeFilter(filter)}
            >
              <svg>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.435 2.12132L11.3137 0L6.71751 4.59619L2.12132 0L0 2.12132L4.59619 6.71751L0 11.3137L2.12132 13.435L6.71751 8.83883L11.3137 13.435L13.435 11.3137L8.83883 6.71751L13.435 2.12132Z"
                  fill="white"
                />
              </svg>
            </button>
          </Filter>
        ))}
      </Flex>
      <button onClick={clearFilters}>Clear</button>
    </JobFiltersWrapper>
  )
}

export default JobFilters
